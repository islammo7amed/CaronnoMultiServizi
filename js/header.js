function initHeader() {
    const menu_Bar = document.getElementById("menu-bar");
    const dropMenu = document.getElementsByClassName("drop-menu")[0];
    const navLinks = document.getElementsByClassName("nav-links");
    const dropMenuLinks = document.getElementsByClassName("drop-menu-links");

    menu_Bar.addEventListener("click", () => { 
        dropMenu.classList.toggle("drop-menu-active");
        menu_Bar.classList.toggle("fa-bars");
        menu_Bar.classList.toggle("fa-xmark");
        if (dropMenu.classList.contains("drop-menu-active")) {
            dropMenu.style.height = dropMenu.scrollHeight + "px";
        } else {
            dropMenu.style.height = "0";
        }
    });

    for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i].href === location.href) {
            navLinks[i].classList.add("active-page");
            dropMenuLinks[i].classList.add("drop-menu-selected");
        }
    }
}
