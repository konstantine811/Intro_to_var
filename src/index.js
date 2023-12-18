document.addEventListener("DOMContentLoaded", documentOnReady);

function documentOnReady() {
  const checkThemeEl = document.getElementById("checkTheme");

  const black = "#151515";
  const white = "#aaaaaa";
  checkThemeEl.addEventListener("change", function () {
    console.log(checkThemeEl.checked);
    const styleObj = document.documentElement.style;
    if (checkThemeEl.checked) {
      styleObj.setProperty("--primary-color", white);
      styleObj.setProperty("--contrast-color", black);
    } else {
      styleObj.setProperty("--primary-color", black);
      styleObj.setProperty("--contrast-color", white);
    }
  });

  /*  let divEl;
  el.addEventListener("mouseover", function () {
    divEl = documentc.createElement("div");
    divEl.innerHTML = "some text";
    el.appendChild(divEl);
  });

  el.addEventListener("mouseleave", function () {
    el.parentNode.removeChild(divEl);
  }); */
}
