function showPopup(event) {
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