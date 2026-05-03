// --- Filtering Logic ---
function filterSelection(category) {
    const items = document.getElementsByClassName("product-card");
    const buttons = document.getElementsByClassName("filter-btn");
    
    for (let btn of buttons) {
        btn.classList.remove("active");
        if (btn.getAttribute('onclick').includes(category)) btn.classList.add("active");
    }

    if (category === "all") {
        for (let item of items) item.style.display = "block";
    } else {
        for (let item of items) {
            if (item.classList.contains(category)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        }
    }
}

// --- Language Switcher Logic ---
let currentLang = 'en';

const translations = {
    en: {
        namaste: "🙏 NAMASTE 🙏",
        logo_text: "Shital Dairy",
        call_now: "Call Now",
        hero_title: "Purity & Taste <br>In Every Drop",
        hero_desc: "Best quality Milk, Sweets, and Bakery items in Dhangadhi.",
        order_btn: "Order Now",
        services_title: "Our Services",
        wedding_title: "Wedding & Ceremony",
        wedding_desc: "Special bulk orders for Bihe, Bratabandha, and Pasni with wholesale pricing.",
        fresh_title: "Always Fresh",
        fresh_desc: "Available anytime - Morning to Evening with guaranteed freshness.",
        price_title: "Best Price",
        price_desc: "Affordable rates for high-quality dairy and bakery products.",
        products_title: "Our Special Items",
        btn_all: "All",
        btn_dairy: "Dairy",
        btn_sweets: "Sweets",
        btn_bakery: "Bakery",
        btn_cake: "Cakes",
        p_milk: "Fresh Milk (Doodh)",
        p_curd: "Fresh Curd (Dahi)",
        p_ghee: "Pure Ghee",
        p_lalmohan: "Lalmohan",
        p_peda: "Dudh Peda",
        p_bread: "Fresh Bread",
        p_namkeen: "Mix Namkeen",
        p_bfcake: "Black Forest Cake",
        p_ccake: "Chocolate Cake",
        p_vcake: "Valina Cake",
        p_wfcake: "White Forest Cake",
        contact_title: "Contact Us",
        addr_label: "Location:",
        addr_val: "Nagarpalika Road, Dhangadhi, Kailali",
        phone_label: "Phone:",
        footer_note: "© 2024 Shital Dairy. All Rights Reserved."
    },
    ne: {
        namaste: "🙏 नमस्कार 🙏",
        logo_text: "शीतल डेरी",
        call_now: "सम्पर्क",
        hero_title: "शुद्धता र स्वादको <br>उत्कृष्ट संगम",
        hero_desc: "धनगढीमा ताजा दूध, मिठाइ र बेकरी आइटमहरूको लागि विश्वासिलो नाम।",
        order_btn: "अर्डर गर्नुहोस्",
        services_title: "हाम्रा सेवाहरु",
        wedding_title: "विवाह र समारोह",
        wedding_desc: "विवाह, ब्रतबन्ध र पास्नीको लागि थोक मूल्यमा अर्डर लिइन्छ।",
        fresh_title: "सधैं ताजा",
        fresh_desc: "बिहान देखि बेलुका सम्म ताजा उत्पादन उपलब्ध छ।",
        price_title: "उचित मूल्य",
        price_desc: "बजारको भन्दा सस्तो र गुणस्तरीय सामानको ग्यारेन्टी।",
        products_title: "हाम्रा उत्पादनहरु",
        btn_all: "सबै",
        btn_dairy: "दूध/दही",
        btn_sweets: "मिठाइ",
        btn_bakery: "बेकरी",
        btn_cake: "केक",
        p_milk: "ताजा दूध",
        p_curd: "लोकल दही",
        p_ghee: "शुद्ध घिउ",
        p_lalmohan: "लालमोहन",
        p_peda: "दूध पेडा",
        p_bread: "ताजा पाउरोटी",
        p_namkeen: "मिक्स निम्किन",
        p_bfcake: "ब्ल्याक फरेस्ट केक",
        contact_title: "सम्पर्क गर्नुहोस्",
        addr_label: "ठेगाना:",
        addr_val: "नगरपालिका रोड, धनगढी, कैलाली",
        phone_label: "फोन:",
        footer_note: "© २०८१ शीतल डेरी, धनगढी। सर्वाधिकार सुरक्षित।"
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ne' : 'en';
    document.getElementById('lang-label').innerText = currentLang === 'en' ? 'NEP' : 'ENG';
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}
