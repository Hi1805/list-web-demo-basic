// var people=[
//     {name: "Thanh", age: 19},
//     {name: "Trung", age: 20},
//     {name: "Nha", age: 18},
//     {name: "hang", age: 21},
//     {name: "My", age: 25},
//     {name: "Long", age: 19},
//     {name: "Hai", age: 23},
//     {name: "Hung", age: 22},
//     {name: "Thao", age: 21}
    
// ]   
//     const htmlForms = document.getElementById('form');
//     var addI= document.getElementById("bt-Add");
//     var select= document.getElementById("select");
//     addI.addEventListener("click",add);
//     select.addEventListener("change",onSelect);
//     const tab= document.getElementById("tb").innerHTML;


// function add(){
//     var name = document.getElementById('in-name');
//     var age= document.getElementById('in-age');
//     if( name.value=='number')
//         alert('Name is not number')

//     var item={
//         name :name.value,
//         age :Number.parseInt(age.value)
//     };
    
//      people.push(item);
//     name.value="";
//     age.value="";
//     render(people);
//     console.log("xxxx");
// }

// function onSelect(){
//     if(select.value==="all"){
//         reder(people);
//     }else{
//         var x= Number.parseInt(select.value);
//         peopleSeclected= people.filter(person=>{
//             return person.age=== x;
//         })
//         reder(peopleSeclected,tab);
//     }
// };

// function render(people,table){
    
//     var content = people.map(person=>{
//         return "<tr><td>"+person.name+ "</td><td>" + person.age + "</td></tr>";
//     });
//     document.getElementById("tb").innerHTML= tab+ content.join('');
// }
// render(people);

test1 = function(){
    var fs = require('fs');
    return new Promise((res,rej)=>{
        fs.readFile('./db.json','utf8',(err,data)=>{
            if(data)
                  res(data);
            rej(err);
        })
    })
}

// console.log(test1());
//test1().then(res=>console.log(res));

test2 = function(){
    var fs = require('fs');
    return  fs.readFile('./db.json','utf8',(err,data)=>{
            if(data)
                 return Promise.resolve(data);
            return Promise.reject(err);
        })
    }
test3 = function(){
    var fs = require('fs');
    let pro =0;
    return  fs.readFile('./db.json','utf8',(err,data)=>{
        pro = Promise.resolve(data);
    })
    console.log(pro);
    return pro;
}
// //console.log(test3());
// cong =function(a,b){
//     return a+b;
// }
// tinhtoan=function(cong){
//      callback();
// }
// test4 = function(){
//     return  tinhtoan((err,data)=>{
//         return  data;
//     })
// }
console.log(typeof test3());