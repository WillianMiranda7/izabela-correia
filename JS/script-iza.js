// Menu button script
const menuUl = document.getElementById("menuUl")
const menuBt = document.getElementById("menuHamburger")
const menuItems = menuUl.querySelectorAll('li')

function toggleMenu(){
    const isActiveBt = menuBt.classList.contains('activate')
    const isActiveUl = menuUl.classList.contains('activateUl')

    menuBt.classList.toggle('activate', !isActiveBt)
    menuUl.classList.toggle('activateUl', !isActiveUl)
}


menuBt.addEventListener('click', toggleMenu)


function desactiveMenu(){
    if(menuBt.classList.contains('activate') || menuUl.classList.contains('activateUl')){
       
        menuBt.classList.remove('activate')
        menuUl.classList.remove('activateUl')
    }
}

document.addEventListener('click', function(event) {
    const clickedInsideMenu = menuUl.contains(event.target) || menuBt.contains(event.target)
    
    // Se o clique ocorreu fora do menu e do botão
    if (!clickedInsideMenu) {
        desactiveMenu()
    }
})


menuItems.forEach(item => {
    item.addEventListener('click', desactiveMenu)
})