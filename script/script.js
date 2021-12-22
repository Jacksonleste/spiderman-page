const btnMobile = document.querySelector('#mobile-button')

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


/* ----------------------- */

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)
