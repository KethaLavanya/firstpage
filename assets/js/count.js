function button() {
  let incrementButton = document.getElementById("countElement");
  let previousValue = Number(incrementButton.textContent);
  previousValue = previousValue + 1;
  console.log("Previous Value", incrementButton.textContent);
  incrementButton.textContent = previousValue;
  console.log("Updated Value", incrementButton.textContent);

  console.log("button Clicked");
}

function buttonBlock() {
  let decrementButton = document.getElementById("countElement");
  let previousValue = Number(decrementButton.textContent);
  previousValue = previousValue - 1;
  console.log("Previous Value", decrementButton.textContent);
  decrementButton.textContent = previousValue;
  console.log("Updated Value", decrementButton.textContent);

  console.log("button Clicked");
}
