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
      btnRight = document.querySelector('#btnRight'),
      btnLeft2 = document.querySelector('#btnLeft2'),
      btnRight2 = document.querySelector('#btnRight2')

let firstSlide = {carousel : document.querySelector('.carousel.um'),
                    slides : document.querySelectorAll('.sliderContent.um'),
                    width : document.querySelectorAll('.sliderContent.um')[0].getBoundingClientRect().width,
                    count : document.querySelectorAll('.sliderContent.um').length,
                    currentSlide : 1}
const firstSlideNext = ()=>{nextSlide(firstSlide)},
        firstSlidePrev = ()=>{prevSlide(firstSlide)}

let secondSlide = {carousel : document.querySelector('.carousel.dois'),
                    slides : document.querySelectorAll('.sliderContent.dois'),
                    width : document.querySelectorAll('.sliderContent.dois')[0].getBoundingClientRect().width,
                    count : document.querySelectorAll('.sliderContent.dois').length,
                    currentSlide : 1}
const secondSlideNext = ()=>{nextSlide(secondSlide)},
secondSlidePrev = ()=>{prevSlide(secondSlide)}

function pass (slideItems){ slideItems['carousel'].style.transform = `translateX(${-slideItems['width'] * slideItems['currentSlide']}px)`}

function nextSlide(slideItems){
    if(event.keyCode == 39 || event.keyCode == undefined){
        if(slideItems['currentSlide'] == slideItems['count']-1){ 
            return
        }else{
                slideItems['carousel'].style.transition = 'transform ease-out .6s'
                slideItems['currentSlide'] ++
                pass(slideItems)
            }
    }
}

function prevSlide(slideItems){
    if(event.keyCode == 37 || event.keyCode == undefined){
        if(slideItems['currentSlide'] == 0) return
        slideItems['carousel'].style.transition = 'transform ease-out .6s'
        slideItems['currentSlide'] --
        pass(slideItems)
    }
}

function lastSlides(slideItems){
    if(slideItems['slides'][slideItems['currentSlide']].id == 'firstCopy'){
        slideItems['carousel'].style.transition = 'transform 0s'
        slideItems['currentSlide'] = 1
        pass(slideItems)
    }else if(slideItems['slides'][slideItems['currentSlide']].id == 'lastCopy'){
        slideItems['carousel'].style.transition = 'transform 0s'
        slideItems['currentSlide'] = slideItems['count']-2
        pass(slideItems)
    }
}

function resizeSlide(slideItems){
    slideItems['width'] = document.querySelectorAll('.sliderContent')[0].getBoundingClientRect().width
    pass(slideItems)
}

/* ----------------------- */

pass(firstSlide)
pass(secondSlide)

btnMobile.addEventListener('click', toggleMenu)

linkCards.forEach((link)=>{
    link.addEventListener('click', dontFlip)
})

firstSlide['carousel'].addEventListener('mouseenter', ()=>{
    document.addEventListener('keyup', firstSlideNext)
    document.addEventListener('keyup', firstSlidePrev)
})

firstSlide['carousel'].addEventListener('mouseleave', ()=>{
    document.removeEventListener('keyup', firstSlideNext)
    document.removeEventListener('keyup', firstSlidePrev)
})

secondSlide['carousel'].addEventListener('mouseenter', ()=>{
    document.addEventListener('keyup', secondSlideNext)
    document.addEventListener('keyup', secondSlidePrev)
})

secondSlide['carousel'].addEventListener('mouseleave', ()=>{
    document.removeEventListener('keyup', secondSlideNext)
    document.removeEventListener('keyup', secondSlidePrev)
})

btnRight.addEventListener('click', firstSlideNext)
btnRight2.addEventListener('click', secondSlideNext)

btnLeft.addEventListener('click', firstSlidePrev)
btnLeft2.addEventListener('click', secondSlidePrev)

firstSlide['carousel'].addEventListener('transitionend', ()=>{lastSlides(firstSlide)})
secondSlide['carousel'].addEventListener('transitionend', ()=>{lastSlides(secondSlide)})

window.addEventListener('resize', ()=>{resizeSlide(firstSlide)})
window.addEventListener('resize', ()=>{resizeSlide(secondSlide)})
