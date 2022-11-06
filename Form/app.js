const listAcount = [{
    username: "admin",
    password: "admin",
}, {
    username: "admin1",
    password: "admin",
}, {
    username: "admin2",
    password: "admin",
}];

let isLogin = localStorage.getItem('token') ? true : false;

function checkLoginhtml() {
    if (isLogin) {
        window.location.href = "index.html"
    }
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let checkLogin = listAcount.some((value) => {
        return value.username === username && value.password === password;
    });
    if (checkLogin) {
        localStorage.setItem("token", username);
        isLogin = true;
        checkLoginhtml();
    } else {
        alert("Wrong username or password");
    }
}