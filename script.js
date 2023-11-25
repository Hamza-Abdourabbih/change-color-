document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les éléments du DOM
    const backgroundColorInput = document.getElementById('background-color');
    const textColorInput = document.getElementById('text-color');
    const titleElement = document.getElementById('title');

    // Ajouter des écouteurs d'événements pour les changements de couleur
    backgroundColorInput.addEventListener('input', function() {
        document.body.style.backgroundColor = backgroundColorInput.value;
    });

    textColorInput.addEventListener('input', function() {
        titleElement.style.color = textColorInput.value;
    });
});
