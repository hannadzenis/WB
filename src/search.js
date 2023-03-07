import { cardsURL } from "./index.js"
import { createCard } from "./cards.js"

const searchElement = document.getElementById('search')

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
