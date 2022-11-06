let users = [];
// phan trang
// trang dau tien 
let currentPage = 1;
// so user trong 1 trang
let perPage = 2;
// tong so page
let totalPage = 0;
// mang moi chua so user trong 1 trang
let perUser = [];
async function getUser() {
    try {
        let data = await axios.get("https://jsonplaceholder.typicode.com/users")
        users = data.data;
        perUser = users.slice(
            (currentPage - 1) * perPage,
            (currentPage - 1) * perPage + perPage,
        )
        renderPageNumber();
        renderUser(users);
        renderUser(perUser);
    } catch (error) {
        console.log(error);
    }
}

function handerPageNumber(num) {
    currentPage = num;
    perUser = users.slice(
        (currentPage - 1) * perPage,
        (currentPage - 1) * perPage + perPage,
    )
    renderUser(perUser);
}

function renderPageNumber() {
    totalPage = users.length / perPage;
    for (var i = 1; i <= totalPage; i++) {
        document.getElementById('pagination').innerHTML += `
        <li style="display:inline-block" onclick="handerPageNumber(${i})">${i}</li>
        `
    }
}

function renderUser(info) {
    let element = `  
        <tr>
        <th>ID</th>
        <th align="left">Name</th>
        </tr>
    `
    info.map((value) => {
        element += `
        <tr>
        <td align="center">${value.id}</td>
        <td>${value.name}</td>
        </tr>
        `
    })
    document.getElementById('table').innerHTML = element;
}

function searchUser() {
    let valueSearchInput = document.getElementById('search').value;
    var listSearch = [];
    users.forEach((value) => {
        if (value.name.includes(valueSearchInput)) {
            listSearch.push(value);
        }
    })
    renderUser(listSearch);
}

function ascending() {
    let valueSelect = document.getElementById('sort').value;
    // a luon dung trc b
    users.sort((a, b) => {
        if (valueSelect === 'az') {
            return a.name.localeCompare(b.name);
        } else if (valueSelect === 'za') {
            return b.name.localeCompare(a.name);
        } else {
            return a.id - b.id;
        }
    });
    renderUser(users);
}