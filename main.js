/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: false,
  keyboard: false,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})


/* Função ler mais */

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos"; 
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction4() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("myBtn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction5() {
  var dots = document.getElementById("dots5");
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("myBtn5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction6() {
  var dots = document.getElementById("dots6");
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("myBtn6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction7() {
  var dots = document.getElementById("dots7");
  var moreText = document.getElementById("more7");
  var btnText = document.getElementById("myBtn7");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction8() {
  var dots = document.getElementById("dots8");
  var moreText = document.getElementById("more8");
  var btnText = document.getElementById("myBtn8");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction9() {
  var dots = document.getElementById("dots9");
  var moreText = document.getElementById("more9");
  var btnText = document.getElementById("myBtn9");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction10() {
  var dots = document.getElementById("dots10");
  var moreText = document.getElementById("more10");
  var btnText = document.getElementById("myBtn10");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction11() {
  var dots = document.getElementById("dots11");
  var moreText = document.getElementById("more11");
  var btnText = document.getElementById("myBtn11");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction12() {
  var dots = document.getElementById("dots12");
  var moreText = document.getElementById("more12");
  var btnText = document.getElementById("myBtn12");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction13() {
  var dots = document.getElementById("dots13");
  var moreText = document.getElementById("more13");
  var btnText = document.getElementById("myBtn13");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction14() {
  var dots = document.getElementById("dots14");
  var moreText = document.getElementById("more14");
  var btnText = document.getElementById("myBtn14");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction15() {
  var dots = document.getElementById("dots15");
  var moreText = document.getElementById("more15");
  var btnText = document.getElementById("myBtn15");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction16() {
  var dots = document.getElementById("dots16");
  var moreText = document.getElementById("more16");
  var btnText = document.getElementById("myBtn16");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction17() {
  var dots = document.getElementById("dots17");
  var moreText = document.getElementById("more17");
  var btnText = document.getElementById("myBtn17");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction18() {
  var dots = document.getElementById("dots18");
  var moreText = document.getElementById("more18");
  var btnText = document.getElementById("myBtn18");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction19() {
  var dots = document.getElementById("dots19");
  var moreText = document.getElementById("more19");
  var btnText = document.getElementById("myBtn19");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction20() {
  var dots = document.getElementById("dots20");
  var moreText = document.getElementById("more20");
  var btnText = document.getElementById("myBtn20");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction21() {
  var dots = document.getElementById("dots21");
  var moreText = document.getElementById("more21");
  var btnText = document.getElementById("myBtn21");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction22() {
  var dots = document.getElementById("dots22");
  var moreText = document.getElementById("more22");
  var btnText = document.getElementById("myBtn22");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction23() {
  var dots = document.getElementById("dots23");
  var moreText = document.getElementById("more23");
  var btnText = document.getElementById("myBtn23");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction24() {
  var dots = document.getElementById("dots24");
  var moreText = document.getElementById("more24");
  var btnText = document.getElementById("myBtn24");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction25() {
  var dots = document.getElementById("dots25");
  var moreText = document.getElementById("more25");
  var btnText = document.getElementById("myBtn25");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction26() {
  var dots = document.getElementById("dots26");
  var moreText = document.getElementById("more26");
  var btnText = document.getElementById("myBtn26");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction27() {
  var dots = document.getElementById("dots27");
  var moreText = document.getElementById("more27");
  var btnText = document.getElementById("myBtn27");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction28() {
  var dots = document.getElementById("dots28");
  var moreText = document.getElementById("more28");
  var btnText = document.getElementById("myBtn28");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction29() {
  var dots = document.getElementById("dots29");
  var moreText = document.getElementById("more29");
  var btnText = document.getElementById("myBtn29");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction30() {
  var dots = document.getElementById("dots30");
  var moreText = document.getElementById("more30");
  var btnText = document.getElementById("myBtn30");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction31() {
  var dots = document.getElementById("dots31");
  var moreText = document.getElementById("more31");
  var btnText = document.getElementById("myBtn31");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction32() {
  var dots = document.getElementById("dots32");
  var moreText = document.getElementById("more32");
  var btnText = document.getElementById("myBtn32");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction33() {
  var dots = document.getElementById("dots33");
  var moreText = document.getElementById("more33");
  var btnText = document.getElementById("myBtn33");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}


function myFunction34() {
  var dots = document.getElementById("dots34");
  var moreText = document.getElementById("more34");
  var btnText = document.getElementById("myBtn34");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction35() {
  var dots = document.getElementById("dots35");
  var moreText = document.getElementById("more35");
  var btnText = document.getElementById("myBtn35");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction36() {
  var dots = document.getElementById("dots36");
  var moreText = document.getElementById("more36");
  var btnText = document.getElementById("myBtn36");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction37() {
  var dots = document.getElementById("dots37");
  var moreText = document.getElementById("more37");
  var btnText = document.getElementById("myBtn37");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}


function myFunction38() {
  var dots = document.getElementById("dots38");
  var moreText = document.getElementById("more38");
  var btnText = document.getElementById("myBtn38");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction39() {
  var dots = document.getElementById("dots39");
  var moreText = document.getElementById("more39");
  var btnText = document.getElementById("myBtn39");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction40() {
  var dots = document.getElementById("dots40");
  var moreText = document.getElementById("more40");
  var btnText = document.getElementById("myBtn40");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction41() {
  var dots = document.getElementById("dots41");
  var moreText = document.getElementById("more41");
  var btnText = document.getElementById("myBtn41");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction42() {
  var dots = document.getElementById("dots42");
  var moreText = document.getElementById("more42");
  var btnText = document.getElementById("myBtn42");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction43() {
  var dots = document.getElementById("dots43");
  var moreText = document.getElementById("more43");
  var btnText = document.getElementById("myBtn43");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction44() {
  var dots = document.getElementById("dots44");
  var moreText = document.getElementById("more44");
  var btnText = document.getElementById("myBtn44");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction45() {
  var dots = document.getElementById("dots45");
  var moreText = document.getElementById("more45");
  var btnText = document.getElementById("myBtn45");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction46() {
  var dots = document.getElementById("dots46");
  var moreText = document.getElementById("more46");
  var btnText = document.getElementById("myBtn46");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction47() {
  var dots = document.getElementById("dots47");
  var moreText = document.getElementById("more47");
  var btnText = document.getElementById("myBtn47");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction48() {
  var dots = document.getElementById("dots48");
  var moreText = document.getElementById("more48");
  var btnText = document.getElementById("myBtn48");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction49() {
  var dots = document.getElementById("dots49");
  var moreText = document.getElementById("more49");
  var btnText = document.getElementById("myBtn49");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction50() {
  var dots = document.getElementById("dots50");
  var moreText = document.getElementById("more50");
  var btnText = document.getElementById("myBtn50");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction51() {
  var dots = document.getElementById("dots51");
  var moreText = document.getElementById("more51");
  var btnText = document.getElementById("myBtn51");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction52() {
  var dots = document.getElementById("dots52");
  var moreText = document.getElementById("more52");
  var btnText = document.getElementById("myBtn52");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction53() {
  var dots = document.getElementById("dots53");
  var moreText = document.getElementById("more53");
  var btnText = document.getElementById("myBtn53");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction54() {
  var dots = document.getElementById("dots54");
  var moreText = document.getElementById("more54");
  var btnText = document.getElementById("myBtn54");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction55() {
  var dots = document.getElementById("dots55");
  var moreText = document.getElementById("more55");
  var btnText = document.getElementById("myBtn55");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction56() {
  var dots = document.getElementById("dots56");
  var moreText = document.getElementById("more56");
  var btnText = document.getElementById("myBtn56");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction57() {
  var dots = document.getElementById("dots57");
  var moreText = document.getElementById("more57");
  var btnText = document.getElementById("myBtn57");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction58() {
  var dots = document.getElementById("dots58");
  var moreText = document.getElementById("more58");
  var btnText = document.getElementById("myBtn58");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction59() {
  var dots = document.getElementById("dots59");
  var moreText = document.getElementById("more59");
  var btnText = document.getElementById("myBtn59");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction60() {
  var dots = document.getElementById("dots60");
  var moreText = document.getElementById("more60");
  var btnText = document.getElementById("myBtn60");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction61() {
  var dots = document.getElementById("dots61");
  var moreText = document.getElementById("more61");
  var btnText = document.getElementById("myBtn61");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction62() {
  var dots = document.getElementById("dots62");
  var moreText = document.getElementById("more62");
  var btnText = document.getElementById("myBtn62");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction63() {
  var dots = document.getElementById("dots63");
  var moreText = document.getElementById("more63");
  var btnText = document.getElementById("myBtn63");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction64() {
  var dots = document.getElementById("dots64");
  var moreText = document.getElementById("more64");
  var btnText = document.getElementById("myBtn64");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction65() {
  var dots = document.getElementById("dots65");
  var moreText = document.getElementById("more65");
  var btnText = document.getElementById("myBtn65");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction66() {
  var dots = document.getElementById("dots66");
  var moreText = document.getElementById("more66");
  var btnText = document.getElementById("myBtn66");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction67() {
  var dots = document.getElementById("dots67");
  var moreText = document.getElementById("more67");
  var btnText = document.getElementById("myBtn67");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction68() {
  var dots = document.getElementById("dots68");
  var moreText = document.getElementById("more68");
  var btnText = document.getElementById("myBtn68");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction69() {
  var dots = document.getElementById("dots69");
  var moreText = document.getElementById("more69");
  var btnText = document.getElementById("myBtn69");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction70() {
  var dots = document.getElementById("dots70");
  var moreText = document.getElementById("more70");
  var btnText = document.getElementById("myBtn70");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction71() {
  var dots = document.getElementById("dots71");
  var moreText = document.getElementById("more71");
  var btnText = document.getElementById("myBtn71");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction72() {
  var dots = document.getElementById("dots72");
  var moreText = document.getElementById("more72");
  var btnText = document.getElementById("myBtn72");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction73() {
  var dots = document.getElementById("dots73");
  var moreText = document.getElementById("more73");
  var btnText = document.getElementById("myBtn73");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction74() {
  var dots = document.getElementById("dots74");
  var moreText = document.getElementById("more74");
  var btnText = document.getElementById("myBtn74");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction75() {
  var dots = document.getElementById("dots75");
  var moreText = document.getElementById("more75");
  var btnText = document.getElementById("myBtn75");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction76() {
  var dots = document.getElementById("dots76");
  var moreText = document.getElementById("more76");
  var btnText = document.getElementById("myBtn76");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction77() {
  var dots = document.getElementById("dots77");
  var moreText = document.getElementById("more77");
  var btnText = document.getElementById("myBtn77");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction78() {
  var dots = document.getElementById("dots78");
  var moreText = document.getElementById("more78");
  var btnText = document.getElementById("myBtn78");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}


function myFunction79() {
  var dots = document.getElementById("dots79");
  var moreText = document.getElementById("more79");
  var btnText = document.getElementById("myBtn79");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction80() {
  var dots = document.getElementById("dots80");
  var moreText = document.getElementById("more80");
  var btnText = document.getElementById("myBtn80");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction81() {
  var dots = document.getElementById("dots81");
  var moreText = document.getElementById("more81");
  var btnText = document.getElementById("myBtn81");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction82() {
  var dots = document.getElementById("dots82");
  var moreText = document.getElementById("more82");
  var btnText = document.getElementById("myBtn82");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction83() {
  var dots = document.getElementById("dots83");
  var moreText = document.getElementById("more83");
  var btnText = document.getElementById("myBtn83");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction84() {
  var dots = document.getElementById("dots84");
  var moreText = document.getElementById("more84");
  var btnText = document.getElementById("myBtn84");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction85() {
  var dots = document.getElementById("dots85");
  var moreText = document.getElementById("more85");
  var btnText = document.getElementById("myBtn85");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction86() {
  var dots = document.getElementById("dots86");
  var moreText = document.getElementById("more86");
  var btnText = document.getElementById("myBtn86");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction87() {
  var dots = document.getElementById("dots87");
  var moreText = document.getElementById("more87");
  var btnText = document.getElementById("myBtn87");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction88() {
  var dots = document.getElementById("dots88");
  var moreText = document.getElementById("more88");
  var btnText = document.getElementById("myBtn88");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction89() {
  var dots = document.getElementById("dots89");
  var moreText = document.getElementById("more89");
  var btnText = document.getElementById("myBtn89");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction90() {
  var dots = document.getElementById("dots90");
  var moreText = document.getElementById("more90");
  var btnText = document.getElementById("myBtn90");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction91() {
  var dots = document.getElementById("dots91");
  var moreText = document.getElementById("more91");
  var btnText = document.getElementById("myBtn91");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}

function myFunction92() {
  var dots = document.getElementById("dots92");
  var moreText = document.getElementById("more92");
  var btnText = document.getElementById("myBtn92");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler Mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler Menos";
    moreText.style.display = "inline";
  }
}