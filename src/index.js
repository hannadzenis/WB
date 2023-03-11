const salesHits = [
    {
        id: 1,
        title: 'Foaming Showel Gel',
        descr: 'bla bla bla bla bla balbl lbafdba adfb adfb adfb adfb adfb',
        price: '38',
        imgSrc: '../img/1.jpg'
    },
    {
        id: 2,
        title: 'Scrub Boom',
        descr: 'la la la la la bl afdba adfb adfb adfb adfb adfb',
        price: '15',
        imgSrc: 'https://basket-01.wb.ru/vol138/part13856/13856867/images/big/1.jpg'
    },
    {
        id: 3,
        title: 'Water',
        descr: 'la la la la la bl afdba adfb adfb adfb adfb adfb',
        price: '50',
        imgSrc: 'https://cdn.dribbble.com/users/1038196/screenshots/14608300/plastic-water-bottle-mockup_4x.jpg'
    },
    {
        id: 4,
        title: 'Fire',
        descr: 'la la la la la bl afdba adfb adfb adfb adfb adfb',
        price: '100',
        imgSrc: 'https://techrocks.ru/wp-content/uploads/2021/06/fire-1105352_1280-min.jpg'
    },
    {
        id: 5,
        title: 'Earth',
        descr: 'la la la la la bl afdba adfb adfb adfb adfb adfb',
        price: '200',
        imgSrc: 'https://nypost.com/wp-content/uploads/sites/2/2021/02/quiet-earth-2.jpg?quality=75&amp;strip=all&amp;w=1024'
    },
    {
        id: 6,
        title: 'Air',
        descr: 'la la la la la bl afdba adfb adfb adfb adfb adfb',
        price: '500',
        imgSrc: 'https://cdn2.static1-sima-land.com/items/4590212/0/700-nw.jpg'
    }
]

const productGrid = document.querySelector('.products-list')

salesHits.forEach((object) => {

    let itemHTML = `
    <div class="product-list__item">

        <div class="product-list__item__card">

            <div class="card__img">
                <img src="${object.imgSrc}" alt="product">
            </div>

            <button class="card__view">Quick view</button>

            <div class="card__item-sale">-10%</div>

            <button class="card__item-add"></button>
        </div>

        <div class="product-list__item__info">

            <div class="info__price">
                <p class="price_number">${object.price} PLN</p>
            </div>

            <div class="info__item-name">
                <p class="name_text">${object.title}</p>
            </div>

        </div>
    </div>
    `
    productGrid.innerHTML += itemHTML;
})
// console.log(productGrid)


/* POP-UP */
const buttons = document.querySelectorAll('.card__view');
const overlay = document.querySelector('.overlay');
//===========================
const popUpWindow = document.querySelector('.pop-up__content')
// console.log(popUpWindow)


buttons.forEach( (button) => {
    button.addEventListener('click', (event) => {
        overlay.classList.toggle('overlay_active')

        let cardInfo = event.target.closest('.product-list__item').querySelector('.product-list__item__info')
        let cardPrice = cardInfo.querySelector('.info__price').innerText
        let cardTitle = cardInfo.querySelector('.info__item-name').innerText
        
        let cardImgSrc = event.target.closest('.product-list__item').querySelector('.card__img img').src
        // console.log(cardImgSrc)

        let popUpTitle = popUpWindow.querySelector('.pop-up__content-info__title') 
        let popUpPrice = popUpWindow.querySelector('.info__price_pop-up')
        let popUpImg = popUpWindow.querySelector('.pop-up__content-image img')
        // console.dir(popUpImg)

        // console.log(cardPrice, cardTitle)
        popUpTitle.innerText = cardTitle;
        popUpPrice.innerText = cardPrice;
        popUpImg.src = cardImgSrc;

    })
})

const closePopUp = document.querySelector('.pop-up__content__close')
closePopUp.addEventListener('click', () => {
    overlay.classList.toggle('overlay_active')
})



