const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
console.log(container);
let circle = document.querySelector('.circle');
console.log(circle);

open.addEventListener('click',()=>{
    container.classList.add('show-nav');
    circle.style.transform = "rotate(260deg)";
    
})
close.addEventListener('click',()=>{
    container.classList.remove('show-nav');
    circle.style.transform = "rotate(330deg)";
})