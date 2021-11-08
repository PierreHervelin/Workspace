class Task{
    title
    time
    date
    place
    desc
    importance
    constructor(title,time,date,place,desc,importance){
        this.title=title
        this.time=time
        this.date=date
        this.place=place
        this.desc=desc
        this.importance=importance
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