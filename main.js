const inp = document.getElementById('inp');
const btn = document.getElementById('btn');
const text = document.querySelector('.text');
const id = new Date().getSeconds().toString();

btn.addEventListener('click', () => {
    AddLocalStorage(id, inp.value)
    // alert('qoshildi')
})



function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}

function AddLocalStorage(id, value) {
    const todo = { id, value };
    let items = getLocalStorage();
    items.push(todo);
    localStorage.setItem('list', JSON.stringify(items));
    location.reload()
} 

function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter((item) => {
        if(item.id !== id) {
            return item
        }
    })
    localStorage.setItem('list', JSON.stringify(items))
}



window.addEventListener('DOMContentLoaded', () => {
    let store = getLocalStorage();
    let display = store.map((item) => {
        return `
            <h2>${item.value}</h2>
            <button>delete</button>
        `
    })
    display = display.join(' ');
    text.innerHTML = display
})


