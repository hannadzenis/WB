import { calcPrice } from "./index.js"

const cartBtn = document.querySelector('.basket-area');
const modal = document.querySelector('.modal');
const clearBtn = document.querySelector('.clear-btn');
const cartItems = document.querySelector('.cart-items');
const totalAmount = document.querySelector('.cart-total');

// Переменная для хранения товаров в корзине
// let basketArr = JSON.parse(localStorage.getItem('basket')) || [];
let basketArr = []

// Функция для показа корзины
function showCart() {
//   // Очищаем список товаров
  cartItems.innerHTML = '';
  totalAmount.innerHTML = '';

  // Добавляем каждый товар в список
  for (let i = 0; i < basketArr.length; i++) {
    const item = basketArr[i];
    const li = document.createElement('li');
    const spanItemName = document.createElement('span')
    spanItemName.innerHTML = `${item.name}`
    const spanItemPrice = document.createElement('span')
    spanItemPrice.innerHTML = `${calcPrice(item.price, item.sale)} PLN`
    li.appendChild(spanItemName)
    li.appendChild(spanItemPrice)
    cartItems.appendChild(li);
  }
  if(getLocalStorage('price') !== null){
    totalAmount.innerHTML = `Total: ${getPrice()} PLN`;
}

// Показываем модальное окно при нажатии на кнопку Корзина
cartBtn.addEventListener('click', function() {
  // getLocalStorage('basket')
  basketArr = []
  getBasket()
  modal.style.display = 'block';
});

// Очищаем корзину при нажатии на кнопку Очистить корзину
clearBtn.addEventListener('click', function() {
  basketArr = [];
  clearLocalStorage();
  showCart();
});

// Закрытие модального окна при клике вне блока корзины
document.addEventListener('click', function(event) {
    if (event.target.closest('.modal-content') === null && event.target.closest('.basket-area') === null) {
        modal.style.display = 'none';
    }
});

function getLocalStorage(nameKey) {
	return JSON.parse(localStorage.getItem(nameKey))
}

// функция загрузки из localStorage basket
function getBasket() {
	if (localStorage.hasOwnProperty('basket')) {
		const arr = getLocalStorage('basket')
    for(const item of arr){
      basketArr.push(item)
      showCart()
    }
	}
}



function getPrice(){
  return getLocalStorage('price')
}

// Функция удаления ключа из localStorage
function clearLocalStorage(){
  localStorage.clear()
}
