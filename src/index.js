document.addEventListener("DOMContentLoaded", documentOnReady);

//  common function that start when html is ready
function documentOnReady() {
  //vars
  createTable(10);
  createSmiles();
  changeTheme();
  createSampler();
  //
}

// helper functions

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

// end helper functions

function createTable(count = 10) {
  const tabelEl = getEl("#table");
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

function createSmiles() {
  const smileWrapEl = getEl("#smileWrapEl");
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
  arrSmiles.forEach((i) => {
    const newEl = document.createElement("div");
    newEl.textContent = i;
    newEl.classList.add("smile-card");
    smileWrapEl.appendChild(newEl);
  });
}

function changeTheme() {
  // get html elements
  const black = "#151515";
  const white = "#aaaaaa";
  const checkThemeEl = getEl("#checkTheme");
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
}

function createSampler() {
  const samlerWrapEl = getEl("#sampel-ref");
  const keyName = "Key";
  const keyBtnNames = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
  const keyBtnEls = {};
  for (let i = 0; i < keyBtnNames.length; i++) {
    const btnEl = createEl("button");
    btnEl.innerHTML = keyBtnNames[i];
    btnEl.classList.add("sample-btn");
    keyBtnEls[keyName + keyBtnNames[i].toUpperCase()] = btnEl;
    samlerWrapEl.appendChild(btnEl);
  }
  console.log(keyBtnEls);
  document.addEventListener("keydown", function (e) {
    const pressedBtn = keyBtnEls[e.code];
    if (pressedBtn) {
      pressedBtn.classList.add("active");
    }
    console.log(e.code);
  });

  document.addEventListener("keyup", function (e) {
    const pressedBtn = keyBtnEls[e.code];
    if (pressedBtn) {
      pressedBtn.classList.remove("active");
    }
  });
}
