F // var images = document.querySelectorAll('.image img')
// var prev = document.querySelector('.prev')
// var next = document.querySelector('.next')
// var close = document.querySelector('.close')
// var galleryImg = document.querySelector('.gallery__iner img')
// var gallery = document.querySelector('.gallery')
// var currentIndex = 0;

// function showgalleryShow() {
//     if (currentIndex == 0) {
//         prev.classList.add('hide')
//     } else {
//         prev.classList.remove('hide')
//     }
//     if (currentIndex == images.length - 1) {
//         next.classList.add('hide')
//     } else {
//         next.classList.remove('hide')
//     }
//     galleryImg.src = images[currentIndex].src
//     gallery.classList.add('show')
// }
// images.forEach((item, index) => {
//     item.addEventListener('click', function() {
//         currentIndex = index;
//         gallery.classList.add('show')
//         showgalleryShow
//     })
// })
// close.addEventListener('click', function() {
//     gallery.classList.remove('show')
// })

// document.addEventListener('keydown', function(e) {
//     if (e.keyCode == 27) {
//         gallery.classList.remove('show')
//     }
// })

// prev.addEventListener('click', function() {
//     if (currentIndex > 0) {
//         currentIndex--
//         showgalleryShow()
//     }
// })
// next.addEventListener('click', function() {
//     if (currentIndex < images.length - 1) {
//         currentIndex++
//         showgalleryShow()
//     }

// })


var cunrentIndex = 0;
var imgs = document.querySelectorAll('.image img');
var iconClose = document.querySelector('.close');
var gallery = document.querySelector('.gallery');
var gallery_img = document.querySelector('.gallery__iner img');
var prev = document.querySelector('.prev i');
console.log(prev)
var next = document.querySelector('.next i');


function show() {
    if (cunrentIndex == 0) {
        prev.classList.add('hide');
    } else {
        prev.classList.remove('hide');
    }
    if (cunrentIndex == imgs.length - 1) {
        next.classList.add('hide');
    } else {
        next.classList.remove('hide');
    }
    gallery_img.src = imgs[cunrentIndex].src;
    gallery.classList.add('show');

}
imgs.forEach(function(item, index) {
    item.onclick = function() {
        cunrentIndex = index;
        show();

    }
});

iconClose.onclick = function() {
    gallery.classList.remove('show');
}
document.addEventListener('keydown', function(e) {
    if (e.which == 27) {
        gallery.classList.remove('show');

    }
})
prev.onclick = function() {
    if (cunrentIndex > 0) {
        cunrentIndex--;
        show();
    }
}
next.onclick = function() {
    if (cunrentIndex < imgs.length - 1) {
        cunrentIndex++;
        show();
    }
}