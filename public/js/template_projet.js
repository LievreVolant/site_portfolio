let params = new URLSearchParams(document.location.search);
let num_projet = params.get("projet");

let div_centre = document.getElementsByClassName('div-boite-milieu-ordi')[0];
let carrousel = document.getElementsByClassName('carousel')[0];
let div_duo_gauche = document.getElementsByClassName('div-boite-duo-ordi')[0];
let div_duo_droite = document.getElementsByClassName('div-boite-duo-ordi')[1];

fetch('public/js/projets.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Oh oh... soucis avec le serveur :/ -->' + response.statusText);
        }
        return response.json();
    }).then(contenu => {
        let projet = contenu[num_projet];
        console.log(projet);
    })
