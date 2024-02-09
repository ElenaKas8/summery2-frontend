// 1. Написать функцию, которая принимает в качестве аргумента число (1 или 2) и отправляет get-запрос по ссылке https://reqres.in/api/users?page=X и выводит в консоль полученные по запросу данны
//2. Написать функцию renderUsers(), которая примает массив с объектами и создает для каждого объекта карточку пользователя (автар, имя + фамилия, email кликабельный) и добавляет эти карточки в div.cards_container


const requestUsers = num => {
    fetch(`https://reqres.in/api/users?page=${num}`)
      .then(res => res.json())
      .then(json => {
          renderUsers(json.data); // вызываем функцию renderUsers после получения данных
      });
}


let cardsContainer = document.querySelector('.cards_container');

//деструктуризация массива
const [button1, button2] = document.querySelectorAll('.triggers div');
const renderUsers = users => {
    clearCardsContainer();
  users.forEach(el => {
    
    const cardElem = document.createElement('div');
    const avatarElem = document.createElement('img');
    const nameElem = document.createElement('p');
    const emailElem = document.createElement('a');

    nameElem.innerText = `${el.first_name} ${el.last_name}`;
    emailElem.innerText = el.email;

    emailElem.href = `mailto:${el.email}`;

    avatarElem.src = el.avatar;
    avatarElem.alt = `${el.first_name} ${el.last_name}`;

    cardElem.classList.add('users_card'); 

    cardElem.style.backgroundColor = el.first_name[0].toLowerCase() === 'e' ? 'lightgreen' : 'lightblue';

    cardElem.append(avatarElem, nameElem, emailElem);
    cardsContainer.append(cardElem);
    
  });
}

requestUsers(1);

 
// 3. Стилизовать карточки (border, border-radius, padding)
// 4. Стилизовать контейнер с карточками (грид на 3 колонки)
// 5. Если имя человека начинается на букву E/e, то цвет заднего фона сделать светло-зеленым, в ином случае - светло-голубой

//// 7. При перезагрузке страницы прогружаются юзеры с page 1. При клике на 1 - прогружаются юзеры с page 1 (вызывается функция renderUsers(1)). При клике на 2 - прогружаются юзеры с page 2 (вызывается функция renderUsers(2))
//Перед рендером карточек нужно очищать контейнер cards_container

// const button1 = document.querySelector('.button1');
// const button2 = document.querySelector('.button2');

// button1.addEventListener('click', () => {
//     requestUsers(1);

// })

// button2.addEventListener('click', () => {
//     requestUsers(2);
// })

function clearCardsContainer() {
    cardsContainer.innerHTML = '';  

}
// как написать код без классов

// const [button1, button2] = document.querySelectorAll('.triggers div');










