import Todo from "./state.js";
import createItemTemplate from "../templates/ItemTemplate.js";
import createSelectTemplate from "../templates/SelectTemplate.js";
import createCategoryItemTemplate from "../templates/CategoryItemTemplate.js";

const renderChange = ()=>{
    try {
        let archive = Todo.state.filter(item => item.archive);
        let archiveNone = Todo.state.filter(item => !item.archive);
        Todo.set([...archiveNone,...archive]);
        let virtualTasks = Todo.state.map((item) => createItemTemplate(item));
        virtualTasks.forEach( element => {document.getElementById('list-items').innerHTML += element;});
        Todo.rendered = document.querySelectorAll('.todo__item');
        Todo.rendered.forEach((element,index)=>{
            element.querySelector('.edit').addEventListener('click',() => Todo.edit(index));
            element.querySelector('.archive').addEventListener('click',() => Todo.archive(index));
            element.querySelector('.delete').addEventListener('click',() => Todo.delete(index));
            if(Todo.state[index].edit) element.querySelector('.item-category').innerHTML = createSelectTemplate(Todo.categories, Todo.state[index].category);
        })
    }
    catch (e) {
        console.log("Error:",e)
    }
};

const CategoryRender = ()=>{
    try {
        let virtualCategories = Todo.categories.map((category,index) => {
            let activeTodo = Todo.state.filter(item => !item.archive && item.category === index);
            let archiveTodo = Todo.state.filter(item => item.archive && item.category === index);
            return createCategoryItemTemplate(category,activeTodo.length,archiveTodo.length)
        });
        virtualCategories.forEach( element => {document.getElementById('list-category-items').innerHTML += element;})
    }
    catch (e) {
        console.log("Error:",e)
    }
};


function RenderTodo(){
    document.getElementById('list-items').innerHTML='';
    document.getElementById('list-category-items').innerHTML='';
    renderChange();
    CategoryRender();
}

export default RenderTodo;