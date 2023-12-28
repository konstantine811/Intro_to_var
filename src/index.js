document.addEventListener("DOMContentLoaded", documentOnReady);

function documentOnReady() {
  // get html elements
  const checkThemeEl = getEl("#checkTheme");
  const smileWrapEl = getEl("#smileWrapEl");
  const tabelEl = getEl("#table");
  console.log("get el", tabelEl);
  //vars

  function createTable(count = 10) {
    const tableCount = count;
    for (let i = 0; i < tableCount; i++) {
      const rowEl = createEl("tr");
      for (let j = 0; j < tableCount; j++) {
        const tdEl = createEl("td");
        tdEl.innerHTML = j + 1 + i * 10;
        rowEl.appendChild(tdEl);
      }
      tabelEl.appendChild(rowEl);
    }
  }

  createTable(10);

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
  //
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

function getEl(id) {
  const symbol = id[0];
  if (symbol === "#") {
    return document.getElementById(id.slice(1));
  } else if (symbol === ".") {
    return document.getElementsByClassName(id.slice(1));
  } else {
    return document.getElementsByTagName(id);
  }
}

function createEl(tag) {
  return document.createElement(tag);
}
