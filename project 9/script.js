let numbers = [7,4,30,2,1,5];
document.getElementById("array_display").innerHTML = numbers;

function sortInAsc() {
    numbers.sort(function(a, b) {
        return a -b;
    });
    document.getElementById("array_display").innerHTML = numbers;
}
let x = 24;
let y = 15;
let z = eval("x*y+10");
document.writeln(z);