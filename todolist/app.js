const titleInput=document.querySelector('input#title')
const placeInput=document.querySelector('input#place')
const timeInput=document.querySelector('input#time')
const dateInput=document.querySelector('input#date')
const descInput=document.querySelector('input#desc')
const colorInput=document.querySelectorAll('.color')
let taskElement=document.querySelectorAll('.task')

let importance=null

const container=document.querySelector('.task-container')

const tasks=[]

//------- EVENTS :

colorInput.forEach(item=>{
    item.addEventListener('click',()=>{
        const children=item.parentNode.children

        if(item.classList.contains('active')){
            item.classList.remove('active')
            importance=null
        }else{
            item.classList.add('active')
            importance=item.id
        }

        for(let child of children){
            if(!item.isEqualNode(child)){
                if(child.classList.contains('active')){
                    child.classList.remove('active')
                }
            }
        }
    })
})

taskElement.forEach(item=>{
    item.lastElementChild.addEventListener('click',()=>{
        item.remove()
    })
})

//------- FUNCTIONS :

const newTask=()=>{
    let title=titleInput.value,
        place=placeInput.value,
        time=timeInput.value,
        date=dateInput.value,
        desc=descInput.value

    if(title&&place&&time&&desc&&importance){
        tasks.push(new Task(title,time,date,place,desc,importance))
        build(tasks[tasks.length-1])
        resetForm()
        
        const task=container.lastElementChild
        task.lastElementChild.addEventListener('click',()=>{
            task.remove()
        })
        
    }
}

const build=(task)=>{
    const div=document.createElement('div')
    div.classList.add('task')
    div.classList.add('row')
    div.classList.add(task.importance)
    div.innerHTML=task.getHTML()

    container.append(div)
}

const displayForm=()=>{
    const form=document.querySelector('.form')

    form.classList.add('active')
}
const undisplayForm=()=>{
    const form=document.querySelector('.form')

    form.classList.remove('active')
}

const resetForm=()=>{
    const inputs=document.querySelectorAll('.form input')

    inputs.forEach(item=>{
        item.value=''
    })

    colorInput.forEach(item=>{
        item.classList.remove('active')
    })
}