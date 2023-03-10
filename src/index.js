/* POP-UP */
const buttons = document.querySelectorAll('.card__view');
const overlay = document.querySelector('.overlay');
const closePopUp = document.querySelector('.pop-up__content__close')

buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        overlay.classList.toggle('overlay_active')
    })
})

closePopUp.addEventListener('click', () => {
    overlay.classList.toggle('overlay_active')
})


