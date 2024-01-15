// hoisting and literal templates example

/* showMessage();
var x = 10;

function showMessage(name, secondName) {
  console.log(`Hello "Bob Marley - No Woman" ${name} ${secondName} ${x}`);
}
*/

document.addEventListener("DOMContentLoaded", onReady);

function onReady() {
  const formInputDataEl = document.getElementById("formInputData");
  const firstNameInputEl = document.getElementById("firstName");
  const secondNameInputEl = document.getElementById("secondName");
  const petNameInputEl = document.getElementById("petName");
  const outDataTextEl = document.getElementById("outDataText");

  const textOutputEl = document.createElement("p");
  formInputDataEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputNames = [
      firstNameInputEl.value,
      secondNameInputEl.value,
      petNameInputEl.value,
    ];
    /* const numberInput = 3423423;
    const splitedNumber = numberInput.toString().split("").join("  ");
    textOutputEl.innerHTML = splitedNumber;
    outDataTextEl.appendChild(textOutputEl);
    console.log(splitedNumber); */
    for (let i = 0; i <= inputNames.length; i++) {
      if (inputNames[i] === "") {
        console.log("your not type some name");
        return;
      }
    }

    inputNames.sort(function () {
      return Math.random() - 0.5;
    });

    const messageOutput = `Hello ${inputNames[0]} from ${inputNames[1]} and other word ${inputNames[2]}`;

    textOutputEl.innerHTML = messageOutput;
    outDataTextEl.appendChild(textOutputEl);
    getParagraph();
  });

  function getParagraph() {
    const outDataTextElQ = document.querySelector("p");
    console.log("out data text element", outDataTextElQ);
  }

  /* firstNameInputEl.addEventListener("input", function (e) {
    textOutputEl.innerHTML = e.target.value;
    outDataTextEl.appendChild(textOutputEl);
  }); */
}
