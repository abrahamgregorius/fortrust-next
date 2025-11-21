# Setup Email Contact Form dengan EmailJS

## Langkah-langkah Setup:

### 1. Buat Akun EmailJS (GRATIS)
1. Buka https://www.emailjs.com/
2. Klik "Sign Up" dan daftar (bisa pakai Google account)
3. Free tier: 200 emails/bulan (cukup untuk most use cases)

### 2. Setup Email Service
1. Setelah login, pilih "Email Services" di sidebar
2. Klik "Add New Service"
3. Pilih **Gmail** (atau provider email lain)
4. Ikuti instruksi untuk connect Gmail account: **fortrust.id@gmail.com**
5. Copy **Service ID** yang muncul

### 3. Buat Email Template
1. Pilih "Email Templates" di sidebar
2. Klik "Create New Template"
3. Gunakan template berikut:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content/Body:**
```
You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}

Message:
{{message}}

---
This email was sent from Fortrust website contact form.
```

4. Pastikan menggunakan variable names yang sama:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{from_phone}}`
   - `{{message}}`

5. **PENTING:** Di bagian "To Email", isi dengan: `{{to_email}}`
6. Copy **Template ID** yang muncul

### 4. Get Public Key
1. Pilih "Account" di sidebar
2. Scroll ke "API Keys"
3. Copy **Public Key** (bukan Private Key!)

### 5. Setup Environment Variables
1. Buat file `.env.local` di root project (sudah ada .env.local.example sebagai template)
2. Isi dengan credentials dari EmailJS:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

3. Save file (jangan commit ke git, sudah ada di .gitignore)

### 6. Test Contact Form
1. Restart development server: `npm run dev`
2. Buka `/contact` atau `/id/contact`
3. Isi form dan submit
4. Check email **fortrust.id@gmail.com** - harusnya dapat email

## Troubleshooting

### Email tidak masuk?
- Check spam folder
- Pastikan semua ENV variables terisi dengan benar
- Check EmailJS dashboard > "Logs" untuk melihat error
- Pastikan Gmail account sudah terconnect dengan benar di EmailJS

### Error "Failed to send"?
- Buka browser console untuk lihat error detail
- Pastikan Public Key bukan Private Key yang dipakai
- Check apakah sudah melewati 200 emails/month limit (upgrade ke paid plan jika perlu)

### Variable tidak muncul di email?
- Pastikan template menggunakan nama variable yang sama persis: `{{from_name}}` bukan `{{name}}`
- Case sensitive!

## Features yang Sudah Diimplementasi

✅ Form validation (semua field required)
✅ Loading state saat submit ("Sending..." / "Mengirim...")
✅ Success message (hijau) setelah berhasil kirim
✅ Error message (merah) jika gagal
✅ Form auto-clear setelah berhasil kirim
✅ Disabled button saat sedang submit (prevent double submit)
✅ Support English dan Indonesian version
✅ Email langsung ke fortrust.id@gmail.com

## Email Format yang Diterima

Saat ada yang submit form, fortrust.id@gmail.com akan menerima email dengan format:

```
Subject: New Contact Form Submission from [Nama Pengunjung]

You have received a new message from your website contact form:

Name: John Doe
Email: john@example.com
Phone: +62812345678

Message:
Halo, saya tertarik untuk konsultasi mengenai studi ke luar negeri...

---
This email was sent from Fortrust website contact form.
```

Jadi bisa langsung reply ke email pengunjung dari Gmail!

## Upgrade ke Paid Plan (Optional)

Jika lebih dari 200 submissions/bulan:
- Personal Plan: $7/month (1,000 emails)
- Business Plan: $30/month (5,000 emails)
- Check: https://www.emailjs.com/pricing/
