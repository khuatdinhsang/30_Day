const apiURL = 'https://622b588614ccb950d2374872.mockapi.io/user'

function addHotel(e) {
    const name = document.querySelector('[name="name"]').value;
    const logo = document.querySelector('[name="logo"]').value;
    const address = document.querySelector('[name="address"]').value;
    const requestObj = {
        name: name,
        logo: logo,
        address: address,
    };
    console.log(requestObj);
    axios.post(apiURL, requestObj)
        .then(data => {
            if (data.statusText === "Created") {
                window.location.href = 'index.html';
            }
        })
    return false;
}