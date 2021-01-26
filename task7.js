var text = ("The quick brown fox jumps over the lazy dog");
document.write("Text: " + text);
var lowerText = text.toLowerCase();
var occurance = lowerText.split("the").length -1;
document.write("<br/>There are " + occurance + " occurance(s) of word 'the'");
