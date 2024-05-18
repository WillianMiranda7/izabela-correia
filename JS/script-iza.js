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





// Skills script

// Variável para manter o controle da habilidade ativa atual
let activeSkill = null;

// Função para alternar a classe 'active' nas habilidades
function toggleSkill(skillElement) {
    // Verifica se há uma habilidade ativa atual e se é diferente da habilidade selecionada
    if (activeSkill && activeSkill !== skillElement) {
        // Fecha a habilidade ativa atual
        activeSkill.classList.remove('active');
    }
    
    // Alterna a habilidade atual
    skillElement.classList.toggle('active');

    // Atualiza a habilidade ativa
    if (skillElement.classList.contains('active')) {
        activeSkill = skillElement;
    } else {
        activeSkill = null;
    }
}

// Adiciona event listeners para todas as `divs` com a classe `photoWithTxtSkills`
document.querySelectorAll('.photoWithTxtSkills').forEach((div) => {
    // Encontra o elemento `<p>` com a classe `skill` dentro da `div`
    const skillElement = div.querySelector('p.skill');
    
    // Adiciona um event listener à `div` para alternar a habilidade ao clicar nela
    div.addEventListener('click', (event) => {
        // Impede que o clique seja tratado como um clique fora da `skill`
        event.stopPropagation();
        // Alterna a habilidade correspondente
        toggleSkill(skillElement);
    });
});

// Função para fechar a habilidade ativa ao clicar fora dela
function closeActiveSkill(event) {
    // Verifica se o clique ocorreu fora da habilidade ativa
    if (activeSkill && !activeSkill.contains(event.target)) {
        // Fecha a habilidade ativa
        activeSkill.classList.remove('active');
        activeSkill = null;
    }
}

// Adiciona um event listener ao documento para detectar cliques fora das `divs` com `photoWithTxtSkills`
document.addEventListener('click', closeActiveSkill);