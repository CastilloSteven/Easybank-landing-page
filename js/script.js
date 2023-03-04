const navIconOpen = document.querySelector('.nav__responsive--open')
const navIconClose = document.querySelector('.nav__responsive--close')
const navUl = document.querySelector('.nav__ul')

navIconOpen.addEventListener('click',()=>{
    navIconOpen.style.display = 'none'
    navIconClose.style.display = 'block'
    navUl.style.display = 'block'
})

navIconClose.addEventListener('click',()=>{
    navIconClose.style.display = 'none'
    navIconOpen.style.display = 'block'
    navUl.style.display = 'none'
})









