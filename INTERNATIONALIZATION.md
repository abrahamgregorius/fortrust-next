# Internationalization (i18n) Implementation

## Overview
Sistem internationalization untuk Fortrust dengan support untuk English (EN) dan Indonesian (ID).

## Features
- ✅ Default locale: English (`/`)
- ✅ Indonesian locale: `/id/*`
- ✅ Language toggle di Navbar
- ✅ Preferensi bahasa tersimpan di localStorage
- ✅ Auto-sync dengan URL pathname
- ✅ Middleware redirect untuk `/en` ke root (karena EN adalah default)

## How It Works

### 1. Locale Context (`src/contexts/LocaleContext.js`)
Menyediakan state management untuk locale dengan:
- `locale`: Current locale ("en" atau "id")
- `switchLocale(newLocale)`: Function untuk mengganti bahasa
- `getLocalizedPath(path)`: Helper untuk generate localized URL
- `isInitialized`: Flag untuk prevent hydration issues

### 2. Middleware (`src/middleware.js`)
Handles routing logic:
- Path dengan `/id/*` → Indonesian pages
- Path dengan `/en/*` → Redirect ke root (karena EN is default)
- Root path `/` → English pages
- Admin routes → Tetap require authentication

### 3. Language Switcher di Navbar
Toggle button yang:
- Mengganti locale via `switchLocale()`
- Menyimpan preference ke localStorage
- Auto-navigate ke path dengan locale yang sesuai
- Active state dengan styling (bold + primary color)

### 4. File Structure
```
src/
├── app/
│   ├── (main)/          # English pages (default, no prefix)
│   │   ├── layout.jsx   # Wrapped with LocaleProvider
│   │   └── ...
│   └── id/              # Indonesian pages (/id prefix)
│       ├── layout.jsx   # Wrapped with LocaleProvider
│       └── ...
├── contexts/
│   └── LocaleContext.js # Locale state management
├── components/
│   └── Navbar.jsx       # Language switcher
└── middleware.js        # Route handling
```

## Usage

### In Components
```jsx
import { useLocale } from "@/contexts/LocaleContext";

function MyComponent() {
  const { locale, switchLocale, getLocalizedPath } = useLocale();
  
  // Current locale
  console.log(locale); // "en" or "id"
  
  // Change language
  <button onClick={() => switchLocale("id")}>Switch to ID</button>
  
  // Get localized path
  const path = getLocalizedPath("/about"); 
  // Returns: "/about" if locale is "en"
  // Returns: "/id/about" if locale is "id"
}
```

### In Navbar
Already implemented:
- `localePrefix` untuk dynamic link generation
- Language toggle buttons dengan active state
- Semua dropdown links sudah menggunakan `${localePrefix}/path`

## LocalStorage
Key: `fortrust-locale`
Values: `"en"` atau `"id"`

Preference disimpan dan di-load otomatis saat:
1. User pertama kali visit (default: "en")
2. User klik language toggle
3. Page refresh (restore dari localStorage)
4. Navigate antar pages (sync dengan pathname)

## Important Notes

1. **Default Locale**: English (`/`) tidak menggunakan prefix `/en` 
2. **Indonesian Locale**: Semua path harus prefix `/id`
3. **Middleware**: Auto-redirect `/en/*` ke root karena EN adalah default
4. **Existing Pages**: Folder `/id` sudah ada, structure sama seperti `/(main)`
5. **Links**: Gunakan `${localePrefix}/path` atau `getLocalizedPath(path)`

## Testing Checklist
- [ ] Toggle language di navbar berfungsi
- [ ] Navigate ke `/id/about` menampilkan Indonesian content
- [ ] Navigate ke `/about` menampilkan English content
- [ ] Refresh page mempertahankan bahasa yang dipilih
- [ ] localStorage menyimpan preference dengan benar
- [ ] `/en/about` redirect ke `/about`
- [ ] Admin routes tetap berfungsi normal
