const menuDEsktop = document.querySelector('.NavBarEmail'); //PAra eventgos sobre el email de navRight
const DesktopMenucontainer = document.querySelector('.DesktopMenucontainer')



menuDEsktop.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu(){

    DesktopMenucontainer.classList.toggle('MenuInactive');


}