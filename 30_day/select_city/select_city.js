function resetSelection() {
  document.getElementById("citySelect").selectIndex = "0";
  document.getElementById("villageSelect").selectIndex = "0";
}

var city = {
  "Hà Nội": ["Thạch Thất", "Quốc Oai", "Bắc Từ Liêm"],
  "Hải Phòng": ["Cẩm Phả", "Lạch Tray", "Mỹ Tho"],
  "Tp Hcm": ["Quận 1", "Quận 2", "Quận 3"],
};
// function getCity(value) {
//   if (value.length == 0)
//     document.getElementById("citySelect").innerHTML = "<option></option>";
//   else {
//     var citiesOptions = "";
//     for (let cityId = 0; cityId < city[value].length; cityId++) {
//   citiesOptions += "<option>" + city[value][cityId] + "</option>";
//     }
//     document.getElementById("villageSelect").innerHTML = citiesOptions;
//   }
// }

var city = {
  "Hà Nội": ["Thạch Thất", "Hoài Đức"],
  "Hải Phòng": ["Lạch Tray", "Quảng Ninh"],
  "Nam Định": ["Thủ Đức", "Hòn Dấu"],
};

function getValue(value) {
  if (value.length == 0) {
    document.getElementById("villageSelect").innerHTML = "<option></option>";
  } else {
    var listVillage = "";
    for (var i = 0; i < city[value].length; i++) {
      listVillage += "<option>" + city[value][i] + "</option>";
    }
    document.getElementById("villageSelect").innerHTML = listVillage;
  }
}
