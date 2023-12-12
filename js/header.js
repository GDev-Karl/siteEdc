// header.js

// Charger le contenu du haut de la page
document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.createElement("div");
    headerContainer.innerHTML = '<object type="text/html" data="header.html" ></object>';
    document.body.prepend(headerContainer);
});
