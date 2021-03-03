const autoGeneratePin = document.getElementById("generate-input");
const finalSubmitInput = document.getElementById("submit-input");

const errorMessage = (id, n) => {
  document.getElementById(id).style.display = n;
};
document
  .getElementById("generate-button")
  .addEventListener("click", function () {
    randomPin();
    function randomPin() {
      let autoPin = Math.round(Math.random() * 10000) + "";
      if (autoPin.length < 4) {
        randomPin();
      } else {
        autoGeneratePin.value = autoPin;
      }
    }
    errorMessage("not-match", "none");
    errorMessage("match", "none");
  });

for (let i = 0; i < 10; i++) {
  document
    .getElementsByClassName("button1")
    [i].addEventListener("click", function () {
      const pinNumber = this.innerText;
      finalSubmitInput.value = finalSubmitInput.value + pinNumber;
      console.log(pinNumber);
    });
}
document.getElementById("clear-button").addEventListener("click", function () {
  finalSubmitInput.value = "";
});

document.getElementById("delete-button").addEventListener("click", function () {
  const finalPin = finalSubmitInput.value.slice(0, -1);
  finalSubmitInput.value = finalPin;
});

document.getElementById("submit").addEventListener("click", function () {
  if (autoGeneratePin.value == finalSubmitInput.value) {
    errorMessage("match", "block");
  } else {
    errorMessage("not-match", "block");
  }
  autoGeneratePin.value = "";
  finalSubmitInput.value = "";
});
