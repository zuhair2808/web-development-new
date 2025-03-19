const a = 2;
document.writeln(a + "<br>");
let b;
document.writeln(b + "<br>");
b = 4.5;
document.writeln(b + "<br>");
c = null;
document.writeln(c + "<br>");
function showGrade() {
    const score = 99;
    const pelement = document.getElementById ("grade");
    if(score >= 90)  {
        pelement.innerText = "A";
    }
    else if (score >= 80 ) {
        pelement.innerText = "B";
    }
    else if (score >= 70 ) {
        pelement.innerText = "C";
    }
    else {
        pelement.innerText = "you have to work harder";
    }
}
function showCountdown() {
    let countdown = 10;
 while (countdown > 0) {
    document.writeln("T-" + countdown + " seconds<br>");
    countdown = countdown-1;
    }
}
