import {RenderTemplate, InitTemplate, GetComponent} from "./utils.js";
const valuesElement = document.getElementsByClassName("values-placeholder")[0];

let values = [
    {
        icon: "shield",
        title: "Affidabilità",
        desc: "La fiducia dei nostri clienti è il nostro bene più prezioso. Ogni progetto viene gestito con la massima serietà e professionalità."
    },
    {
        icon: "award",
        title: "Qualità",
        desc: "Standard elevati in ogni servizio offerto, utilizzando le migliori tecnologie e prodotti del settore."
    },
    {
        icon: "heart",
        title: "Passione",
        desc: "Amiamo il nostro lavoro e mettiamo il cuore in ogni intervento, per garantire risultati eccellenti."
    },
    {
        icon: "leaf",
        title: "Sostenibilità",
        desc: "Rispetto per l'ambiente attraverso l'uso di prodotti eco-compatibili e pratiche sostenibili."
    },
];

const generalCard = await GetComponent("../components/general-card.html");

values.forEach(element => {
    let cardItem = RenderTemplate(generalCard, element);
    valuesElement.innerHTML += InitTemplate(cardItem);
});

lucide.createIcons();