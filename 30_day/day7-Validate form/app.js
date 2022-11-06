var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');



function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
};

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = '';
};

// check rong
function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(function(input) {
        input.value = input.value.trim();
        if (!input.value) {
            isEmptyError = true;
            showError(input, 'khong duoc de trong')
        } else {
            showSuccess(input);
        }
    });
    return isEmptyError;
}

function checkEmail(input) {
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);
    if (input.value != '') {

        if (!regexEmail.test(input.value)) {
            showError(input, "Email Invalid");
        } else {
            showSuccess(input);
        }
    }

    return isEmailError;
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min && input.value != '') {
        showError(input, `phai co it nhat ${min} ki tu`);
        return true;
    }
    if (input.value.length > max && input.value != '') {
        showError(input, `khong duoc toi da ${max} ki tu`);
        return true;
    }
    return false;
}

function checkMatchPasswordError(passwordInput, confirmPasswordInput) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, 'Mk khong trung khop');
    }
}
form.addEventListener("submit", function(e) {
    // e. la de khi bam vao k load lai trang, neu k co thi
    // bam vao trang se bi load lai trang, day la thuoc tinh
    // mac dinh cua submit
    e.preventDefault();
    let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
    let isEmailError = checkEmail(email);
    let isUsernameLengthError = checkLengthError(username, 3, 10);
    let isPasswordLengthError = checkLengthError(password, 3, 10);
    let isMatchError = checkMatchPasswordError(password, confirmPassword);
    if (isEmailError || isEmptyError || isUsernameLengthError || isPasswordLengthError || isMatchError) {
        // do nothing
    } else {
        //  logic, call API
    }
});