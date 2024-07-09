document.addEventListener('DOMContentLoaded', () => {
  const containerAlign = document.getElementById('container-align');
  const justifyContentAlign = document.getElementById('justify-content-align');
  const alignItemsAlign = document.getElementById('align-items-align');
  const flexDirectionAlign = document.getElementById('flex-direction-align');

  const containerWrap = document.getElementById('container-wrap');
  const justifyContentWrap = document.getElementById('justify-content-wrap');
  const flexWrapWrap = document.getElementById('flex-wrap-wrap');

  const updateFlexContainerAlign = () => {
      containerAlign.style.justifyContent = justifyContentAlign.value;
      containerAlign.style.alignItems = alignItemsAlign.value;
      containerAlign.style.flexDirection = flexDirectionAlign.value;
  };

  const updateFlexContainerWrap = () => {
      containerWrap.style.justifyContent = justifyContentWrap.value;
      containerWrap.style.flexWrap = flexWrapWrap.value;
  };

  justifyContentAlign.addEventListener('change', updateFlexContainerAlign);
  alignItemsAlign.addEventListener('change', updateFlexContainerAlign);
  flexDirectionAlign.addEventListener('change', updateFlexContainerAlign);

  justifyContentWrap.addEventListener('change', updateFlexContainerWrap);
  flexWrapWrap.addEventListener('change', updateFlexContainerWrap);

  // Initialiser les styles des conteneurs au chargement de la page
  updateFlexContainerAlign();
  updateFlexContainerWrap();
});
