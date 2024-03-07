
function Validate() {
    
    var password = document.getElementById("stPassword").value;
    var confirmPassword = document.getElementById("ConfirmPassword").value;


    if (password === '' || password == null) {
        
        alert('please');
        return false;
    }
    
//confirm password

    if (password != confirmPassword) {
        document.getElementById('demo').innerHTML = 'Password Does Not Match ☹';
        return false;

    } else {
        document.getElementById('demo').innerHTML = ' Confirm 😊';
        return true;
        
    }


}


