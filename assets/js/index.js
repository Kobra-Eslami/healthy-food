const header = document.querySelector('.header');
const btnNav = document.querySelector('.btn-mobile-nav');
btnNav.addEventListener('click', function () {
    header.classList.toggle('nav-open');
});

// smooth scrolling animation
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = link.getAttribute('href');

        //scroll back to top
        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
        // scroll to other links
        if (href !== "#" && href.startsWith('#')) {
            const section = document.querySelector(href);
            section.scrollIntoView({behavior: 'smooth'})
        }

        // close mobile navigation
        if (link.classList.contains('main-nav-link')) {
            header.classList.toggle('nav-open');
        }
    })

})

// sticky navigation
const section_hero = document.querySelector('.section-hero');
const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false){
        document.body.classList.add('sticky');
    }
    if (ent.isIntersecting === true){
        document.body.classList.remove('sticky');
    }

}, {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin:'-80px'
})
obs.observe(section_hero)
