var age = prompt("Please enter your age in years? e.g. 23");
document.write("Your Age is: " + age);
var cDate = new Date();
var a = cDate.getFullYear();
var year = a - age;
document.write("<br/>Your birth year is: " + year);