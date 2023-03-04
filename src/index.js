import { cardsBlock } from "./cards.js";

const rootElement = document.getElementById('root');
const wrapperElement = document.getElementById('wrapper')

rootElement.append(wrapperElement)

wrapperElement.append(cardsBlock)
