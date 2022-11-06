// var btnOpen = document.querySelector('.open-modal-btn')
// var modal = document.querySelector('.modal')
// var iconClose = document.querySelector('.modal__header i')
// var btnClose = document.querySelector('.modal__footer button')

// function toggleModal(e) {
//     console.log(e.target)
//     modal.classList.toggle('hide');
// }

// btnOpen.addEventListener('click', toggleModal)
// btnClose.addEventListener('click', toggleModal)
// iconClose.addEventListener('click', toggleModal)
// modal.addEventListener('click', function(e) {
//     if (e.target == e.currentTarget) {
//         toggleModal();
//     }
// })


// 2 cach
var btnOpen = document.querySelector('.open-modal-btn');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal__header i');
var btnClose = document.querySelector('.modal__footer button');

document.addEventListener('DOMContentLoaded', function() {
    btnOpen.onclick = function() {
        modal.classList.remove('hide');
    }


    modal.onclick = function() {
        modal.classList.add('hide');

    }
    iconClose.onclick = function() {
        modal.classList.add('hide');

    }
    btnClose.onclick = function() {
        modal.classList.add('hide');

    }
})