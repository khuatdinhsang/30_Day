// var btnSearch = document.querySelector('.search-box__btn')

// btnSearch.addEventListener('click', function() {
//     this.parentElement.classList.toggle('open')
//     this.previousElementSibling.focus()
// })

var btn = document.querySelector('.search-box__btn');
console.log(btn);
btn.addEventListener('click', function() {
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
})