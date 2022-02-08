/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50){

     header.classList.add('scroll-header');
     header.classList.remove('transHead')
     }
      else
      { header.classList.remove('scroll-header')
      header.classList.add('transHead')
    }
}
window.addEventListener('scroll', scrollHeader)


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkwork = document.querySelectorAll('.work__item')

function activeWork(){
    linkwork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkwork.forEach(l=> l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
        1024: {
            slidesPerView: 3,
          },
      },
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
        if( document.querySelector('.nav__menu a[href*=' + sectionId + ']')){
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        }else{    
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    reset: true,
    duration: 1000,
    delay:200,
})

sr.reveal(`.home__data`, {origin: 'top', reset: false, duration: 2500,})
sr.reveal(`.home__handle`, {delay: 700, origin: 'top', reset: false, duration: 2500,})
sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: 'bottom', reset: false, duration: 2500,})
sr.reveal(`.about__description, .about__box, .services__card,
            .work__card, .contact__form-input,
            .contact__form-tag`, {origin:'left', distance: '60px'})
sr.reveal(`.contact__card, .skills__content, .about__img, .button, .work__filters,
            .testimonial__container`, {origin: 'bottom'})
sr.reveal(`.section__subtitle, .section__title`, {distance: '0px', easing: 'ease-in'})
sr.reveal(`.footer__container`, {origin: 'top', distance:'200px', duration: 2000})

/* Navigating between page*/
function goTo(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  }
