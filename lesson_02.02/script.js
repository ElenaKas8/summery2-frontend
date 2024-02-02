//promises
// let a = 10;

// setTimeout(() => {
//     a=30;
//     console.log(a);

// },3000);

// console.log(a);

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(a=10);
//     }, 2000)
// })
// promise.then(() => console.log(a));


// fetch-всегда возвращает промисс

 fetch("https://jsonplaceholder.typicode.com/users")
 .then(response => response.json())
.then(users => {
    renderUsers(users);
    
});


// 1. Написать функцию renderUsers(), которая принимает массив с объектами в качестве аргумента и для каждого объекта массива создает див с двумя параграфами (name и username пользователя)
//добавить карточке пользователя класс user_card 
function renderUsers(users) {
    const usersContainer = document.querySelector('.users_container');
    users.forEach(user => {
        const div = document.createElement('div');
        const name = document.createElement('p');
        const username = document.createElement('p');
        const email = document.createElement('a');
        const adress = document.createElement('p');

        adress.innerText = `Adress: ${user.address.zipcode},${user.address.city}, ${user.address.street}, ${user.address.suite}`;

        email.innerHTML = `Email: <a href="mailto:${user.email}">${user.email}</a>`;

        // " ВАРИАНТ"

// emailElem.setAttribute('href', `mailto:${el.email}`);
//emailElem.href = `mailto:${el.email}`;


        name.innerText = `Name: ${user.name}`; //	user.name;    
        username.innerText = `Username: ${user.username}`;
        
        //		user.username;
        div.style.backgroundColor = user.name[0].toUpperCase() === 'C' ? 'lightblue' : 'lightgreen';
        div.append(name, username, email, adress);
        usersContainer.append(div);
        div.classList.add('users_card');       
       
    }) 
    
}
// " ВАРИАНТ"
// email.href="mailto:${user.email}";

//если имя пользователя начинается на букву c-то покраситьзадний фон в голубой иначе в светло зеленый

//в карточку пользовалеля добавить почту и сделать ее кликабельной(a,mailto:)


//в карточку пользователя добавить формат с адрессом (индекс,город,улица,дом)



