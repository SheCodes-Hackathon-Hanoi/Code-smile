function signup() {
    // Lấy giá trị từ các trường input
    var username = document.getElementById("username2").value;
    var password = document.getElementById("password2").value;

    // Kiểm tra nếu username hoặc password trống thì không lưu vào localStorage
    if (username === "" || password === "") {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    // Lưu thông tin đăng ký vào localStorage
    var userData = {
        username: username,
        password: password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Chuyển hướng đến trang đăng nhập
    window.location.href = "login.html";
}


function login() {
    // Lấy giá trị từ các trường input
    var username = document.getElementById("username1").value;
    var password = document.getElementById("password1").value;

    // Kiểm tra nếu username hoặc password trống thì không kiểm tra đăng nhập
    if (username === "" || password === "") {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    // Lấy dữ liệu đăng ký từ localStorage
    var userData = JSON.parse(localStorage.getItem("userData"));

    // Kiểm tra thông tin đăng nhập
    if (
        userData &&
        userData.username === username &&
        userData.password === password
    ) {
        // Đăng nhập thành công, chuyển hướng đến trang khác (ví dụ: dashboard.html)
        window.location.href = "../index.html";
    } else {
        alert("Sai tên đăng nhập hoặc mật khẩu.");
    }
}