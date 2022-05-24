
window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
   
}

/* ATIVA O MENU */

function activateMenuAtCurrentSection(section) {

    // LINHA ALVO
    const targetLine = scrollY + innerHeight / 2   

    // VERIFICAR SE A SEÇÃO PASSOU DA LINHA
    // QUAIS DADOS VOU PRECISAR?

    const sectionTop = home.offsetTop  // o topo da seção
    const sectionHeight = home.offsetHeight  // a altura da seção
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop     // o topo da seção chegou ou ultrapassou a linha alvo

    // informações dos dados e lógica
    console.log(
      'O topo da seção chegou ou passou da linha?',
      sectionTopReachrPassedTargetLine
    )



    // ----------------------------------------------------------

    // verificar se a base está abaixo da linha alvo
    // quais dados vou precisar

    // a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight

    // o final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

    // LIMITES DA SEÇÃO
    const sectionBounaries = sectionTopReachOrPassedTargetLine &&  !sectionEndPassedTargetLine

    console.log(sectionBounaries)

    const sectionId = section.getAttribute('id')
    const menuElement = documeny.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBounaries)
        menuElement.classList.add('active')
    }


function showNavOnScroll() {
  if (scrollY > 0){
    navigation.classLista.add('scroll')
  }else {
    navigation.classLista.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550){
    navigation.classLista.add('show')
  }else {
    showBackToTopOnScroll.classLista.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

//Conforme você vai rolando a tela, vai aparecendo as coisas da tela 
ScrollReveral({
  origin: 'top',
  distance: '30px',
  duration: 700,

//Ordem de aparição dos cards
}).reveal(`
          #home, 
          #home img,
          #home .stats,
          #services,
          #services header,
          #services .card
          #about,
          #about header,
          #about .content
          `);
