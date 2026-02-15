import {RenderTemplate, GetComponent, InitTemplate} from "./utils.js";
const whyUs = document.getElementsByClassName("why-us-placeholder")[0];
const servicesElement = document.getElementsByClassName("services-placeholder")[0];

let services = [
    {
        icon: "home",
        title: "Pulizia Civile",
        desc: "Servizi di pulizia completi per abitazioni private, appartamenti e ville",
        serviceTypes: ["Pulizia quotidiana e periodica", "Pulizia dopo ristrutturazioni", "Pulizia fine locazione", "Servizi personalizzati"],
        imageUrl: "../assets/images/gallery-item-4.jpg"
    },
    {
        icon: "building-2",
        title: "Pulizia Industriale",
        desc: "Soluzioni professionali per stabilimenti, capannoni e aree industriali",
        serviceTypes: ["Pulizia di stabilimenti produttivi", "Sanificazione aree industriali", "Pulizia di macchinari", "Servizi notturni e festivi"],
        imageUrl: "../assets/images/gallery-item-5.jpg"
    },
    {
        icon: "droplets",
        title: "Sanificazione Ambientale",
        desc: "Servizi di sanificazione professionale con prodotti certificati",
        serviceTypes: ["Sanificazione con ozono", "Trattamenti antimicrobici", "Certificazioni sanitarie", "Interventi di emergenza"],
        imageUrl: "../assets/images/gallery-item-8.jpg"
    },
    {
        icon: "sparkles",
        title: "Pulizia Vetri e Vetrate",
        desc: "Pulizia professionale di vetri, vetrate e superfici trasparenti",
        serviceTypes: ["Pulizia vetri interni ed esterni", "Vetrate di grandi dimensioni", "Pulizia insegne luminose", "Trattamenti idrorepellenti"],
        imageUrl: "../assets/images/gallery-item-7.jpg"
    },
    {
        icon: "car",
        title: "Servizi Condominiali",
        desc: "Pulizia e manutenzione completa di aree condominiali",
        serviceTypes: ["Pulizia scale e androni", "Manutenzione ascensori", "Pulizia cantine e garage", "Gestione rifiuti"],
        imageUrl: "../assets/images/gallery-item-9.jpg"
    },
    {
        icon: "trees",
        title: "Manutenzione Giardini",
        desc: "Cura professionale di spazi verdi, giardini e aree esterne",
        serviceTypes: ["Potatura e sfalcio", "Progettazione verde", "Impianti di irrigazione", "Manutenzione stagionale"],
        imageUrl: "../assets/images/flowers.jpg"
    },
];

let strengths = [
    {
        icon: "shield",
        title: "Garanzia di Qualità",
        desc: "Tutti i nostri servizi sono garantiti al 100%"
    },
    {
        icon: "clock-4",
        title: "Puntualità",
        desc: "Rispettiamo sempre gli orari concordati"
    },
    {
        icon: "circle-check-big",
        title: "Personale Qualificato",
        desc: "Staff formato e costantemente aggiornato"
    },
];

const generalCard = await GetComponent("../components/general-card.html");
const serviceCard = await GetComponent("../components/services-card.html");

services.forEach(element => {
    element['serviceTypes'] = element['serviceTypes'].map(e => {
        return `<li><i class="list-icon" data-lucide="circle-check-big"></i> ${e}</li>`
    }).join('');
    let cardItem = RenderTemplate(serviceCard, element);
    servicesElement.innerHTML += InitTemplate(cardItem);
});

strengths.forEach(element => {
    let cardItem = RenderTemplate(generalCard, element);
    whyUs.innerHTML += InitTemplate(cardItem);
});

lucide.createIcons();
