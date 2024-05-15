const studentList = document.querySelector('.student-list');
const studentItem = studentList.children;

const perPage = 10;
let currentPage = 1;

const showQuantity = (list) => {
    return list.length;
}
const quantity = showQuantity(studentItem);
document.querySelector('.total').textContent = `Total: ${quantity}`;

const showPage = (list, currentPage) => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = currentPage * perPage - 1;

    for(let i = 0 ; i < list.length ; i++)
    {
        if (i >= startIndex && i <= endIndex)
        {
            list[i].style.display = 'block';
        }
        else
        {
            list[i].style.display = 'none';
        }
    }
}
showPage(studentItem, currentPage);


const appendPageLinks = (list) => {
    const totalPages = Math.ceil(list.length / perPage);
    const itemList = document.querySelector('.pagination');

    itemList.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = i.toString();
        a.style.cursor = 'pointer';
        li.appendChild(a);
        itemList.appendChild(li);
    }
};
appendPageLinks(studentItem);

const itemButtons = document.querySelectorAll('.pagination li a');

const removeActiveClass = () => {
    itemButtons.forEach(button => {
        button.classList.remove('active');
    });
};

itemButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        removeActiveClass();
        button.classList.add('active');
        const currentPage = Number(button.textContent);
        showPage(studentItem, currentPage);
    });
});



