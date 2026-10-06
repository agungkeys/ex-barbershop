# Google Stitch Prompt — Barbershop Booking App v2.0

## Design Tokens

### Colors
```
--color-primary:     #1B1B1B   (Near Black)
--color-accent:      #F5A623   (Warm Gold)
--color-accent-hover:#E0951F
--color-bg:          #FAFAFA
--color-surface:     #FFFFFF
--color-border:      #E5E5E5
--color-text:        #1A1A1A
--color-text-secondary: #737373
--color-success:     #2ECC71
--color-danger:      #E74C3C
--color-warning:     #F39C12
--color-membership:  #9B59B6   (VIP purple)
```

### Typography
- Display: **Space Grotesk** Bold
- Body: **Inter** Regular/Medium
- Mono: JetBrains Mono

### Spacing & Radius
```
xs:4px sm:8px md:16px lg:24px xl:32px 2xl:48px
radius: sm=8px md=12px lg=16px full=9999px
```

---

## Section A — Login Screen

**Layout:** Centered card, max-w-sm, mx-auto, py-16
**Components:**
- Logo (scissors icon) + app name "BookCut" Space Grotesk Bold 32px
- Google OAuth button (full width, white bg, black border)
- Divider with "OR" text
- Email input with icon prefix
- Password input with toggle visibility
- Primary CTA button "Login" (gold bg, full width)
- "Don't have account? Sign Up" link

**Animation:** Logo fades-in 400ms → form slides-up 300ms delay

---

## Section B — Home / Booking Screen

**Layout:** max-w-7xl mx-auto px-4
**Components:**
- Navbar: logo left, nav links center, profile avatar right
- Search bar (full width, icon prefix)
- Horizontal tabs: "Barber" / "Service" / "Produk"
- Grid: 1 col mobile, 2 tablet, 3 desktop
- Barber Card: avatar circle, name, ⭐rating, price, "Book Now" button (gold, sm)
- Service Card: icon, name, duration, price, "Pilih" button

**Animation:** Cards stagger fade-in 50ms delay each

---

## Section C — Booking Confirmation Modal

**Layout:** Backdrop blur overlay, centered modal max-w-md
**Components:**
- Header: "Konfirmasi Booking"
- Barber name + lightning icon ⚡
- Service name + original price (strikethrough) + discounted price
- Membership selector dropdown
- Date & time display
- Notes textarea
- Two buttons: "Batal" (outline) + "Konfirmasi" (gold)

**Animation:** Backdrop fade + content scale(0.95→1) spring

---

## Section D — Member Area / Profile

**Layout:** Back navbar, centered content
**Components:**
- Avatar + name + phone
- 3 stat cards: Total Visits, Membership Status (badge), Days Remaining
- Progress bar: "7/10 potong" with gold accent, 70% width
- "3 lagi dapat gratis!" text
- Membership tier card (Basic/Premium/VIP) with expiry date
- "Perpanjang" button
- Booking history list (avatar, service, date, status badge)

**Animation:** Stat cards scale-in stagger, progress bar width-animate 600ms

---

## Section E — Membership Pricing Screen

**Layout:** Header "Pilih Membership", 3 cards horizontal scroll
**Components:**
- Basic (3 bulan): price, 5% discount, outline button
- Premium (6 bulan): price, 10% discount, "POPULAR" badge, gold button
- VIP (12 bulan): price, 15% discount, purple card elevated, purple button

**Animation:** Cards scale-in stagger, "POPULAR" badge pulse

---

## Section F — Product List Screen

**Layout:** Header "🛍️ Produk", search bar, filter chips
**Components:**
- Chip filters: "Semua", "Pomade", "Aksesoris", "Shampoo"
- Grid: 2 col mobile, 3 desktop
- Product Card: image, name, price, stock badge, "Beli" button

**Animation:** Cards stagger fade-in 50ms

---

## Section G — Product Detail Screen

**Layout:** Navbar back + cart icon, scrollable content
**Components:**
- Image gallery with zoom
- Product name (Space Grotesk Bold 24px)
- Star rating + review count
- Price (gold accent)
- Stock badge (green if >0, red if 0)
- Description text
- Quantity selector (- / 1 / +)
- "Tambah Cart" button (gold, full width)
- Review section below

**Animation:** Image fade-in, price slide-up, button scale-in

---

## Section H — Admin Dashboard

**Layout:** Navbar "📊 Dashboard" + admin avatar
**Components:**
- 3 stat cards row: Total Bookings, Revenue, New Members
- Tabs: "Booking" | "Members" | "Products" | "Revenue"
- Booking table: Customer | Barber | Service | Date | Status | Actions
- Status badges: PENDING=warning, CONFIRMED=success, COMPLETED=info, CANCELLED=danger
- Pagination at bottom

**Animation:** Stat cards scale-in stagger, table rows fade-in

---

## Section I — Admin Member Tracking

**Layout:** Header "👥 Member Management", search bar
**Components:**
- Table: Nama | Kunjungan | Member Tier | Status | Action
- Progress mini-bar in kunjungan column (X/10)
- Tier badge: Basic=blue, Premium=gold, VIP=purple
- Free cut badge: ✅ "Gratis" (green)
- Detail/Edit/View action buttons

**Animation:** Rows fade-in stagger, badge pop on free cut

---

## Section J — Admin Master Products

**Layout:** Header "📦 Master Produk", "+ Tambah" button
**Components:**
- Table: Image | Name | Price | Stock | Category | Actions
- Category chip: pomade, accessories, shampoo
- Edit/Delete action buttons
- Add button (gold, top right)

**Animation:** Table rows fade-in, button pulse on add

---

## Section K — Admin Master Member Prices

**Layout:** Header "💎 Master Member Price"
**Components:**
- 3 tier cards: Basic (3 bulan), Premium (6 bulan), VIP (12 bulan)
- Each card: price input, discount input, "Simpan" button
- Current values displayed

**Animation:** Cards scale-in stagger, input focus glow

---

## Section L — Barber Panel

**Layout:** Back navbar "← Jadwal Hari Ini"
**Components:**
- Date display
- Booking list cards: customer name + service, time range, visit count badge
- "Selesai" action button per booking
- Toggle "⚡ Tersedia" at bottom

**Animation:** Cards fade-in, toggle slide

---

## HeroUI Component Reference

| Component | Usage |
|-----------|-------|
| Navbar | Sticky, blur backdrop, role-based items |
| Card | Elevated surface, hover shadow lift |
| Button | Primary (gold), secondary (outline), danger (red), sizes sm/md/lg |
| Input | With icon prefix, validation error |
| Select | Dropdown for membership tier, barber |
| DatePicker | Calendar booking |
| TimeInput | Slot selection |
| Textarea | Notes input |
| Table | Admin lists with pagination |
| Modal | Backdrop blur, scale animation |
| Badge | Status colors, tier colors |
| Chip | Filter tags |
| Progress | Visit tracking, booking progress |
| Spinner | Loading state |
| Skeleton | Shimmer placeholder |
| Tabs | Filter/section switcher |
| Image | Product gallery |
| Avatar | Circle, initials-based |
| Counter | Qty selector (- / +) |
| Dropdown | Profile menu, filter |
| Popover | Quick actions |
| Toast | Success/error notification |
| Statistic | Visit count, revenue |

---

## Apple Motion Animation System

### Page Transitions
```
Entry:    slide-in-right 300ms ease-out
Exit:     slide-out-left 250ms ease-in
Modal:    fade-in + scale(0.95→1) 200ms spring
Back:     slide-in-left 250ms ease-out
```

### Micro-interactions
```
Button press:    scale(1→0.97) 100ms spring
Card hover:      scale(1→1.02) + shadow-lift 200ms ease
List item:       fade-in + slide-up 300ms stagger(50ms)
Image load:      fade-in 400ms ease
Tab switch:      cross-fade 200ms ease
Skeleton pulse:  opacity 0.4→1 loop 1.5s ease-in-out
Progress bar:    width animate 600ms ease-out
Badge pop:       scale(0→1) spring on status change
```

### Easing Curves
```
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
ease-out:    cubic-bezier(0, 0, 0.2, 1)
spring:      cubic-bezier(0.34, 1.56, 0.64, 1)
sharp:       cubic-bezier(0.4, 0, 0.6, 1)
```

### Performance
- GPU-accelerated only (transform + opacity)
- will-change: transform on animated elements
- respects prefers-reduced-motion
- Max 60fps

---

## Responsive Breakpoints
```
Mobile:  < 768px   → Single column, bottom nav
Tablet:  768-1024  → 2-column grid, side nav
Desktop: > 1024px  → Full sidebar + content
```

---

## Icons & Assets
- Icons: Lucide React
- Avatars: DiceBear initials
- Google OAuth icon (official)
- Loading: skeleton shimmer
