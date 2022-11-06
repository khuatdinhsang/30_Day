function taoDoiTuongSanPham(hinhAnh, ten, giaGoc, phanTramGiamGia, khuVuc, id) {
    var sanPham = new Object();
    // b1: gan cac thuoc tinh cho doi tuong
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTramGiamGia = phanTramGiamGia;
    sanPham.khuVuc = khuVuc;
    if (id != null) {
        sanPham.id = id;
    } else {
        sanPham.id = taoID();
    }

    // b2 viet cac phuong thuc cho doi tuong

    sanPham.tinhGiaBan = function() {
        var giaBan = this.giaGoc * (1 - this.phanTramGiamGia);
        return giaBan;
    }

    sanPham.toJson = function() {
        var json = JSON.stringify(this.sanPham);
        return json;
    }

    // Tu json chuyen thanh 1 doi tuong day du cac phuong thuc
    // input json
    // out put : doi tuong day du 
    sanPham.fromJson = function(json) {
        var doiTuongDayDu = new Object();
        // b1 chuyen json thanh doi tuong
        var doiTuong = JSON.parse(json);
        // b2 chuyen doi tuong yhanh doi tuong day du phuong thuoc
        doiTuongDayDu = taoDoiTuongSanPham(doiTuong.hinhAnh, doiTuong.ten, doiTuong.giaGoc, doiTuong.phanTramGiamGia, doiTuong.khuVuc);
        return doiTuongDayDu;
    }
    sanPham.fromJSONs = function(jsonDanhSachSanPham) {
        var danhSachSanPhamDayDu = new Array();
        var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
        for (var i = 0; i < danhSachSanPham.length; i++) {
            var sanPham = danhSachSanPham[i];
            var sanPhamDayDu = taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc);
            danhSachSanPhamDayDu[i] = sanPhamDayDu;
        }
        return danhSachSanPhamDayDu;
    }
    return sanPham;
}

function chuyen_danh_sach_doi_tuong_san_pham_thanh_html(danhSachSanPham) {
    var HTMLDanhSachSanPham = `<div class="items">`;
    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPham = danhSachSanPham[i];
        var htmlsanpham = chuyen_doi_tuong_san_pham_thanh_html(sanPham);
        HTMLDanhSachSanPham += htmlsanpham;
    }
    HTMLDanhSachSanPham += `</div>`
    return HTMLDanhSachSanPham;
}

function chuyen_doi_tuong_san_pham_thanh_html(sanPham) {
    var html = '';
    html = `<div class="item">
    <div class="item-thumb">
        <img src="${sanPham.hinhAnh}" alt="">
    </div>
    <h2 class="item-title">${sanPham.ten}</h2>
    <div class="item-price">
        <span class="item-price-origin">${sanPham.giaGoc}</span>
        <span class="item-price-sale">${sanPham.tinhGiaBan()}</span>
    </div>
    <button class="btn btn-primary">Đưa vào giỏ hàng</button>
</div>`
    return html;
}
// sinh ID tu dong

function taoID() {
    var id = '';
    // /lay miliseconds o thoi diem hien tai
    id = Math.random().toString().substring(2, 10) + "_" + String(new Date().getTime());
    return id;
}


/* Cách truy xuất đối tượng
    B1: lấy lên danh sách toàn bộ đối tượng
    B2: duyệt toàn bộ đối tượng, kiểm tra id của dối tượng
    có bằng với ud truyền vào không
    B3: lấy ra đối tượng theo id đó
    */
function truyxuatsanphamtheoid(id) {
    var jsondanhsachsanpham = localStorage.getItem('danhSachSanPham', id);
    var danhSachSanPham = JSON.parse(jsondanhsachsanpham);
    for (var i = 0; i < danhSachSanPham.length; i++) {
        if (danhSachSanPham[i].id == id) {
            return danhSachSanPham[i]
        }
    }
}

function onClickTimKiemSanPham() {
    // b1: truy xuất node ID sản phẩm để lấy ra ID sản phẩm
    var nodeIDSanPham = document.getElementById('idSanPham');
    var idSanPham = nodeIDSanPham.value;
    // b2: truy xuất đối tượng theo ID 
    var sanPham = truyxuatsanphamtheoid(idSanPham);
    console.log(sanPham)
        //b3: chuyển đối tượng sang html    
    var HTML = chuyen_doi_tuong_san_pham_thanh_html(sanPham);
    //b4: hiển thị html ra kết quả tìm kiếm
    var nodeKetQuaTimKiem = document.getElementById('ketQuaTimKiem');
    nodeKetQuaTimKiem.innerHTML = HTML;
}