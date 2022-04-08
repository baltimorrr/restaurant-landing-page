
const showMenu = (toggleID, navID) => {
    const toggle = document.getElementById(toggleID)
    const nav = document.getElementById(navID)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

const headerLinks = document.querySelectorAll('.header__item')
const closeMenu = () => {   
    const headerMenu = document.getElementById('nav-menu') 
    headerMenu.classList.remove('show-menu')
}
headerLinks.forEach(item => item.addEventListener('click', closeMenu))


const scrollHeader = () => {
    const header = document.getElementById("header")
    if(this.scrollY >= 20) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
}
window.addEventListener("scroll", scrollHeader)


// AUTO ACTIVE SECTION LINK IN NAV WHEN TO SCROLL
const sections = document.querySelectorAll('section')
const scrollActive = () => {
    const scrollY = window.pageYOffset
    // console.log(sections);

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 200
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.header__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.header__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener("scroll", scrollActive)


const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1500,
    reset: true,
})

sr.reveal(` .home__content, .home__image, .about__image, .about__content,
            .service__subtitle, .service__title, .service__list, .menu__subtitle,
            .menu__title, .menu__list, .app__image, .app__content, .contact__content, .contact__button,
            .footer__content`, {
    interval: 200
})