const menuDEsktop = document.querySelector('.NavBarEmail'); //PAra eventgos sobre el email de navRight
const DesktopMenucontainer = document.querySelector('.DesktopMenucontainer')

const menuButtMobile = document.querySelector('.MenuIcon'); //PAra eventgos sobre el icono de menu en mobile
const MEnuMobileContainer = document.querySelector('.MobileMenu')

const ShoppingCarIconMenu = document.querySelector('.ShoppingCarNavBar'); //PAra eventgos sobre el carrito de compra
const ShoppingCar = document.querySelector('.ShoppingCar')
const shoppingCarCloseIcon = document.querySelector('.shoppingCarCloseIcon'); //Cerrar el porductDEtail

const CardsContainer =  document.querySelector(".CardsContainer") //PAra la lista de productos(InitialPage)
const productList = []; //Para la Lista de productos

const ProductDetail = document.querySelector('.ProductDetail'); //PAra para los detalles del producto
const productDetailcloseIcon = document.querySelector('.productDetailcloseIcon'); //Cerrar el porductDEtail

menuDEsktop.addEventListener('click',toggleDesktopMenu);
function toggleDesktopMenu(){

    ShoppingCar.classList.add('MenuInactive');
    ProductDetail.classList.add('MenuInactive');
    DesktopMenucontainer.classList.toggle('MenuInactive');

}

menuButtMobile.addEventListener('click',toggleMobileMenu);
function toggleMobileMenu(){
    ShoppingCar.classList.add('MenuInactive');
    ProductDetail.classList.add('MenuInactive');
    MEnuMobileContainer.classList.toggle('MenuInactive');
}

ShoppingCarIconMenu.addEventListener('click',toggleShoppingCar);
function toggleShoppingCar(){
    DesktopMenucontainer.classList.add('MenuInactive');
    MEnuMobileContainer.classList.add('MenuInactive');
    ProductDetail.classList.add('MenuInactive');
    ShoppingCar.classList.toggle('MenuInactive');
}
shoppingCarCloseIcon.addEventListener('click',CloseShoppingCar);
function CloseShoppingCar(){
    ShoppingCar.classList.add('MenuInactive');
}

function OpenProductDetail(){
    DesktopMenucontainer.classList.add('MenuInactive');
    MEnuMobileContainer.classList.add('MenuInactive');
    ShoppingCar.classList.add('MenuInactive');
    ProductDetail.classList.remove('MenuInactive');
}

productDetailcloseIcon.addEventListener('click',CloseProductDetail);
function CloseProductDetail(){
    ProductDetail.classList.add('MenuInactive');
}



/* Ahora mavos a crear un array de los diferentes productos */

function createListProducts(){

    productList.push({
        nameProduct : "Bicicleta",
        priceProduct: 400000,
        imageProduct:"./icons/Product11.png"
    });
    productList.push({
        nameProduct : "Teclado",
        priceProduct: 3000,
        imageProduct:"./icons/Product11.png"
    });

    productList.push({
        nameProduct : "PC",
        priceProduct: 60000,
        imageProduct:'./icons/Product11.png'
    });

    productList.push({
        nameProduct : "Carro",
        priceProduct: 6000000,
        imageProduct:'./icons/Product11.png'
    });
}
function RenderElemnts() {
    for (eachproduct of productList) {
        const maindiv = document.createElement('div')
        maindiv.classList.add("ProductCard");
    
            const subImg = document.createElement('img')
            subImg.classList.add("ProductIMG");
            subImg.setAttribute('src',eachproduct.imageProduct);
            subImg.setAttribute('alt','Product');
    
    
            const subDivProduct = document.createElement('div')
            subDivProduct.classList.add("ProductInfo");
    
                const DivOf_subDivProduct = document.createElement('div');
                    const ParagraphPrice = document.createElement('p');
                    ParagraphPrice.innerText = "$ " + eachproduct.priceProduct;
                    const ParagraphNAme = document.createElement('p');
                    ParagraphNAme.innerText = eachproduct.nameProduct;
                DivOf_subDivProduct.append(ParagraphNAme,ParagraphPrice);
    
                const FigureOf_SubDivProduct = document.createElement('figure');
                    const ImgAddToCar = document.createElement('img');
                    ImgAddToCar.setAttribute('src','./icons/AddLittleCar.png');
                    ImgAddToCar.setAttribute('alt',"IconAddLittleCar");
                FigureOf_SubDivProduct.append(ImgAddToCar);
    
            subDivProduct.append(DivOf_subDivProduct,FigureOf_SubDivProduct);
    
        maindiv.append(subImg,subDivProduct);

        subImg.addEventListener('click',OpenProductDetail); //Para Mirar los detalles del procucto
    
        CardsContainer.append(maindiv); //mando esto para .Cardcontainer del HTML
    
    }
}
createListProducts();
RenderElemnts() ;
//for (eachproduct in productList) { >> ME muestra el índise
/*Finaliza Ahora mavos a crear un array de los diferentes productos */

/* PAra mostrar los detalles de un producto */




/* Finaliza PAra mostrar los detalles de un producto */