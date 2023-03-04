const menuDEsktop = document.querySelector('.NavBarEmail'); //PAra eventgos sobre el email de navRight
const DesktopMenucontainer = document.querySelector('.DesktopMenucontainer')

const menuButtMobile = document.querySelector('.MenuIcon'); //PAra eventgos sobre el icono de menu en mobile
const MEnuMobileContainer = document.querySelector('.MobileMenu')


menuDEsktop.addEventListener('click',toggleDesktopMenu);
function toggleDesktopMenu(){
    DesktopMenucontainer.classList.toggle('MenuInactive');
}

menuButtMobile.addEventListener('click',toggleMobileMenu);
function toggleMobileMenu(){
    MEnuMobileContainer.classList.toggle('MenuInactive');
}