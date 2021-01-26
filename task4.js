var email = prompt("Please enter your email ID?\na. This string must contain @\nb. Ths string must contact chars\nc. The @ must have at least 1 char in front\nd. The string must contain .(dot) after @ and at least 1 char.");
console.log(email);
if(email.charAt(0) == 1 || email.charAt(0) == 2 || email.charAt(0) == 3 || email.charAt(0) == 4 || email.charAt(0) == 5 || email.charAt(0) == 6 || email.charAt(0) == 7 || email.charAt(0) == 8 || email.charAt(0) == 9 || email.charAt(0) == 0) {
    document.write("email should not start with number");
}
else if (email.match(/[a-z && A-Z && 0-9]/g)){
    if(email.length >=8);
        document.write("<br/> email is valid")}
    else{
        document.write("<br/>email is not valid");
    }
