function validateForm(event){
    event.preventDefault();
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;

    let message;
    if (email==""){
        message="Email is required";
    document.getElementById("validation_message").style.color="red";
    }
    else if (password==""){
        message="Password is required";
    document.getElementById("validation_message").style.color="red";
    }
    else{
        message="form submitted";
        document.getElementById("validation_message").style.color="green";
        document.getElementById("email").value= "";
        document.getElementById("password").value="";
    }
    document.getElementById("validation_message").innerText = message;
    }
    function validatenumber() {
        const numElement = document.getElementById("number");
        let message;
        if (numElement.checkValidity() == false){
            message = numElement.validationMessage;
        } else{
            message="OK";
        }
        document.getElementById("message").innerText = message;
    }

    