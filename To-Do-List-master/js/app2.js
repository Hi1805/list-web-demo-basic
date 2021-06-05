// CODE EXPLAINED channel
const clear = document.querySelector(".clear");
const list = document.getElementById('list');
const input =document.getElementById('input');
const todo = document.getElementById('todo');

const CHECK  = "fa-check-circle"; // cái nút hình tròn , dấu cộng
const UNCHECK ="fa-circle-thin";//nut hinh tron
const LINE_THROUGH = "lineThrough"; 
let LIST = [];
let id = 0;


let data=localStorage.getItem("TODO");
	if(data){
	LIST = JSON.parse(data);
	LoadTodo(LIST);
	id =LIST.length;
}
	else{
	LIST = [];
	id = 0;
}
function LoadTodo(array){
	array.forEach(element => {
		addToDo(element.name,element.id,element.done);
	});
}
function addToDo(toDo,id,done) { // them vao danh sach

    const DONE = done ? CHECK : UNCHECK;
    //done = true => CHECK else => UNCHECK
    const LINE = done ? LINE_THROUGH : "";

    const item = `
    <li class="item">
        <i class="fa ${DONE} co" job="complete" id="${id}"></i>
        <p class="text" ${LINE}>${toDo}</p>
        <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
    </li>
    `;
    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
// them 1 the vao html, co 4 vi tri : beforebegin , beforeend,afterbegin,afterend
}

document.addEventListener("keyup",function(event){ //đăng kí sự kiện ghi vào list 
	if(event.keyCode==13){
		const toDo= input.value;
		if(toDo){
			addToDo(toDo,id,false);
			LIST.push({
				name:toDo,
				id:id,
				done:false,
			})
		}
		localStorage.setItem("TODO",JSON.stringify(LIST));
		id++;
		input.value="";
	}
	
})
function completeToDo(element){
	element.classList.toggle(CHECK);
	element.classList.toggle(UNCHECK);
	element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
	LIST[element.id].done=LIST[element.id].done ?false:true;
}
function removeToDo(element){
        element.parentNode.parentNode.removeChild(element.parentNode);
         LIST.forEach((item,index)=>{
            if(item.id==element.id)
                 LIST.splice(index,1);
    })
}
list.addEventListener("click",function(event){
    let element = event.target;
    if( event.target.attributes.job){
		const elementJOB=event.target.attributes.job.value;
		elementJOB==="complete"?completeToDo(element):removeToDo(element);
	}
	localStorage.setItem("TODO",JSON.stringify(LIST));
})

clear.addEventListener('click',function(){
	localStorage.clear();
	location.reload();
})

const dateElement =document.getElementById("date");
let options={weekday:'long',month:'short',day:'numeric'}
let today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US",options);