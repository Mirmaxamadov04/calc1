elDisplay = document.querySelector(".display");

const check = function (num) {
  if (elDisplay.value == "0") {
    elDisplay.value = num;
  } else {
    elDisplay.value += num;
  }
};

const checkoperator = function (num1) {
  let value = elDisplay.value.split("");
  if (!(value[value.length - 1] == num1)) {
    elDisplay.value += num1;
  } else {
    null;
  }
};
