function chgEn() {
  location.reload();
}

function chgAr(e) {
  document.querySelector(".mainaOn").classList.remove("mainaOn");
  e.target.classList.add("mainaOn");
  let langs = document.querySelectorAll("#lang");
  langs.forEach((lang) => {
    lang.textContent = lang.getAttribute("data-lang");
  });
  document.querySelector("div h1").innerHTML += ` <span>.com</span>`;
}
