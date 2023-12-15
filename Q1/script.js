function validateEmail(email) {
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
}

function handleSubmit() {
    var userEmail = document.getElementById("email").value;

    if (validateEmail(userEmail)) {
        alert("Valid email address!");
        
    } else {
        alert("Invalid email address. Please enter a valid email.");
    }
}



function validateEmail(email) {
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
}

function handleSubmit2() {
    var userEmail = document.getElementById("email2").value;

    if (validateEmail(userEmail)) {
        alert("Valid email address!");
        
    } else {
        alert("Invalid email address. Please enter a valid email.");
    }
}
