# Setup — Daily AI Blog Generation

Menjalankan `POST /api/ai/generate-articles` otomatis setiap hari **00:00 WIB**.

---

## Persiapan (semua runner butuh ini)

### 1. Set env di aplikasi

Tambahkan ke `.env.local` (lokal) dan di environment variable platform hosting:

```env
GEMINI_API_KEY=<key yang sudah ada>
CRON_SECRET=<random string panjang>
APP_URL=https://domain-kamu.com
```

Generate secret:

```bash
openssl rand -hex 32
```

> **Restart aplikasi** setelah env diubah (dev: `npm run dev` ulang; production: restart PM2 / redeploy).

### 2. Pastikan table `blogs` punya kolom `topic_notes`

```sql
-- Jalankan di Supabase SQL Editor (sekali saja)
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS topic_notes TEXT;
```

> Kolom `status` sudah ada (DRAFT/PUBLISHED/ARCHIVED) — dipakai untuk menandai hasil generate sebagai draft.

### 3. Test manual dulu

```bash
curl -X POST https://domain-kamu.com/api/ai/generate-articles \
  -H "Content-Type: application/json" \
  -H "x-cron-secret: <CRON_SECRET>" \
  -d '{"count": 2}'
```

Harus balas:
```json
{ "success": true, "count": 2, "articles": [ ... ] }
```

Kalau muncul `"skipped": true, "reason": "Daily limit reached"` → hari itu sudah penuh (limit 5/hari, sudah di-implement di route).

---

## Opsi A — systemd timer di VPS (REKOMENDASI)

Paling reliable, ada retry + log + jalan otomatis setelah reboot.

### Cara cepat (satu command)

```bash
cd /var/www/fortrust     # atau path repo kamu
git pull
sudo bash scripts/install.sh
```

Installer ini: bikin `/etc/fortrust/ai-blog.env`, cek `CRON_SECRET` +
`GEMINI_API_KEY` di env app, pasang unit dengan **path repo yang sebenarnya**
(nggak hardcode `/var/www/fortrust`), `daemon-reload`, lalu `enable --now` timer.

Isi env file yang dibikin, lalu test:

```bash
sudo nano /etc/fortrust/ai-blog.env
sudo systemctl start fortrust-ai-blog
journalctl -u fortrust-ai-blog -f
```

### Cara manual

```bash
# 1. Copy repo ke VPS (atau pull kalau sudah ada)
cd /var/www/fortrust
git pull

# 2. Pastikan script executable
chmod +x scripts/generate-articles.sh

# 3. Simpan kredensial di file terpisah (bukan di repo)
sudo mkdir -p /etc/fortrust
sudo nano /etc/fortrust/ai-blog.env
```

Isi `/etc/fortrust/ai-blog.env`:

```env
APP_URL=https://domain-kamu.com
CRON_SECRET=<secret-yang-sama-dengan-app>
ARTICLE_COUNT=5
```

```bash
# 4. Install service + timer
sudo cp scripts/fortrust-ai-blog.service /etc/systemd/system/
sudo cp scripts/fortrust-ai-blog.timer /etc/systemd/system/
sudo systemctl daemon-reload

# 5. Aktifkan timer
sudo systemctl enable --now fortrust-ai-blog.timer

# 6. Cek jadwal
systemctl list-timers fortrust-ai-blog.timer
```

> **Penting**: `EnvironmentFile=/etc/fortrust/ai-blog.env` di `.service` itu
> **wajib ada**. Kalau filenya hilang, systemd gagal start dengan
> `Failed to load environment files: No such file or directory` dan unit
> **tidak pernah** memanggil API-nya. Cek cepat:
> `ls -la /etc/fortrust/ai-blog.env`

Log:

```bash
journalctl -u fortrust-ai-blog -f          # live
journalctl -u fortrust-ai-blog --since today
```

Test manual:

```bash
sudo systemctl start fortrust-ai-blog
sudo systemctl status fortrust-ai-blog
```

> **Catatan timezone**: systemd timer memakai timezone sistem. Kalau VPS-mu UTC, pakai `OnCalendar=*-*-* 17:00:00` di `.timer` (17:00 UTC = 00:00 WIB). Cek dengan `timedatectl`. Kalau sudah `Asia/Jakarta`, `00:00:00` sudah benar.

---

## Opsi B — crontab di VPS (paling simpel)

```bash
crontab -e
```

Tambah:

```cron
0 17 * * * APP_URL=https://domain-kamu.com CRON_SECRET=<secret> ARTICLE_COUNT=5 /bin/bash /var/www/fortrust/scripts/generate-articles.sh >> /var/log/fortrust-ai-blog.log 2>&1
```

> `0 17` UTC = `0 0` WIB. Kalau VPS sudah di `Asia/Jakarta`, ganti jadi `0 0 * * *`.

Test:

```bash
/tmp/env APP_URL=... CRON_SECRET=... /bin/bash /var/www/fortrust/scripts/generate-articles.sh
```

---

## Opsi C — GitHub Actions (gratis, tanpa VPS)

Sudah ada file `.github/workflows/daily-ai-blog.yml` di repo.

1. GitHub → repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
2. Tambahkan:
   - `APP_URL` = `https://domain-kamu.com`
   - `CRON_SECRET` = secret yang sama dengan app
3. Selesai. Jalan otomatis tiap 00:00 WIB.

> ⚠️ GitHub Actions cron pakai **UTC** dan bisa terlambat 5–15 menit saat trafik GitHub padat. Kalau Butuh tepat 00:00, pakai Opsi A.

Test manual: tab **Actions** → `Daily AI Blog Generation` → **Run workflow**.

---

## Opsi D — Supabase pg_cron + pg_net (tanpa VPS & tanpa GitHub)

Di Supabase SQL Editor:

```sql
-- 1. Simpan secret di vault
select vault.create_secret('https://domain-kamu.com', 'app_url');
select vault.create_secret('<cron-secret>', 'cron_secret');

-- 2. Jadwalkan (17:00 UTC = 00:00 WIB)
select cron.schedule(
  'generate-ai-articles',
  '0 17 * * *',
  $$
  select net.http_post(
    url := (select decrypted_secret from vault.decrypted_secrets where name = 'app_url') || '/api/ai/generate-articles',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-cron-secret', (select decrypted_secret from vault.decrypted_secrets where name = 'cron_secret')
    ),
    body := '{"count": 5}'::jsonb
  );
  $$
);
```

> ⚠️ `pg_cron` di free tier Supabase terbatas dan `pg_net` sering perlu di-enable manual. Lebih prone to error daripada systemd. Recommended: pakai Opsi A.

---

## Opsi E — Vercel Cron (kalau app-nya di Vercel)

Buat `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/ai/generate-articles",
      "schedule": "0 17 * * *"
    }
  ]
}
```

> ⚠️ Cron Vercel hanya jalan kalau ada traffic ke app ( Hobby), dan di Hobby hanya 2 cron/hari.-paid tier lebih stabil.

---

## Perbandingan

| Opsi | Biaya | Akurasi waktu | Setup | Recommended? |
|------|-------|---------------|-------|--------------|
| A — systemd timer (VPS) | Rp 0 | Tepat | Sedang | ✅ **Paling bagus** |
| B — crontab (VPS) | Rp 0 | Tepat | Mudah | ✅ Alternatif bagus |
| C — GitHub Actions | Rp 0 | Bisa telat 5-15 mnt | Mudah | ✅ Paling cepat setup |
| D — Supabase pg_cron | Rp 0 | Tepat | Rumit | ⚠️ prone error |
| E — Vercel Cron | Rp 0–20 | Tepat | Mudah | ⚠️ Hobby terbatas |

---

## Behavior & Limit

- **Max 5 artikel/hari** — route mengecek jumlah artikel yang dibuat hari ini, sudah tercapai → skip dengan `"skipped": true`.
- **Partial success** — kalau 1 dari 5 artikel gagal di-generate, 4 yang berhasil tetap disimpan.
- **Retry** — script runner retry 1x dengan jeda 120 detik (untuk Gemini rate limit).
- **Status** — semua hasil disimpan dengan `status = 'DRAFT'`, jadi tidak muncul di website publik sampai kamu publish manual lewat `/admin/blogs`.
