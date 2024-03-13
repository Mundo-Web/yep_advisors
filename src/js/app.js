const wealthLink = document.getElementById("wealth");
const finanzas = document.getElementById("finanzas");
const estructuracion = document.getElementById("estructuracion");
const services = document.querySelector(".services");
const img_patrimonial = document.querySelector(".img_patrimonial");
const animation_servicios = document.querySelector(".animation_servicios");
const image_animation = document.querySelector(".image_animation");
const flechaWeath = document.querySelector(".flecha-weath");
const flechaFinanzas = document.querySelector(".flecha-finanzas");
const flechaEstructura = document.querySelector(".flecha-estructura");

document.addEventListener("DOMContentLoaded", () => {
  flechaFinanzas.classList.add("hidden");
  flechaEstructura.classList.add("hidden");
});

loadEventListeners();

function loadEventListeners() {
  wealthLink.addEventListener("click", loadWeath);
  finanzas.addEventListener("click", loadFinanzas);
  estructuracion.addEventListener("click", loadEstructuracion);
}

function showInfoYep(title, first, second, pathImage, imageAlt) {
  const animation = document.createElement("div");
  animation.className = "animate-fade-up animate-once animate-duration-1000";

  const h2_weathHtml = document.createElement("p");
  h2_weathHtml.classList.add(
    "font-semibold",
    "font-inter",
    "text-subtitle",
    "pb-5",
    "leading-none",
    "md:leading-tight"
  );
  h2_weathHtml.textContent = title;

  /* ---- */

  const div_weath_info = document.createElement("div");
  div_weath_info.classList.add("flex", "flex-col", "gap-5");

  const firstParagraph = document.createElement("p");
  firstParagraph.classList.add(
    "font-regular",
    "font-inter",
    "text-regularSize"
  );
  firstParagraph.textContent = first;

  const secondParagraph = document.createElement("p");
  secondParagraph.classList.add(
    "font-regular",
    "font-inter",
    "text-regularSize"
  );
  secondParagraph.textContent = second;

  const a = document.createElement("a");
  a.className =
    "flex justify-center items-center gap-2 rounded-xl px-4 bg-colorButton w-44 mt-5 cursor-pointer";
  a.href = "#formulario";

  const button = document.createElement("button");
  button.type = "button";
  button.className =
    "py-3 font-semibold font-inter text-basicSize text-white border-lg";
  button.textContent = "Quiero Invertir";

  const img = document.createElement("img");
  img.src = "./images/img/trend-up-01.png";
  img.alt = "flecha";
  img.className = "w-6 h-6";

  animation.appendChild(h2_weathHtml);
  div_weath_info.appendChild(firstParagraph);
  div_weath_info.appendChild(secondParagraph);
  a.appendChild(button);
  a.appendChild(img);
  animation.appendChild(div_weath_info);
  animation.appendChild(a);

  services.appendChild(animation);

  /* imagenes  */
  const servicesAnimation = document.createElement("div");
  servicesAnimation.className =
    "animate-fade-up animate-once animate-duration-1000";

  const div_empty = document.createElement("div");
  div_empty.className = "md:basis-2/5";

  const div_fill = document.createElement("div");
  div_fill.className = "md:basis-3/5 md:ml-40";

  const image = document.createElement("img");
  image.src = pathImage;
  image.alt = imageAlt;
  image.className = "w-full";

  servicesAnimation.appendChild(div_empty);
  div_fill.appendChild(image);
  servicesAnimation.appendChild(div_fill);
  img_patrimonial.appendChild(servicesAnimation);
}

const firstWeath =
  "Yep Advisors, entendemos que cada individuo tiene objetivos financieros únicos. Nuestro servicio de Wealth Management ofrece soluciones personalizadas diseñadas para proteger y hacer tu patrimonio.";

const secondWeath =
  "Desde la planificación de la jubilación hasta la gestión de inversiones, nuestro enfoque centrado en el cliente garantiza que tus necesidades estén siempre en el centro de nuestras decisiones. Confía en nosotros para ayudarte a alcanzar tus metas financieras con confianza y tranquilidad.";

const firstEstructuracion =
  "Una estructura financiera sólida es la base de cualquier estrategia empresarial exitosa. En Yep Advisors, te ofrecemos soluciones estratégicas que te permiten optimizar tu estructura financiera para maximizar el rendimietno y minimizar los riesgos.";

const secondEstructuracion =
  "Desde la gestión de deudas hasta la planificación fiscal, nuestro enfoque personalizado te proporciona las herramientas necesarias para tomar decisiones informadas y ancanzar tus metas financieras a largo plazo con confianza.";

const firstFinanzas =
  "En el mundo empresarial, el éxito depende en gran medida de la capacidad para tomar decisiones financieras estratégicas. Con Yep Advisors, tienes un socio confiable que te brinda el conocimiento y la experiencia necesarios para impulsar el crecimiento y la rentabilidad de tu empresa.";

const secondFinanzas =
  "Desde la evaluación de inversines hasta la reestructuración financiera, nuestro equipo de expertos está aquí para ayudarte a navegar por los desafíos financieros y alcanzar tus objetivos empresariales.";

function loadWeath() {
  cleanHTML(); // Limpia el contenido antes de agregar nuevos elementos

  showInfoYep(
    "Gestión Patrimonial Personalizada",
    firstWeath,
    secondWeath,
    "./images/img/patrimonio_testimonial.png",
    "patrimonio testimonial"
  );

  //const serviceWeath = document.querySelector(".service-weath");
  if (!flechaWeath.classList.contains("hidden")) {
    flechaWeath.classList.remove("hidden");
    flechaWeath.classList.add("block");
    flechaFinanzas.classList.add("hidden");
    flechaEstructura.classList.add("hidden");
  } else {
    flechaWeath.classList.remove("hidden");
    flechaWeath.classList.add("block");
    flechaFinanzas.classList.add("hidden");
    flechaEstructura.classList.add("hidden");
  }
}

function loadFinanzas() {
  cleanHTML(); // Limpia el contenido antes de agregar nuevos elementos

  showInfoYep(
    "Potenciando tu Empresa hacia el Éxitos",
    firstFinanzas,
    secondFinanzas,
    "./images/img/finanzas_testimonial_imagen.png",
    "finanzas"
  );

  if (!flechaFinanzas.classList.contains("hidden")) {
    flechaFinanzas.classList.remove("hidden");
    flechaFinanzas.classList.add("block");
    flechaWeath.classList.add("hidden");
    flechaEstructura.classList.add("hidden");
  } else {
    flechaFinanzas.classList.remove("hidden");
    flechaFinanzas.classList.add("block");
    flechaWeath.classList.add("hidden");
    flechaEstructura.classList.add("hidden");
  }
}

function loadEstructuracion() {
  cleanHTML(); // Limpia el contenido antes de agregar nuevos elementos

  showInfoYep(
    "Optimización Financiera Estratégica",
    firstEstructuracion,
    secondEstructuracion,
    "./images/img/estructuracion_imagen.png",
    "estructuracion"
  );

  if (!flechaEstructura.classList.contains("hidden")) {
    flechaEstructura.classList.remove("hidden");
    flechaEstructura.classList.add("block");
    flechaWeath.classList.add("hidden");
    flechaFinanzas.classList.add("hidden");
  } else {
    flechaEstructura.classList.remove("hidden");
    flechaEstructura.classList.add("block");
    flechaWeath.classList.add("hidden");
    flechaFinanzas.classList.add("hidden");
  }
}

function cleanHTML() {
  img_patrimonial.innerHTML = "";
  services.innerHTML = "";
}
