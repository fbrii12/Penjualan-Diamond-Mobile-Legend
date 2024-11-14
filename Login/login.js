function handleLogin(event) {
    event.preventDefault();
    document.getElementById('popupBox').style.display = 'flex'; 
}

document.getElementById('popupClose').onclick = function() {
    document.getElementById('popupBox').style.display = 'none'; 
}

window.onclick = function(event) {
    if (event.target === document.getElementById('popupBox')) {
        document.getElementById('popupBox').style.display = 'none'; 
    }
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === "password") {
        passwordInput.type = "text"; 
    } else {
        passwordInput.type = "password"; 
    }
}