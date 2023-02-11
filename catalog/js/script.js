addEventListener("load", () => {
  const swicthBtn = document.querySelector('.switch-btn');
  const switchList = document.querySelector('.switch-list-icon');
  const switchMap = document.querySelector('.switch-map-icon');
  const mapPath = document.querySelector('.map-path');
  const listPath = document.querySelector('.list-path');

  switchList.addEventListener('click', (e) => {
    swicthBtn.classList.remove('switch-map');
    swicthBtn.classList.add('switch-list');
    mapPath.setAttribute('fill', '#F7FBFB');
    listPath.setAttribute('stroke', '#F19953');
  });

  switchMap.addEventListener('click', (e) => {
    swicthBtn.classList.remove('switch-list');
    swicthBtn.classList.add('switch-map');
    mapPath.setAttribute('fill', '#F19953');
    listPath.setAttribute('stroke', '#F7FBFB');
  });
});