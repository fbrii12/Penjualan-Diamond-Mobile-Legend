function showSnackbar(message) {
    var snackbar = document.getElementById("snackbar");
    snackbar.textContent = message;  
    snackbar.className = "show";     
    setTimeout(function() {
        snackbar.className = snackbar.className.replace("show", ""); 
    }, 3000);
}
showSnackbar('Anda belum memiliki pesanan.');

document.getElementById("updateContentBtn").addEventListener("click", function () {
    var content = document.getElementById("main-content");
    content.textContent = "Silahkan Pilih Kategori Game nya";
});