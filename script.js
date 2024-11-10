const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("results-div");

const checkNumber = () => {
  const regex = /^1?(\s)?(\(\d{3}\)|\d{3})(\s|\-)?(\d{3})(\s|\-)?(\d{4})$/;

  if (userInput.value === "") {
    alert("Please provide a phone number");
    return;
  } else if (regex.test(userInput.value)) {
    output.innerText += `Valid US number: ${userInput.value}\n`;
  } else {
    output.innerText += `Invalid US number: ${userInput.value}\n`;
  };
};

checkBtn.addEventListener("click", () => {
  checkNumber(userInput.value);
    userInput.value = "";
})

clearBtn.addEventListener("click", () => {
  output.innerText= "";
})
