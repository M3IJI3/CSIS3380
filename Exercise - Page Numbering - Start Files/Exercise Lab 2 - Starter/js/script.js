// const contactList = document.querySelector('.contact-list');
// const contactItem = contactList.children;

// const perPage = 10;
// var page = 1;

// const showPage = (list, page) => {
//     for (i=0 ; i < list.length ; i++)
//     {
//         if(i<(page)*10 || i>(page)*10+9) {
//             list[1].style.display = "none"
//         }
//         else
//         {
//             list[1].style.display = "block"
//         }
//     }
// }

// console.log(contactItem)

// showPage(contactItem, page)

fetch('js/users.json')
  .then(response => response.json())
  .then(data => {
    console.log(data[0].name);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


