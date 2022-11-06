var btnSuccess = document.querySelector('.control .success');
var btnWarning = document.querySelector('.control .warning');
var btnError = document.querySelector('.control .error');

btnSuccess.addEventListener('click', () => {
    createToast('success');

});
btnWarning.addEventListener('click', () => {
    createToast('warning');

});
btnError.addEventListener('click', () => {
    createToast('error');

});


function createToast(status) {
    let templateInner = `
    <i class="fa-solid fa-triangle-exclamation"></i>
            <span class="message">This is a Success message</span>`

    switch (status) {
        case 'success':
            templateInner = ` <i class="fa-solid fa-circle-check"></i>
            <span class="message">This is a Success message</span> `
            break;
        case 'error':
            templateInner = `
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span class="message">This is a Success message</span>`
            break;
        case 'warning':
            templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">This is a Warning message</span>`
            break;
    }

    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(status)
    toast.innerHTML =
        `${templateInner}
            <span class="countdown"></span>
    `
    var toastList = document.getElementById('toasts');
    toastList.appendChild(toast)

    setTimeout(function() {
        toast.style.animation = 'slide__hide 2s ease forwards'
    }, 4000)
    setTimeout(function() {
        toast.remove();
    }, 7000)
}