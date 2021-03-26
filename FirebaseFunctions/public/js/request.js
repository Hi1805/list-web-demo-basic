const requestList = document.querySelector(".request-list");
const db = firebase.firestore();
const database = db.collection('requests');


function upvoteRequest(id) {
    const upvote = firebase.functions().httpsCallable('upvote');


    upvote({
            id: id
        })
        .then(() => {
            requestList.classList.remove("post");
        })
        .catch(err => {
            requestList.classList.remove("post");
            alert(err.message);
        });
}
database.onSnapshot((snapshot) => {


    console.log(snapshot);
    let requests = [];
    snapshot.forEach(doc => {
        requests.push({...doc.data(), id: doc.id });
        // spread de trai du lieu ra , vi doc.data() => {text :"huy"}
        // => {test :"huy",id:xscxfdfd}
        // neu ta dat 1 bien {abc :doc.data(), id: doc.id }=> {abc:{text :"huy"},id:"xyxaadsffd"}
        //     console.log(requests);
    })


    let html = ``;
    requests.forEach(request => {
        let requestId = `${request.id}`;
        console.log(requestId);
        html += `<li >
        <span class="text"> ${request.text}</span>
        <div>
           <span class="votes"  >${request.upvotes}</span> 
             <i class="material-icons upvote " onclick ="upvoteRequest('${requestId}')">arrow_upward</i>
         </div>
        </li>`;
    })
    requestList.innerHTML = html;

    // const upvoteRequest = document.getElementById("upvoteRequest");  
})