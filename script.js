window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var heroSection = document.querySelector('.hero');
    var heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

    if (window.scrollY >= heroBottom) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});