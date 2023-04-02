window.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    document
      .getElementById("header__menu")
      .classList.contains("header__menu--active")
  ) {
    let menu = document.getElementById("header__menu");
    menu.classList.replace("header__menu--active", "header__menu--inactive");
  }
});

function acionaMenuHamburguer() {
  let menu = document.getElementById("header__menu");
  if (menu.classList.contains("header__menu--inactive")) {
    menu.classList.replace("header__menu--inactive", "header__menu--active");
  } else {
    menu.classList.replace("header__menu--active", "header__menu--inactive");
  }
}
