// // test= async function(){
// //     var fs = require('fs');
// //     try{
// //         var data = await fs.readFile('./db.json', "utf8",(err,data1)=>{
// //             console.log(data1);
// //             return Promise.resolve(data1);
// //         });



// //     }
// //     catch(e){
// //             console.log(e);
// //     }

// // };

// // test();

// //  test1=  function(){
// //     var d= new Promise((res,rej)=>{
// //         var fs = require('fs');
// //         fs.readFile('./db.json', "utf8",(err,data1)=>{
// //            if(data1!==undefined){
// //                  console.log(data1);
// //                  res(data1);
// //             }
// //             else rej(err);
// //         });     
// //     });
// //     console.log(d);
// //     return d;
// // }
// // console.log(test1());
// // test1().then((res)=>console.log(res))
// //     .catch((rej)=>console.log(rej));


// // test2= ()=>{
// //             var t;
// //             var fs = require('fs');
// //             fs.readFile('./db1.json', "utf8",(err,data1)=>{
// //                if(data1!==undefined){
// //                      console.log(JSON.parse(data1));
// //                      t= Promise.resolve(data1);
// //                      console.log(t);
// //                 }
// //                 t= Promise.reject(err);
// //             }); 
// //             return t;    
// //     }
// // console.log(test2());
// // test2().then((res)=>console.log(res))
// //         .catch((rej)=>console.log(rej));


// // function Mouse(){
// //     this.name="tom";
// //     this.test= ()=>{
// //         console.log("this is mouse");
// //     }
// // }

// // Mouse.prototype.test1 = function(){
// //     console.log("this is mouse prototype");
// // }

// // var t = new Mouse();
// // t.test();
// // let array = [1,2,3,4,5];
// // // array.prototype.sum = function(){
// // //    return this.reduce((x,y)=>x+y);
// // // }
// // Array.prototype.sum = function(){
// //     return  this.reduce((x,y)=>x+y);
// // }
// // console.log(array.sum());
// // console.log(typeof Array);// function
// // console.log(typeof Mouse);//function
// // function Array2(){
// //     this.array = array;
// // }
// // Array2.prototype.sum2 = function(){

// // }
// // console.log(global);
// // console.log(Array());

// // fetch("https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&16=%3Crequired%3E&l180=%3Crequired%3E", {
// // 	"method": "GET",
// // 	"headers": {
// // 		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
// // 		"x-rapidapi-key": "2d404bf8afmshc395b908d392c96p1b8c67jsnf98d555ec0c5"
// // 	}
// // })
// // .then(response => {
// // 	console.log(response);
// // })
// // .catch(err => {
// // 	console.log(err);
// // });
// // function run (callback , x,y){
// // 	return callback(x,y);
// // }
// // let res = run(function (data,y) {
// // 	return data+y;
// // },1,2);
// // console.log(res);
// // function cong(a,b){
// // 	console.log("da chay cong");
// // 	return a+b;
// // }
// // function maytinh(callback,x,y){

// // 	return callback(x,y);
// // }
// // let res =  maytinh(cong,30,2){
// // 	return 3;
// // }
// // let arr = [1,2,3,5,6];
// // function  cong(x) {
// // 	return x+2;
// // }
// // // function  map(callback) {

// // // }
// // let newArr= arr.map(function (x) {
// // 		console.log(x);
// // 		return x+2;
// // })
// // // console.log(newArr);
// // Array.prototype.map3 = function () {
// // 	console.log(this.length);
// // }
// // arr.map3();
// // Array.prototype.reduce1= function(callback,z) {
// // 	var result = (typeof z!=='undefined')? z : this[0] ;
// //  	var i= (z!== undefined)? 0 :1;
// //  	for(; i< this.length;i++){
// //  		result= callback(result,this[i]);
// //  	}
// //  	return result;
// // };
// // var initialValue = 0;
// // var sum = [{x: 1}, {x:2}, {x:3}].reduce1(
// //     (accumulator, currentValue) => accumulator + currentValue.x
// //     ,{});
// // 	var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// // 	var countedNames = names.reduce(function (allNames, name) { 
// // 		console.log(allNames);
// // 	  if (name in allNames) {
// // 		allNames[name]++;
// // 	  }
// // 	  else {
// // 		allNames[name] = 1;
// // 	  }
// // 	  return allNames;
// // 	}, {});
// // let x =5;
// // // this.x = "100";
// // function Example(){
// // 	this.x = "name";
// // 	this.example = function(){
// // 		// this.x = "name2";
// // 		 test=()=>{
// // 			console.log(this.x);
// // 		}
// // 		test();
// // 	}
// // }
// // let ex = new Example();
// // ex.example();// undfined

// // console.log(typeof new Array);
// // Array.prototype.map2 = "di";
// // function Mouse(){
// // 	this.name = "meo";
// // 	this.age = 10;
// // 	this.sua =function () {
// // 		console.log("meo meo");
// // 	}
// // }
// // // Mouse.prototype.go = "di";
// // var meo = new Mouse();
// // let cho = new Mouse();
// // Mouse.prototype.sua2 = function () {
// // 	console.log("meo meo");
// // }
// // let mouse = {
// // 	name :"alo 12",
// // 	age :"123"
// // }
// // let arr  =[
// // 	{name :"meo",age : 123},
// // 	{name : "gau",age :12}
// // ]
// // // mouse1 = mouse;//sha
// // mouse1 = Object.assign({},mouse);
// // mouse1.name = " meo meo";
// // // console.log(mouse1);
// // // console.log(mouse);
// // // console.log(mouse1==mouse);
// // let arr2 = arr;
// // arr[0]
// class Promise1{
// 	constructor(callback){
// 		this.promiseStatus = "Pending" ;
// 		this.promiseValue ;
// 		callback(this.resolve1.bind(this),this.reject1.bind(this));//res,rej
// 	}
// 	resolve1(value){
// 		this.promiseStatus="resolved";
// 		this.promiseValue=value;
// 		return this;
// 	}	
// 	reject1(value){
// 		this.promiseStatus="reject";
// 		this.promiseValue = value;
// 		return this;
// 	}
// 	then1(callback){
// 		if(this.promiseStatus=="resolved") {
//             var check = callback.bind(this)(this.promiseValue); // goi ham callback
//             this.promiseValue = typeof check =='object' ?  (check.promiseValue || check )  : check; 
//            // console.log(this.promiseValue);
//           //   this.promiseStatus = (typeof check == "object") ? (check.promiseStatus ||this.promiseStatus)  : this.promiseStatus;
//           //  !this.promiseValue
//             this.promiseStatus = typeof check == "object" && check.promiseStatus /*muc dich de xet co phai la promise hay k  */ 
//             ? check.promiseStatus : this.promiseStatus;
//         }
// 		return this;
// 	}
// 	catch1(callback){
// 		if(this.promiseStatus=="reject") 
// 			this.promiseValue =  callback.bind(this)(this.promiseValue);
// 		return this;
// 	}
// }
// var obj = {
//   name :"huy"
// }
// let test = Promise.resolve("123");
// test.then(res=>obj).then(r=>console.log(r));

// const test2 = new Promise1((res, rej) => {
//         return res("123");
//     })
//     //let test3 = Promise.resolve("123");   
// test2.then1(res => obj).then1(res2 => {
//     console.log("Da chay res 2");
//     console.log(res2);
// });
// console.log(!2);
//console.log(test3 == 'Promise');

// let add2 = function(a,b){
// 	return new Promise(function(res,rej){
// 			if(typeof a!='number' || typeof b!='number')
// 				return rej('khong phai so');
// 		res(a+b);
//  	})
// }

// let x = add2(5,6).then(function(x){
//   console.log(x);
//   console.log(arguments);
// })
// .catch(()=>console.log("loi"));
// let x =add2(2,3).then(x=>x);
// // console.log(x);// <Pending>

// // function Snapdot() {
// //     this.docs=[
// //       {
// //           id : "ngau nhien",
// //           data : function(){
// //               return {name:"huy",city:"quang tri"}
// //           }
// //       },
// //       {
// //         id : "ngau nhien",
// //         data : function(){
// //             return {name:"trung",city:"da nang"}
// //         }
// //       },
// //       {
// //         id : "ngau nhien",
// //         data : function(){
// //             return {name:"chinh",city:"thai binh"}
// //         }
// //       }
// //     ]
// // }
// // Snapdot.prototype.forEach= function (callback) {
// //     this.docs.forEach((doc)=>{
// //         callback(doc);
// //     });
// // }

// // let snapdot = new Snapdot();
// // snapdot.forEach(function(doc){
// //     console.log(doc.data());
// // });
// // console.log("========================");
// // console.log(snapdot);
// // console.log("========================");
// // snapdot.docs.forEach((doc)=>{
// //     console.log(doc.data());
// // })

// // //=============================



// // function Mouse(){
// //     this.name = " huy",
// //     this.age = 10;

// // }
// // let mickey = new Mouse();
// // // Mouse.prototype.isAlive=true;
// // // console.log(mickey.prototype === mickey._proto_);
// // // console.log(Mouse.prototype);
// // Mouse.prototype.name = "huy222";
// // console.log(mickey.name);
// // // Object.prototype.prototype = {};
// // console.log(typeof mickey.prototype);
// // Initialize Firebase
//   // console.log(firebase);

//   // //firebase.analytics();


//   // const Entry = [];
//   // // db.collection("coffees").get().then((snapDot)=>{
//   // //     snapDot.docs.forEach((doc)=>{
//   // //       let entry = {
//   // //           city : doc.data().city,
//   // //           coffee : doc.data().coffee
//   // //       }
//   // //       Entry.push(entry);
//   // //     })
//   // // })

//   // let example = {
//   //   city : "sài gòn ",
//   //   coffee : "Viet nam moblie"
//   // }
//   // // Entry.push(example);


//   //   db.collection("coffees").onSnapshot((snapshot)=>{ // de hien thi , cai nao da xoa va da them
//   //          let changes = snapshot.docChanges();
//   //          changes.forEach(Element=>{ // snapShot
//   //             switch(Element.type){
//   //               case "removed":
//   //                  alert("Removed",Element.doc.id)
//   //                   break;
//   //               case "added":
//   //                   console.log("added" , Element.doc.id);
//   //             }
//   //          })
//   //   })
//   //   console.log(Entry);
//   //   function delete1(id){
//   //     console.log("123");
//   //    console.log( db.collection("coffees").doc("tnHhx4zL55FWTrSUgUi"));
//   //     db.collection("coffees").doc(id).delete();
//   //   }
//   //   db.collection("coffees").get().then((snapDot)=>{
//   //     // console.log(snapDot.docChanges);
//   //       snapDot.docs.forEach((doc)=>{
//   //           if(doc.data().coffee =="Viet nam moblie")
//   //               delete1(doc.id);
//   //       })
//   //   })
// // let  List_Coffee = [];
// // function add1(){
// //       if(!name.value ||!city.value ){
// //           alert("Err")
// //            return ;
// //       }
// //       console.log("Da chay");
// //       let coffees = {
// //              coffee: name.value,
// //             city : city.value
// //       };
// //       addCoffee(coffees);
// //         city.value  ="";
// //        name.value  ="";
// // }

// // function deleteCoffee(){
// //   db.collection("coffees").get().then((snapDot)=>{
// //         // console.log(snapDot.docChanges);
// //           snapDot.docs.forEach((doc)=>{
// //               if(doc.data().city)
// //                   delete1(doc.id);
// //           })
// //       })
// // }
// // function delete1(id){
// //       db.collection("coffees").doc(id).delete();
// // }
// // deleteCoffee();
// // function displayActive(){
// //       db.collection("coffees").onSnapshot((snapshot)=>{ // de hien thi , cai nao da xoa va da them
// //            let changes = snapshot.docChanges();
// //            changes.forEach(Element=>{ // snapShot
// //               switch(Element.type){
// //                 case "removed":
// //                    alert("Removed",Element.doc.id)
// //                     break;
// //                 case "added":
// //                     alert("added" , Element.doc.id);
// //               }
// //            })
// //     })
// // }
// // function Mouse(){
// //     this.name = "meo meo";
// // }
// // let mouse = new Mouse();
// // console.log(typeof mouse);

// function test(callback){
//     callback(1,2,3,6,5);
// }
// let x = test(function(){
//   console.log("cua Ar",arguments)
// });

// // function sum(){
// //   console.log(arguments);
// // }
// //  sum(1,2,3,5,6)


let Arr = [1, 2, 3, 5, 6];
// console.log(typeof Arr =='array');
// console.log(typeof Arr);

// let Arr2 = {
// 	0:1,
// 	1:2,
// 	2:3,
// 	4:5
// }
// let object ={
// 	name : "huy",
// 	age :100
// }

// console.log(Arr["3"]);
// console.log(Arr2[0]);
// // function Arr2(){
// // 	this.a = [1,2,3]
// // }
// // console.log( Arr2);
// // console.log(object["0"]);
function onSnapshot(callback1, callback2){
    let listener=rules.read==true;
        if(listener){ 
            // false
            return  callback1();//snapshot
        }
        if(listener==false)
             return callback2();//undefined
        if(true){
            return a();
        }
        else
            return b();
        if(true){
            return c();
        }
        return d();
}
//stack he thong 
// cai 1  : 
function test1(){
    console.log("Dang goi test 1");
    return false;
}
function test(name){
    if(name==true){
    //     name = test1()
        name = test1();
    }
    if(name == false) {
        console.log(2);
        console.log(3);
    }
}
console.log(test(true));
//test(true);

function test (n){
 //   console.log(n);
    if(n>0){
       return   test(n-1)+test(n-2);
    }
    console.log("hello");
    return 3;
}
console.log(test(3));


// let test = {
//     id: 1,
//     name: 2
// }
// let arr1 = [1, 2, 3];
// let string = "abc";
// let arr2 = [...arr1]
// let arr3 = [...string]
// console.log(arr3);
class abc{
   Sayhi= function(){

   }

   Sayhi(){

   }
}
var dog = {
    a :  function(){

    }
   
}
function abc(){
    b = function(){

    }
    Sayhi(){
        
    }
}