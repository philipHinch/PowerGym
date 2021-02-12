// MENU VARIABLES
let menu = document.querySelector('.menu')
let btnCross = document.querySelector('.btn-cross')
let btnHamburger = document.querySelector('.hamburger-btn')

//SCROLL ANIMATION VARIABLES
const cardContainer = document.querySelector('.card-container')

//TESTIMONIAL VARIABLES
let testimonialsContainer = document.querySelector('.card')
let testimonialText = document.querySelector('.testimonial-text')
let userImage = document.querySelector('.testimonial-photo')
let userName = document.querySelector('.testimonial-username')

let idx = 1

const testimonials = [
    {
        name: 'Melvin Pierce',
        photo: 'https://randomuser.me/api/portraits/men/92.jpg',
        text: 'metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis',
    },
    {
        name: 'Brianna Vasquez',
        photo: 'https://randomuser.me/api/portraits/women/11.jpg',
        text: 'metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in',
    },
    {
        name: 'Carole Wade',
        photo: 'https://randomuser.me/api/portraits/women/77.jpg',
        text: 'metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non consectetur a erat nam at lectus urna duis convallis',
    },
    {
        name: 'Nicholas Brown',
        photo: 'https://randomuser.me/api/portraits/men/17.jpg',
        text: 'metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat',
    },
    {
        name: 'Dylan Collins',
        photo: 'https://randomuser.me/api/portraits/men/91.jpg',
        text: 'metus lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis',
    },
    {
        name: 'Byron Hall',
        photo: 'https://randomuser.me/api/portraits/men/78.jpg',
        text: 'metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis',
    },
]

// FUNCTIONS

setInterval(updateTestimonials, 10000)

checkCardContainer()

function updateTestimonials() {
    const { name, photo, text } = testimonials[idx]

    testimonialText.innerHTML = text
    userImage.src = photo
    userName.innerHTML = name

    idx++

    if (idx > testimonials.length - 1) {
        idx = 0
    }

}

function checkCardContainer() {
    const triggerBottom = window.innerHeight

    const boxTop = cardContainer.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
        cardContainer.classList.add('show')
    } else {
        cardContainer.classList.remove('show')
    }
}

// EVENT LISTENERS

btnHamburger.addEventListener('click', () => {
    menu.classList.add('show')
    btnCross.classList.add('show')
})

btnCross.addEventListener('click', () => {
    menu.classList.remove('show')
})

window.addEventListener('scroll', checkCardContainer)

