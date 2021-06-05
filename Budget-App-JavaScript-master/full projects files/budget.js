/* www.youtube.com/CodeExplained */

// SELECT ELEMENTS
const balanceEl = document.querySelector(".balance .value");
const incomeTotalEl = document.querySelector(".income-total");
const outcomeTotalEl = document.querySelector(".outcome-total");
const incomeEl = document.querySelector("#income");
const expenseEl = document.querySelector("#expense");
const allEl = document.querySelector("#all");
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");

// SELECT BTNS
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

// nhập dữ liệu vào
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");

// VARIABLES
let ENTRY_LIST;
let balance = 0, income = 0, outcome = 0;
const DELETE = "delete", EDIT = "edit";

// LOOK IF THERE IS SAVED DATA IN LOCALSTORAGE
ENTRY_LIST = JSON.parse(localStorage.getItem("entry_list")) || [];
updateUI();
// Lây dữ liệu từ LocalStorage, nếu không có thì mảng rỗng
//Đăng kí sự kiện
expenseBtn.addEventListener("click", function(){
    show(expenseEl); // hiển thị chi phi ,..blabla
    hide( [incomeEl, allEl] );//hiển thị  của income,allEL
    active( expenseBtn );// khi được ấn , thì sẽ được in đậm , tượng trưng là đang hoạt động
    inactive( [incomeBtn, allBtn] );//ngược lại dòng trên :v
})
incomeBtn.addEventListener("click", function(){
    show(incomeEl);
    hide( [expenseEl, allEl] );
    active( incomeBtn );
    inactive( [expenseBtn, allBtn] );
})
allBtn.addEventListener("click", function(){
    show(allEl);
    hide( [incomeEl, expenseEl] );
    active( allBtn );
    inactive( [incomeBtn, expenseBtn] );
})


// console.log(addExpense); Chính là cái nút Dấu cộng ><
addExpense.addEventListener("click", function(){
    // IF ONE OF THE INPUTS IS EMPTY => EXIT
    // console.log(expenseTitle.value);
    // console.log(expenseAmount.value);
    if(!expenseTitle.value || !expenseAmount.value ) return;
    // nếu tiêu đề chi phí không có hoặc  , chi phí không có thì nó sẽ không chạy
  
    //Nếu có :
    let expense = {
        type : "expense",// Loại là chi phi
        title : expenseTitle.value,
        amount : parseInt(expenseAmount.value)
    }
    ENTRY_LIST.push(expense);
    //Push vào danh sách đầu vào

    updateUI();
    clearInput( [expenseTitle, expenseAmount] )
})

addIncome.addEventListener("click", function(){
    // nêú   đầu vào của income không tồn tại thì k chạy nưax
    if(!incomeTitle.value || !incomeAmount.value ) return;

    // Lưu vào danh sách
    let income = {
        type : "income",
        title : incomeTitle.value,
        amount : parseInt(incomeAmount.value)
    }
    ENTRY_LIST.push(income);
    
    updateUI();// chạy ra màn hình
    clearInput( [incomeTitle, incomeAmount] )
    // xóa input
})

    incomeList.addEventListener("click", deleteOrEdit);
    expenseList.addEventListener("click", deleteOrEdit);
    allList.addEventListener("click", deleteOrEdit);

// Tính năng

function deleteOrEdit(event){
    const targetBtn = event.target;

    const entry = targetBtn.parentNode; // lấy đối tượng trong ds

    if( targetBtn.id == DELETE ){ // nếu 
        deleteEntry(entry);
    }else if(targetBtn.id == EDIT ){
        editEntry(entry);
    }
}

function deleteEntry(entry){
    ENTRY_LIST.splice( entry.id, 1);
    // xóa phần tử trong mảng
    updateUI();
}

function editEntry(entry){
    console.log(entry)
    let ENTRY = ENTRY_LIST[entry.id];

    if(ENTRY.type == "income"){ // 
        incomeAmount.value = ENTRY.amount;
        incomeTitle.value = ENTRY.title;
    }else if(ENTRY.type == "expense"){
        expenseAmount.value = ENTRY.amount;
        expenseTitle.value = ENTRY.title;
    }
    console.log("da chay");
    deleteEntry(entry);// xóa đi cái cũ 
    console.log(entry_list);
}

function updateUI(){
    income = calculateTotal("income", ENTRY_LIST);// tính tổng của income, dựa vào danh sách chi phi
    outcome = calculateTotal("expense", ENTRY_LIST);//tính tổng của outcome, dựa vào danh sách chi phi
    balance = Math.abs(calculateBalance(income, outcome));// tính só dư

    // DETERMINE SIGN OF BALANCE
    let sign = (income >= outcome) ? "$" : "-$";
  // hiển thị ra màn hình  nếu giá trị vào lớn hơn giá trị ra thì ==>$ không thì ngược lại

    // UPDATE UI
    balanceEl.innerHTML = `<small>${sign}</small>${balance}`;// hiển thị số dư
    outcomeTotalEl.innerHTML = `<small>$</small>${outcome}`;
    incomeTotalEl.innerHTML = `<small>$</small>${income}`;
  // clearElement( [expenseList, incomeList, allList] );
    //có nghĩa khi ta nhập title,amount lần tiếp theo<bỏ qua lần đầu tiên> thì khi chạy
    // nếu không có clearElement thì expenseList sẽ chứa cái cũ , và khi chạy show Entry
    // thì nó lại tiếp túc tạo html mới dựa trên cái cũ, và sẽ hiển thị ra cái cũ 1 lần nữa
    

    ENTRY_LIST.forEach( (entry, index) => {
        console.log("chay UI",expenseList);
        if( entry.type == "expense" ){
            showEntry(expenseList, entry.type, entry.title, entry.amount, index)
        }else
             if( entry.type == "income" ){
            showEntry(incomeList, entry.type, entry.title, entry.amount, index)
        }
        showEntry(allList, entry.type, entry.title, entry.amount, index) // in ra tất các danh sach
    });

    updateChart(income, outcome);

    localStorage.setItem("entry_list", JSON.stringify(ENTRY_LIST));
}

function showEntry(list, type, title, amount, id){

    const entry = ` <li id = "${id}" class="${type}">
                        <div class="entry">${title}: $${amount}</div>
                        <div id="edit"></div>
                        <div id="delete"></div>
                    </li>`;

    const position = "afterbegin";

    list.insertAdjacentHTML(position, entry);
}

function clearElement(elements){
    console.log(elements);
    elements.forEach( element => {
        element.innerHTML = "";
    })
    console.log("sau khi chay");
   console.log(elements);
}

function calculateTotal(type, list){
    let sum = 0;

    list.forEach( entry => {
        if( entry.type == type ){
            sum += entry.amount;
        }
    })

    return sum;
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
