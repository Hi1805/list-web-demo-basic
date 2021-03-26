    const url = 'http://localhost:9081/todoList';
    let btAdd = document.getElementById('bt-add');
    const btReset = document.getElementById('bt-reset');
    const btSave = document.getElementById('bt-save');
    var htmlTodolist = document.getElementById('todo');
    const input = document.getElementById('new-item');

    var list = [];
    let data = [];
    let newData=[];
    htmlTodolist.addEventListener('click',onListClicked);

    btReset.addEventListener('click',reset);
    btAdd.addEventListener('click',addItem);
   btSave.addEventListener('click',save);
   
   axios.get(url).then( async function(res){
            list=  await res.data;
            data=  await [...res.data];
            render(list);
     })
  async  function addItem(){
     let items={};
      if(input.value===''){
             alert('Name is NULL')
        }
       else {
              let newItem = {
              content :input.value
           };

              list.push(newItem);
              newData.push(newItem);
              render(list);
               input.value = '';
          }
  }
    function  reset() {
         list = [...data];
         render(data);   
    }
    function onListClicked(events){
        let button = events.target;
        if(button.dataset.id){
          let id = parseInt(button.dataset.id);
          list.splice(id,1);
          render(list);
        }
    }
    function save(){
          for(i of newData){
               axios.post(url,i);
           }
           ablert('Save is Success');
      }
   
    function render(items){
          let contents= items.map((item,index)=>`<li>${item.content}</li><button data-id=${index}>Delete</button>`);
          htmlTodolist.innerHTML=contents.join('');
     }
     