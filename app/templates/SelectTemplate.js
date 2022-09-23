function createSelectTemplate(array,select) {
    let template = array.map((item,index) => `<option selected='${item.category === select & "selected"}' value="${index}">${item.name}</option>`).join('')
    return `<select name="" id="">${template}</select>`;
}

export default createSelectTemplate;