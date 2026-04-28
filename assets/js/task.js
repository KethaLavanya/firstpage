let mainDiv = document.createElement("div");
mainDiv.classList.add("mainBlock");
document.body.appendChild(mainDiv);

let subDiv = document.createElement("div");
subDiv.classList.add("subBlock");
mainDiv.appendChild(subDiv);

let headingBlock = document.createElement("h1");
headingBlock.classList.add("headingTag");
headingBlock.innerHTML = "Increment & Decrement";
subDiv.appendChild(headingBlock);

let sectionDiv = document.createElement("div");
sectionDiv.classList.add("divBlock");
subDiv.appendChild(sectionDiv);

let decrementButton = document.createElement("button");
decrementButton.classList.add("decrementButtonBlock");
decrementButton.addEventListener("click", function () {
let decrementCountValue = document.getElementById("countElement");
  let previousValue = Number(decrementCountValue.textContent);
  previousValue = previousValue - 1;
  console.log("Previous Value", decrementCountValue.innerHTML);
  decrementCountValue.textContent = previousValue;
  console.log("Updated Value", decrementCountValue.innerHTML);
  if(previousValue<0){
    decrementCountValue.style.color="red";
  }
});
sectionDiv.appendChild(decrementButton);

let iconBlockSub = document.createElement("i");
iconBlockSub.classList.add("ri-subtract-line");
iconBlockSub.style.fontSize = "50px";
decrementButton.appendChild(iconBlockSub);

let paraGraph = document.createElement("p");
paraGraph.classList.add("numberBlock");
paraGraph.innerHTML = "0";
paraGraph.style.fontSize = "60px";
paraGraph.style.margin = "0px";
paraGraph.id = "countElement";
sectionDiv.appendChild(paraGraph);

let incrementButton = document.createElement("button");
incrementButton.classList.add("incrementButtonBlock");
incrementButton.addEventListener("click", function () {
  let incrementCountValue = document.getElementById("countElement");
  let previousValue = Number(incrementCountValue.textContent);
   if(previousValue>=10){
     return alert("Limited Exceed");
  }
  previousValue = previousValue + 1;
  console.log("Previous Value", incrementCountValue.innerHTML);
  incrementCountValue.textContent = previousValue;
  console.log("Updated Value", incrementCountValue.innerHTML);
  if(previousValue>0){
    incrementCountValue.style.color="green";
  }
});
sectionDiv.appendChild(incrementButton);

let iconBlockAdd = document.createElement("i");
iconBlockAdd.classList.add("ri-add-fill");
iconBlockAdd.style.fontSize = "50px";
incrementButton.appendChild(iconBlockAdd);

let restartButton = document.createElement("button");
restartButton.classList.add("restartButtonBlock");
restartButton.innerHTML = "Restart";
restartButton.addEventListener("click", function () {
  let restartButtonValue = document.getElementById("countElement");
  let previousValue = Number(restartButtonValue.textContent);
  previousValue = 0;
  console.log("Previous Value", restartButtonValue.innerHTML);
  restartButtonValue.textContent = previousValue;
  console.log("Updated Value", restartButtonValue.innerHTML);
  if(previousValue==0){
    restartButtonValue.style.color="black";
  }
});
subDiv.appendChild(restartButton);

let restartIcon = document.createElement("i");
restartIcon.classList.add("ri-restart-line");
restartButton.appendChild(restartIcon);
