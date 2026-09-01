// ═══════════════════════════════════════════════════
// Shain Character - Products Data
// ═══════════════════════════════════════════════════
// To add a new artwork:
// 1. Copy one product block (from { to })
// 2. Change the id to a new number
// 3. Fill in your information
// 4. Add the new image to  folder
// ═══════════════════════════════════════════════════

const PRODUCTS = [
    {
        id: 1,
        // Arabic name
        name: "تصميم كلاسيكي",
        // English name
        nameEn: "Classic Design",
        // Main image — put the image file name here
        image: "product-01.jpg",
        // Additional images (optional) — add more file names inside [ ]
        additionalImages: [],
        // Arabic description
        description: "لوحة جدارية أنيقة بتصميم كلاسيكي، تتميز بإضاءة LED دافئة ورف خشبي للزهور. مثالية لمداخل المنازل والصالات.",
        // English description
        descriptionEn: "An elegant wall piece with a classic design, featuring warm LED lighting and a wooden shelf for flowers. Perfect for home entrances and living rooms.",
        // Price — write the number only, or leave empty for "Inquiry"
        price: "",
        // Show price? true = show price | false = show "Inquiry / للاستفسار"
        showPrice: false,
        // Size
        size: "150 × 45 سم",
        sizeEn: "150 × 45 cm",
        // Category (for future filtering)
        category: "wall-art",
        // Status: "available" | "sold" | "unavailable"
        status: "available",
        // Featured? true = shows on homepage | false = gallery only
        featured: true
    },
    {
        id: 2,
        name: "تصميم مودرن",
        nameEn: "Modern Design",
        image: "product-02.jpg",
        additionalImages: [],
        description: "تصميم عصري بإضاءة محيطة أنيقة ونبات طبيعي يضيف لمسة من الحياة إلى المساحة. يجمع بين البساطة والفخامة.",
        descriptionEn: "A contemporary design with elegant ambient lighting and a natural plant that adds a touch of life to the space. Combines simplicity and luxury.",
        price: "",
        showPrice: false,
        size: "150 × 45 سم",
        sizeEn: "150 × 45 cm",
        category: "wall-art",
        status: "available",
        featured: true
    },
    {
        id: 3,
        name: "تصميم عصري",
        nameEn: "Contemporary Design",
        image: "product-03.jpg",
        additionalImages: [],
        description: "لوحة جدارية بتصميم عصري ناعم، بإضاءة LED دافئة ورف خشبي بسيط. تناسب الديكورات الحديثة والمينيمالية.",
        descriptionEn: "A wall piece with a soft contemporary design, featuring warm LED lighting and a simple wooden shelf. Suits modern and minimalist interiors.",
        price: "",
        showPrice: false,
        size: "150 × 45 سم",
        sizeEn: "150 × 45 cm",
        category: "wall-art",
        status: "available",
        featured: true
    }
];

// Categories (for future use)
// To add a new category, add a line here
const CATEGORIES = [
    { id: "all", name: "جميع الأعمال", nameEn: "All Works" },
    { id: "wall-art", name: "لوحات جدارية", nameEn: "Wall Art" },
    { id: "mirrors", name: "مرايا مضيئة", nameEn: "Lighted Mirrors" },
    { id: "relief", name: "Relief", nameEn: "Relief" },
    { id: "decor", name: "تصاميم ديكورية", nameEn: "Decor Designs" }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.PRODUCTS = PRODUCTS;
    window.CATEGORIES = CATEGORIES;
}
