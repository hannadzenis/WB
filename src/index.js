import { renderCards } from "./search.js";

export const cardsURL = 'https://63fb14da2027a45d8d5fb8bf.mockapi.io/cards'

renderCards()

const salesHits = [
    {
        id: 1,
        title: 'Foaming Showel Gel',
        descr: 'bla bla bla bla bla balbl lbafdba adfb adfb adfb adfb adfb',
        priceWithoutSale: 45,
        sale: 10,
        imgSrc: '../img/1.jpg'
    },
    {
        id: 2,
        title: 'Scrub Boom',
        descr: 'la la la la la bl afdba adfb adfb adfb adfb adfb',
        priceWithoutSale: 30,
        sale: 30,
        imgSrc: 'https://basket-01.wb.ru/vol138/part13856/13856867/images/big/1.jpg'
    },
    {
        id: 3,
        title: 'Water',
        descr: 'la la la la la bl afdba adfb adfb adfb adfb adfb',
        priceWithoutSale: 55,
        sale: 50,
        imgSrc: 'https://cdn.dribbble.com/users/1038196/screenshots/14608300/plastic-water-bottle-mockup_4x.jpg'
    },
    {
        id: 4,
        title: 'Fire',
        descr: 'la la la la la bl afdba adfb adfb adfb adfb adfb',
        priceWithoutSale: 46,
        sale: 8,
        imgSrc: 'https://techrocks.ru/wp-content/uploads/2021/06/fire-1105352_1280-min.jpg'
    },
    {
        id: 5,
        title: 'Earth',
        descr: 'la la la la la bl afdba adfb adfb adfb adfb adfb',
        priceWithoutSale: 45,
        sale: 15,
        imgSrc: 'https://nypost.com/wp-content/uploads/sites/2/2021/02/quiet-earth-2.jpg?quality=75&amp;strip=all&amp;w=1024'
    },
    {
        id: 6,
        title: 'Air',
        descr: 'la la la la la bl afdba adfb adfb adfb adfb adfb',
        priceWithoutSale: 45,
        sale: 3,
        imgSrc: 'https://cdn2.static1-sima-land.com/items/4590212/0/700-nw.jpg'
    }
]
function calcPrice (noDiscount, sale) {
    let resultPrice = noDiscount - (noDiscount * (sale/100));
    return resultPrice;
}

const productGrid = document.querySelector('.products-list')

salesHits.forEach((object) => {

    let itemHTML = `
    <div class="product-list__item">

        <div class="product-list__item__card">

            <div class="card__img">
                <img src="${object.imgSrc}" alt="product">
            </div>

            <button class="card__view">Quick view</button>

            <div class="card__item-sale">-${object.sale}%</div>

            <button class="card__item-add"></button>
        </div>

        <div class="product-list__item__info">

            <div class="info__price">
                <p class="price_number">${calcPrice(object.priceWithoutSale, object.sale)} PLN</p>
                <p class="price_number_crossed">${object.priceWithoutSale} PLN</p>
            </div>

            <div class="info__item-name">
                <p class="name_text">${object.title}</p>
            </div>

        </div>
    </div>
    `
    productGrid.innerHTML += itemHTML;
})
// console.log(productGrid)


/* POP-UP */
const buttons = document.querySelectorAll('.card__view');
const overlay = document.querySelector('.overlay');
//===========================
const popUpWindow = document.querySelector('.pop-up__content')
// console.log(popUpWindow)


buttons.forEach( (button) => {
    button.addEventListener('click', (event) => {
        overlay.classList.toggle('overlay_active')

        let cardInfo = event.target.closest('.product-list__item').querySelector('.product-list__item__info')
        let cardPrice = cardInfo.querySelector('.price_number').innerText
        let cardPriceCrossed = cardInfo.querySelector('.price_number_crossed').innerText
        let cardTitle = cardInfo.querySelector('.info__item-name').innerText
        
        let cardImgSrc = event.target.closest('.product-list__item').querySelector('.card__img img').src
        // console.log(cardImgSrc)

        let popUpTitle = popUpWindow.querySelector('.pop-up__content-info__title') 
        let popUpPrice = popUpWindow.querySelector('.info__price_pop-up__price_number')
        let popUpPriceCrossed = popUpWindow.querySelector('.info__price_pop-up__price_number_crossed')
        let popUpImg = popUpWindow.querySelector('.pop-up__content-image img')
        // console.dir(popUpImg)

        // console.log(cardPrice, cardTitle)
        popUpTitle.innerText = cardTitle;
        popUpPrice.innerText = cardPrice;
        popUpPriceCrossed.innerText = cardPriceCrossed;
        popUpImg.src = cardImgSrc;

    })
})

const closePopUp = document.querySelector('.pop-up__content__close')
closePopUp.addEventListener('click', () => {
    overlay.classList.toggle('overlay_active')
})




