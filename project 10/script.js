let num = 1;
try{
    num.toPrecision(500)
}
catch (err) {
    document.getElementById("rangeError").innerHTML= err;
}
try {
    eval("alert('Hello)");
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err;
}