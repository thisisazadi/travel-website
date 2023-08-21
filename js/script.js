const swiper = new Swiper(".swiper", {
    sliderPerView: 1,
    effect: "creative",
    creativeEffect: {
        prev: {
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    loop: true,
    direction: "horizontal",

    autoplay: {
        delay: 5000,
    },

    speed: 400,
    spaceBetween: 100,
});