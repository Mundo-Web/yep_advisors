const enlaces = document.querySelectorAll(".enlace");
const services = document.querySelectorAll(".services");

/* enlaces.forEach(enlace => {
    enlace.addEventListener("click", (e) => {
        services.forEach(serv => {
            if (serv.classList.contains(e.target.id)) {
                serv.classList.remove("hidden");
            } else {
                serv.classList.add("hidden");
            }
        });
    })
}) */

/* enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    services.forEach((serv) => {
      if (serv.classList.contains(e.target.id)) {
        serv.classList.remove("hidden");
        enlaces.forEach((element) => {
          if (element.id === e.target.id) {
            element.classList.add("bg-red-500");
          } else {
            element.classList.remove("bg-red-500");
          }
        });
      } else {
        serv.classList.add("hidden");
      }
    });
  });
}); */

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
