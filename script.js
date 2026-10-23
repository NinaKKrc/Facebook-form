
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
   var fpassword = document.getElementById("forgot-password");
   var caccount = document.getElementById("create-account");
   var out = document.getElementById("back");
   var out2 = document.getElementById("back2");
   var out3 = document.getElementById("back3");
   var gselect = document.getElementById("drop1");
   var opcija = document.getElementById("drop2");
   var opcija2 = document.getElementById("drop3");
   
   if(fpassword)
   fpassword.addEventListener("click", function(event) {
		window.location.href="password.html";
	});
	
	if(caccount)
   caccount.addEventListener("click", function(event) {
		window.location.href="singUp.html";
	});
	
	if(out)
   out.addEventListener("click", function(event) {
		window.location.href="index.html";
	});
	
	if(out2)
   out2.addEventListener("click", function(event) {
		window.location.href="index.html";
	});
	
	if(out3)
   out3.addEventListener("click", function(event) {
		window.location.href="index.html";
	});
	
	if(gselect)
		drop1.addEventListener("change", function(event) {
		
		if(drop1.value == "c"){
			opcija.classList.remove("hidden");
			opcija2.classList.remove("hidden");
		}else{
			opcija.classList.add("hidden");
			opcija2.classList.add("hidden");
		}
	});
	
	let datum = new Date();
	datum.setFullYear(datum.getFullYear() - 117);

	document.getElementById("datum").min =
    datum.toISOString().split("T")[0];
	
	const button = document.getElementById("loginBtn");
	const toast = document.getElementById("toast");

	button.addEventListener("click", function(event) {
    event.preventDefault();

    toast.classList.add("show");

    setTimeout(function() {
        toast.classList.remove("show");
    }, 3000);
});
	

});


