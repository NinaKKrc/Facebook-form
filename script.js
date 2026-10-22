
/*document.getElementById("mojaForma").addEventListener("submit", function(event) {
    const kontakt = document.getElementById("kontakt").value.trim();
    const napaka = document.getElementById("napaka");

    // Preverjanje e-maila
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Preverjanje telefonske številke
    const telefonRegex = /^\+?[0-9\s()-]{7,20}$/;

    if (emailRegex.test(kontakt) || telefonRegex.test(kontakt)) {
        napaka.textContent = "";
        alert("Vnos je pravilen!");
    } else {
        event.preventDefault();
        napaka.textContent = "Vpiši veljaven e-mail ali telefonsko številko!";
    }
});*/
document.addEventListener("DOMContentLoaded", function() {
   
   document.getElementById("forgot-password").addEventListener("click", function(event) {
		window.location.href="password.html";
	});

});


