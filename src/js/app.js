const wealth = document.getElementById("wealth");
const finanzas = document.getElementById("finanzas");
const estructuracion = document.getElementById("estructuracion");
const services = document.querySelectorAll(".services");
const imagesServicios = document.querySelectorAll(".images-servicios");

// Clases a agregar y quitar
const addClasses = [
  "text-colorSubtitleLittle",
  "font-semibold",
  "text-littleTitle",
];
const removeClasses = [
  "font-regular",
  "text-regularSize",
  "text-colorSubtitleLittle",
  "font-semibold",
  "text-littleTitle",
];

loadEventListeners();

function loadEventListeners() {
  wealth.addEventListener("click", showWealthManagement);
  finanzas.addEventListener("click", showFinanzas);
  estructuracion.addEventListener("click", showEstructuras);
}

function showFinanzas() {

  services[0].classList.add("hidden");
  services[1].classList.remove("hidden");
  services[2].classList.add("hidden");

  imagesServicios[0].classList.add("hidden");
  imagesServicios[1].classList.remove("hidden");
  imagesServicios[2].classList.add("hidden");


  updateElementClasses(finanzas, addClasses, removeClasses);
  deleteElementClasses(wealth, estructuracion);
}

function showWealthManagement() {
  console.log("wealth");

  services[0].classList.remove("hidden");
  services[1].classList.add("hidden");
  services[2].classList.add("hidden");

  imagesServicios[0].classList.remove("hidden");
  imagesServicios[1].classList.add("hidden");
  imagesServicios[2].classList.add("hidden");

 

  updateElementClasses(wealth, addClasses, removeClasses);
  deleteElementClasses(finanzas, estructuracion);
}

function showEstructuras() {
  console.log("estructuras");

  services[0].classList.add("hidden");
  services[1].classList.add("hidden");
  services[2].classList.remove("hidden");

  imagesServicios[0].classList.add("hidden");
  imagesServicios[1].classList.add("hidden");
  imagesServicios[2].classList.remove("hidden");

  // Llamar a la función para actualizar las clases
  updateElementClasses(estructuracion, addClasses, removeClasses);
  deleteElementClasses(finanzas, wealth);
}

function updateElementClasses(element, addClasses, removeClasses) {
  element.classList.remove(...removeClasses);
  element.classList.add(...addClasses);
}

function deleteElementClasses(elementFinanza, elementWealth) {
  elementFinanza.classList.remove(...addClasses);
  elementWealth.classList.remove(...addClasses);
}

function show() {
  document.querySelector(".hamburger").classList.toggle("open");
  document.querySelector(".navigation").classList.toggle("active");
}
