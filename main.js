const input = document.querySelector('input');
const btnAdd = document.getElementById('button-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

btnAdd.addEventListener('click', (e) => {

    const textTarea = input.value;
    const li = document.createElement('li');
    const p = document.createElement('p');

    if (textTarea !== "") {
        p.textContent = textTarea ;

        li.appendChild(p);
        li.className= "list-group-item"
        li.appendChild(addDeleteBtn());
       
        ul.appendChild(li);
       
        input.value = "";

        empty.style.display = "none";
    }
})
function addDeleteBtn() {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X", className = "btn-Delete ";
    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll('li');

        if (items.length === 0) {
            empty.style.display = "block";
        }
    });
    return deleteBtn;

}