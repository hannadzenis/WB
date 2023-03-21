import { renderCards } from "./search.js";

export const cardsURL = 'https://63fb14da2027a45d8d5fb8bf.mockapi.io/cards'

renderCards() // search cards

export function calcPrice (noDiscount, sale) {
    let resultPrice = noDiscount - (noDiscount * (sale/100));
    return resultPrice.toFixed(2);
}

const productGrid = document.querySelector('.products-list')

async function salesHits() {

    const response = await fetch(cardsURL)
    const cardsArr = await response.json()

    for (let i = 0; i < 10; i++) {
        let itemHTML = `
        <div id = "${cardsArr[i].idElem}" class="product-list__item">
    
            <div class="product-list__item__card">
    
                <div class="card__img">
                    <img src="${cardsArr[i].image}" alt="product">
                </div>
    
                <button class="card__view">Quick view</button>
    
                <div class="card__item-sale">
                    <p class="card__item-sale__text">-${cardsArr[i].sale}%</p>
                </div>
    
                <button data-cart class="card__item-add"></button>
            </div>
    
            <div class="product-list__item__info">
    
                <div class="info__price">
                    <p class="price_number">${calcPrice(cardsArr[i].price, cardsArr[i].sale)} PLN</p>
                    <p class="price_number_crossed">${cardsArr[i].price} PLN</p>
                </div>
    
                <div class="info__item-name">
                    <p class="name_text">${cardsArr[i].name}</p>
                </div>

                <div class="info__description">${cardsArr[i].description}</div>
    
                </div>
                </div>
                `
                productGrid.innerHTML += itemHTML;
            }

    /* POP-UP */
    const buttons = document.querySelectorAll('.card__view');
    const overlay = document.querySelector('.overlay');
    const popUpWindow = document.querySelector('.pop-up__content');
    // const descriptions = document.querySelectorAll('.info__description');
    let listItemID = 0;

    buttons.forEach( (button) => {
        button.addEventListener('click', (event) => {
            overlay.classList.toggle('overlay_active')
    
            let cardInfo = event.target.closest('.product-list__item').querySelector('.product-list__item__info')
            let cardPrice = cardInfo.querySelector('.price_number').innerText
            let cardPriceCrossed = cardInfo.querySelector('.price_number_crossed').innerText
            let cardTitle = cardInfo.querySelector('.info__item-name').innerText
            let cardDescription = cardInfo.querySelector('.info__description').innerText
            
            let cardImgSrc = event.target.closest('.product-list__item').querySelector('.card__img img').src
    
            let popUpTitle = popUpWindow.querySelector('.pop-up__content-info__title') 
            let popUpPrice = popUpWindow.querySelector('.info__price_pop-up__price_number')
            let popUpPriceCrossed = popUpWindow.querySelector('.info__price_pop-up__price_number_crossed')
            let popUpImg = popUpWindow.querySelector('.pop-up__content-image img')
            let popUpDescription = popUpWindow.querySelector('.pop-up__content-info__description')

            popUpTitle.innerText = cardTitle;
            popUpPrice.innerText = cardPrice;
            popUpPriceCrossed.innerText = cardPriceCrossed;
            popUpImg.src = cardImgSrc;
            popUpDescription.innerText = cardDescription;

            listItemID = event.target.closest('.product-list__item').id
            console.log(listItemID)
    
        })
    })
    
    /* Closing Pop-Up */
    const closePopUp = document.querySelector('.pop-up__content__close')
    closePopUp.addEventListener('click', () => {
        overlay.classList.toggle('overlay_active')
    })

    // const itemCards = document.querySelectorAll(".product-list__item")
    const buttonsAdd = document.querySelectorAll(".card__item-add");
    const popupAdd =  document.querySelectorAll(".pop-up__content-info__addToCart");
    console.log(buttonsAdd)

    const basketArray = JSON.parse(localStorage.getItem('basket')) || []
    let fullPrice = JSON.parse(localStorage.getItem('price'))*1 || 0

    buttonsAdd.forEach( (button, i) => {
        button.addEventListener('click', () => {

            basketArray.push(cardsArr[i]);

            fullPrice += calcPrice(cardsArr[i].price, cardsArr[i].sale)

            localStorage.setItem('price', JSON.stringify(fullPrice))
            localStorage.setItem('basket', JSON.stringify(basketArray))

            /* Animation for button after adding a product */
            button.classList.toggle('card__item-add--click'), setTimeout(function () {
                button.classList.remove("card__item-add--click");
            }, 800);
        })
    })


    popupAdd.forEach( (button, i) => {
        button.addEventListener('click', () => {

            basketArray.push(cardsArr[listItemID-1])

            fullPrice += calcPrice(cardsArr[listItemID-1].price, cardsArr[listItemID-1].sale)

            localStorage.setItem('price', JSON.stringify(fullPrice))
            localStorage.setItem('basket', JSON.stringify(basketArray))

            button.classList.toggle('pop-up__content-info__addToCart--click'), setTimeout(function () {
                button.classList.remove("pop-up__content-info__addToCart--click");
            }, 800);
        })
    })
}

salesHits()

