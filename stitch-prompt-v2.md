# Google Stitch Prompt — Barbershop Booking App v2.0

**Stack:** Next.js + HeroUI + Apple Motion | **DB:** MySQL | **Auth:** NextAuth.js Google OAuth

---

## Page 1 — Login

**Layout:** Centered card, max-w-sm, mx-auto, py-16
- Logo (scissors) + "BookCut" Space Grotesk Bold 32px
- Google OAuth button (full width, white bg, black border)
- Divider "OR"
- Email input (icon prefix)
- Password input (toggle visibility)
- Primary CTA "Login" (gold, full width)
- "Don't have account? Sign Up" link

**Animation:** Logo fades-in 400ms → form slides-up 300ms

---

## Page 2 — Home / Booking

**Layout:** max-w-7xl mx-auto px-4
- Navbar: logo left, nav links center, profile avatar right
- Search bar (full width)
- Tabs: "Barber" / "Service" / "Produk"
- Grid: 1 col mobile, 2 tablet, 3 desktop
- Barber Card: avatar circle, name, ⭐rating, price, "Book Now" (gold, sm)
- Service Card: icon, name, duration, price, "Pilih" button

**Animation:** Cards stagger fade-in 50ms each

---

## Page 3 — Booking Confirmation Modal

**Layout:** Backdrop blur, centered modal max-w-md
- Header: "Konfirmasi Booking"
- Barber name + ⚡ icon
- Service name + price (strikethrough discount)
- Membership tier dropdown
- Date & time display
- Notes textarea
- "Batal" (outline) + "Konfirmasi" (gold)

**Animation:** Backdrop fade + content scale(0.95→1) spring

---

## Page 4 — Member Area / Profile

**Layout:** Back navbar, centered content
- Avatar + name + phone
- 3 stat cards: Total Visits, Membership (badge), Days Remaining
- Progress bar: "7/10 potong" gold accent 70% width
- "3 lagi dapat gratis!" text
- Membership tier card (VIP 12 Bulan) with expiry + "Perpanjang" button
- Booking history list (avatar, service, date, status badge)

**Animation:** Stat cards scale-in stagger, progress bar width-animate 600ms

---

## Page 5 — Membership Pricing

**Layout:** Header "Pilih Membership", 3 cards horizontal
- Basic (3 Bulan): Rp 150.000, 5% diskon, outline button
- Premium (6 Bulan): Rp 250.000, 10% diskon, "POPULAR" badge, gold button
- VIP (12 Bulan): Rp 400.000, 15% diskon, purple elevated card, purple button

**Animation:** Cards scale-in stagger, "POPULAR" badge pulse

---

## Page 6 — Product List

**Layout:** Header "🛍️ Produk", search bar, filter chips
- Chips: "Semua", "Pomade", "Aksesoris", "Shampoo"
- Grid: 2 col mobile, 3 desktop
- Product Card: image, name, price, stock badge, "Beli" button (gold, sm)

**Animation:** Cards stagger fade-in 50ms

---

## Page 7 — Product Detail

**Layout:** Navbar back + cart icon, scrollable
- Image gallery with zoom
- Product name Space Grotesk Bold 24px
- ⭐ rating + review count
- Price (gold accent)
- Stock badge (green if >0, red if 0)
- Description text
- Qty selector (- / 1 / +)
- "Tambah Cart" (gold, full width)
- Review section below

**Animation:** Image fade-in, price slide-up, button scale-in

---

## Page 8 — Admin Dashboard

**Layout:** Navbar "📊 Dashboard" + admin avatar
- 3 stat cards: Total Bookings, Revenue, New Members
- Tabs: "Booking" | "Members" | "Products" | "Revenue"
- Booking table: Customer | Barber | Service | Date | Status | Actions
- Status badges: PENDING=warning, CONFIRMED=success, COMPLETED=info, CANCELLED=danger
- Pagination

**Animation:** Stat cards scale-in stagger, table rows fade-in

---

## Page 9 — Admin Member Tracking

**Layout:** Header "👥 Member Management", search bar
- Table: Nama | Kunjungan (progress mini-bar) | Member Tier (badge) | Status | Action
- Tier badge: Basic=blue, Premium=gold, VIP=purple
- Free cut badge: ✅ "Gratis" green
- Detail/Edit/View action buttons

**Animation:** Rows fade-in stagger, badge pop on free cut

---

## Page 10 — Admin Master Products

**Layout:** Header "📦 Master Produk", "+ Tambah" button
- Table: Image | Name | Price | Stock | Category | Actions
- Category chip: pomade, accessories, shampoo
- Edit/Delete action buttons

**Animation:** Table rows fade-in, button pulse on add

---

## Page 11 — Admin Master Member Prices

**Layout:** Header "💎 Master Member Price"
- 3 tier cards: Basic (3 Bulan), Premium (6 Bulan), VIP (12 Bulan)
- Each card: price input, discount input, "Simpan" button

**Animation:** Cards scale-in stagger, input focus glow

---

## Page 12 — Barber Panel

**Layout:** Back navbar "← Jadwal Hari Ini"
- Date display
- Booking cards: customer name + service, time range, visit count badge
- "Selesai" button per booking
- Toggle "⚡ Tersedia" at bottom

**Animation:** Cards fade-in, toggle slide

---

## Design Tokens

### Colors
```
Primary: #1B1B1B    Accent: #F5A623    BG: #FAFAFA
Surface: #FFFFFF    Border: #E5E5E5    Text: #1A1A1A
Success: #2ECC71    Danger: #E74C3C    Warning: #F39C12
Membership: #9B59B6
```

### Typography
- Display: Space Grotesk Bold
- Body: Inter Regular/Medium
- Mono: JetBrains Mono

### HeroUI Components Used
Navbar · Card · Button · Input · Select · DatePicker · TimeInput · Textarea · Table · Modal · Badge · Chip · Progress · Spinner · Skeleton · Tabs · Image · Avatar · Counter · Dropdown · Popover · Toast · Statistic

### Apple Motion Animations
```
Page transitions: slide-in-right 300ms ease-out
Modal: fade + scale(0.95→1) 200ms spring
Button press: scale(1→0.97) 100ms spring
Card hover: scale(1→1.02) + shadow-lift 200ms ease
List items: fade-in + slide-up 300ms stagger(50ms)
Progress bar: width animate 600ms ease-out
Badge pop: scale(0→1) spring on status change

Easing: ease-in-out cubic-bezier(0.4,0,0.2,1)
        spring cubic-bezier(0.34,1.56,0.64,1)
```

### Responsive
```
Mobile: <768px → single column, bottom nav
Tablet: 768-1024 → 2-col grid
Desktop: >1024px → sidebar + content
```

### Icons & Assets
- Icons: Lucide React
- Avatars: DiceBear initials
- Google OAuth icon (official)
- Loading: skeleton shimmer
