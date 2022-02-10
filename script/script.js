const btnMobile = document.querySelector('#mobile-button')
let cards = document.querySelector("#cards")
let linkCards = document.querySelectorAll('.linkCard')



function toggleMenu(event){
    if(event.type === 'touchstart') event.prevent.defalt
    let nav = document.querySelector('#nav')
    let links = document.querySelector('#header-links')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active') 
    event.currentTarget.setAttribute('aria-expanded', active)
    if(active){ 
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

function flipCard(){
    let front = document.querySelector(".card.front")
    let back = document.querySelector(".back")

    if(front.classList.contains("active")){
        front.classList.remove("active")
        back.classList.remove("active")
    }else{
        front.classList.add("active")
        back.classList.add("active")
    }

}

function dontFlip(){
    flipCard()
}
/* ----------------------- */


btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

linkCards.forEach((link)=>{
    link.addEventListener('click', dontFlip)
})
