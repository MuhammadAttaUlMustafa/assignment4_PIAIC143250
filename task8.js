var input = parseInt(prompt("Enter number to convert?"));
document.write("Input: " + input);
var int = ["1","2","3","4","5","6","7","8","9","0"];
var unit = ["one","two","three","four","five","six","seven","eight","nine","zero",]
var tens = ["ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninty",]
var nxt = ["hundred", "thousand"];
if (input.length === 1) {
    for(var i = 0; i < input.length; i++) {
        if (input === int[i]) {
            document.write("<br/>Output: " + unit[i]);
        }
    }
}
else{
    document.write("<br/>not found");
}