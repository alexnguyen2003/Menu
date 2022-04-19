function KiemTraThongTin() {
    var ho = document.getElementById("first_name");
    if (ho.value == "") {
        alert("Vui lòng nhập Họ.");
        ho.focus();
        return false;
    }
    var ten = document.getElementById("name");
    if (ten.value == "") {
        alert("Vui lòng nhập Tên.");
        ten.focus();
        return false;
    }
    var nam = document.getElementById("date");
    if (nam.value == "") {
        alert("Hãy điền Năm sinh.");
        nam.focus();
        return false;
    }
    
    var email = window.document.dangky.txtEmail;
    re = /\w+@\w+\.\w+/;
    if (email.value == "") {
        alert("Bạn chưa nhập Email.");
        email.focus();
        return false;
    } else
    if (re.test(email.value) == false) {
        alert("Email không đúng định dạng!");
        email.focus();
        return false;
    }
        alert("Đăng ký thành công! Xin chúc mừng.");
        return true;
    }
    
    
    