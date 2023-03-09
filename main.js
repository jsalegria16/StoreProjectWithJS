const menuDEsktop = document.querySelector('.NavBarEmail'); //PAra eventgos sobre el email de navRight
const DesktopMenucontainer = document.querySelector('.DesktopMenucontainer')

const menuButtMobile = document.querySelector('.MenuIcon'); //PAra eventgos sobre el icono de menu en mobile
const MEnuMobileContainer = document.querySelector('.MobileMenu')

const ClosemenuButtMobile = document.querySelector('.TittleMenuMobile'); //PAra eventgos sobre el icono de cerrar de menu en mobile



const ShoppingCarIconMenu = document.querySelector('.ShoppingCarNavBar'); //PAra eventgos sobre el carrito de compra
const ShoppingCar = document.querySelector('.ShoppingCar')
const shoppingCarCloseIcon = document.querySelector('.shoppingCarCloseIcon'); //Cerrar el porductDEtail

const CardsContainer =  document.querySelector(".CardsContainer") //PAra la lista de productos(InitialPage)
const productList = []; //Para la Lista de productos

const ProductDetail = document.querySelector('.ProductDetail'); //PAra para los detalles del producto
//const productDetailcloseIcon = document.querySelector('.productDetailcloseIcon'); //Cerrar el porductDEtail
/* Veo que const productDetailcloseIcon = document.querySelector('.productDetailcloseIcon'); //Cerrar el porductDEtail 
es incorrecto porque el codigo lo hago desde JS. 
Creo que tengo que agregar los enventos al momento de crera la img*/

menuDEsktop.addEventListener('click',toggleDesktopMenu);
function toggleDesktopMenu(){

    ShoppingCar.classList.add('MenuInactive');
    ProductDetail.classList.add('MenuInactive');
    DesktopMenucontainer.classList.toggle('MenuInactive');

}

ClosemenuButtMobile.addEventListener('click',toggleMobileMenu);
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

function OpenProductDetail(productoID){
    DesktopMenucontainer.classList.add('MenuInactive');
    MEnuMobileContainer.classList.add('MenuInactive');
    ShoppingCar.classList.add('MenuInactive');
    /* */
    //El productoID es el src de la img por ahora. con ese productId busco el objeto producto
    //y eso se lo paso a la siguiente funcion.
    const producto = productList.find(producto => producto.imageProduct === productoID);
    CrearDetallesProducto(producto.nameProduct, producto.priceProduct, producto.imageProduct, producto.descriptionProduct);
    /* */
    ProductDetail.classList.remove('MenuInactive');

}

function CrearDetallesProducto(nombre, precio, imagen, descripcion) {
        
 // Crear elementos HTML y asignarles atributos
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('TittleProductDetail');

    const titleImg = document.createElement('img');
        titleImg.setAttribute('src', './icons/cerrarPD.png');
        titleImg.setAttribute('alt', 'back');
        titleImg.classList.add('productDetailcloseIcon');

    titleImg.addEventListener('click',CloseProductDetail); // Para poder cerrar los detalles de cada producto
    
    const titleH1 = document.createElement('h1');
        titleH1.textContent = " ";

  titleDiv.appendChild(titleImg);
  titleDiv.appendChild(titleH1);

  const productImg = document.createElement('img');
    productImg.setAttribute('src', imagen);
    productImg.setAttribute('alt', 'Product');
    productImg.classList.add('ProductDetailImgProduct');

  const productInfoDiv = document.createElement('div');
    productInfoDiv.classList.add('ProductInfoProductDEtal');

    const priceP = document.createElement('p');
        priceP.textContent = precio;
        priceP.classList.add('ProductDetailPrice');

    const nameP = document.createElement('p');
        nameP.textContent = nombre;
        nameP.classList.add('ProductDetailName');

    const descriptionP = document.createElement('p');
        descriptionP.textContent = descripcion;
        descriptionP.classList.add('ProductDetailDescription');

    const addButton = document.createElement('button');
    addButton.classList.add('PrimaryButton');

        const addImg = document.createElement('img');
            addImg.setAttribute('src', '/icons/AddLittleCar.png');
            addImg.setAttribute('alt', 'AddToCar');
            addImg.classList.add('AddToCarButton');

    addButton.appendChild(addImg);
    addButton.appendChild(document.createTextNode('Add to car'));

  // Agregar elementos HTML al contenedor ProductDetail
  ProductDetail.innerHTML = '';
  ProductDetail.appendChild(titleDiv);
  ProductDetail.appendChild(productImg);
  ProductDetail.appendChild(productInfoDiv);
  productInfoDiv.appendChild(priceP);
  productInfoDiv.appendChild(nameP);
  productInfoDiv.appendChild(descriptionP);
  productInfoDiv.appendChild(addButton);

}

function CloseProductDetail(){
    ProductDetail.classList.add('MenuInactive');
}



/* Ahora mavos a crear un array de los diferentes productos */

function createListProducts(){

    productList.push({
        nameProduct : "Bicicleta",
        priceProduct: 400000,
        imageProduct:"https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descriptionProduct: 'Esta es una Bicicleta'
    });
    productList.push({
        nameProduct : "Teclado",
        priceProduct: 3000,
        imageProduct:"https://media.istockphoto.com/id/1283019397/photo/black-keyboard-with-red-lights-in-background-blur-of-a-very-executive-and-professional.jpg?b=1&s=612x612&w=0&k=20&c=jSH7vij7lIF3aW2gDw8fai9wL3qClyRVAlC___jp794=",
        descriptionProduct: 'Este es un Teclado'
    });

    productList.push({
        nameProduct : "Carro",
        priceProduct: 6000000,
        imageProduct:'https://images.pexels.com/photos/3849555/pexels-photo-3849555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        descriptionProduct: 'Este es un carro'
    });

    productList.push({
        nameProduct : "PC",
        priceProduct: 60000,
        imageProduct:'https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&w=600',
        descriptionProduct: 'Este es un PC'
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
                    ImgAddToCar.classList.add('AddToShoppingCarIcon');
                FigureOf_SubDivProduct.append(ImgAddToCar);
    
            subDivProduct.append(DivOf_subDivProduct,FigureOf_SubDivProduct);
    
        maindiv.append(subImg,subDivProduct);
        //subImg.addEventListener('click',OpenProductDetail); //Para Mirar los detalles del procucto
        subImg.addEventListener('click',function(){OpenProductDetail(subImg.getAttribute('src'))}); //Para Mirar los detalles del procucto
        CardsContainer.append(maindiv); //mando esto para .Cardcontainer del HTML
    
    }
}
createListProducts();
RenderElemnts() ;
//for (eachproduct in productList) { >> ME muestra el índise
/*Finaliza Ahora mavos a crear un array de los diferentes productos */

/* PAra mostrar los detalles de un producto */




/* Finaliza PAra mostrar los detalles de un producto */