let mainDiv = document.createElement("div");
mainDiv.classList.add("mainDiv");
// mainDiv.innerHTML="HEllo";
// mainDiv.style="fonSize=20px";
document.body.appendChild(mainDiv);

let subDiv = document.createElement("div");
subDiv.classList.add("subDiv");
mainDiv.appendChild(subDiv);

let headingTag = document.createElement("h1");
headingTag.innerHTML = "Generate a Number";
subDiv.appendChild(headingTag);

let paraGraph = document.createElement("p");
paraGraph.innerHTML = "0";
paraGraph.style.fontSize = "100px";
paraGraph.style.margin = "0px";
paraGraph.id = "countNumber";
subDiv.appendChild(paraGraph);

let buttonDiv = document.createElement("div");
buttonDiv.classList.add("buttonBlock");
subDiv.appendChild(buttonDiv);

let buttonSection = document.createElement("button");
buttonSection.classList.add("buttonContent");
buttonSection.addEventListener("click", function () {
  let incrementButtonPlus = document.getElementById("countNumber");
  let previousValue = Number(incrementButtonPlus.innerHTML);
  previousValue = previousValue + 1;
  console.log("Previous Value", incrementButtonPlus.innerHTML);
  incrementButtonPlus.innerHTML = previousValue;
  console.log("Updated Value", incrementButtonPlus.innerHTML);
   if(previousValue>0){
    incrementButtonPlus.style.color="green";
  }
});
buttonDiv.appendChild(buttonSection);

let incrementButton = document.createElement("i");
incrementButton.classList.add("ri-add-fill");
incrementButton.style.fontSize = "25px";
incrementButton.style.color = "white";
buttonSection.appendChild(incrementButton);

let buttonSectionTwo = document.createElement("button");
buttonSectionTwo.classList.add("buttonStyle");
buttonSectionTwo.addEventListener("click", function () {
  let restartButtonValue = document.getElementById("countNumber");
  let previousValue = Number(restartButtonValue.innerHTML);
  previousValue = 0;
  console.log("Previous Value", restartButtonValue.innerHTML);
  restartButtonValue.innerHTML = previousValue;
  console.log("Updated Value", restartButtonValue.innerHTML);
  if(previousValue==0){
    restartButtonValue.style.color="black";
  }
});
buttonDiv.appendChild(buttonSectionTwo);

let restartButton = document.createElement("i");
restartButton.classList.add("ri-restart-line");
restartButton.style.fontSize = "25px";
restartButton.style.color = "white";
buttonSectionTwo.appendChild(restartButton);

let buttonSectionOne = document.createElement("button");
buttonSectionOne.classList.add("buttonContent");
buttonSectionOne.addEventListener("click", function () {
  let decrementButtonPlus = document.getElementById("countNumber");
  let previousValue = Number(decrementButtonPlus.textContent);
  previousValue = previousValue - 1;
  console.log("Previous Value", decrementButtonPlus.innerHTML);
  decrementButtonPlus.textContent = previousValue;
  console.log("Updated Value", decrementButtonPlus.innerHTML);
  if(previousValue<0){
    decrementButtonPlus.style.color="red";
  }
});
buttonDiv.appendChild(buttonSectionOne);

let decrementButton = document.createElement("i");
decrementButton.classList.add("ri-subtract-line");
decrementButton.style.fontSize = "20px";
decrementButton.style.color = "white";
buttonSectionOne.appendChild(decrementButton);

let ribbonDivBlock = document.createElement("div");
ribbonDivBlock.classList.add("ribbonBlock");
subDiv.appendChild(ribbonDivBlock);

let headingBlock = document.createElement("h1");
headingBlock.classList.add("headingTag");
headingBlock.innerHTML="Guess the Number";
ribbonDivBlock.appendChild(headingBlock);

let formTag = document.createElement("form");
formTag.classList.add("formBlock");
formTag.style.textAlign="center";
ribbonDivBlock.appendChild(formTag);

let inputField = document.createElement("input");
inputField.classList.add("inputBlock");
formTag.appendChild(inputField);

let randomNumber = Math.random()*100;
console.log(randomNumber);
let roundNumber = Math.round(randomNumber);
console.log(roundNumber);

let buttonDivBlock = document.createElement("div");
buttonDivBlock.classList.add("buttonDiv");
ribbonDivBlock.appendChild(buttonDivBlock);

let buttonBlock = document.createElement("button");
buttonBlock.classList.add("buttonBlockDiv");
buttonBlock.innerHTML="Guess";
buttonDivBlock.appendChild(buttonBlock);