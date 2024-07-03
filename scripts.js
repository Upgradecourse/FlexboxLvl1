document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  const justifyContentSelect = document.getElementById('justify-content');

  // Fonction pour mettre à jour les styles du container
  const updateFlexContainer = () => {
      container.style.justifyContent = justifyContentSelect.value;
  };

  // Écouteur d'événement pour la sélection justify-content
  justifyContentSelect.addEventListener('change', updateFlexContainer);

  // Initialiser le style du container au chargement de la page
  updateFlexContainer();
});
