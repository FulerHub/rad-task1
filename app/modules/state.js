import RenderTodo from "./render.js";

function Task(name, content, category=0,date) {
    this.name = name;
    this.created = Date.now();
    this.category = category;
    this.content = content;
    this.date = date;
    this.archive=false;
    this.edit =false;
}

export class Todo{
    constructor(){
        this.state = [
            {
                name:"Shopping List",
                created: 1650736070923,
                category:0,
                content:"Tomatoes,bread",
                edit:false,
                archive:true
            },
            {
                name:"The theory of evolute",
                created: 1650736070924,
                category:2,
                content:" I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021” ",
                edit:false,
                archive:false
            },
            {
                name:"New Feature",
                created: 1650736070925,
                category:1,
                content:" I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021” ",
                edit:false,
                archive:true
            },
            {
                name:"William Gaddis",
                created: 1650736070926,
                category:0,
                content:"Power doesn't gonna have a dentist appointment on the 3/5/2021,",
                edit:false,
                archive:false
            },
            {
                name:"Books",
                created: 1650736070927,
                category:2,
                content:"The Learn Startup",
                edit:false,
                archive:false
            },
        ];
        this.rendered = [];
        this.categories= [
            {img:'<i class="fa fa-shopping-cart" aria-hidden="true"></i>', name:"Task"},
            {img:'<i class="fa fa-bullhorn" aria-hidden="true"></i>', name:"Random Thought"},
            {img:'<i class="fa fa-lightbulb-o" aria-hidden="true"></i>', name:"Idea"},
        ];
    }
    set(data){
        this.state = data;
    }
    add(name,content,category,date){
        this.state.push(new Task(name,content,parseInt(category),date))
    }
    edit(id){
        try {
            if(this.state[id].edit){
                let name = this.rendered[id].querySelector('.item-name').value;
                let category = this.rendered[id].querySelector('.item-category select').value;
                let content = this.rendered[id].querySelector('.item-content').value;
                this.state = this.state.map((item,index) => index === id ?  {...item,name: name,category:Number(category),content: content} : item);
            }
            this.state = this.state.map((item,index) => index === id ?  {...item, edit: !item.edit } : item);
            RenderTodo();
        }
        catch (e) {
            console.log("Error:",e)
        }
    }
    archive(id){
        try {
            this.state = this.state.map((item,index) => index === id ?  {...item, archive: !item.archive } : item);
            RenderTodo();
        }
        catch (e) {
            console.log("Error:",e)
        }
    }
    delete(id){
        try {
            this.state = this.state.filter((item,index) => index != id);
            RenderTodo();
        }
        catch (e) {
            console.log("Error:",e)
        }
    }
}

export default new Todo();