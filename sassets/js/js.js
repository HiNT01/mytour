let buttonRequets = document.querySelector('.btn__request--yellow');
let modal = document.querySelector('.modal')

function showBuyTickets() {modal.classList.add('open')}
buttonRequets.addEventListener('click',showBuyTickets)

const closeBtn = document.querySelector('.modal__btn-close');
function cloesBuyTicket() {
    modal.classList.remove('open')
}
closeBtn.addEventListener('click',cloesBuyTicket);
modal.addEventListener('click',cloesBuyTicket)
const modalconatainer = document.querySelector('.js-modal-container')
modalconatainer.addEventListener('click',function(event) {
    event.stopPropagation()
})