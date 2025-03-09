var programming_languages = ['Javascript','Python','Java','C#'] ;
document.write(programming_languages + "<br>");
document.write("First element:" + programming_languages [0] + "<br>");
document.write("Second element:" + programming_languages [1] + "<br>");
document.write("Third element:" + programming_languages [2] + "<br>");
document.write("Fourth element:" + programming_languages [3] + "<br>");
document.write(programming_languages.join(" - ") + "<br>");
programming_languages.pop();
programming_languages.pop();
programming_languages.pop();
document.write(programming_languages + "<br>");
document.write("<br><br>");
function add(a,b){
    document.write("add() is called.<br>");
    return a+b;
}
function average(a,b) {
    document.write("average() is called.<br>");
    var result = add(a,b);
    return result /2;
}
document.write("main() is called.<br>");
var avg = average(40,50);
document.write("Average:" + avg);