const authSwitchLinks = document.querySelectorAll(".switch");
const authModals = document.querySelectorAll(".auth .modal");
const authWrapper = document.querySelector(".auth");
const registerForm = document.querySelector(".register");
const loginForm = document.querySelector(".login");
const signOut = document.querySelector(".sign-out");
const load = document.querySelector(".loader");

const modalDisplay = document.querySelector(".modal");


const auth = firebase.auth();
//console.log(authSwitchLinks);
// có 2 class switch ta  : đó là của login instead và đăng kí
// cái đầu tiên là của đã đăng kí <chưa có tài khoản >

authSwitchLinks.forEach((link) => { // đăng kí sự kiện cho từng link.
    link.addEventListener(('click'), () => {
        ////    k1
        authModals.forEach((modal) => modal.classList.toggle("active"));
        //toggle no khac voi add , toggle là nó chuyển đổi class = "modal active" và ngược lại
    });
});

const modalRegister = document.getElementById("register");

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = registerForm.email.value;
    const password = registerForm.email.value;
    if (registerForm[2].value == "register") { // chinh la cai nut button login
        load.style.display = "block";
        modalRegister.classList.remove("active");
    }
    auth.createUserWithEmailAndPassword(email, password) // đăng kí email password
        .then((user) => {
            load.style.display = "none";
            modalRegister.classList.add("active");
            console.log("Registered ", user);
            registerForm.reset(); // reset lại email password
            //   load.style.display = "none"; // tu file app
        })
        .catch((err) => {
            load.style.display = "none";
            modalRegister.classList.add("active");
            registerForm.querySelector(".error").textContent = err.message; // thông báo ra lỗi
        });

});

//=== Đăng nhập
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.email.value;
    //  console.log(loginForm[2].value == "button");
    if (loginForm[2].value == "button") { // chinh la cai nut button login
        load.style.display = "block";
        console.log("da chay");
        modalDisplay.classList.remove("active");
    }
    load.classList.add("active");
    auth.signInWithEmailAndPassword(email, password) // đăng nhập email password
        .then((user) => {
            // load.style.display = "none";
            load.style.display = "none";
            modalDisplay.classList.add("active");
            loginForm.reset(); // reset lại email password
        })
        .catch((err) => {
            load.style.display = "none";
            modalDisplay.classList.add("active");
            loginForm.querySelector(".error").textContent = err.message; // thông báo ra lỗi
        });

});
// đăng xuất
signOut.addEventListener("click", () => {
    auth.signOut();
    authWrapper.classList.add("open");
    authModals[0].classList.add("active");

})


auth.onAuthStateChanged((user) => {
    if (user) { // kiểm tra user có tồn tại k
        authWrapper.classList.remove("open"); // tắt cái auth
        authModals.forEach(link => {
            link.classList.remove("active");
        }); // tắt cái đăng nhập đăng xuất
        // boi vi css new request 100% 100% va auth 100%  ma auth chay trước , thực ra cả 2 điều chạy nhưng auth nó đè lên new request
    } else {

        authWrapper.classList.add("open");
        authModals[0].classList.add("active");
    }
})