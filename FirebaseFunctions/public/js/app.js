const requestModal = document.querySelector(".new-request");
const requestLink = document.querySelector(".add-request");
const requestForm = document.querySelector(".new-request form");

const upvote = document.querySelector(".upvote");

const load2 = document.querySelector(".loader2")


requestLink.addEventListener("click", () => {
    requestModal.classList.add("open");
});

//close request modal 
requestModal.addEventListener("click", (event) => {
    // console.log(event.target.classList.contains("new-request"));
    // console.log(event.target.classList);
    if (event.target.classList.contains("new-request")) {
        requestModal.classList.remove("open");
    }
});
//say hello
// const button = document.querySelector(".call");
// button.addEventListener("click", () => {
//     const sayHello = firebase.functions().httpsCallable("sayHello");
//     sayHello({
//         name: "Hello "
//     }).then(res => console.log(res));
// })




// them request form  ,
requestForm.addEventListener("submit", event => {
    event.preventDefault();
    load2.style.display = "block"; // cai hien ra loading 
    const addRequest = firebase.functions().httpsCallable("addRequest");
    const text = requestForm.request.value;

    requestForm.querySelector('.error').textContent = ''; // kick vao  button request thi ket qua cu se bien mat

    const resultRequest = addRequest({ // ket qua tra ve 1 promise
        text: text,
        upvotes: 0
    });
    resultRequest.then((result) => {

            console.log("da chay then");
            if (typeof result.data === 'string') {
                requestForm.querySelector('.error').textContent = result.data;
                //   console.log(result.data);
            } else {
                requestForm.reset(); // reset the request form
                requestModal.classList.remove('open');
                requestForm.querySelector('.error').textContent = '';
            }
            load2.style.display = "none";

        })
        .catch((err) => { // neu file index.js k co throw thi se k co catch
            requestForm.querySelector(".error").textContent = err.message;
            load2.style.display = "none";
        });
})