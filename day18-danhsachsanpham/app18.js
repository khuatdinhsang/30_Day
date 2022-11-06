// / b1 lay danh sach san pham duoi localstorage

var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');
var danhsachsanpham = taoDoiTuongSanPham().fromJSONs(jsonDanhSachSanPham);

// b2 chuyen danh sach doi tuong san pham sang doan html
var html = chuyen_danh_sach_doi_tuong_san_pham_thanh_html(danhsachsanpham);

// b3 gan doanj html do vao section products
var nodeProducts = document.getElementById('products');
nodeProducts.innerHTML = html;