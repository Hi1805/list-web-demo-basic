/* www.youtube.com/CodeExplained */

const balanceValue= document.querySelector(".balance .value");
const incomeTotal = document.querySelector(".income-total")
const outcomeTotal = document.querySelector(".outcome-total");
//dùng để  tắt,  hiển thị
// Quy tắc hiển thị , 1 cái hiển thị thì 2 cái kia đóng lại
const allElement = document.querySelector("#all"); 
const incomeElement =document.querySelector("#income");
const outcomeElement =document.querySelector("#outcome")

const allList =document.querySelector("#all .list");// dùng để thị ds, thêm  phần tử vào html
const incomeList = document.querySelector("#income .list");
const outcomeList = document.querySelector("#outcome .list")

const incomeBtn = document.querySelector(".tab2");
const outcomeBtn = document.querySelector("tab1");
const allBtn = document.querySelector(".tab3");

const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");

let entry_List  = JSON.parse(localStorage.getItem("entry_list"))||[];

// số dư, tiền vào , tiền ra 
const balance = 0, income = 0, outcome =0;
const DELETE= "delete", edit="edit";
// xuất màn hình 
updateUI();

//tab1,tab2,tab3
incomeBtn.addEventListener("click",()=>{
    // kick vào sẽ hiển thị , không hiển thị 2 cái còn lại
    show(incomeList);
    hide([allList,expenseList]);
    active(incomeBtn);
    inactive([outcomeBtn,allBtn]);
})
outcomeBtn.addEventListener("click",()=>{
    // kick vào sẽ hiển thị , không hiển thị 2 cái còn lại
    show(expenseList);
    hide([incomeList,allList]);
    active(outcomeBtn);
    inactive([incomeBtn,allBtn]);
})
allBtn.addEventListener("click",()=>{
    // kick vào sẽ hiển thị , không hiển thị 2 cái còn lại
    show(allList);
    hide([incomeList,expenseList]);
    active(allBtn);
    inactive([outcomeBtn,incomeBtn]);
})

// nhập vào 
addExpense.addEventListener("click",()=>{
    if(!expenseTitle ||!expenseAmount)
        return ;
    let expense = {
        title :expenseTitle,
        amount : expenseAmount,
        type : "expense"
    };
    entry_List.push(expense);
    updateUI();
    clearInput([expenseAmount,expenseTitle]);
})
addIncome.addEventListener("click",()=>{
    if(! incomeTitle|| !incomeAmount)
        return ;
    let income = {
        title :incomeTitle,
        amount : incomeAmount,
        type : "expense"
    };
    entry_List.push(income);
    updateUI();
    clearInput([incomeTitle,expenseTitle]);
})


incomeList.addEventListener("click", deleteOrEdit);
expenseList.addEventListener("click", deleteOrEdit);
allList.addEventListener("click", deleteOrEdit);

function deleteOrEdit(event) {
    let check = event.target;

    const entry = check.parseNode;
    if(check.id == DELETE){
        deleteEntry(entry);
    }
    else
     if (check.id = EDIT){
        editEntry(entry);
    }
}
function deleteEntry(entry) {
    entry_List.splice(entry.id,1);
    updateUI();
}
function editEntry(entry) {
    const Entry = entry_list[entry.id];
    if(entry_list.type=="income"){
        incomeAmount.value = Entry.amount;
        incomeTitle.value = Entry.title;
    }
    if(entry_list.type="expense"){
        expenseAmount.value = Entry.amount;
        expenseTitle.value = Entry.title;
    }
    deleteEntry(entry);// xóa đi cái cũ
}
function calculateTotal(type,list) {
    let sum =0;
    list.forEach((entry)=>{
        sum+=entry.type == type ? entry.mount :0;
    })
    return sum;
}
function clearElement(elements){
    console.log(elements);
    elements.forEach( element => {
        element.innerHTML = "";
    })
    console.log("sau khi chay");
   console.log(elements);
}


function calculateBalance(income, outcome){ // tính toán số dư
    return income - outcome;
}

function clearInput(inputs){
    inputs.forEach( input => {
        input.value = "";
    })
}
function show(element){ // hiển thị ra bản hình , bởi bản chất của hide :display : none
    element.classList.remove("hide");
}

function hide( elements ){  // không hiển thị
    elements.forEach( element => {
        element.classList.add("hide");
    })
}

function active(element){ // im đậm
    element.classList.add("active");
}

function inactive( elements ){ // bỏ in đậm

    elements.forEach( element => {
        element.classList.remove("active");
    })
}

function updateUI() {
    
}