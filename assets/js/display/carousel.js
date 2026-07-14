/* ==========================================================
   AMUI Carousel
   Version: 1.0.0
========================================================== */

document.querySelectorAll(".am-carousel").forEach((carousel) => {

    const track = carousel.querySelector(".am-carousel-track");

    const prev = carousel.querySelector(".am-carousel-prev");

    const next = carousel.querySelector(".am-carousel-next");

    const scrollAmount = 320;

    if (!track || !prev || !next) return;

    next.addEventListener("click", () => {

        track.scrollBy({

            left: scrollAmount,

            behavior: "smooth"

        });

    });

    prev.addEventListener("click", () => {

        track.scrollBy({

            left: -scrollAmount,

            behavior: "smooth"

        });

    });

});