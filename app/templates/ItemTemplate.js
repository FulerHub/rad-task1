import Todo from "../modules/state.js";
import getDateFromText from "../modules/scripts.js";
function createItemTemplate(item) {
    return `
            <tr class="todo__item ${item.archive ? 'archive' : ''}">
                <td >${"<div class='todo__img'>"+Todo.categories[item.category].img+"</div>"}</td>
                <td>${item.edit ? "<input class='item-name' type='text' value='"+item.name+"'>" : item.name}</td>
                <td>${new Date(item.created).toDateString()}</td>
                <td >${item.edit ? "<div class='item-category'></div>": Todo.categories[item.category].name}</td>
                <td>${item.edit ? "<textarea class='item-content'>"+item.content+"</textarea>": item.content}</td>
                <td>${getDateFromText(item.content)}</td>
                <td class="todo__bar">
                    <i class="fa fa-pencil edit" aria-hidden="true"></i>
                    <i class="fa fa-archive archive" aria-hidden="true"></i>
                    <i class="fa fa-trash delete" aria-hidden="true"></i>
                </td>
            </tr>`;
}

export default createItemTemplate;