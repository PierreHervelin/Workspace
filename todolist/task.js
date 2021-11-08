class Task{
    title
    time
    date
    place
    desc
    importance
    complete=false
    constructor(title,time,date,place,desc,importance){
        this.title=title
        this.time=time
        this.date=date
        this.place=place
        this.desc=desc
        this.importance=importance

        const container=document.querySelector('.task-container')
        const div=document.createElement('div')
        div.classList.add('task')
        div.classList.add('row')
        div.classList.add(this.importance)
        div.innerHTML=this.getHTML()

        div.lastElementChild.addEventListener('click',()=>{
            div.remove()
        })
        div.children[5].addEventListener('change',(e)=>{
            this.complete=!this.complete

            if(this.complete){
                div.classList.add('complete')
                return
            }
            div.classList.remove('complete')
        })

        container.append(div)
    }
    getHTML(){
        let html=''

        html+=`<p>${this.title}</p>`
        html+=`<p>${this.place}</p>`
        html+=`<p>${this.date}</p>`
        html+=`<p>${this.time}</p>`
        html+=`<p>${this.desc}</p>`
        html+=`<input type="checkbox">`
        html+=`<button>+</button>`

        return html
    }
}