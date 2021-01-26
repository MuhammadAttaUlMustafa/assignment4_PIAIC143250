var date = prompt("Enter date in this format 'DD' from 1 to 31");
var a = new Date(2020,04,date);
console.log(a);

var unixA = a.getTime();
console.log(unixA);

var fix = new Date(2020,04,16);
console.log(fix);
var unixFix = fix.getTime();
console.log(unixFix);

if (unixA < unixFix) {
    document.write("First fifteen days of the month")
}
else {
    document.write("Last days of the month")
}