# Implementasi Code: Koneksi Laptop ke VPS

## Masalah
- Hermes Agent berjalan di VPS
- Kamu mau code di laptop lokal
- Perlu cara agar kode di VPS bisa dikembangkan dari laptop

## Solusi: Git Workflow (Tanpa SSH Server)

Karena SSH server tidak bisa diinstall (no root), gunakan **Git-based workflow**:

### Workflow
```
Laptop (code)  ←→  GitHub/GitLab  ←→  VPS (Hermes)
```

### Langkah 1: Buat GitHub Repo
```bash
# Di laptop kamu:
cd ~/projects
git init barbershop-app
git add .
git commit -m "Initial commit"
gh repo create barbershop-app --public --push
```

### Langkah 2: Clone di VPS
```bash
# Di VPS (Hermes):
cd /opt/data
git clone https://github.com/USERNAME/barbershop-app.git
cd barbershop-app
```

### Langkah 3: Setup VPS Environment
```bash
# Install dependencies
npm install

# Setup MySQL
mysql -u root -p -e "CREATE DATABASE barbershop;"

# Setup .env.local
nano .env.local
# Isi:
# DATABASE_URL="mysql://user:password@host:3306/barbershop"
# NEXTAUTH_SECRET="your-secret-key"
# GOOGLE_CLIENT_ID="..."
# GOOGLE_CLIENT_SECRET="..."

# Generate Prisma client
npx prisma generate

# Push schema ke MySQL
npx prisma db push
```

### Langkah 4: Development Loop

**Opsi A: Kamu code di laptop, push ke GitHub, Hermes pull di VPS**
```bash
# Di laptop:
git add .
git commit -m "fitur X"
git push origin main

# Di VPS (Hermes):
git pull origin main
npm run dev
```

**Opsi B: Hermes code di VPS, push ke GitHub, kamu pull di laptop**
```bash
# Di VPS (Hermes):
# ... code dilakukan oleh Hermes ...
git add .
git commit -m "update dari Hermes"
git push origin main

# Di laptop:
git pull origin main
```

**Opsi C: Hybrid (Direkomendasikan)**
- Hermes setup project + fitur berat di VPS
- Kamu review & modifikasi di laptop
- Sync via GitHub setiap selesai fitur

---

## Struktur Project (Sudah Dibuat di VPS)

```
barbershop-app/
├── prisma/
│   └── schema.prisma          ✅ Database schema
├── src/
│   ├── app/
│   │   ├── layout.tsx         ✅ HeroUI provider
│   │   ├── page.tsx           ✅ Home page
│   │   ├── middleware.ts      ✅ Auth middleware
│   │   ├── (auth)/
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   ├── (customer)/
│   │   │   ├── booking/page.tsx
│   │   │   ├── member/page.tsx    ← Member area
│   │   │   └── membership/page.tsx ← Membership pricing
│   │   ├── (admin)/
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── members/page.tsx     ← Member tracking
│   │   │   ├── products/page.tsx    ← Master products
│   │   │   └── pricing/page.tsx     ← Master member price
│   │   ├── (barber)/
│   │   │   └── schedule/page.tsx
│   │   └── api/
│   │       ├── auth/[...nextauth]/route.ts  ✅ NextAuth
│   │       ├── barbers/route.ts
│   │       ├── services/route.ts
│   │       ├── bookings/route.ts
│   │       ├── members/profile/route.ts
│   │       ├── membership/route.ts
│   │       ├── products/route.ts
│   │       └── dashboard/stats/route.ts
│   ├── components/
│   ├── lib/
│   │   ├── prisma.ts
│   │   └── prisma-direct.ts
│   └── types/
├── .env.local                 ⚠️ Perlu diisi
├── package.json               ✅ Dependencies
├── tailwind.config.ts
└── next.config.ts
```

---

## File Sudah Dibuat di VPS

| File | Status |
|------|--------|
| `prisma/schema.prisma` | ✅ Lengkap (User, Barber, Service, Booking, Membership, Product, OrderProduct, Review) |
| `src/app/layout.tsx` | ✅ HeroUI + Theme provider |
| `src/app/page.tsx` | ✅ Home dengan HeroUI Card grid |
| `src/middleware.ts` | ✅ Role-based auth redirect |
| `src/app/api/auth/[...nextauth]/route.ts` | ✅ NextAuth Google OAuth |
| `src/app/api/barbers/route.ts` | ✅ List barbers |
| `src/app/api/services/route.ts` | ✅ List services |
| `.env.local` | ⚠️ Perlu config DATABASE_URL + Google OAuth |

---

## Yang Perlu Kamu Lakukan di Laptop

### 1. Install GitHub CLI
```bash
# Mac:
brew install gh

# Windows:
winget install GitHub.cli

# Linux:
sudo apt install gh
```

### 2. Login ke GitHub
```bash
gh auth login
# Pilih: GitHub.com
# Pilih: HTTPS
# Pilih: Login with browser
# Pilih: Default scope (repo, read:org, etc.)
```

### 3. Buat Repo & Push
```bash
cd ~/projects
mkdir barbershop-app && cd barbershop-app
git init
gh repo create barbershop-app --public --source=. --push
```

### 4. Clone di VPS
```bash
# Paste command ini di chat Hermes:
# "Clone repo barbershop-app dari GitHub ke /opt/data"
```

### 5. Edit .env.local
Isi di VPS:
- `DATABASE_URL` — MySQL connection string
- `GOOGLE_CLIENT_ID` — dari Google Cloud Console
- `GOOGLE_CLIENT_SECRET` — dari Google Cloud Console
- `NEXTAUTH_SECRET` — generate dengan `openssl rand -base64 32`

---

## Alternatif: Tanpa GitHub (Langsung Sync via Telegram)

Kalau mau lebih simpel tanpa GitHub:

1. **Hermes code di VPS** → kirim file via Telegram (seperti sebelumnya)
2. **Kamu extract di laptop** → edit di VS Code lokal
3. **Kirim file kembali** → Hermes patch di VPS

Cara ini lebih lambat tapi tidak perlu GitHub.

---

## Perintah Penting untuk Hermes (VPS)

```bash
# Jalankan dev server
cd /opt/data/barbershop-app && npm run dev

# Cek status database
npx prisma db pull

# Generate client setelah schema update
npx prisma generate

# Push schema ke MySQL
npx prisma db push

# View logs
tail -f /opt/data/barbershop-app/.next/server/server/app/page.js
```

---

## Rekomendasi Terbaik

**Gunakan GitHub + VS Code Remote** (kalau nanti SSH bisa diinstall):
1. Buat repo GitHub private
2. Clone di VPS
3. Install VS Code di laptop
4. Install extension "Remote - SSH"
5. Connect ke VPS → code langsung di VPS dari laptop

**Saat ini (tanpa SSH):**
1. GitHub workflow (push/pull)
2. Hermes kirim file via Telegram
3. Kamu edit lokal → kirim kembali

---

*Implementasi guide v1.0 — setup VPS + laptop sync.*
