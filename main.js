function checkUser(){
    let UserInput = (document.getElementById("user").value);
    let PassInput = (document.getElementById("pass").value);

    const Username = "RMag";
    const Password = "RSAM30"

    if(UserInput == Username && PassInput == Password){
        var Access= "granted"
    }
    else {
        var Access="denied"
    }

    switch(Access){
        case "granted":
            window.location.replace("notebook.html");
        break;
        case "denied":
            window.alert("Incorrect Username and/or Password");
        break;
    }
}