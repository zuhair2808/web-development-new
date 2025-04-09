let numbers = [3,1,10,6,4,7];
document.getElementById("array_display").innerHTML = numbers;

function sortInAsc() {
    numbers.sort(function(a, b) {
        return a -b;
    });
    document.getElementById("array_display").innerHTML = numbers;
}

function sortInDesc() {
    numbers.sort(function(a, b) {
        return b -a;
    });
    document.getElementById("array_display").innerHTML = numbers;
}
function makeSquare() {
    let new_numbers = numbers.map(function(element) { 
        return element*element
    })
    document.getElementById("array_display").innerHTML = new_numbers;
}
let x = 32;
let y = 30;
let z = eval("x+y-5");
document.writeln(z);