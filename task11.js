var a = prompt("Enter Number to find Mean");
document.write("Input: " + a);
var num = a.split("");
console.log(num);
var b = num.map(Number);
console.log(b);
var total = 0;

for (var i = 0; i < b.length; i++) {
    total += b[i];
}
console.log(total);
var avg = total / b.length;
document.write("<br/>Output: " + avg);