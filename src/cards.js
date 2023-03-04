import { createElement } from "./createElement.js"

export const cardsBlock = document.getElementById('cards')

let cardsArr = [{"name":"name 1","price":34,"discountPrice":22,"image":"https://loremflickr.com/640/480/cats","idElem":"1"},{"name":"name 2","price":21,"discountPrice":6,"image":"https://loremflickr.com/640/480/cats","idElem":"2"},{"name":"name 3","price":100,"discountPrice":54,"image":"https://loremflickr.com/640/480/cats","idElem":"3"},{"name":"name 4","price":68,"discountPrice":84,"image":"https://loremflickr.com/640/480/cats","idElem":"4"},{"name":"name 5","price":2,"discountPrice":93,"image":"https://loremflickr.com/640/480/cats","idElem":"5"},{"name":"name 6","price":3,"discountPrice":37,"image":"https://loremflickr.com/640/480/cats","idElem":"6"},{"name":"name 7","price":49,"discountPrice":93,"image":"https://loremflickr.com/640/480/cats","idElem":"7"},{"name":"name 8","price":91,"discountPrice":36,"image":"https://loremflickr.com/640/480/cats","idElem":"8"},{"name":"name 9","price":7,"discountPrice":92,"image":"https://loremflickr.com/640/480/cats","idElem":"9"},{"name":"name 10","price":53,"discountPrice":84,"image":"https://loremflickr.com/640/480/cats","idElem":"10"}]

console.log(cardsArr)

// const URL = 'https://63fb14da2027a45d8d5fb8bf.mockapi.io/cards'
// fetch(URL)
//     .then((response) => response.json())
//     // .then((json) => cardsArr.push(...json))
//     .then((cards) => console.log(cards))
//     // .then((cards) => cardsArr.push(...cards))

// temp object for debug createCard function:
// const obj = {
//     name: "name 1",
//     price: 28,
//     discountPrice: 60,
//     image: "https://loremflickr.com/640/480/cats",
//     idElem: "1"
// }
// --- end temp object



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

function renderCards() {
    for(let i = 0; i < cardsArr.length; i++) {
        createCard(cardsArr[i])
    }
}

renderCards()
