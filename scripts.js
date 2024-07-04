document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  const justifyContentSelect = document.getElementById('justify-content');
  const alignItemsSelect = document.getElementById('align-items');
  const flexDirectionSelect = document.getElementById('flex-direction');
  const flexWrapSelect = document.getElementById('flex-wrap');

  // Fonction pour mettre à jour les styles du container
  const updateFlexContainer = () => {
      container.style.justifyContent = justifyContentSelect.value;
      container.style.alignItems = alignItemsSelect.value;
      container.style.flexDirection = flexDirectionSelect.value;
      container.style.flexWrap = flexWrapSelect.value;
  };

  // Écouteurs d'événements pour les sélections
  justifyContentSelect.addEventListener('change', updateFlexContainer);
  alignItemsSelect.addEventListener('change', updateFlexContainer);
  flexDirectionSelect.addEventListener('change', updateFlexContainer);
  flexWrapSelect.addEventListener('change', updateFlexContainer);

  // Initialiser le style du container au chargement de la page
  updateFlexContainer();
});
