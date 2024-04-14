document.addEventListener("DOMContentLoaded", function () {
  const enlaces = document.querySelectorAll(".enlace");
  const services = document.querySelectorAll(".services");

  // Función para manejar el clic en un enlace
  function handleClick(e) {
    const targetId = e.target.id;
    services.forEach((serv) => {
      const hasClass = serv.classList.contains(targetId);
      serv.classList.toggle("hidden", !hasClass);
    });

    enlaces.forEach((enlace) => {
      const isSelected = enlace.id === targetId;
      enlace.classList.toggle("text-colorSubtitleLittle", isSelected);
      enlace.classList.toggle("text-littleTitle", isSelected);
      enlace.classList.toggle("font-semibold", isSelected);
      enlace.classList.toggle("text-regularSize", !isSelected);
      enlace.classList.toggle("font-regular", !isSelected);
    });
  }

  // Agregar el event listener a cada enlace
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", handleClick);
  });

  /* carrousel */

  const swiper = new Swiper(".logos", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: false,
    loop: true,
    initialSlide: 0,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});

function show() {
  document.querySelector(".hamburger").classList.toggle("open");
  document.querySelector(".navigation").classList.toggle("active");
}
