let params = new URLSearchParams(document.location.search);
let num_projet = params.get("projet");

let nom_projet = document.getElementById('nom_projet');
let desc_projet = document.getElementById('desc_projet');
let img_projet = document.getElementById('img_projet');
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
        
        for (let i = 0; i < Object.keys(projet.fichiers).length; i++) {
            let lien = document.createElement('a');
            lien.setAttribute('href', "");
            let img = document.createElement('img');
            img.setAttribute('src', "public/images/placeholder.png")
            img.classList.add("img-rond-moyen")
            lien.append(img);
            liens.append(lien);
        }
    })
