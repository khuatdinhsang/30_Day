let isShow = false;
let actSubMenu = document.querySelectorAll('.act-sub-menu');
let subMenu = document.querySelectorAll('.sub-menu');
for (let i = 0; i < actSubMenu.length; i++) {
    actSubMenu[i].onclick = function(e) {
        for (let j = 0; j < subMenu.length; j++) {
            subMenu[j].style.display = 'none';
        }
        e.target.nextElementSibling.style.display = "block";

    }

}