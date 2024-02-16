const switcher= document.querySelector ('.switcher');
const nav = document.querySelector ('nav');
const header = document.querySelector ('header');
const body = document.querySelector ('body');
const burger = document.querySelector('.burger');
const popup = document.querySelector('.popup');
const account = document.querySelector('.account');


account.addEventListener('click', ()=>{
    popup.classList.add ('opened');
    
})
burger.addEventListener('click', () => {
    nav.classList.toggle ('active');
});


switcher.addEventListener ('click', ()=>{
    if (body.classList.contains ('dark')) {
        body.classList.remove ('dark');
        header.classList.remove ('dark');
        nav.classList.remove ('dark');
    } else {
        body.classList.add ('dark');
        header.classList.add ('dark_tema');
        nav.classList.add ('dark_nav');
    }


 switcher.classList.toggle ('fa-toggle-on');
 switcher.classList.toggle ('fa-toggle-off');
 header.classList.toggle ('dark_mode');
 
})

