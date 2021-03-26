// DOM elements
const guideList = document.querySelector('.guides');
//lay tat class cua logged out , logged in 
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const adminItems = document.querySelectorAll(".admin");//

//console.log("adminItems",adminItems); //Node List
//show User Account

const account = document.querySelector(".account-details");
const setupUI = (user) => {
  console.log(user);
  if(user){
    if(user.admin){
      adminItems.forEach(item=>item.style.display="block");
    }
    db.collection("users").doc(user.uid).get().then((doc)=>{
      // console.log("==============");
      // console.log("Da chay",doc.data());
      let html = `
      <div>User  is ${user.email}</div>
      <div>Date of birth ${doc.data().dateOfBirth}</div>
      <div class="pink-text">${user.admin ? "Admin":""}</div>
    `
      account.innerHTML = html;
    })
    console.log("Da chay 1");
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  }else {
    console.log("Da chay 2");
      adminItems.forEach(item=>item.style.display="none");
      loggedInLinks.forEach(item => item.style.display = 'none');
      account.innerHTML="";
      loggedOutLinks.forEach(item => item.style.display = 'block');
  }
} 

// setup guides
const setupGuides = (data) => {
// tạo guides truyền doc
console.log(data);
  if (data.length) {
    let html = '';
      data.forEach(doc => {
      const guide = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${guide.title} </div>
          <div class="collapsible-body white"> ${guide.content} </div>
        </li>
      `;
      html += li;
    });
    guideList.innerHTML = html;
  } else {
    guideList.innerHTML = '<h5 class="center-align">Login to view guides</h5>';
  }
  

};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() { // bootstrap

  var modals = document.querySelectorAll('.modal');
  console.log(typeof M);
  console.log(M);
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});
