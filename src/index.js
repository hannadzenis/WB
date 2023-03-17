import { renderCards } from "./search.js";

export const cardsURL = 'https://63fb14da2027a45d8d5fb8bf.mockapi.io/cards'

renderCards()

function calcPrice (noDiscount, sale) {
    let resultPrice = noDiscount - (noDiscount * (sale/100));
    return resultPrice;
}

const productGrid = document.querySelector('.products-list')

async function salesHits() {
    const response = await fetch(cardsURL)
    const cardsArr = await response.json()

    for (let i = 0; i < 10; i++) {
        let itemHTML = `
        <div class="product-list__item">
    
            <div class="product-list__item__card">
    
                <div class="card__img">
                    <img src="${cardsArr[i].image}" alt="product">
                </div>
    
                <button class="card__view">Quick view</button>
    
                <div class="card__item-sale">
                    <p class="card__item-sale__text">-${cardsArr[i].sale}%</p>
                </div>
    
                <button class="card__item-add"></button>
            </div>
    
            <div class="product-list__item__info">
    
                <div class="info__price">
                    <p class="price_number">${calcPrice(cardsArr[i].price, cardsArr[i].sale)} PLN</p>
                    <p class="price_number_crossed">${cardsArr[i].price} PLN</p>
                </div>
    
                <div class="info__item-name">
                    <p class="name_text">${cardsArr[i].name}</p>
                </div>
    
                </div>
                </div>
                `
                productGrid.innerHTML += itemHTML;
            }
    /* POP-UP */
    const buttons = document.querySelectorAll('.card__view');
    const overlay = document.querySelector('.overlay');
    const popUpWindow = document.querySelector('.pop-up__content')
    
    buttons.forEach( (button) => {
        button.addEventListener('click', (event) => {
            overlay.classList.toggle('overlay_active')
    
            let cardInfo = event.target.closest('.product-list__item').querySelector('.product-list__item__info')
            let cardPrice = cardInfo.querySelector('.price_number').innerText
            let cardPriceCrossed = cardInfo.querySelector('.price_number_crossed').innerText
            let cardTitle = cardInfo.querySelector('.info__item-name').innerText
            
            let cardImgSrc = event.target.closest('.product-list__item').querySelector('.card__img img').src
    
            let popUpTitle = popUpWindow.querySelector('.pop-up__content-info__title') 
            let popUpPrice = popUpWindow.querySelector('.info__price_pop-up__price_number')
            let popUpPriceCrossed = popUpWindow.querySelector('.info__price_pop-up__price_number_crossed')
            let popUpImg = popUpWindow.querySelector('.pop-up__content-image img')

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
}

salesHits()





