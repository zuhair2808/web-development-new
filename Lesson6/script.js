var text = document.getElementById("heading").innerHTML
//alert(text);
function validate(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var validationMsg;
    if (email == "") {
        validationMsg = "Enter your email";
        document.getElementById("message").style.color = "red";
    } else if (password == "") {
        validationMsg = "Enter your password";
        document.getElementById("message").style.color = "red";
    }else {
        validationMsg = "Form submitted successfully!";
        document.getElementById("message").style.color = "green";
        document.getElementById("email").value ="";
        document.getElementById("password").value = "";
    }
    document.getElementById("message").innerText = validationMsg;
}