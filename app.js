const navSlide = () => {

    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-menu');

    hamburger.addEventListener(('click'), () => {

        // Aparição do menu hamburger
        nav.classList.toggle('nav-active');

        // Animação do menu hamburger
        hamburger.classList.toggle('toggle');

    })
}

navSlide();