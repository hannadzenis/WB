import { createElement } from "./createElement.js"

export const cardsBlock = document.getElementById('cards')

const URL = 'https://63fb14da2027a45d8d5fb8bf.mockapi.io/cards'
fetch(URL)
    .then((response) => response.json())
    .then((cardsArr) => {
        function renderCards() {
            for(let i = 0; i < cardsArr.length; i++) {
                createCard(cardsArr[i])
            }
        }
        return renderCards()
    })

function createCard({name, price, discountPrice, image, idElem}) {
    const cardItem = createElement('div', ['cards-item'], {id: idElem})

    const cardImage = createElement('img', ['item__image'], {})
    cardImage.src = image
        
    const cardInfo = createElement('div', ['cards-item-info'], {})
    
    const discPrice = createElement('span', ['item__discountPrice'], {})
    discPrice.innerHTML = discountPrice + ' $'
    
    const pmainPice = createElement('span', ['item__price'])
    pmainPice.innerHTML = price + ' $'
    
    const description = createElement('span', ['item__description'], {})
    description.innerHTML = name
    
    cardInfo.append(discPrice, pmainPice, description)
    cardItem.append(cardImage, cardInfo)
    cardsBlock.append(cardItem)
}
