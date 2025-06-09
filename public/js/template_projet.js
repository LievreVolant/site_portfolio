let params = new URLSearchParams(document.location.search);
let num_projet = params.get("projet");

let nom_projet = document.getElementById('nom_projet');
let desc_projet = document.getElementById('desc_projet');
let img_projet = document.getElementById('img_projet');
let listli_carousel = document.querySelectorAll('ul#carousel-rectangle-list li')
let contribution = document.getElementById('contribution_projet');
let liens = document.getElementById('liens_projet');

fetch('public/js/projets.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Oh oh... soucis avec le serveur :/ -->' + response.statusText);
        }
        return response.json();
    }).then(contenu => {
        let projet = contenu[num_projet];

        nom_projet.innerHTML = projet.nom;
        img_projet.setAttribute('src', projet.visuel);
        desc_projet.innerHTML = projet.desc;
        contribution.innerHTML = projet.contribution;

        for (let i = 0; i < 5; i++) {
            let image_projet = projet.images[i];
            let li_carousel = listli_carousel[i];
            let footer_carousel = li_carousel.querySelector('.carousel-rectangle-item-footer');
            li_carousel.style.backgroundImage = "url("+image_projet.lien+")";
            footer_carousel.innerHTML = image_projet.nom;
        }
        
        for (let i = 0; i < Object.keys(projet.liens).length; i++) {
            let lien = document.createElement('a');
            lien.setAttribute('href', projet.liens[i].lien);
            let img = document.createElement('img');
            img.setAttribute('src', "public/images/lien.png")
            img.title = projet.liens[i].nom
            img.classList.add("img-rond-moyen")
            lien.append(img);
            liens.append(lien);
        }
    })
