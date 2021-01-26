var cDate = new Date();
document.write("Current Date: " + cDate);
var unixcDate = cDate.getTime();
document.write("<br/>Elapsed milliseconds since January 1, 1970: " + unixcDate);
var min = (unixcDate/(1000 * 60 * 60));
document.write("<br/>Elapsed munites since January 1, 1970: " + min);
