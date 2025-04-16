let a; 
b = [3] 
c = null
d = true
document.writeln(typeof a + "<br>");
document.writeln(typeof b + "<br>");
document.writeln(typeof c + "<br>");
document.writeln(typeof d + "<br>");
let x = 10;
let y = 12;
let result = String(x) + String(y);
document.writeln(result + "<br>");
let z = "100";
document.writeln(parseInt(z) + 10 + "<br>");
try{
    addalert("no error found!");
} catch(error) {
    document.writeln(error+"<br>");
}
try{
    let text=200;
    document.writeln(text.toUpperCase());
} catch(error){
    document.writeln(error.message+"<br>")
}
const add = (a,b) => a + b;
document.writeln(add(200,145));
document.writeln("<br><br>");
const feedDog = (food) => {
    const text = "🐶 eats " + food;
    return text;
}
document.writeln(feedDog("chicken") + "<br>");
document.writeln(feedDog("fish") + "<br>");