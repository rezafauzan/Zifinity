const navbar = document.getElementsByTagName('nav')[0]
const navbar_toggler = document.querySelector('nav .navbar-toggler')
const navbar_item = document.querySelector('nav .nav-list')

navbar_toggler.addEventListener('click', () => {
    navbar_item.classList.toggle('show')
    navbar_toggler.classList.toggle('show')
})

const section_navbar = document.querySelector('.section-nav')
const section_navbar_toggler = document.querySelector('.section-nav #section-nav-toggler')

section_navbar_toggler.addEventListener('click', () => {

    if(section_navbar.classList[1] == 'show'){
        section_navbar_toggler.innerHTML = '&lt'
    } else {
        section_navbar_toggler.innerHTML = '&gt'
    }

    section_navbar.classList.toggle('show')

})

function handleScroll() {
    // Check if the page has been scrolled beyond 50px from the top
    if (window.scrollY > 50) {
        // Add 'scrolled' class to navbar
        navbar.classList.add('scrolled')
    } else {
        // Remove 'scrolled' class from navbar
        navbar.classList.remove('scrolled')
    }
}

// Listen for the scroll event and call handleScroll function
window.addEventListener('scroll', handleScroll)