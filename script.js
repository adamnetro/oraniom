let toRts = document.querySelectorAll(".toRight");
let toLfs = document.querySelectorAll(".toLeft");

function lang() {
  if (localStorage.getItem("ar")) {
    document.querySelector('.ar').click()
  }
}
lang();

function chgEn() {
  location.reload();
  localStorage.clear();
}

function chgAr(e) {
  document.querySelector(".mainaOn").classList.remove("mainaOn");
  e.target.classList.add("mainaOn");
  let langs = document.querySelectorAll("#lang");
  langs.forEach((lang) => {
    lang.textContent = lang.getAttribute("data-lang");
  });
  document.querySelector("div h1").innerHTML += ` <span>.com</span>`;
  toRts.forEach((toRt) => {
    toRt.classList.replace("toRight", "toLeft");
  });
  toLfs.forEach((toLf) => {
    toLf.classList.replace("toLeft", "toRight");
  });

  localStorage.setItem("ar", "On");
}

function scrollDown() {
  window.scrollTo({
    top: 477,
  });
}

window.onscroll = function () {
  toRts.forEach((toRt) => {
    if (window.scrollY >= toRt.offsetTop - 500) {
      toRt.classList.add("toRightOn");
    }
  });
  toLfs.forEach((toLf) => {
    if (window.scrollY >= toLf.offsetTop - 500) {
      toLf.classList.add("toLeftOn");
    }
  });
};
