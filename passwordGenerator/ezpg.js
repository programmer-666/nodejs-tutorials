const generatePassword = () => {
    var passwordLength = parseInt(document.getElementById("passwordLength").value);
    
    let password = "";
    let flag = true;
    for (let i = 0; i < passwordLength; i++) {
        if (flag) {
            password += String.fromCharCode(Math.floor(48 + Math.random() * 8));
            if (Math.random() * 10 < 5) {
                flag = false;
            }
        } else {
            password += String.fromCharCode(Math.floor(97 + Math.random() * 25));
            if (Math.random() * 10 < 5) {
                flag = true;
            }
        }
    }

    document.querySelector("#password").textContent = password;
}