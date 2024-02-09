//стилизовать trigget
// 1. Стилизовать trigger (красная кнопка).
// 2. При клике на trigger изменять текст на ON и цвет заднего фона на зеленый

const triggerBtn = document.querySelector('.trigger');

triggerBtn.addEventListener('click', () => {
 triggerBtn.classList.toggle('trigger_on');
 triggerBtn.innerText = triggerBtn.classList.contains('trigger_on') ? 'ON' : 'OFF';

triggerBtn.classList.contains('trigger_on') ? requestData() : console.clear();


})

// 4. При клике на кнопку отправлять запрос по ссылке https://reqres.in/api/users?page=1 и выводить в консоль полученные данные (массив с объектами)


const  requestData =()=>{ 
fetch('https://reqres.in/api/users?page=1')
.then(res => res.json())
.then(json => {
    console.log(json.data);
})	
}

//при клике на кнопку, отправлять запрос по ссылке https://reqres.in/api/users?page=1 и выводить на экран полученные данные (массив с объектами)
