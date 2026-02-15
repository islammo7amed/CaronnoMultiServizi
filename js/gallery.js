import { RenderTemplate, InitTemplate, GetComponent } from "./utils.js";
const galleryFilters = document.getElementById("filters");
const gallery = document.getElementById("gallery");
const fullScreen = document.getElementById("full-screen");
const fullImage = document.getElementById("full-image");

let galleryData = [
    {
        imageSrc: "../assets/images/gallery-item-1.jpg",
        category: "Team",
        description: "Team professionale in uniforme"
    },
    {
        imageSrc: "../assets/images/gallery-item-2.jpg",
        category: "Uffici",
        description: "Pulizia professionale ufficio moderno"
    },
    {
        imageSrc: "../assets/images/gallery-item-3.jpg",
        category: "Prima/Dopo",
        description: "Lucidatura pavimenti professionale"
    },
    {
        imageSrc: "../assets/images/gallery-item-4.jpg",
        category: "Abitazioni",
        description: "Pulizia domestica cucina e soggiorno"
    },
    {
        imageSrc: "../assets/images/gallery-item-5.jpg",
        category: "Industriale",
        description: "Pulizia impianti industriali"
    },
    {
        imageSrc: "../assets/images/gallery-item-6.jpg",
        category: "Abitazioni",
        description: "Bagno moderno splendente"
    },
    {
        imageSrc: "../assets/images/gallery-item-7.jpg",
        category: "Vetri",
        description: "Vetri cristallini senza aloni"
    },
    {
        imageSrc: "../assets/images/gallery-item-8.jpg",
        category: "Prodotti",
        description: "Prodotti ecologici certificati"
    },
    {
        imageSrc: "../assets/images/gallery-item-9.jpg",
        category: "Condominiali",
        description: "Scale e androni condominiali"
    }
];

let categories = galleryData.map(item => item.category);

let galleryCardComponent = await GetComponent("../components/gallery-card.html");

galleryData.forEach((item) => {
    gallery.innerHTML += initComponent(galleryCardComponent, item);
});

galleryFilters.innerHTML = `<li class="gallery-item gallery-item-active">Tutti</li>`;
categories.forEach((catg, i) => {
    let firstIndex = categories.indexOf(catg);
    while (firstIndex != categories.lastIndexOf(catg)){
        categories.splice(categories.lastIndexOf(catg), 1);
    }
    galleryFilters.innerHTML += `<li class="gallery-item">${catg}</li>`;
});

galleryFilters.addEventListener("click", (e) => {
    if (e.target.localName === "li") {
        let activeElement = galleryFilters.getElementsByClassName("gallery-item-active")[0];
        activeElement.classList.remove("gallery-item-active");
        e.target.classList.add("gallery-item-active");
        let _gategories = galleryData.filter((data) => data.category == e.target.innerText);
        gallery.innerHTML = "";
        if (_gategories.length > 0) {
            _gategories.forEach((item) => {
                gallery.innerHTML += initComponent(galleryCardComponent, item);
            });
        } else {
            galleryData.forEach((item) => {
                gallery.innerHTML += initComponent(galleryCardComponent, item);
            });
        }
    }
});

fullScreen.addEventListener("click", (e) => {
    if (e.target.localName == "div" || e.target.localName == "i") {
        fullScreen.style.display = "none";
    }
});

gallery.addEventListener("click", (e) => {
    if (e.target.id != "gallery") {
        openInFullScreen(e);
    }
});

function openInFullScreen(e) {
    fullScreen.style.display = "block";
    if (e.target.localName == "img") {
        fullImage.src = e.target.src;
    }else {
        let parent = e.target.offsetParent;
        while (parent.className != "gallery-card") {
            parent = parent.offsetParent;
        }
        fullImage.src = parent.children[0].src;
    }
}

function initComponent(component, data) {
    let cardItem = RenderTemplate(component, data);
    return InitTemplate(cardItem);
}

