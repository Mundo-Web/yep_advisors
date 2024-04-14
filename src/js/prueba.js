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
