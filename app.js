const button1 = document.querySelector('button')
const input = document.querySelector('input')
const list1 = document.querySelector('ul')

function addPlanItem(){
    const item = document.createElement('li')
    item.textContent = input.value
    list1.appendChild(item)
}

button1.addEventListener('click', addPlanItem)