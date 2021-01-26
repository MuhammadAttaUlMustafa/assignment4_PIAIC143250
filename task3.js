var input = prompt("Please Enter Pasword:\nThe password must qualify these requirements: \n a. It should contain alphabets and numbers \n b. It should not start with a number \n c. It must at least 8 characters long");
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ALPHA = input.toLowerCase();
console.log(ALPHA);
if(ALPHA.charAt(0) == 1 || ALPHA.charAt(0) == 2 || ALPHA.charAt(0) == 3 || ALPHA.charAt(0) == 4 || ALPHA.charAt(0) == 5 || ALPHA.charAt(0) == 6 || ALPHA.charAt(0) == 7 || ALPHA.charAt(0) == 8 || ALPHA.charAt(0) == 9 || ALPHA.charAt(0) == 0) {
    document.write("pasword should not start with number");
}
var num = [0,1,2,3,4,5,6,7,8,9];

if (ALPHA == alpha.charAt(" ") && num.charAt(" ") && input.length>=8) {
    document.write("ok"); 
}    else {(prompt("enter a valid password. For character codes of a-z, A-Z & 0-9"));
}
