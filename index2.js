const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Nuevo elemento";
  lista.appendChild(li);
});