//Chp 21-25
//Task 01
var first = prompt("First name?");
var second = prompt("Last name?");
var fullname = first + " " + second;
alert("Welcome" + " " +fullname);
//Task 02
var model = prompt("Enter Your favourite model?");
document.write("My favourite phone is:" + " " + model);
document.write("<br>Length of string is:" + " " + model.length);
//Task 03
var country = "Pakistan";
document.write("String:" +" "+country);
document.write("<br>Index of 'n':"+ " "+country.indexOf("n"));
//Task 04
var word = "Hello World";
document.write("String:" +" "+word);
document.write("<br>Last index of 'l':"+ " "+word.lastIndexOf("l"));
//Task 05
var word = "Pakistani";
document.write("String:" +" "+word);
document.write("<br>Character at index 3:"+ " "+word.charAt(3));
//Task 06
var first = prompt("First name?");
var second = prompt("Last name?");
var fullname = first.concat(second);
alert("Welcome" + " " +fullname);
//Task 07
var country = "Hyderabad";
document.write("City:" + " "+ country);
var replace = country.replace("Hyder", "Islam");
document.write("<br>After replacement:" + " " + replace);
//Task 08
var string = "Ali and Sami are best friends. They play cricket and football together.";
document.write(string.replace(/and/g,"&"));
//Task 09
var string = "432";
document.write("Value:" + " " + string);
document.write("<br>Type:"+ " "+typeof(string));
var a = parseInt(string);
document.write("<br><br>Value:" + " " + string);
document.write("<br>Type:"+ " "+typeof(a));
//Task 10
var name = prompt("Enter anything you wish to see in uppercase?");
document.write("User input:"+ " " +name);
var change = name.toUpperCase();
document.write("<br>Upper Case:" + " " + change);
//Task 11
function titleCase(string) {
  var sentence = string.toLowerCase().split(" ");
  for(var i = 0; i< sentence.length; i++){
     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  document.write("User Input:" + " "+ string);
document.write("<br>Title Case:"+" "+sentence.join(" "));
return sentence;
}
titleCase(prompt("Enter Any String?"));
//Task 12
var num = 35.36;
document.write("Number:" + " " + num);
var n = num.toString();
document.write("<br>Result:"+ " "+ n.replace(".",""));
//Task 13
var user = prompt('Username:')
for (var i = 0; i < user.length; i++) {
    if (user[i]==String.fromCharCode(33)||user[i]==String.fromCharCode(44)||user[i]==String.fromCharCode(46)||user[i]==String.fromCharCode(64)) {
    alert("Please enter valid name")
}
//Task 14
var rest = ["cake", "apple pie", "cookie", "chips", "patties"]
    var input = prompt('Welcome to our Bakery what do you want to order?').toLowerCase()
    var score; 
    for (var i = 0; i < rest.length; i++) {
        if(input==input[i])
        {
            document.write(`${ip} is avliable at index ${i} in our bakery.`)
            score = 1;
        }
    }
    if (score!=1)
    {
        document.write(`${ip} is not avliable at our bakery.`)
    }
}
//Task 15
//Task 16
var uni = "University Of Karachi";
var a = new Array();
a=uni.split("");
for (i=0;i<a.length;i++)
{
document.write(a[i] + "<br >");
}
//Task 17
var string = "Pakistan"; 
document.write("User Input:" + " " + string);
var result = string.charAt(string.length-1); 
document.write("<br>Last Character of input:"+ " " +result);
//Task 18
function count(main_str, sub_str) 
    {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }
 
alert("There are"+ " " +count("The quick brown fox jumps over the lazy dog", 'the')+ " " + "occurence of 'the'!");


//Chp 26-30
//Task 01
var number = prompt("Enter any positive integer?");
  if (number >0){
    document.write("Number:" + " " + number);
    document.write("<br>Round off value:" + " " +Math.round(number));
    document.write("<br>Floor value:" + " " +Math.floor(number));
    document.write("<br>Ceil value:" + " " +Math.ceil(number));
  }
  else {
     alert("Write Positive Integer");
  }
//Task 02
var number = prompt("Enter any negative integer?");
  if (number <0){
    document.write("Number:" + " " + number);
    document.write("<br>Round off value:" + " " +Math.round(number));
    document.write("<br>Floor value:" + " " +Math.floor(number));
    document.write("<br>Ceil value:" + " " +Math.ceil(number));
  }
  else {
     alert("Write Negative Integer");
  }
//Task 03
var number = prompt("Enter any number?");
document.write("<br>The Absolute value of" + " " + number + " " + "is" + " " +Math.abs(number));
//Task 04
var dice = Math.floor( Math.random() * 6 ) +1;
alert("Random dice value:" + " " + dice);
//Task 05
var rand = Math.round(Math.random());
var coin ;
if(rand==1){
    coin = 'Head';
} else {
    coin = 'Tail';
}
document.write(`${rand} <br>Random coin value ${coin}`)
//Task 06
var range = Math.floor( Math.random() * 100 ) +1;
alert("Random number between 1-100:" + " " + range);
//Task 07
var weight = prompt("Enter your weight:").toLowerCase();
weight = weight.replace('kgs','');
weight = weight.replace('kilograms','');
document.write(`The weight of the user is: ${weight} kilograms`);
//Task 08
var number = 7;
var secret = prompt("Enter any number from 1-10?");
if (secret == number){
  alert("Congratulations! You are right.")
}
else {
  alert("Try Again");
}


//Chp 31-34
//Task 01
var d = new Date();
document.write(d);
//Task 02
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var d = new Date();
var n = month[d.getMonth()];
document.write("Current Month:"+ " "+n);
//Task 03
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[d.getDay()].slice(0,3);
alert("Today is:"+ " " + n);
//Task 04
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()].slice(0,3);
if (n == weekday[0] || n == weekday[6]){
  document.write("It's a fun day.");
}
else {
  document.write("Working Day.");
}
alert(n);
//Task 05
//Task 06
var minutes = 60 * 1000;
var date = new Date();
var mili = date.getTime();
var min = mili/minutes;
document.write(`Current Date: ${date}<br>Elapsed miliseconds since Jan 01,1970: ${mili}<br>Elapsed minutes since Jan 01,1970: ${minutes}`);
//Task 07
var hours = new Date().getHours();
var hours = (hours+24-2)%24; 
var mid='am';
if(hours==0){ 
hours=12;
}
else if(hours>12)
{
hours=hours%12;
mid='pm';
}
alert ("It's" + " " + mid);
//Task 08
d = new Date(); 
d.setFullYear(2020, 12, 0);
alert(d);
//Task 09
function days_passed(dt) {
var current = new Date(2020,5,12);
var previous = new Date(dt.getFullYear(), 0, 1);
return Math.ceil((current - previous + 1) / 86400000);
}
alert(days_passed(new Date(2015, 6, 18))+" "+"Days have passed since 1st Ramzan 2015");
//Task 10
//Task 11
var d = new Date();
d.setHours(d.getHours() - 48);
alert(d);
alert(d.getHours() + 5);
//Task 12
//Task 13
var user = prompt("Enter your age:");
document.write("Your age is:" + " " + user);
var year = new Date();
var n = year.getFullYear() - user;
document.write("<br>Your Birth year is:"+ " " +n);
//Task 14
var month = new Date();
var n = month.getMonth();
var name = prompt("Customer Name?");
var units = prompt("Enter number of units?");
var charges = prompt("Enter charges per units?");
var net = units * charges;
var late = 900;
var gross = net + late;
document.write("<br>Customer Name:" + " " + name);
document.write("<br>Current Month:" + " " + n)
document.write("<br>Number of units:" + " " + units);
document.write("<br>Charges per unit:" + " " + charges);
document.write("<br>Net Amount Payable (within Due Date):" + " " + net);
document.write("<br>Late Payment Surcharge:" + " " + late);
document.write("<br>Gross Amount Payable (after Due Date):" + " " + gross);


//Chp 35-38
//Task 01
function myFunction() {
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.write("Date:"+ "" +date);
document.write("<br>Time:" + " " + time);
}
myFunction();
//Task 02
function myFunction() {
var name = prompt("Enter first name?");
var lname = prompt("Enter last name?");
var fullname = name + " " + lname;
alert("Welcome"+ " " + fullname);
}
myFunction();
//Task 03
function addTwoNumbers(textBox1, textBox2){
    var x=document.getElementById(textBox1).value;
    var y=document.getElementById(textBox2).value;
    var sum=0;
    sum=Number(x)+Number(y);
    alert("SUM is: " + sum);
  }
/* <body>
	<input type="text" id="textIn1" placeholder="Enter 1st number"><br><br>
	<input type="text" id="textIn2" placeholder="Enter 1st number"><br><br>
	<input type="button" id="btnSum" value="Calculate SUM" onClick="addTwoNumbers('textIn1','textIn2')"/>
</body> */
//Task 04
function subBy() 
{ 
num1 = document.getElementById("firstNumber").value;
num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 - num2;
}
function multiplyBy()
{
num1 = document.getElementById("firstNumber").value;
num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 * num2;
}
function divideBy() 
{ 
num1 = document.getElementById("firstNumber").value;
num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}
function addBy(){
var x=document.getElementById("firstNumber").value;
var y=document.getElementById("secondNumber").value;
var sum=0;
sum=Number(x)+Number(y);
document.getElementById("result").innerHTML = sum;
}
/* <form>
    1st Number : <input type="text" id="firstNumber" /><br><br><br>
    2nd Number: <input type="text" id="secondNumber" /><br><br><Br>
	  <input type="button" value="Add" onClick="addBy()"/>
    <input type="button" onClick="multiplyBy()" Value="Multiply" />
    <input type="button" onClick="divideBy()" Value="Divide" />
    <input type="button" onClick="subBy()" Value="Sub" />
    </form>
    <p>The Result is : <br>
    <span id = "result"></span>
    </p> */
//Task 05
var sumOfSquares = function (num) {
var i,
sum = 0;
for (i = 1; i <= num; i += 1) {
sum = i * i;
}
return sum;
}
var num = parseInt(prompt("Enter a number:"), 10); 
alert("The square of" + " " + num + " is " +
sumOfSquares(num)) ; 
//Task 06
function factorial(n){
let answer = 1;
if (n == 0 || n == 1){
return answer;
}
else{
for(var i = n; i >= 1; i--){
answer = answer * i;
}
return answer;
}  
}
let n = prompt("Enter number?");
answer = factorial(n)
alert("The factorial of " + n + " is " + answer);  
//Task 07
function sum() {
    var FirstNumber = prompt("Enter Start Number?");
    var SecondNumber = prompt("Enter End Number?");
    var result;
    for(var i = FirstNumber; i <= SecondNumber; i++) {
    document.write(i + "<br>");
}
}
sum();
//Task 08
function calculateSquare(numbr){
  return Math.pow(numbr,2);
}
function calculateHypotenuse(base, perp){
  return (calculateSquare(base) + calculateSquare(perp));

}
var Base = Number(prompt('Write base value:'));
var Perp =  Number(prompt('Write perpendicular value:')) ;
alert(`H^2 = ${calculateSquare(Base,Perp)}`);
//Task 09 
function areaRectange(width,height){
  alert(`Area of rectange: ${width*height}`);

}
//Task 10
var name=prompt("Enter string?");
var reverse=name.split("").reverse().join("");
if(name==reverse){
alert('Yes it is a palindrome!')
}
else{
alert("No it isn't a palindrome!")
}
//Task 11
function upper(str)
{
  var array_a = str.split(' ');
  var newarray_a = [];
    
  for(var x = 0; x < array_a.length; x++){
      newarray_a.push(array_a[x].charAt(0).toUpperCase()+array_a[x].slice(1));
  }
  return newarray_a.join(' ');
}
alert(upper(prompt("Enter String")));
//Task 12
function word(string)
{
  var array_a = string.match(/\w[a-z]{0,}/gi);
  var result = array_a[0];

  for(var x = 1 ; x < array_a.length ; x++)
  {
    if(result.length < array_a[x].length)
    {
    result = array_a[x];
    } 
  }
  return result;
}
alert(word(prompt("Enter a sentence?")));
//Task 13
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

alert("There are"+ " " +char_count(prompt("Enter String?"), prompt("Number of occurrence of which alpabet you want to check?"))+ " " + "occurrence");
//Task 14
function calcArea(r){
  return Math.round( Math.PI*(Math.pow(r,2)));
}
var radius = Number(prompt('Radius of a circle:'));
document.write(`Circumference of a circle is: ${calcCircumference(radius)}<br>Area of a circle is: ${calcArea(radius)}`);
