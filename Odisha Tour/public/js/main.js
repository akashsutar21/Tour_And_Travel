const ham = document.querySelector('.ham-menu')
// 3 ta dot ku click kala pare nav bar jo dekhajauchi
const nav = document.querySelector('.navbar')

ham.addEventListener("click",()=>{
    ham.classList.toggle('active')
    nav.classList.toggle('active')
})
// WEBSITE LOADING ANIMATION
const loadder = document.getElementById('preloadder')

window.addEventListener("load",()=>{
    loadder.style.display = "none";
}); 






