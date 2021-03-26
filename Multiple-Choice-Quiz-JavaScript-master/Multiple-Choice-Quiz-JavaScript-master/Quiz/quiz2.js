const container = document.getElementById("container");
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choices = document.getElementById("choices");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const timer = document.getElementById("timer");
const counter = document.getElementById("counter");
const btimeGauge = document.getElementById("btimeGauge");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreContainer = document.getElementById("scoreContainer");


//tao mang cau hoi

const questions =[
    {
        question : "2*2+2:(1+1)?", 
        img : "img/html.png",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        correct : "A"
    },
    {
        question : "hai cộng hai", 
        img : "img/css.png",
        choiceA : "2",
        choiceB : "bốn",
        choiceC : "2",
        correct : "B"
    },
    {
        question : "một cộng 2?", 
        img : "img/js.png",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        correct : "C"
    }

];
let  TIMER;
let length = questions.length-1;
let index = 0;
const questionTime = 10;
l

start.addEventListener('click',startQuiz);
function startQuiz(){
    start.style.display="none";
    renderQuestion();
    quiz.style.display="block";
    renderCounter();
    TIMER=setInterval(renderCounter,1000);// bat dong bo
}
function renderQuestion(){
    const q = questions[index];
     question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src='" + q.img + "'>";
    choiceA.innerHTML = "<p>" + q.choiceA + "</p>";
    choiceB.innerHTML = "<p>" + q.choiceB + "</p>";
    choiceC.innerHTML = "<p>" + q.choiceC + "</p>";
    //console.log(q);
}


let count = 0;
function renderCounter(){// muc dich cua no la chay qua 3s la no doi cau hoi
            //  if(count==5){
            //     count = 0;
            //         if(index >=questions.length-1){
            //              clearInterval(TIMER);
            //              scoreRender();
            //           }
            //           else{
            //             index++;
            //              renderQuestion();
            //           }
            //      }
            //  else{
            //      counter.innerHTML = count;
            //      count++;
            // }
            if(count<questionTime){

            }
    }
let score = 0;
//  idInterval=setInterval(renderCounter,1000);
function checkAnswer(answer){
    // moi lan kick dap an la index tang len
    if(questions[index].correct == answer){
         score++;;
    }
    count=0;// cho count bang khong boi vi luc nay khi goi lai ham checkAnswer thi count no =3, no se chay len lai cai  renderCounter
    if(index<length){
        index++;
        renderQuestion();
    }
    else{
  //      clearInterval(idInterval);// dung lai hanh dong dem
        scoreRender();
        }
}

function  scoreRender() {
    scoreContainer.style.display = "block";

    const scorePerCent = Math.round(100 * score/questions.length);// phan so diem

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
              scoreContainer.innerHTML = "<img src="+ img +">";
              scoreContainer.innerHTML += "<p>"+ scorePerCent +"%</p>";
    quiz.style.display="none";
}

