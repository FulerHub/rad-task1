import Todo from "./modules/state.js";
import createSelectTemplate from "./templates/SelectTemplate.js";
import getDateFromText from "./modules/scripts.js";
import RenderTodo from "./modules/render.js";
import clearModalForm from "./modules/modal.js";
import "./modules/modal.js";


function initialRender() {
    document.querySelector('.modal__select').innerHTML = createSelectTemplate(Todo.categories);
    RenderTodo();
}

document.querySelector('.button-create').addEventListener('click', () => {
    try{
        let name = document.querySelector('#name').value;
        let content = document.querySelector('#content').value;
        let category = document.querySelector('#category select').value;
        let date = getDateFromText(content);
        Todo.add(name,content,category,date);
        RenderTodo();
        clearModalForm();
    }
    catch (e) {
        console.log("Error:",e)
    }
});

document.addEventListener("DOMContentLoaded", initialRender);