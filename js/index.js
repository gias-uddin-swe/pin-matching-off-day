document
  .getElementById("generate-button")
  .addEventListener("click", function () {
    document.getElementById("generate-input").value = getPin();
    DisplayMessage("not-match", "none");
    DisplayMessage("match", "none");
    inputFieldValue("submit-input");
  });

function getPin() {
  const random = Math.random() * 10000;
  const pin = (random + "").split(".")[0];
  if (pin.length === 4) {
    return pin;
  } else {
    // console.log("shorter pin" + pin);
    return getPin();
  }
}
// second part calculation Submit Area
for (let i = 0; i < 10; i++) {
  document
    .getElementsByClassName("button1")
    [i].addEventListener("click", function () {
      const currentInput = document.getElementById("submit-input").value;
      const text = this.innerText;
      document.getElementById("submit-input").value = currentInput + text;

      console.log("hoise law" + text);
    });
}

// delete button click handler

document.getElementById("delete-button").addEventListener("click", function () {
  const currentInputValue = document.getElementById("submit-input").value;
  const remove = currentInputValue.slice(0, -1);
  document.getElementById("submit-input").value = remove;
});

// matching click handler
document.getElementById("submit").addEventListener("click", function () {
  let number = document.getElementById("leftTime").innerText;
  number = parseInt(number);
  const generateInput = document.getElementById("generate-input").value;

  const currentGenerate = parseInt(generateInput);
  const currentSubmitInput = document.getElementById("submit-input").value;
  const submitValue = parseInt(currentSubmitInput);
  if (number == 1) {
    inputFieldValue("submit-input");
    inputFieldValue("generate-input");
    // DisplayMessage("not-match", "none");
    document.getElementById("not-match").style.display = "none";

    DisplayMessage("reGeneratePin-Message", "block");
  }
  if (currentGenerate == submitValue) {
    DisplayMessage("match", "block");
  }
  if (currentGenerate != submitValue) {
    // let leftTime = document.getElementById("leftTime").innerText;
    // leftTime = parseInt(leftTime) - 1;
    // document.getElementById("leftTime").innerText = leftTime;

    document.getElementById("leftTime").innerText = number - 1;

    DisplayMessage("not-match", "block");
  }
  inputFieldValue("submit-input");
});

// clear all value from submit input area
document.getElementById("clear-button").addEventListener("click", function () {
  inputFieldValue("submit-input");
});

const inputFieldValue = (inputId) => {
  document.getElementById(inputId).value = "";
};
const DisplayMessage = (id, show) => {
  document.getElementById(id).style.display = show;
};
