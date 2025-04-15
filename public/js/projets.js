let inner = document.getElementsByClassName('div-inner')[0];
let listeLangages = [];

fetch('public/js/projets.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(contenu => {
        let paire = 0;

        for (let i = 0; i <= Object.keys(contenu).length; i++) {
            let divLarge = document.createElement("div");

            if (paire%2 == 0) {
                divLarge.classList.add("div-boite-gauche-ordi");
            } else {
                divLarge.classList.add("div-boite-droite-ordi");
            }

            let img = document.createElement("img");
            img.classList.add("img-projet");
            img.src = contenu[i].visuel;

            let divTexte = document.createElement("div");
            divTexte.classList.add("div-contenu");

            let divTexteTitre = document.createElement("div");
            divTexteTitre.classList.add("titre");
            let h2Titre = document.createElement("h2");
            h2Titre.append(contenu[i].nom);
            divTexteTitre.append(h2Titre);

            let p = document.createElement("p");
            p.append(contenu[i].desc);
            divTexte.append(divTexteTitre);
            divTexte.append(p);

            if (paire%2 == 0) {
                divLarge.append(img);
                divLarge.append(divTexte);
            } else {
                divLarge.append(divTexte);
                divLarge.append(img);
            }

            inner.append(divLarge);
            paire++;
        };
    })


    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });