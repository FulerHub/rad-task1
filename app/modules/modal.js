function clearModalForm(){
    document.querySelector('#name').value='';
    document.querySelector('#content').value='';
    document.querySelector('.modal').classList.remove("active");
}

document.querySelector('.button-modal').addEventListener('click', () => {
    document.querySelector('.modal').classList.add("active");
});

document.querySelector('.modal__close').addEventListener('click', () => {
    document.querySelector('.modal').classList.remove("active");
});

export default clearModalForm;