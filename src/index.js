document.addEventListener("DOMContentLoaded", documentOnReady);

function documentOnReady() {
  const checkThemeEl = document.getElementById("checkTheme");
  const black = "#151515";
  const white = "#aaaaaa";
  const arrSmiles = [
    "📐",
    "🌤️",
    "🇲🇽",
    "1️⃣",
    "🈹",
    "🌜",
    "👨‍💻",
    "🇲🇦",
    "🌱",
    "🍛",
    "🇻🇬",
    "🍯",
  ];
  const smileWrapEl = document.getElementById("smileWrapEl");
  checkThemeEl.addEventListener("change", function () {
    const styleObj = document.documentElement.style;
    if (checkThemeEl.checked) {
      styleObj.setProperty("--primary-color", white);
      styleObj.setProperty("--contrast-color", black);
    } else {
      styleObj.setProperty("--primary-color", black);
      styleObj.setProperty("--contrast-color", white);
    }
  });

  arrSmiles.forEach((i) => {
    const newEl = document.createElement("div");
    newEl.textContent = i;
    newEl.classList.add("smile-card");
    smileWrapEl.appendChild(newEl);
  });
}
