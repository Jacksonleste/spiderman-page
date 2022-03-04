const btnMobile = document.querySelector('#mobile-button')
let cards = document.querySelector("#cards"),
    linkCards = document.querySelectorAll('.linkCard')



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

const btnLeft = document.querySelector('#btnLeft'),
      btnRight = document.querySelector('#btnRight')

let carousel = document.querySelector('#carousel'),
    slides = document.querySelectorAll('.sliderContent'),
    width = slides[0].getBoundingClientRect().width,
    count = slides.length,
    slideAtual = 1

function pass (){ carousel.style.transform = `translateX(${-width * slideAtual}px)`}

pass()

function nextSlide(){
    if(event.keyCode == 39 || event.keyCode == undefined){
        if(slideAtual == count-1) return
        carousel.style.transition = 'transform ease-out .6s'
        slideAtual ++
        pass()
    }
}

function prevSlide(){
    if(event.keyCode == 37 || event.keyCode == undefined){
        if(slideAtual == 0) return
        carousel.style.transition = 'transform ease-out .6s'
        slideAtual --
        pass()
    }
}

function lastSlides(){
    if(slides[slideAtual].id == 'firstCopy'){
        carousel.style.transition = 'transform 0s'
        slideAtual = 1
        pass()
    }else if(slides[slideAtual].id == 'lastCopy'){
        carousel.style.transition = 'transform 0s'
        slideAtual = count-2
        pass()
    }
}

function resizeSlide(){
    width = slides[0].getBoundingClientRect().width
    pass()
}
/* ----------------------- */


btnMobile.addEventListener('click', toggleMenu)

linkCards.forEach((link)=>{
    link.addEventListener('click', dontFlip)
})

carousel.addEventListener('mouseenter', ()=>{
    document.addEventListener('keydown', nextSlide)
    document.addEventListener('keydown', prevSlide)
})

carousel.addEventListener('mouseleave', ()=>{
    document.removeEventListener('keydown', nextSlide)
    document.removeEventListener('keydown', prevSlide)
})

btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)

carousel.addEventListener('transitionend', lastSlides)
window.addEventListener('resize', resizeSlide)
