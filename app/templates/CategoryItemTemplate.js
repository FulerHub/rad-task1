function createCategoryItemTemplate(item,activeTasks,archiveTasks) {
    return `
            <tr class="todo__item">
                <td>${"<div class='todo__img'>"+item.img+"</div>"}</td>
                <td>${item.name}</td>
                <td>${activeTasks}</td>
                <td >${archiveTasks}</td>
            </tr>`;
}

export default createCategoryItemTemplate;