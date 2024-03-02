const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
let sidebar = false;


if(bar) {
    console.log('bar ')
    bar.addEventListener('click', () =>{
        nav.style.right = "0";
        sidebar = true;
        console.log('click!')
    })
}

if(close) {
    close.addEventListener('click', () =>{
        nav.style.right = "-300px";
        sidebar= false;
        console.log('click!')
    })
}
