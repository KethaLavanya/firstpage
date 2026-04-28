// easy level
let age = 18;
if(age>=18){
    console.log("age", "Adult");
}
else{
    console.log("age", "Minor");
}

let a = 20;
let b = 10;
if(a>b){
    console.log("greater", "a is greater");
}
else{
    console.log("less", "b is less");
}

let n = 2;
if(n%2==0){
    console.log("even", "this is an even number");
}
else{
    console.log("odd", "this is an odd number");
}

let c=39;
if(c%2==0){
    console.log("even", "this is an even number");
}
else{
    console.log("odd", "this is an odd number");
}

let mathRandomNumber=Math.random()*10;
console.log("MathRandomNumber",mathRandomNumber);

let mathRoundOne=Math.round(4.3);
let mathRoundTwo=Math.round(4.7);
console.log("mathRoundOne", mathRoundOne);
console.log("mathRoundTwo", mathRoundTwo);

let mathceil=Math.ceil(4.2);
console.log("mathceil", mathceil);

let e = 0;
if(e>0){
    console.log("Positive Number", "This is Positive Number");
}
else if(e<0){
    console.log("Negative Number", "this is Negative Number");
}
else{
    console.log("zero", "zero");
}

let f = "Equal";
let g = "Not Equal"
console.log("Equal", f==g);
console.log("Not Equal", f!=g);

let h = 10;
let i = "10";
if(h==i){
    console.log("Equal", "equal");
}
else{
    console.log("Not Equal", "Not Equal");
}

let j = 10;
let k = "15";
if(j==k){
    console.log("Equal", "equal");
}
else if(j!=k){
    console.log("Not Equal", "Not Equal");
}
else{
    console.log("Error", "Error");
}

let l = 20;
let m = 15;
if(l>=10&&m<=20){
    console.log("AND", "This is True");
}
else{
    console.log("AND", "this is false");
}

let p = 4;
let s = 55;
if(p<=5||s>=50){
    console.log("OR", "This is True");
}
else{
    console.log("OR", "This is False")
}

let randomNumber = Math.random()*5;
console.log("Random Number", randomNumber);

let t = 50;
if(t>=40){
     console.log("Pass", "Pass")
}
else{
    console.log("Fail", "Fail");
}

let z = 35;
if(z%5==0){
    console.log("Divisible", "It is divisible")
}
else{
    console.log("Not Divisible", "It is not divisible")
}

let isTrue=true;
if(isTrue){
    console.log("true")
}
else{
    console.log("false")
}

let randomNumberBlock = Math.random()*100;
console.log("Random Number", randomNumberBlock);

// medium level
let randomBlock = Math.random()*100;
console.log("randomBlock", randomBlock);
if(randomBlock%2==0){
    console.log("Even", "even");
}
else{
    console.log("Odd", "odd");
}

let u=55;
let v=45;
if(u>=v){
    console.log("Largest Number", "This is Largest Number")
}
else if(u<=v){
    console.log("Smallest Number", "This is Smallest Number")
}
else{
    console.log("Error", "Error")
}

let num=15;
if(num%3==0){
   console.log("Divisible by 3", "This is Divisible by 3");
}
else if(num%5==0){
    console.log("Divisible by 5", "This is Divisible by 5")
}
else{
    console.log("Not Divisible ", "This is not Divisible")
}

let number = 20;
let numberDigit = 10;
let operand="%";
if(operand=="+"){
    console.log("Addition", "Addition of two numbers");
}
else if(operand=="-"){
    console.log("Subtraction", "Subtraction of Two Numbers");
}
else if(operand=="/"){
    console.log("Division", "Division of Two Numbers");
}
else if(operand=="*"){
    console.log("Multiplication", "Multiplication of Two Numbers");
}
else{
    console.log("Invalid", "Invalid");
}


let NumberRandom=Math.random()*50;
console.log("Random Number", NumberRandom);

let ceilNumber=Math.ceil(15.3);
console.log("ceil Number", ceilNumber);

let oneNumber=85;
if(oneNumber>=90){
    console.log("Grade", "Grade is A")
}
else if(oneNumber>=75){
    console.log("Grade", "Grade is B")
}
else if(oneNumber>=50){
    console.log("Grade", "Grade is C")
}
else{
    console.log("Grade", "Fail")
}

let sevenNumber = 2;
console.log(sevenNumber*7)

let multipleOfSeven=14;
if(multipleOfSeven%7==0){
    console.log("Multiple of 7", "This is multiple of 7")
}
else{
    console.log("Multiple of 7", "This is  not multiple of 7")
}

let numberBlockRandom=Math.random()*10;
console.log("numberBlockRandom", numberBlockRandom);
if(numberBlockRandom>=5){
    console.log("High", "High");
}
else{
    console.log("Low", "Low");
}

// compare
 
let numb=9;
if(numb%2==0){
    console.log("Divisible by 2", "This is Divisible by 2");
}
else if(numb%3==0){
    console.log("Divisible by 3", "This is Divisible by 3");
}
else{
    console.log("Not Divisible", "Not Divisible");
}

let randomDecimalNumber=Math.random();
console.log(randomDecimalNumber);
let roundNumber=Math.round(1.3);
console.log(roundNumber);
let ceilBlock=Math.ceil(2.2);
console.log(ceilBlock);

let range=10;
let rangeOne=10;
if(range>=rangeOne&&range<=rangeOne){
    console.log("Logical", "this is AND Operator");
}
else{
    console.log("Logical", "This not Logical operator");
}

let rangeBlock=15;
let rangeBlockOne=18;
 if(rangeBlock>=rangeBlockOne||rangeBlock<=rangeBlockOne){
    console.log("Logical", "This is OR operator");
}
else{
    console.log("Logical", "This not Logical operator");
}



let tossCoinHead=Math.random()*10;
console.log(tossCoinHead);
if(tossCoinHead<=5){
    console.log("Heads", "Heads");
}
else {
    console.log("Tails", "Tails")
}

// hard
let generateRandomNumber=Math.random()*6;
console.log(generateRandomNumber);
let generateRoundNumber=Math.round(generateRandomNumber);
console.log(generateRoundNumber);

let numbOne=95;
let numbTwo= 55;
let numbThree=30;
if(numbOne>=90){
    console.log("Largest Number", "Largest Number is numbOne")
}
else if(numbTwo>=50){
    console.log("Largest Number", "Largest Number is numbTwo");
}
else if(numbThree>=25){
    console.log("Largest Number", "Largest Number is numbThree");
}
else{
    console.log("Not Largest Number", "It is not Largest Number");
}

let numberOne=95;
let numberTwo= 55;
let numberThree=10;
if(numberOne<=90){
    console.log("Smallest Number", "Smallest Number is numberOne")
}
else if(numberTwo<=50){
    console.log("Smallest Number", "Smallest Number is numberTwo");
}
else if(numberThree<=25){
    console.log("Smallest Number", "Smallest Number is numberThree");
}
else{
    console.log("Not Smallest Number", "It is not Smallest Number");
}

let lowNumber=15;
let mediumNumber=45;
let highNumber=95;
if(lowNumber<=10){
    console.log("Low", "Low");
}
else if(mediumNumber<=50){
    console.log("Medium", "Medium");
}
else if(highNumber<=100){
    console.log("High", "High");
}
else{
    console.log("Fail", "Fail")
}

let randomMarks=Math.random()*100;
console.log(randomMarks);
let roundMarks=Math.round(randomMarks);
console.log(roundMarks);
if(roundMarks>=90){
    console.log("Grade", "Grade is A");
}
else if(roundMarks>=75){
    console.log("Grade", "Grade is B");
}
else if(roundMarks>=50){
    console.log("Grade", "Grade is C");
}
else{
    console.log("Grade", "Grade is D");
}

let me = "admin"
let password="1234"
if(me=="admin"){
    console.log("admin", "Login Success");
}
else if(password=="1234"){
    console.log("password", "Valid");
}
else{
    console.log("Invalid","Invalid")
}

let randomNumberGenerate=Math.random()*100;
console.log(randomNumberGenerate);
let roundNumberGenerate=Math.round(randomNumberGenerate);
console.log(roundNumberGenerate);
if(roundNumberGenerate%2==0){
    console.log("Even", "High Even");
}
else {
    console.log("Odd", "Low Odd");
}



let random=Math.random()*5;
console.log(random);
let round=Math.round(random);
console.log(round);
if(round==3){
    console.log("WINNER", "Winner");
}
else{
    console.log("TRY AGAIN", "Try Again");
}

let randomOne=Math.random()*100;
console.log(randomOne);
let roundOne=Math.round(randomOne);
console.log(roundOne);
let randomTwo=Math.random()*100;
console.log(randomTwo);
let roundTwo=Math.round(randomTwo);
console.log(roundTwo);
if(roundOne==roundTwo){
    console.log("Greater", "Greater")
}
else{
    console.log("equal", "equal");
}

let color="green";
if(color=="red"){
    console.log("red", "Stop");
}
else if(color=="green"){
    console.log("Green", "Go");

}
else if(color=="yellow"){
    console.log("Yellow", "Wait");
}
else{
    console.log("Over", "Time Over")
}

let randomNumberDigit=Math.random()*100;
console.log(randomNumberDigit);
let roundNumberDigit=Math.round(randomNumberDigit);
console.log(roundNumberDigit);
if(roundNumberDigit%2==0){
    console.log("Divisible by 2", "Even");
}
else if(roundNumberDigit%3==0){
    console.log("Divisible by 3", "Multiple of 3");
}
else{
    console.log("Both", "Both Messages");
}

