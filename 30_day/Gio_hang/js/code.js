const btn = document.querySelectorAll("button");
const total = document.querySelector(".total");
const listName = document.querySelectorAll(".brand");
const order = document.querySelector(".order");
let indexProduct = 0;
let isDelete = false;
btn.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    var btnItem = event.target;
    var product = btnItem.parentElement;
    var productImg = product.querySelector("img").src;
    var productName = product.querySelector(".brand").innerText;
    var productPrice = product.querySelector(".price").innerText;
    addCart(productPrice, productImg, productName);
    deleteProduct();
  });
});

function addCart(productPrice, productImg, productName) {
  var addTr = document.createElement("tr");
  var cartItem = document.querySelectorAll("tbody tr");
  for (let i = 0; i < cartItem.length; i++) {
    var productTitle = document.querySelectorAll(".title_product");
    if (productTitle[i].innerText === productName) {
      alert("San pham da co trong gio hang");
      return;
    }
  }
  var cartContent = "";
  cartContent += `
   <td><img src="${productImg}" style="width:50px; text-align:center" alt=""><span class="title_product">${productName}</span></td>
   <td><span class="priceProduct">${productPrice}</span></td>
   <td><input type="number"  class="amount" min="1" value="1" style="width:50px"></td>
   <td><button class="btnDelete" style="color:red">Xóa</button></td>
   `;
  addTr.innerHTML = cartContent;
  var cartTable = document.querySelector("tbody");
  cartTable.append(addTr);
  getTotalBills();
  order.classList.add("active");
  indexProduct++;
  order.innerHTML = indexProduct;
}
function deleteProduct() {
  var cartItem = document.querySelectorAll("tbody tr");
  for (let i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".btnDelete");
    productT[i].addEventListener("click", (e) => {
      var cartDelete = e.target;
      var cartItemChild = cartDelete.parentElement.parentElement;
      cartItemChild.remove();
      isDelete = true;
      getTotalBills();
    });
  }
}

function changeAmount() {
  var cartItem = document.querySelectorAll("tbody tr");
  for (let i = 0; i < cartItem.length; i++) {
    var amountProduct = document.querySelectorAll(".amount");
    amountProduct[i].addEventListener("change", (e) => {
      getTotalBills();
    });
  }
}
function getTotalBills() {
  let totalBills = 0;
  var listPrice = document.querySelectorAll(".priceProduct");
  var amountPriceItem = document.querySelectorAll(".amount");

  [...listPrice].forEach((item, index) => {
    totalBills += parseInt(item.innerText * amountPriceItem[index].value);
  });
  total.innerText = totalBills + ".000đ";
  changeAmount();
}
