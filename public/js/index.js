let listli_carousel = document.querySelectorAll('ul#carousel-carre-list li')

fetch('public/js/projets.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Oh oh... soucis avec le serveur :/ -->' + response.statusText);
        }
        return response.json();
    }).then(contenu => {
        for(let i=0; i<=3; i++) {
            let projet = contenu[i];
            let li_carousel = listli_carousel[i]
            li_carousel.querySelector('h3').innerHTML = projet.nom
            li_carousel.style.backgroundImage =projet.visuel;
            li_carousel.querySelector('a').setAttribute("href", "template_projet.html?projet="+i)
        }
    })