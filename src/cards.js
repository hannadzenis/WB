import { createElement } from "./createElement.js"

export const cardsBlock = document.getElementById('cards')

// temp object for debug createCard function:
const obj = {
    name: "name 1",
    price: 28,
    discountPrice: 60,
    image: "https://loremflickr.com/640/480/cats",
    idElem: "1"
}
// --- end temp object



function createCard({name, price, discountPrice, image, idElem}) {
    const cardItem = createElement('div', ['cards-item'], {id: idElem})

    const cardImage = createElement('img', ['item__image'], {})
    cardImage.src = image
        
    const cardInfo = createElement('div', ['cards-item-info'], {})
    
    const discPrice = createElement('span', ['item__discountPrice'], {})
    discPrice.innerHTML = discountPrice
    
    const pmainPice = createElement('span', ['item__price'])
    pmainPice.innerHTML = price
    
    const description = createElement('span', ['item__description'], {})
    description.innerHTML = name
    
    cardInfo.append(discPrice, pmainPice, description)
    cardItem.append(cardImage, cardInfo)
    cardsBlock.append(cardItem)
}

createCard(obj)
