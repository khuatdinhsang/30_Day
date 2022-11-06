var hotelInfo = {};
const apiURL = 'https://622b588614ccb950d2374872.mockapi.io/user'
var id = null;

function getHotelInfo() {
    // 1. lấy tham số id trên đường dẫn
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    // 2. gửi request lên mock api để lấy thông tin của khách sạn về
    const getHotelInfoUrl = apiURL + "/" + id;
    axios.get(getHotelInfoUrl)
        .then(res => {
            if (res.statusText === "OK") {
                hotelInfo = res.data;
                // 3. điền dữ liệu lấy đc vào trong form
                document.querySelector('[name="name"]').value = hotelInfo.name;
                document.querySelector('[name="logo"]').value = hotelInfo.logo;
                document.querySelector('[name="address"]').value = hotelInfo.address;

            }
        })
}

function editHotel() {
    const name = document.querySelector('[name="name"]').value;
    const logo = document.querySelector('[name="logo"]').value;
    const address = document.querySelector('[name="address"]').value;
    hotelInfo.name = name;
    hotelInfo.logo = logo;
    hotelInfo.address = address;
    // gui request len mock api de them khach san 
    const updateHotelUrl = apiURL + "/" + id;
    axios.put(updateHotelUrl, hotelInfo)
        .then(data => {
            if (data.statusText == "OK") {
                window.location.href = 'index.html';
            }
        })
    return false;
}