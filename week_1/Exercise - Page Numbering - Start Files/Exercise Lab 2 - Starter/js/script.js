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

const perPage = 10;
var currentPage = 1;

fetch('js/users.json')
  .then(response => response.json())
  .then(data => {
    displayProfiles(data);
    displayPagination(data);
    const quantity = data.length;
    document.getElementById('contact-amount').textContent = `Total: ${quantity}`;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


function displayProfiles(data)
{
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const profiles = data.slice(startIndex, endIndex);

    const profileList = document.querySelector('.contact-list');
    profileList.innerHTML = '';

    profiles.forEach(profile => {
        const profileCard = document.createElement('li');
        profileCard.classList.add('contact-item');
        profileCard.classList.add('cf');

        profileCard.innerHTML = `
        <div class="contact-details">
        <img class="avatar" src="${profile.image}">
        <h3>${profile.name}</h3>
        </div>
        <div class="joined-details">
           <span class="date">Joined ${profile.joined}</span>
        </div>`;

        profileList.appendChild(profileCard);

    });
}

function displayPagination(data)
{
    const totalPages = Math.ceil(data.length / perPage);
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('li');
        button.innerHTML = `<a>${i}</a>`;
        
        button.addEventListener('click', () => {
            currentPage = i;
            displayProfiles(data);
        });
        pagination.appendChild(button);
    }
}

