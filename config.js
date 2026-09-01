// ═══════════════════════════════════════════════════
// Shain Character - Website Configuration
// ═══════════════════════════════════════════════════
// Edit this file to change basic website settings
// No programming knowledge needed — just change the text between quotes
// ═══════════════════════════════════════════════════

const SITE_CONFIG = {
    // Brand Name (keep exactly as written)
    brandName: "Shain Character",

    // Default Language: "ar" for Arabic | "en" for English
    defaultLanguage: "ar",

    // WhatsApp Link — Change only the part after wa.me/
    // Example: https://wa.me/1234567890
    whatsapp: "https://wa.me/qr/SPSR5GCMQS2QI1",

    // Instagram Link — Paste your full Instagram URL
    instagram: "https://www.instagram.com/ssmmaa.store?igsi=MXdrYjU0bm1qdXNhaw==",

    // Instagram handle (without @) — used for display
    instagramHandle: "ssmmaa.store",

    // Email (optional)
    email: "",

    // Phone display text (optional)
    phoneDisplay: "",

    // Currency symbol
    currency: {
        ar: "ر.س",
        en: "SAR"
    },

    // Default product size (shown when no size is specified)
    defaultSize: {
        ar: "150 × 45 سم",
        en: "150 × 45 cm"
    }
};

// Make it available globally
if (typeof window !== 'undefined') {
    window.SITE_CONFIG = SITE_CONFIG;
}
