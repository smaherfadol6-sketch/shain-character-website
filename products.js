// ═══════════════════════════════════════════════════
// Shain Character - Products Data
// ═══════════════════════════════════════════════════

const PRODUCTS = [
    {
        id: 1,
        name: "لوحة المرايا",
        nameEn: "The Mirror",
        image: "product-01.jpg",
        additionalImages: [],
        description: "تصميم كلاسيكي من الخشب الطبيعي، تحدث عن أناقتك في لوحة.",
        descriptionEn: "A classic design from natural wood, speak of your elegance in this piece.",
        price: "980",
        showPrice: true,
        size: "110 × 50 سم (يمكنك طلب حجم خاص يناسب مساحتك)",
        sizeEn: "110 × 50 cm (Custom sizes available upon request)",
        category: "wall-art",
        status: "available",
        featured: true
    },
    {
        id: 2,
        name: "لوحة البامبو",
        nameEn: "The Bamboo",
        image: "product-02.jpg",
        additionalImages: [],
        description: "أضف لمسة طبيعية لديكورك، أضف روحاً جديدة للمكان. البامبو والكوالا (هدية).",
        descriptionEn: "Add a natural touch to your decor, add a new spirit to the space. Bamboo and koala (gift).",
        price: "860",
        showPrice: true,
        size: "165 × 65 سم",
        sizeEn: "165 × 65 cm",
        category: "wall-art",
        status: "available",
        featured: true
    },
    {
        id: 3,
        name: "لوحة As You Know",
        nameEn: "As You Know",
        image: "product-03.jpg",
        additionalImages: [],
        description: "لماذا لا تضفي على المكان لمسة عصرية تناسبه... تصميمك العصري جاهز.",
        descriptionEn: "Why not add a modern touch that suits the place... your modern design is ready.",
        price: "620",
        showPrice: true,
        size: "150 × 45 سم",
        sizeEn: "150 × 45 cm",
        category: "wall-art",
        status: "available",
        featured: true
    },
    {
        id: 4,
        name: "لوحة القمر",
        nameEn: "Moonlit Serenity",
        image: "product-04.jpg",
        additionalImages: [],
        description: "اللوحة الجديدة والاستثنائية.. اجعل شعور تحت ضوء القمر داخل مساحتك.",
        descriptionEn: "The new and exceptional piece. Bring the feeling of being under moonlight into your space.",
        price: "890",
        showPrice: true,
        size: "170 × 69 سم",
        sizeEn: "170 × 69 cm",
        category: "wall-art",
        status: "available",
        featured: true
    }
];

const CATEGORIES = [
    { id: "all", name: "جميع الأعمال", nameEn: "All Works" },
    { id: "wall-art", name: "لوحات جدارية", nameEn: "Wall Art" },
    { id: "mirrors", name: "مرايا مضيئة", nameEn: "Lighted Mirrors" },
    { id: "relief", name: "Relief", nameEn: "Relief" },
    { id: "decor", name: "تصاميم ديكورية", nameEn: "Decor Designs" }
];

if (typeof window !== 'undefined') {
    window.PRODUCTS = PRODUCTS;
    window.CATEGORIES = CATEGORIES;
}
