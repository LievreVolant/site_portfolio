fetch('public/js/projets.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(contenu => {
        console.log(contenu);
        
    
    
    
    })


    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });