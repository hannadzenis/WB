import { createElement } from "./createElement.js"
import { cardsURL } from "./index.js"

const searchElement = document.getElementById('search')
const cardsBlock = document.getElementById('cards')

export async function loadCards() {
    const response = await fetch(cardsURL)
    const cardsArr = await response.json()
    function renderCards() {
        searchElement.onchange = () => {
            const regex = new RegExp(searchElement.value) // regex = /value from input/
            for(let i = 0; i < cardsArr.length; i++) {
                if (regex.test(cardsArr[i].name.toLowerCase())) {
                    createCard(cardsArr[i])
                }
            }
        }
    }
    return renderCards()
}

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
