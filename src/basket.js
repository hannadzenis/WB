const cartBtn = document.querySelector('.basket-area');
const modal = document.querySelector('.modal');
const clearBtn = document.querySelector('.clear-btn');
const cartItems = document.querySelector('.cart-items');
const totalAmount = document.querySelector('.cart-total');

// Переменная для хранения товаров в корзине
let basketArr = [];

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


function getLocalStorage() {
	return JSON.parse(localStorage.getItem('basket'))
}

// функция загрузки из localStorage
function getName() {
	if (localStorage.hasOwnProperty('basket')) {
		const arr = getLocalStorage()
        for(const item of arr){
          basketArr.push(item)
			showCart()
        }
	}
}
getName()

// Функция удаления ключа из localStorage
function clearLocalStorage(){
  localStorage.removeItem('basket')
}
