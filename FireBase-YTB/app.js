const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');
const db = firebase.firestore();
function renderCafe(doc){
    let li = document.createElement('li');
    let name =document.createElement('span');
    let city =document.createElement('span');
    let cross= document.createElement('div');

    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);
    cafeList.appendChild(li);

    cross.addEventListener('click',(e)=>{
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('coffees').doc(id).delete().then(()=>{
             alert("da xoa");
        });
     //   db.collection('cafes').doc(id).then(msg=>console.log(msg));
         //test 5
    });
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('coffees').add({
        name : form["name"].value,
        city : form["city"].value
    }).then(()=>{
      // console.log("da them");
      alert("Da them");
    }).catch((err)=>console.log(err));
    form.name.value ='';
    form.city.value ='';

    //test 1
});


db.collection('coffees').orderBy('city').onSnapshot(snapshot =>{
    //test
    // snapshot.docs.forEach(doc =>{
    //     console.log("test2: "+ doc.id +"  "+ doc.data().name + "  "+doc.data().city);
    // });
    console.log("chay onsnapshot");
    let changes =  snapshot.docChanges();
    changes.forEach(change =>{
        if(change.type === "added"){
            renderCafe(change.doc);
        // console.log("test 3:"+change.doc.id +"  "+ change.doc.data().name + "  "+change.doc.data().city);
        }else 
        if(change.type === 'removed'){
             let li = cafeList.querySelector(`[data-id=${change.doc.id}]`);
             cafeList.removeChild(li);
            //  console.log("test 4:"+change.doc.id +"  "+ change.doc.data().name + "  "+change.doc.data().city);
        }
    });
})
  