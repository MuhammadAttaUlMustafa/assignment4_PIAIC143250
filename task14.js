var cDate = new Date();
document.write("Current Date: " + cDate);
var before1Hr = cDate.getTime() - (1000 * 60 * 60);
var date = new Date(before1Hr);
document.write("<br/>1 hour ago, it was: " + date);