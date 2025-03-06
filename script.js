const addtask=document.getElementById('addtask')
const todo=document.getElementById('todo')
const addfield=document.getElementById('addfield')
const container=document.getElementById('container')

// todo.addEventListener('dragable',true)

function deleteitem(element){
    element.remove()
}

function editing(taskElement) {
    const newTaskText = prompt('Edit your task:', taskElement.firstChild.textContent);
    if (newTaskText) {
        taskElement.firstChild.textContent = newTaskText; // Updates the task text
    }
}

addfield.addEventListener('click',()=>{
    const namenewfield=prompt('add new field')
    
    if (namenewfield) {
        const color=prompt('choose color of heading')
        const heading=document.createElement('h2')
        heading.textContent=namenewfield
        heading.style.color=color

        const newfield=document.createElement('div')
        newfield.className='item'

        newfield.appendChild(heading)
        container.appendChild(newfield)

        const del=document.createElement('button')
        del.innerHTML='Del'
        del.className='deletebtn'

        heading.appendChild(del)

        del.addEventListener('click',()=>deleteitem(newfield))
        const allitem = document.querySelectorAll('.item');

        allitem.forEach((item) => {
            item.addEventListener('dragover', (event) => {
                event.preventDefault();
                const flyingitem = document.getElementsByClassName('items flying')[0];
                console.log(flyingitem, 'something is there');
                if (flyingitem) {
                    item.appendChild(flyingitem);
                }
            });
        });
            }
    })

addtask.addEventListener('click',()=>{
    const newtask=prompt('add new task')
    if(newtask){
        const newitem=document.createElement('div')
        newitem.className='items'
        newitem.innerHTML=newtask
        todo.appendChild(newitem)

        const deletebtn=document.createElement('button')
        deletebtn.innerHTML="Delete"
        deletebtn.classList='deletebtn'
        newitem.appendChild(deletebtn)

        const editbtn=document.createElement('button')
        editbtn.innerHTML="Edit"
        editbtn.classList='editbtn'
        newitem.appendChild(editbtn)



        newitem.setAttribute('draggable','true')
        newitem.addEventListener('dragstart',()=>{

            newitem.classList.add('flying');
        })
        newitem.addEventListener('dragend', () => {
            newitem.classList.remove('flying');
        });



        deletebtn.addEventListener('click', () => deleteitem(newitem));

        editbtn.addEventListener('click', () => editing(newitem))


    }
})

const allitem = document.querySelectorAll('.item');

allitem.forEach((item) => {
    item.addEventListener('dragover', (event) => {
        event.preventDefault();
        const flyingitem = document.getElementsByClassName('items flying')[0];
        console.log(flyingitem, 'something is there');
        if (flyingitem) {
            item.appendChild(flyingitem);
        }
    });
});


