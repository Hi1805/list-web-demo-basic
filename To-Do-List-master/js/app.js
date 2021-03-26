var clear = document.querySelector(".clear");
var dateElement = document.getElementById("date");
var list = document.getElementById("list");
var input = document.getElementById("input");
console.log(input);
var CHECK = "fa-check-circle";
var UNCHECK = "fa-circle-thin";
var LINE_THROUGH = "lineThrough";

var done = false;
var toDo = input.value;
console.log(toDo);
var LIST, id;

var storageKey = "todolist";
var dataString = localStorage.getItem(storageKey);

if (dataString) {
  LIST = JSON.parse(dataString);
  id = LIST.length;
  render();
} else {
  LIST = [];
  id = 0;
}

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
var today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);
function render() {
  var DONE = done ? CHECK : UNCHECK;
  var line = done ? LINE_THROUGH : "";
  var contents = LIST.map(
    (item, index) => `
                <li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${index}"></i>
                    <p class="text ${line}">${item.name}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${index}"></i>
                </li>
				`
  );
  list.innerHTML = contents.join("");
}

document.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    const toDo = input.value;
    if (toDo) {
      LIST.push({
        name: toDo,
        id: id,
        done: false,
      });
      render();
      localStorage.setItem(storageKey, JSON.stringify(LIST));
      id++;
    }
    input.value = "";
  }
});

function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;
}
function removeToDo(element, index) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST.splice(index, 1);
  render();
  localStorage.setItem(storageKey, JSON.stringify(LIST));
}

list.addEventListener("click", (event) => {
  var element = event.target;
  if (element.attributes.job) {
    var elementJob = element.attributes.job.value;
    elementJob === "complete" ? completeToDo(element) : removeToDo(element);
  }
});
