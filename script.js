// ═══════════════════════════════════════════════════
// Shain Character - Main JavaScript
// No external libraries | No backend | No database
// ═══════════════════════════════════════════════════

(function() {
    'use strict';

    // ─── State ───
    let currentLang = localStorage.getItem('shain-lang') || SITE_CONFIG.defaultLanguage || 'ar';
    let currentProduct = null;

    // ─── Translations ───
    const TRANSLATIONS = {
        ar: {
            home: 'الرئيسية',
            works: 'الأعمال',
            about: 'عن Shain',
            contact: 'التواصل',
            heroTitle: 'لمسة فنية تصنع الفرق',
            heroSubtitle: 'لوحات جدارية وتصاميم فنية بلمسات من الملمس والبروز والإضاءة',
            browseWorks: 'استعرض الأعمال',
            contactUs: 'تواصل معنا',
            latestWorks: 'أحدث الأعمال',
            viewDetails: 'عرض التفاصيل',
            orderNow: 'اطلب الآن',
            inquiry: 'للاستفسار',
            available: 'متوفر',
            sold: 'مباع',
            unavailable: 'غير متوفر',
            size: 'المقاس',
            price: 'السعر',
            status: 'الحالة',
            category: 'التصنيف',
            description: 'الوصف',
            share: 'مشاركة',
            copyLink: 'نسخ الرابط',
            linkCopied: 'تم نسخ الرابط!',
            aboutTitle: 'عن Shain Character',
            aboutText1: 'نقدم لك أعمالاً فنية مميزة تجمع بين الجمال والبساطة، لتضفي لمسة فنية مميزة إلى مساحاتك.',
            aboutText2: 'نختص في اللوحات الجدارية والمرايا المضيئة والتصاميم الديكورية الفريدة.',
            feature1: 'تصاميم فريدة',
            feature2: 'جودة عالية',
            feature3: 'توصيل متاح',
            feature4: 'تصاميم حسب الطلب',
            contactTitle: 'تواصل معنا',
            contactText: 'نحن هنا لمساعدتك. تواصل معنا عبر WhatsApp أو Instagram.',
            whatsappLabel: 'WhatsApp',
            instagramLabel: 'Instagram',
            followUs: 'تابعنا على',
            allRights: 'جميع الحقوق محفوظة',
            close: 'إغلاق',
            backToHome: 'العودة للرئيسية'
        },
        en: {
            home: 'Home',
            works: 'Works',
            about: 'About',
            contact: 'Contact',
            heroTitle: 'An Artistic Touch Makes the Difference',
            heroSubtitle: 'Wall art & designs with texture, relief & lighting accents',
            browseWorks: 'Browse Works',
            contactUs: 'Contact Us',
            latestWorks: 'Latest Works',
            viewDetails: 'View Details',
            orderNow: 'Order Now',
            inquiry: 'Inquiry',
            available: 'Available',
            sold: 'Sold',
            unavailable: 'Unavailable',
            size: 'Size',
            price: 'Price',
            status: 'Status',
            category: 'Category',
            description: 'Description',
            share: 'Share',
            copyLink: 'Copy Link',
            linkCopied: 'Link copied!',
            aboutTitle: 'About Shain Character',
            aboutText1: 'We offer distinctive artworks that combine beauty and simplicity, adding a unique artistic touch to your spaces.',
            aboutText2: 'We specialize in wall art, lighted mirrors, and unique decorative designs.',
            feature1: 'Unique Designs',
            feature2: 'High Quality',
            feature3: 'Delivery Available',
            feature4: 'Custom Designs',
            contactTitle: 'Contact Us',
            contactText: 'We are here to help. Reach out via WhatsApp or Instagram.',
            whatsappLabel: 'WhatsApp',
            instagramLabel: 'Instagram',
            followUs: 'Follow us on',
            allRights: 'All rights reserved',
            close: 'Close',
            backToHome: 'Back to Home'
        }
    };

    // ─── DOM Elements ───
    const body = document.body;
    const navLinks = document.querySelector('.nav-links');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const worksGrid = document.getElementById('works-grid');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const toast = document.getElementById('toast');

    // ─── Initialize ───
    function init() {
        setLanguage(currentLang, false);
        renderWorks();
        setupEventListeners();
        setupScrollEffects();
        checkUrlParams();
    }

    // ─── Language Switcher ───
    function setLanguage(lang, save = true) {
        currentLang = lang;
        body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        body.setAttribute('lang', lang);

        if (save) {
            localStorage.setItem('shain-lang', lang);
        }

        updateTextContent();
        renderWorks();
        updateLangButton();

        // Update meta
        document.title = lang === 'ar' 
            ? SITE_CONFIG.brandName + ' | لوحات جدارية وتصاميم فنية'
            : SITE_CONFIG.brandName + ' | Wall Art & Designs';
    }

    function updateLangButton() {
        const btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.textContent = currentLang === 'ar' ? 'English' : 'العربية';
        }
    }

    function updateTextContent() {
        const t = TRANSLATIONS[currentLang];

        // Nav
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.textContent = t[key];
        });

        // Hero
        const heroTitle = document.getElementById('hero-title');
        const heroSubtitle = document.getElementById('hero-subtitle');
        if (heroTitle) heroTitle.textContent = t.heroTitle;
        if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;

        // Buttons
        const browseBtn = document.getElementById('browse-btn');
        const contactBtn = document.getElementById('contact-btn');
        if (browseBtn) browseBtn.textContent = t.browseWorks;
        if (contactBtn) contactBtn.textContent = t.contactUs;

        // Sections
        const worksTitle = document.getElementById('works-title');
        const aboutTitle = document.getElementById('about-title');
        const aboutText1 = document.getElementById('about-text-1');
        const aboutText2 = document.getElementById('about-text-2');
        const contactTitle = document.getElementById('contact-title');
        const contactText = document.getElementById('contact-text');

        if (worksTitle) worksTitle.textContent = t.latestWorks;
        if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
        if (aboutText1) aboutText1.textContent = t.aboutText1;
        if (aboutText2) aboutText2.textContent = t.aboutText2;
        if (contactTitle) contactTitle.textContent = t.contactTitle;
        if (contactText) contactText.textContent = t.contactText;

        // Features
        document.querySelectorAll('[data-feature]').forEach(el => {
            const key = el.getAttribute('data-feature');
            if (t[key]) el.textContent = t[key];
        });

        // Footer
        const footerCopy = document.getElementById('footer-copy');
        if (footerCopy) footerCopy.textContent = '© ' + new Date().getFullYear() + ' ' + SITE_CONFIG.brandName + ' — ' + t.allRights;
    }

    // ─── Render Works ───
    function renderWorks() {
        if (!worksGrid) return;

        const t = TRANSLATIONS[currentLang];
        worksGrid.innerHTML = '';

        PRODUCTS.forEach(product => {
            const card = document.createElement('div');
            card.className = 'work-card';
            card.setAttribute('data-id', product.id);

            const statusClass = product.status === 'available' ? 'status-available' : 
                               product.status === 'sold' ? 'status-sold' : 'status-unavailable';
            const statusText = product.status === 'available' ? t.available : 
                              product.status === 'sold' ? t.sold : t.unavailable;

            const priceDisplay = product.showPrice && product.price 
                ? `<div class="work-card-price">${product.price} ${SITE_CONFIG.currency[currentLang]}</div>`
                : `<div class="work-card-inquiry">${t.inquiry}</div>`;

            const name = currentLang === 'ar' ? product.name : product.nameEn;
            const nameEn = currentLang === 'ar' ? product.nameEn : product.name;
            const size = currentLang === 'ar' ? product.size : product.sizeEn;

            card.innerHTML = `
                <div class="work-card-image">
                    <img src="${product.image}" alt="${name}" loading="lazy">
                    <span class="work-card-status ${statusClass}">${statusText}</span>
                </div>
                <div class="work-card-body">
                    <h3 class="work-card-title">${name}</h3>
                    <div class="work-card-title-en">${nameEn}</div>
                    <div class="work-card-meta">
                        <span>📐 ${size}</span>
                    </div>
                    ${priceDisplay}
                    <div class="work-card-actions">
                        <button class="btn btn-dark view-details-btn" data-id="${product.id}">
                            ${t.viewDetails}
                        </button>
                        <a href="${getWhatsAppLink(product)}" class="btn btn-whatsapp" target="_blank" rel="noopener">
                            ${t.orderNow}
                        </a>
                    </div>
                </div>
            `;

            worksGrid.appendChild(card);
        });

        // Add event listeners to view details buttons
        document.querySelectorAll('.view-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                openProductModal(id);
            });
        });
    }

    // ─── Product Modal ───
    function openProductModal(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        currentProduct = product;
        const t = TRANSLATIONS[currentLang];

        const statusClass = product.status === 'available' ? 'status-available' : 
                           product.status === 'sold' ? 'status-sold' : 'status-unavailable';
        const statusText = product.status === 'available' ? t.available : 
                          product.status === 'sold' ? t.sold : t.unavailable;

        const name = currentLang === 'ar' ? product.name : product.nameEn;
        const nameEn = currentLang === 'ar' ? product.nameEn : product.name;
        const description = currentLang === 'ar' ? product.description : product.descriptionEn;
        const size = currentLang === 'ar' ? product.size : product.sizeEn;

        const priceDisplay = product.showPrice && product.price
            ? `<div class="modal-meta-item"><strong>${t.price}:</strong> ${product.price} ${SITE_CONFIG.currency[currentLang]}</div>`
            : `<div class="modal-meta-item"><strong>${t.price}:</strong> ${t.inquiry}</div>`;

        modalContent.innerHTML = `
            <button class="modal-close" id="modal-close">&times;</button>
            <img src="${product.image}" alt="${name}" class="modal-image">
            <div class="modal-body">
                <h2 class="modal-title">${name}</h2>
                <div class="modal-title-en">${nameEn}</div>
                <div class="modal-meta">
                    <div class="modal-meta-item"><strong>${t.size}:</strong> ${size}</div>
                    ${priceDisplay}
                    <div class="modal-meta-item">
                        <span class="work-card-status ${statusClass}" style="position:static;display:inline-block;">${statusText}</span>
                    </div>
                </div>
                <div class="modal-description">
                    <p>${description}</p>
                </div>
                <div class="modal-actions">
                    <a href="${getWhatsAppLink(product)}" class="btn btn-whatsapp" target="_blank" rel="noopener">
                        ${t.orderNow}
                    </a>
                    <button class="btn btn-outline share-btn" id="share-btn">
                        ${t.share}
                    </button>
                </div>
            </div>
        `;

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Update URL
        const newUrl = window.location.pathname + '?product=' + product.id;
        window.history.pushState({ productId: product.id }, '', newUrl);

        // Event listeners inside modal
        document.getElementById('modal-close').addEventListener('click', closeModal);
        document.getElementById('share-btn').addEventListener('click', shareProduct);
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        window.history.pushState({}, '', window.location.pathname);
        currentProduct = null;
    }

    // ─── WhatsApp Link Generator ───
    function getWhatsAppLink(product) {
        const t = TRANSLATIONS[currentLang];
        const name = currentLang === 'ar' ? product.name : product.nameEn;
        const size = currentLang === 'ar' ? product.size : product.sizeEn;

        let message;
        if (currentLang === 'ar') {
            message = `مرحبًا، أرغب في الاستفسار عن لوحة "${name}" بمقاس ${size}.`;
        } else {
            message = `Hello, I would like to inquire about the artwork "${name}" with size ${size}.`;
        }

        return SITE_CONFIG.whatsapp + '?text=' + encodeURIComponent(message);
    }

    // ─── Share Product ───
    async function shareProduct() {
        if (!currentProduct) return;

        const t = TRANSLATIONS[currentLang];
        const url = window.location.href;
        const name = currentLang === 'ar' ? currentProduct.name : currentProduct.nameEn;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: SITE_CONFIG.brandName + ' — ' + name,
                    text: name,
                    url: url
                });
            } catch (err) {
                // User cancelled
            }
        } else {
            // Fallback: copy to clipboard
            try {
                await navigator.clipboard.writeText(url);
                showToast(t.linkCopied);
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = url;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showToast(t.linkCopied);
            }
        }
    }

    // ─── Toast ───
    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }

    // ─── Check URL Parameters ───
    function checkUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('product');
        if (productId) {
            const id = parseInt(productId);
            if (!isNaN(id)) {
                setTimeout(() => openProductModal(id), 300);
            }
        }
    }

    // ─── Event Listeners ───
    function setupEventListeners() {
        // Language toggle
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                const newLang = currentLang === 'ar' ? 'en' : 'ar';
                setLanguage(newLang);
            });
        }

        // Mobile menu
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('open');
            });
        }

        // Close mobile menu on link click
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });

        // Modal overlay click to close
        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    closeModal();
                }
            });
        }

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeModal();
            }
        });

        // Pop state (back button)
        window.addEventListener('popstate', () => {
            if (modalOverlay.classList.contains('active')) {
                closeModal();
            }
            checkUrlParams();
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = 70;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            });
        });
    }

    // ─── Scroll Effects ───
    function setupScrollEffects() {
        const header = document.querySelector('.header');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }

    // ─── Start ───
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
