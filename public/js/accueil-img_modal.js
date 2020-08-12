const test = document.getElementById('test'); // ELEMENT QUI SERT JUSTE DE TEST (à supprimer)
const modal = document.querySelector(".modal_window"); // Récup de la fenêtre Modale
const previews = document.querySelectorAll(".gallery img"); // Récup de l'ensemble des images de la gallerie (images en 640 x 426px)
const original = document.querySelector(".full-img"); // Récup de la div qui contiendra l'image haute résolution (1920 x 1280 px)
const caption = document.querySelector(".caption"); // Récup du texte sous l'image haute résolution

//console.log(previews)
//console.log(modal)

// Boucle sur l'ensemble des images de la gallerie (images en 640 x 426px)
previews.forEach(preview => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");
        // Changement dynamique de l'image et du texte
        const originalSrc = preview.getAttribute("data-original");
        //console.log(originalSrc); // Affiche le nom de l'attribut "data-original" dans la console (par ex : "baleine-640x426.jpg")
        original.src = `${originalSrc}`;
        //console.log(original.src);
        const altText = preview.alt;
        caption.textContent = altText;
        
    });
});


// Fermeture de la fenêtre Modale
modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal_window")){
        modal.classList.remove("open");
        original.classList.remove("open");
    }
    
});

