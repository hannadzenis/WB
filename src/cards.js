import { createElement } from "./createElement.js"
import { calcPrice, setLocalStorage } from "./index.js"

const cardsBlock = document.getElementById('cards')

export function createCard({name, price, image, sale, idElem, description}) {

    const cardItem = createElement('div', ['cards-item'], {id: idElem})
        const itemContent = createElement('div', ['item-content'], {})
            const cardImage = createElement('img', ['item__image'], {})
            cardImage.src = image
            const itemInfo = createElement('div', ['item-info'], {})
                const itemName = createElement('div', ['item__name'], {})
                itemName.innerHTML = name
                const itemDescription = createElement('div', ['item__descriptions'], {})
                itemDescription.innerHTML = description
            itemInfo.append(itemName, itemDescription)
        itemContent.append(cardImage, itemInfo)
        
        const itemFooter = createElement('div', ['item-footer'], {})
            const itemAddInBasket = createElement('span', ['item__byu'], {})
            itemAddInBasket.innerHTML = 'Add to basket'

            const discountPrice = createElement('span', ['item__discountPrice'], {})
            discountPrice.innerHTML = calcPrice(price, sale) + ' PLN'

            const itemNormalPrice = createElement('span', ['item__normalPrice'], {})
            itemNormalPrice.innerHTML = price +' PLN'

        itemFooter.addEventListener('click', () => {
            setLocalStorage(idElem)
        })

        itemFooter.append(itemAddInBasket, discountPrice, itemNormalPrice)
    
    cardItem.append(itemContent, itemFooter)
    cardsBlock.append(cardItem)
}
