const wealthLink = document.getElementById("wealth");
const services = document.querySelector(".services");
loadEventListeners();

function loadEventListeners() {
  wealthLink.addEventListener("click", loadWeath);
}

function loadWeath() {
  const h2_weathHtml = document.createElement("p");
  h2_weathHtml.classList.add(
    "font-semibold",
    "font-inter",
    "text-subtitle",
    "pb-5",
    "leading-none",
    "md:leading-tight"
  );
  h2_weathHtml.textContent = "Gestion Patrimonial Personalizada";

  console.log(h2_weathHtml);
  const div_weath_info = document.createElement("div");
  div_weath_info.classList.add("basis-3/5", "flex", "flex-col", "gap-5");
}
