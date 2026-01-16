/* Product Filter */
function filterSelection(category) {
    const items = document.getElementsByClassName("product-card");
    const buttons = document.getElementsByClassName("filter-btn");

    for (let btn of buttons) {
        btn.classList.remove("active");
        if (btn.getAttribute("onclick").includes(category)) {
            btn.classList.add("active");
        }
    }

    for (let item of items) {
        item.style.display =
            category === "all" || item.classList.contains(category)
                ? "block"
                : "none";
    }
}

/* Language Switch */
let currentLang = "en";

function toggleLanguage() {
    currentLang = currentLang === "en" ? "ne" : "en";
    document.getElementById("lang-label").innerText =
        currentLang === "en" ? "NEP" : "ENG";

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}
