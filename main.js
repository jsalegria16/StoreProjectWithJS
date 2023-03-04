const menuDEsktop = document.querySelector('.NavBarEmail'); //PAra eventgos sobre el email de navRight
const DesktopMenucontainer = document.querySelector('.DesktopMenucontainer')

const menuButtMobile = document.querySelector('.MenuIcon'); //PAra eventgos sobre el icono de menu en mobile
const MEnuMobileContainer = document.querySelector('.MobileMenu')


const ShoppingCarIconMenu = document.querySelector('.ShoppingCarNavBar'); //PAra eventgos sobre el carrito de compra
const ShoppingCar = document.querySelector('.ShoppingCar')

menuDEsktop.addEventListener('click',toggleDesktopMenu);
function toggleDesktopMenu(){

    ShoppingCar.classList.add('MenuInactive');
    DesktopMenucontainer.classList.toggle('MenuInactive');

}

menuButtMobile.addEventListener('click',toggleMobileMenu);
function toggleMobileMenu(){
    ShoppingCar.classList.add('MenuInactive');
    MEnuMobileContainer.classList.toggle('MenuInactive');
}

ShoppingCarIconMenu.addEventListener('click',toggleShoppingCar);
function toggleShoppingCar(){
    DesktopMenucontainer.classList.add('MenuInactive');
    MEnuMobileContainer.classList.add('MenuInactive');
    ShoppingCar.classList.toggle('MenuInactive');
}