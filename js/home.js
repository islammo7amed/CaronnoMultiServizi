import {RenderTemplate, GetComponent, InitTemplate} from "./utils.js";
const homeServices = document.getElementsByClassName("home-services-placeholder")[0];
const whyUs = document.getElementsByClassName("why-us-placeholder")[0];

let services = [
    {
        icon: "house",
        title: "Pulizia Civile e Industriale",
        desc: "Servizi di pulizia professionale per case, uffici e stabilimenti industriali"
    },
    {
        icon: "droplets",
        title: "Sanificazione Ambientale",
        desc: "Sanificazione completa degli ambienti con prodotti certificati"
    },
    {
        icon: "sparkles",
        title: "Pulizia Vetri e Vetrate",
        desc: "Pulizia professionale di vetri, vetrate e superfici trasparenti"
    },
    {
        icon: "building-2",
        title: "Trattamento Pavimenti",
        desc: "Trattamento e manutenzione di tutti i tipi di pavimentazione"
    },
    {
        icon: "car",
        title: "Servizi Condominiali",
        desc: "Pulizia e manutenzione completa di aree condominiali"
    },
    {
        icon: "trees",
        title: "Manutenzione Giardini",
        desc: "Cura e manutenzione di spazi verdi e giardini"
    },
];

let strengths = [
    {
        icon: "shield",
        title: "Affidabilità",
        desc: "Oltre 10 anni di esperienza nel settore delle pulizie"
    },
    {
        icon: "award",
        title: "Esperienza",
        desc: "Team qualificato con formazione continua"
    },
    {
        icon: "leaf",
        title: "Prodotti Ecologici",
        desc: "Utilizziamo solo prodotti eco-sostenibili e certificati"
    },
    {
        icon: "users",
        title: "Personale Qualificato",
        desc: "Staff professionale e formato secondo gli standard più elevati"
    },
];

const generalCard = await GetComponent("../components/general-card.html");

services.forEach(element => {
    let cardItem = RenderTemplate(generalCard, element);
    homeServices.innerHTML += InitTemplate(cardItem);
});

strengths.forEach(element => {
    let cardItem = RenderTemplate(generalCard, element);
    whyUs.innerHTML += InitTemplate(cardItem);
})

lucide.createIcons();
