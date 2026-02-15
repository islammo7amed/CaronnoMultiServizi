import { Render } from "./utils.js";

const headerAddress = document.getElementsByClassName('header-address-placeholder')[0];
const header = document.getElementsByClassName('header-placeholder')[0];
const footer = document.getElementsByClassName('footer-placeholder')[0];

Render('../components/header-address.html', headerAddress);
Render('../components/header.html', header, true);
Render('../components/footer.html', footer);