# 🎨 Shain Character — Website

موقع ويب كامل واحترافي لعلامة **Shain Character** — معرض أعمال وكتالوج منتجات.

---

## 📁 هيكل المشروع

```
shain-character-website/
│
├── index.html              ← الصفحة الرئيسية (لا تعدل)
│
├── assets/
│   ├── css/
│   │   └── style.css       ← التنسيق (لا تعدل)
│   │
│   ├── js/
│   │   ├── config.js       ← إعدادات الموقع ✅ عدل هنا
│   │   ├── products.js     ← المنتجات ✅ عدل هنا
│   │   └── script.js       ← البرمجة (لا تعدل)
│   │
│   └── images/
│       ├── logo.png        ← الشعار
│       ├── product-01.jpg  ← منتج 1
│       ├── product-02.jpg  ← منتج 2
│       └── product-03.jpg  ← منتج 3
│
├── sitemap.xml             ← خريطة الموقع
└── robots.txt              ← ملف robots
```

---

## 🚀 كيف تنشر الموقع على GitHub Pages

### الخطوة 1: أنشئ حساب على GitHub
- ادخل على: https://github.com
- اضغط "Sign up" واتبع الخطوات
- **مجاني 100%**

### الخطوة 2: أنشئ Repository جديد
1. اضغط على الزر الأخضر **"New"** أو **"+"** → **"New repository"**
2. اسم المستودع (Repository name): `shain-character-website`
3. اجعله **Public** (عام)
4. **لا تضع علامة على "Initialize with README"**
5. اضغط **"Create repository"**

### الخطوة 3: ارفع الملفات
1. داخل المستودع الجديد، اضغط على **"uploading an existing file"**
2. اسحب جميع ملفات المشروع (index.html + مجلد assets + sitemap.xml + robots.txt) إلى المستطيل
3. اضغط **"Commit changes"**

### الخطوة 4: فعل GitHub Pages
1. داخل المستودع، اذهب إلى **"Settings"** (الإعدادات)
2. من القائمة الجانبية، اختر **"Pages"**
3. في "Source" اختر: **"Deploy from a branch"**
4. في "Branch" اختر: **"main"** و **"/ (root)"**
5. اضغط **"Save"**
6. انتظر 1-3 دقائق
7. سترى الرابط الأخضر: `https://yourusername.github.io/shain-character-website/`

### ✅ جاهز!
الموقع يعمل الآن مجانًا وبدون أي دفع.

---

## 📝 كيف تعدل الموقع

### 1️⃣ كيف أضيف لوحة جديدة؟

افتح ملف: `assets/js/products.js`

انسخ هذا النموذج وألصقه داخل الأقواس المربعة `[ ]` بعد آخر منتج:

```javascript
    {
        id: 4,                    ← غيّر الرقم (يجب أن يكون فريدًا)
        name: "اسم اللوحة بالعربي",
        nameEn: "Artwork Name in English",
        image: "assets/images/product-04.jpg",  ← اسم ملف الصورة الجديد
        additionalImages: [],     ← صور إضافية (اختياري)
        description: "وصف اللوحة بالعربي",
        descriptionEn: "Description in English",
        price: "",               ← اكتب السعر أو اتركه فارغًا
        showPrice: false,        ← true = يظهر السعر | false = "للاستفسار"
        size: "150 × 45 سم",
        sizeEn: "150 × 45 cm",
        category: "wall-art",    ← wall-art أو mirrors أو relief أو decor
        status: "available",     ← available أو sold أو unavailable
        featured: true           ← true = تظهر في الصفحة الرئيسية
    }
```

**لا تنسى:**
- ضع فاصلة `,` بعد آخر منتج القديم
- ارفع صورة اللوحة إلى `assets/images/`

---

### 2️⃣ كيف أغير صورة لوحة؟

1. ضع الصورة الجديدة في مجلد `assets/images/`
2. افتح `assets/js/products.js`
3. ابحث عن اللوحة وغيّر السطر:
   ```javascript
   image: "assets/images/الصورة-الجديدة.jpg",
   ```

---

### 3️⃣ كيف أغير اسم لوحة؟

افتح `assets/js/products.js` وابحث عن:
```javascript
name: "الاسم القديم",
nameEn: "Old Name",
```
غيّر النص بين علامتي التنصيص `" "`

---

### 4️⃣ كيف أغير السعر؟

في `assets/js/products.js`:
```javascript
price: "500",        ← اكتب الرقم فقط
showPrice: true,     ← غيّر إلى true
```

---

### 5️⃣ كيف أجعل السعر "للاستفسار"؟

```javascript
price: "",
showPrice: false,    ← غيّر إلى false
```

---

### 6️⃣ كيف أغير المقاس؟

```javascript
size: "200 × 60 سم",      ← العربية
sizeEn: "200 × 60 cm",    ← الإنجليزية
```

---

### 7️⃣ كيف أغير وصف اللوحة؟

```javascript
description: "الوصف الجديد بالعربي",
descriptionEn: "New description in English",
```

---

### 8️⃣ كيف أضع اللوحة كمباعة؟

```javascript
status: "sold",    ← غيّر من available إلى sold
```

---

### 9️⃣ كيف أضيف صورًا إضافية للوحة؟

```javascript
additionalImages: [
    "assets/images/extra-01.jpg",
    "assets/images/extra-02.jpg"
],
```

---

### 🔟 كيف أغير رقم WhatsApp؟

افتح: `assets/js/config.js`

```javascript
whatsapp: "https://wa.me/qr/الرابط-الجديد",
```

**ملاحظة:** يمكنك استخدام رابط مباشر:
```javascript
whatsapp: "https://wa.me/966XXXXXXXXX",   ← ضع رقمك بدون الصفر الأول
```

---

### 1️⃣1️⃣ كيف أغير Instagram؟

في `assets/js/config.js`:
```javascript
instagram: "https://www.instagram.com/حسابك-الجديد",
instagramHandle: "حسابك-الجديد",
```

---

### 1️⃣2️⃣ كيف أغير الشعار؟

استبدل ملف `assets/images/logo.png` بشعارك الجديد.
**الاسم يجب أن يبقى `logo.png`**

---

### 1️⃣3️⃣ كيف أغير النصوص العامة؟

افتح `assets/js/script.js` وابحث عن `TRANSLATIONS`.
ستجد قسمين: `ar:` للعربية و `en:` للإنجليزية.
غيّر أي نص بين علامتي التنصيص.

---

### 1️⃣4️⃣ كيف أضيف تصنيفًا جديدًا؟

في `assets/js/products.js`، ابحث عن `CATEGORIES` وأضف:

```javascript
{ id: "new-category", name: "اسم التصنيف", nameEn: "Category Name" },
```

---

## 🎨 تخصيص إضافي

### تغيير اللغة الافتراضية
في `assets/js/config.js`:
```javascript
defaultLanguage: "en",    ← "ar" للعربية | "en" للإنجليزية
```

### تغيير اسم العلامة
في `assets/js/config.js`:
```javascript
brandName: "Shain Character",
```

---

## ⚡ نصائح مهمة

1. **لا تحذف أي ملف من المجلد** — الموقع قد يتوقف
2. **لا تغير أسماء المجلدات** — `assets/css/` و `assets/js/` و `assets/images/`
3. **احفظ نسخة احتياطية** من ملفاتك قبل أي تعديل
4. **اختبر الموقع** بعد كل تعديل بفتح `index.html` في المتصفح
5. **للنشر على GitHub Pages:** ارفع الملفات المعدلة وانتظر 1-3 دقائق

---

## 📱 اختبار الموقع محليًا

قبل النشر، يمكنك فتح ملف `index.html` مباشرة في المتصفح (Chrome, Safari, Firefox).

**للتأكد من أن كل شيء يعمل:**
- ✅ الصور تظهر
- ✅ اللغة تتبدل
- ✅ WhatsApp يفتح
- ✅ Instagram يفتح
- ✅ تفاصيل المنتج تفتح
- ✅ الموقع يظهر بشكل صحيح على الهاتف

---

## 🔗 روابط مهمة

| الخدمة | الرابط |
|--------|--------|
| GitHub | https://github.com |
| GitHub Pages Docs | https://pages.github.com |
| WhatsApp Link Generator | https://wa.me |

---

## ❓ هل تحتاج مساعدة؟

- اقرأ التعليمات مرة أخرى ببطء
- تأكد من أنك لم تحذف فاصلة `,` أو قوس `{` أو `}`
- استخدم محرر نصوص بسيط (Notepad على Windows, TextEdit على Mac)

---

**تم بناء هذا الموقع بكل ❤️ لـ Shain Character**

100% مجاني | لا Backend | لا Database | يعمل على GitHub Pages
