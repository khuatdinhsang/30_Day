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
    <button class="btn btn-primary">????a v??o gi??? h??ng</button>
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


/* C??ch truy xu???t ?????i t?????ng
    B1: l???y l??n danh s??ch to??n b??? ?????i t?????ng
    B2: duy???t to??n b??? ?????i t?????ng, ki???m tra id c???a d???i t?????ng
    c?? b???ng v???i ud truy???n v??o kh??ng
    B3: l???y ra ?????i t?????ng theo id ????
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
    // b1: truy xu???t node ID s???n ph???m ????? l???y ra ID s???n ph???m
    var nodeIDSanPham = document.getElementById('idSanPham');
    var idSanPham = nodeIDSanPham.value;
    // b2: truy xu???t ?????i t?????ng theo ID 
    var sanPham = truyxuatsanphamtheoid(idSanPham);
    console.log(sanPham)
        //b3: chuy???n ?????i t?????ng sang html    
    var HTML = chuyen_doi_tuong_san_pham_thanh_html(sanPham);
    //b4: hi???n th??? html ra k???t qu??? t??m ki???m
    var nodeKetQuaTimKiem = document.getElementById('ketQuaTimKiem');
    nodeKetQuaTimKiem.innerHTML = HTML;
}