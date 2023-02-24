### structure HTML:
|Block №|Имя блока| Компоненты | Реализация|
|-------|---------|-------------------------------------|-----|
| 1     | header  | кнопка главной страницы             | ссылка на index.html
|       |         |поисковая строка                     |JS. результаты поиска отображать в блоке hits, путём сортировки по совпадению имён
|       |         |кнопка "Корзина"                     | JS. всплывающее модальное окно с отрисовкой данных из Local Storage
|2      |main     |slider                               | JS. думаю, лучше использовать готовую библиотеку. содержание слайдера из картинок. при нажатии на определённую картинку всплывает модальное окно с товаром (по принципу блока № 4)
|       |         |hits                                 | отображать весь список товаров с горизонтальным скроллом
|3      |basket   |список товаров, добавленных в корзину| отобажение данных из Local Storage 
|4      |quickView|                                     |модальное окно с быстрым просмотром товара: имя, изображение, описание, цена, "кнопка добавить в корзину"

### structure JS:
*содержание ниже как предложение. структура, названия элементов/объектов/функций могут быть иными*
- все товары представлены как объект. структура объекта:
```js
{
    name: "string",
    id: Number,
    price: Number,
    image: url or string
}
```
---
&#9072; работа с картинками в объекте:
https://stackoverflow.com/questions/38003222/javascript-adding-images-to-objects-via-object-literal-notation

---
- все товары хранятся в массиве. пример структуры:
```js
const cards = [{name: 't-shirt_one', id: 1, price: 100, image: '/src/img/t-shirt_1.png'}, 
{name: 'trousers', id: 2, price: 200, image: '/src/img/trousers.png'}]
```

LocalStorage хранит 2 ключа: 
1. goods (все товары)
2. fullPrice (полная цена)

примерные данные для LocalStorage: 
```js
const arrayStorage = [{name: 'string', price: Number}, {name: 'string', price: Number}]
const fullPrice = sumPrice()
```
где `sumPrice()`  суммирует все значения `Number` ключа `price`

- по нажатию на кнопку `"добавить товар в корзину"` добавляем элемент в массив `arrayStorage`
```js
buttonAdd.onclick = () => {
    arrayStorage.push({name: 'thisName', id: 'thisId'})
    setLocalStorage()
}
```

- по нажатию кнопки "Очистить корзину" вызывается `localStorage.clear()`

- модальное окно корзины появляется по клику на кнопку "Корзина". функционал отрисовки с помощью js, по принципу домашки из todo

```js
buttonBasket.onclick = () => {
    getLocalStorage()
}
```

- реализация слайдера, возможно, с помощью сторонней библиотеки
