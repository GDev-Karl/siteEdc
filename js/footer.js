// footer.js

// Charger le contenu du bas de la page
document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.createElement("div");
    footerContainer.innerHTML = '<object type="text/html" data="footer.html" ></object>';
    document.body.appendChild(footerContainer);
});
