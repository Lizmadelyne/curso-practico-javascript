const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu');
const aside= document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');


}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive')
    if(!isAsideClosed) {
        aside.classList.add('inactive');

    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed=desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');

    }
    aside.classList.toggle('inactive');
    
  
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

}

const productList = [];
productList.push({
    name:'bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600 "="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600 "',
    
    });

    productList.push({
        name:'pantalla',
        price:300,
        image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600 "="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600 "',
        
        });
        productList.push({
            name:'celular',
            price:200,
            image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600 "="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600 "',
            
            });
 
// esto ess maaquetar desde javascript  essto es lo mismo de htmll peo ddesde aqui
function renderProducts(list){
    for (product of list){
        const productCard =  document.createElement('div'); //crea el div en html
        productCard.classList.add('product-card');
    

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p'); //crea el p
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.append(productCard);
    }
}
renderProducts(productList);
        
