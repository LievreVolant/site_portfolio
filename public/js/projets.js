let inner = document.getElementsByClassName('div-inner')[0];
let divFiltres = document.getElementsByClassName('div-filtres')[0];
let listeLangages = [];
let filtre = "aucun";

fetch('public/js/projets.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Oh oh... soucis avec le serveur :/ -->' + response.statusText);
        }
        return response.json();
    }).then(contenu => {
        let paire = 0;

        for (let i = 0; i < Object.keys(contenu).length; i++) {
            let projet = contenu[i];
            let divLarge = document.createElement("div");

            if (paire % 2 == 0) {
                divLarge.classList.add("div-boite-gauche-ordi");
            } else {
                divLarge.classList.add("div-boite-droite-ordi");
            }

            let img = document.createElement("img");
            img.classList.add("img-carre");
            img.src = projet.visuel;

            let divTexte = document.createElement("div");
            divTexte.classList.add("div-contenu");

            let divTexteTitre = document.createElement("div");
            divTexteTitre.classList.add("titre");
            let h2Titre = document.createElement("h2");
            h2Titre.append(projet.nom);
            divTexteTitre.append(h2Titre);

            let p = document.createElement("p");
            p.append(projet.resume);
            divTexte.append(divTexteTitre);
            divTexte.append(p);

            let divTags = document.createElement("div");
            divTags.classList.add("div-tags");
            for (let j = 0; j < Object.keys(projet.langages).length; j++) {
                if (!listeLangages.includes(projet.langages[j])) {
                    listeLangages.push(projet.langages[j]);
                }
                let tag = document.createElement("div");
                tag.append(projet.langages[j]);
                tag.classList.add("tag-langage");
                tag.classList.add("tag-" + projet.langages[j]);
                divTags.append(tag);
            }
            divTexte.append(divTags);

            if (paire % 2 == 0) {
                divLarge.append(img);
                divLarge.append(divTexte);
            } else {
                divLarge.append(divTexte);
                divLarge.append(img);
            }

            inner.append(divLarge);
            paire++;
        }

        for (let i = 0; i < listeLangages.length; i++) {
            let bouton = document.createElement("button");
            let langage = listeLangages[i];
            bouton.classList.add("bouton-filtre");
            bouton.append(langage);
            bouton.addEventListener("click", function (event) {
                if (filtre === "aucun" || filtre !== langage) {
                    filtre = langage;
                } else {
                    filtre = "aucun";
                }
                lancerAvecFiltre(filtre);
            })
            divFiltres.append(bouton);
        }

    }).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

function lancerAvecFiltre(filtre) {
    fetch('public/js/projets.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        }).then(contenu => {
            inner.innerHTML = "";
            let paire = 0;

            for (let i = 0; i < Object.keys(contenu).length; i++) {
                let projet = contenu[i];

                if (filtre == "aucun" || Object.values(projet.langages).includes(filtre)) {
                    let divLarge = document.createElement("div");

                    if (paire % 2 == 0) {
                        divLarge.classList.add("div-boite-gauche-ordi");
                    } else {
                        divLarge.classList.add("div-boite-droite-ordi");
                    }

                    let img = document.createElement("img");
                    img.classList.add("img-projet");
                    img.src = projet.visuel;

                    let divTexte = document.createElement("div");
                    divTexte.classList.add("div-contenu");

                    let divTexteTitre = document.createElement("div");
                    divTexteTitre.classList.add("titre");
                    let h2Titre = document.createElement("h2");
                    h2Titre.append(projet.nom);
                    divTexteTitre.append(h2Titre);

                    let p = document.createElement("p");
                    p.append(projet.resume);
                    divTexte.append(divTexteTitre);
                    divTexte.append(p);

                    let divTags = document.createElement("div");
                    divTags.classList.add("div-tags");
                    for (let j = 0; j < Object.keys(projet.langages).length; j++) {
                        let tag = document.createElement("div");
                        tag.append(projet.langages[j]);
                        tag.classList.add("tag-langage");
                        tag.classList.add("tag-" + projet.langages[j]);
                        divTags.append(tag);
                    }
                    divTexte.append(divTags);

                    if (paire % 2 == 0) {
                        divLarge.append(img);
                        divLarge.append(divTexte);
                    } else {
                        divLarge.append(divTexte);
                        divLarge.append(img);
                    }

                    inner.append(divLarge);
                    paire++;
                }
            }
        }).catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}