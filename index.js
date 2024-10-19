// Haven't cluttered the css or html with too many tags and styles so as to keep things readable
// Most of the "Dynamic" stuff on the website is done with javascript

console.log("Welcome to a happy place :)");

// Auto scroller
const perks_list = document.querySelector('.perk-list');
const translate_speed = 50;
const first_child = perks_list.children.item(0);
const perks = document.querySelector('.perks');

let position = 0;

setInterval(() => {
    position += translate_speed;
    if (first_child.getBoundingClientRect().x > perks.getBoundingClientRect().x)
        position = 0;

    perks_list.animate(
        [
            { transform: `translateX(${position}px)`}
        ],
        {
            duration: 1000,
            fill: "forwards",
            easing: 'ease-in-out'
        }
    )
}, 2000);

// Scroll in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show');
        else entry.target.classList.remove('show');
    })
})

const hidden_elements = document.querySelectorAll('.hidden');
hidden_elements.forEach((element) => observer.observe(element));

// Parllax effect
//  TODO:
const handle = (tag, speed) => {
    let element = document.querySelector(tag);

    window.addEventListener('scroll', () => {
        let distance = window.scrollY;
    })
}
