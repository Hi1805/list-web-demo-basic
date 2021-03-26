const adminForm = document.querySelector('.admin-actions');
adminForm.addEventListener('submit', (e) => {
    e.preventDefault(); // ngawns form submot from load loai trang 
    const adminEmail = document.querySelector('#admin-email').value.trim();
    const addAdminRole = functions.httpsCallable('addAdminRole');
    addAdminRole({ email: adminEmail } //data
    ).then((result) => {
        //data
        console.log("Result ", result);
        //    console.log(result.context);
    });
})

//Service.prototype.httpsCallable = function (name) {
//     var _this = this;
//     var callable = function (data) {
//         return _this.call(name, data);
//     }
//     return callable; // tra ve function
// };

//  db.collection('guides').onSnapshot(snapshot => {
//       console.log(snapshot.docs);
//     //  setupGuides(snapshot.docs);// lấy từ bên index.js qua
//   })
//   )//.catch (( // no luon luon chay cai auth trc



//day la 1 ham bat dong bo
// listen for auth status changes
auth.onAuthStateChanged(user => { // khi bắt đầu chạy, sẽ kiểm tra user có tồn tại hay không
    //user bien toan cuc
    console.log("user", user);
    if (user) {
        user.getIdTokenResult().then(idTokenResult => { // luon luon chay
                console.log("Id Token ", idTokenResult); // object
                //{token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEyODA5ZGQyMzlkMjRiZD…6JxVbAErq82ZSC55H7T7pmk-kq5Qdd1ePimHmDV90slJcIbTg", expirationTime: "Thu, 27 Aug 2020 15:07:12 GMT", authTime: "Thu, 27 Aug 2020 08:11:26 GMT", issuedAtTime: "Thu, 27 Aug 2020 14:07:12 GMT", signInProvider: "password", …}
                // authTime: "Thu, 27 Aug 2020 08:11:26 GMT"
                // claims: {admin: true, iss: "https://securetoken.google.com/fir-auth-c83e1", aud: "fir-auth-c83e1", auth_time: 1598515886, user_id: "ZGUVgc9WzrYUYZJtfYIxTcoiQQJ2", …}
                // expirationTime: "Thu, 27 Aug 2020 15:07:12 GMT"
                // issuedAtTime: "Thu, 27 Aug 2020 14:07:12 GMT"
                // signInProvider: "password"
                // token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEyODA5ZGQyMzlkMjRiZDM3OWMwYWQxOTFmOGIwZWRjZGI5ZDM5MTQiLCJ0eXAiOiJKV1QifQ.eyJhZG1pbiI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2Zpci1hdXRoLWM4M2UxIiwiYXVkIjoiZmlyLWF1dGgtYzgzZTEiLCJhdXRoX3RpbWUiOjE1OTg1MTU4ODYsInVzZXJfaWQiOiJaR1VWZ2M5V3pyWVVZWkp0ZllJeFRjb2lRUUoyIiwic3ViIjoiWkdVVmdjOVd6cllVWVpKdGZZSXhUY29pUVFKMiIsImlhdCI6MTU5ODUzNzIzMiwiZXhwIjoxNTk4NTQwODMyLCJlbWFpbCI6InJpcGtlcjE4MDUwN0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicmlwa2VyMTgwNTA3QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.brCvsLGV5Zj-FtVupuh8zqyffzRWKPLQsTmLmT-aUKWRhr1rhy3DtXL9BN1OZaa1nf9910ez3J_mq6eoJL-CW-hiKNeFDZ4zZStV6qxwIYrsWSqYd4kq1s3oiwE0KiN4RZ8rDN1EtUK2J1OZPEcezR_BsGs_PVBtcbe6fiqbK81oZhN7MitUOejcj2t2n2TDHzJfiA7TEvhOK5txjR4WcqcnGVqzq62sChJb1AibI4l2T_cZs_tmTbOhaUhlJeOk2nzMsSkfFIf6DY0S6VJS9F8TxBMjWtfhmVzxu6JxVbAErq82ZSC55H7T7pmk-kq5Qdd1ePimHmDV90slJcIbTg"
                // __proto__: Object

                //   console.log("claims",idTokenResult.claims.admin);// true or undefined
                // De xu ly dau la admin , dau là user
                user.admin = idTokenResult.claims.admin; //
                console.log(user.admin);
                setupUI(user);
            })
            //   console.log("chay user");
        console.log('user logged in: ');
        db.collection('guides').onSnapshot(snapshot => {
                console.log("Chay on snapshot");
                setupGuides(snapshot.docs); // lấy từ bên index.js qua
                // db.collection('guides').onSnapshot(snapshot => {
                //   console.log("Dang chay thang con");
                // },err=>{
                //   console.log("Da chay err 2");
                //   console.log(err.message);
                // })
            }, err => {
                console.log("Da chay snapshot 2");
                console.log(err.message);
            })
            //.catch ((err)=>alert(err))//is not function
            // console.log("onsnapShot ",db.collection('guides').onSnapshot(snapshot => {
            // }));
    } else {
        console.log('user logged out');
        setupGuides([]);
        setupUI(user);
    }
})


// signup
const signupForm = document.querySelector('#signup-form');
console.log(signupForm);
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = signupForm['signup-email'].value;

    const password = signupForm['signup-password'].value;
    const confirmPassword = signupForm['confirm-password'].value;

    const dateOfBirth = signupForm['Date-Of-birth'].value;
    console.log("ngay sinh ", dateOfBirth);

    if (password != confirmPassword) { // kiểm tra xác nhận mật khẩu
        alert("confirmPassword is error")
        signupForm['confirm-password'].value = "";
    } else {
        // console.log(auth.createUserWithEmailAndPassword(email, password));
        //vt {a: 0, i: undefined, c: vt, b: null, f: null, …}
        auth.createUserWithEmailAndPassword(email, password).then(cred => { // tạo 1 tài khoản bằng user password
            // close the signup modal & reset form
            // console.log("Da chay");
            // console.log("cred",cred.user.id);

            //user: qu, credential: null, additionalUserInfo: lr, operationType: "signIn"........


            console.log(db.collection("users").doc(cred.user.uid).set({
                dateOfBirth: dateOfBirth
            }));
            // tra ve 1 promise , voi promise Value la undefined

            return db.collection("users").doc(cred.user.uid).set({
                dateOfBirth: dateOfBirth
            })


        }).then(() => {
            const modal = document.querySelector('#modal-signup');
            M.Modal.getInstance(modal).close(); // đóng css của signup
            signupForm.reset(); // reset lại 
            alert("Sign Up Is Success")
        }).catch((err) => alert(err.message));
    }
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => alert("sign Out Success")); // thoát khỏi tài khoản
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(loginForm);
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then((cred) => {
            // close the signup modal & reset form
            const modal = document.querySelector('#modal-login');
            M.Modal.getInstance(modal).close();
            loginForm.reset();
            alert("login Access")
        })
        .catch((err) => alert(err.message));

    // log the user in


});


//// lấy giá trị từ input của creatForm < Guides>
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('guides').add({ //write
            title: createForm['title'].value, // lấy giá trị từ input của creatForm < Guides>
            content: createForm['content'].value
        }).then(() => {
            // close the modal and reset form
            const modal = document.querySelector('#modal-create');

            M.Modal.getInstance(modal).close();
            createForm.reset();
        }).catch(err => console.log(err.message + "Day la cua add"))
        //catch loi o add, co nghia la catch loi khi them vao guides
        // no se van chay ham onsnapshot,nhung gap loi , xong no chay lai cai cũ
        // mặc dù khi ra ngoài k có quyền nhưng nó vẫn chạy
});