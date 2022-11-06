var upload = document.querySelector('#mypicture');
var preview = document.querySelector('.preview');
var error = document.querySelector('.error');

upload.addEventListener('click', function(e) {
    // chua noi dung anh hien thi
    var file = upload.files[0];
    if (!file)
        return
    if (!file.name.endsWith('.jpg')) {
        error.innerHTML = `Hinh anh phai thuoc dinh dang jpg`
    } else {
        error.innerHTML = ``;
    }
    // kich thuoc
    if (!file.size / (1024 * 1024) > 5) {
        error.innerHTML = `Chi duoc upload anh <5MB`
        return
    } else {
        error.innerHTML = ``;
    }
    var img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    preview.appendChild(img);
})