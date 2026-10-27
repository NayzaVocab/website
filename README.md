# Nayza Vocab — Official Website 🔱

[![Website Status](https://img.shields.io/badge/Website-Live-FFC837?style=for-the-badge&logo=vercel&logoColor=black)](https://nayzavocab.ismaaiiyl.me/)
[![License: MIT](https://img.shields.io/badge/License-MIT-02569B?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![SEO: 100%](https://img.shields.io/badge/SEO-Optimized-3ECF8E?style=for-the-badge&logo=google&logoColor=white)](https://nayzavocab.ismaaiiyl.me/sitemap.xml)

**Nayza Vocab** platformasining rasmiy vebsayti va APK yuklab olish markazi. Vercel'da yashindek tez yuklanuvchi, zamonaviy Navy & Gold dizaynidagi bitta sahifali (Landing Page) arxitektura.

🌐 **Jonli havola:** [nayzavocab.ismaaiiyl.me](https://nayzavocab.ismaaiiyl.me/)

---

## ✨ Imkoniyatlar (Features)

- ⚡ **Zero-Bloat & Lightning Fast:** Og'ir freymvorklarsiz, toza Vanilla HTML5, CSS3 va JavaScript asosida yozilgan.
- 🔄 **Dinamik GitHub Release Integratsiyasi:** GitHub API (`NayzaVocab/android`) orqali eng so'nggi APK relizi (`v1.0.4+`), uning hajmi va yuklab olish havolasini avtomatik yangilab turadi.
- 📱 **Interaktiv Telefon Mockup:** Foydalanuvchilar Asosiy, Kutubxona va Yangilanish ekranlarini brauzerda interaktiv ko'ra oladi.
- ⚖️ **Google Play Talablariga Mos Yuridik Hujjatlar:**
  - [Maxfiylik Siyosati (Privacy Policy)](https://nayzavocab.ismaaiiyl.me/privacy)
  - [Foydalanish Shartlari (Terms of Service)](https://nayzavocab.ismaaiiyl.me/terms)
- 🔍 **Google Search (SEO) To'liq Optimallashtirilgan:**
  - `schema.org` (JSON-LD) MobileApplication strukturasi (Google Search natijalarida boyitilgan kartochka bilan chiqadi).
  - XML Sitemap (`sitemap.xml`) va qidiruv botlari ko'rsatmasi (`robots.txt`).
  - OpenGraph va Twitter Cards (Telegram va ijtimoiy tarmoqlarda chiroyli banner bilan ulashiladi).

---

## 📂 Loyiha Strukturasi (Architecture)

```text
website/
├── index.html              # Asosiy Landing Page (Hero, Showcase, Features, FAQ)
├── privacy.html            # Google Play talablariga mos Maxfiylik Siyosati
├── terms.html              # Foydalanish Shartlari (Terms of Service)
├── robots.txt              # Googlebot va qidiruv tizimlari ko'rsatmasi
├── sitemap.xml             # Sayt xaritasi (SEO indeksi)
├── vercel.json             # Vercel kesh sozlamalari va Clean URLs (/privacy, /terms)
│
├── css/
│   └── style.css           # Deep Navy & Electric Gold, Glassmorphism, Responsive
│
├── js/
│   └── app.js              # GitHub Release Fetcher, Mockup Tabs & Accordion
│
└── assets/
    ├── logo.png            # Rasmiy Oltin Nayza logotipi
    └── screenshots/        # Ilovaning real skrinshotlari
```

---

## 🔍 Google Search Console'ga Qo'shish Qo'llanmasi

Saytingiz Google qidiruvida tezda birinchi o'rinlarga chiqishi uchun:

1. [Google Search Console](https://search.google.com/search-console) ga kiring.
2. **URL prefix** bo'limiga `https://nayzavocab.ismaaiiyl.me/` manzilini kiriting.
3. Tasdiqlash usullaridan birini tanlang (masalan, Cloudflare DNS orqali bitta TXT yozuvi qo'shish).
4. Chap tarafdagi **Sitemaps** bo'limiga kirib:
   ```text
   https://nayzavocab.ismaaiiyl.me/sitemap.xml
   ```
   manzilini yuboring.
5. Bir necha kun ichida Google saytingizni to'liq indekslaydi va qidiruvda ko'rsatadi!

---

## 🛠 Mahalliy Ishga Tushirish (Local Development)

Hech qanday maxsus o'rnatish shart emas. Fayllarni brauzerda ochishingiz yoki oddiy lokal server orqali ko'rishingiz mumkin:

```bash
# Python bilan (ixtiyoriy):
python -m http.server 8000

# yoki VS Code 'Live Server' plagini bilan index.html ni oching
```

---

## 🔱 Muallif (Author)

**Ismoil G'aynazarov** ([@ismaaiiyl](https://github.com/ismaaiiyl))  
*Creator of Nayza Vocab Platform* 🔱  
- Tashkilot: [Nayza Vocab Organization](https://github.com/NayzaVocab)  
- Android Repo: [NayzaVocab/android](https://github.com/NayzaVocab/android)  
- Email: [ismaaiiyl@gmail.com](mailto:ismaaiiyl@gmail.com)

---

## 📄 Litsenziya

Ushbu loyiha [MIT License](LICENSE) ostida ochiq tarqatiladi.
