const cartBtn = document.querySelector('.basket-area');
const modal = document.querySelector('.modal');
const clearBtn = document.querySelector('.clear-btn');
const cartItems = document.querySelector('.cart-items');
const totalAmount = document.querySelector('.cart-total');

// Переменная для хранения товаров в корзине
let cart = [];

// Функция для показа корзины
function showCart() {
//   // Очищаем список товаров
  cartItems.innerHTML = '';
  
  // Добавляем каждый товар в список
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const li = document.createElement('li');
    const spanItemName = document.createElement('span')
    spanItemName.innerHTML = `${item.name}`
    const spanItemPrice = document.createElement('span')
    spanItemPrice.innerHTML = `${item.discountPrice}$`
    li.appendChild(spanItemName)
    li.appendChild(spanItemPrice)
    cartItems.appendChild(li);
  }
  
  // Показываем общую сумму стоимости товаров
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    total += item.discountPrice;
  }
  totalAmount.innerHTML = `Итого: ${total}$`;
}

// Показываем модальное окно при нажатии на кнопку Корзина
cartBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Очищаем корзину при нажатии на кнопку Очистить корзину
clearBtn.addEventListener('click', function() {
  cart = [];
  showCart();
});

// Закрытие модального окна при клике вне блока корзины
document.addEventListener('click', function(event) {
    if (event.target.closest('.modal-content') === null && event.target.closest('.basket-area') === null) {
        modal.style.display = 'none';
    }
});


function getLocalStorage() {
	return JSON.parse(localStorage.getItem('testArr'))

  // basket
}

// функция загрузки из localStorage
function getName() {
	if (localStorage.hasOwnProperty('testArr')) {
		const arr = getLocalStorage()
        for(const item of arr){
            cart.push(item)
			showCart()
        }
	}
}
getName()

const testArr = [{
    id: 1,
    name: "Штаны",
    price: 500,
    discountPrice: 400,
    description: "lorem.text"
},{
    id: 2,
    name: "Майка",
    price: 400,
    discountPrice: 300,
    description: "lorem.text"
},{
    id: 3,
    name: "Куртка",
    price: 1000,
    discountPrice: 900,
    description: "lorem.text"
},{
    id: 4,
    name: "Туфли",
    price: 700,
    discountPrice: 600,
    description: "lorem.text"
},{
    id: 5,
    name: "Носки",
    price: 100,
    discountPrice: 90,
    description: "lorem.text"
}]
function setLocalStor (testArr) {
    localStorage.setItem("testArr", JSON.stringify(testArr))
}
setLocalStor(testArr)