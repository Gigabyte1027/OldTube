var menuToggleVar = 0;

function appStart() {
	var welcome = document.getElementById('dialog1');
	welcome.setAttribute("style", "opacity\: 0\; \-webkit\-transform\: scale(0)\;");
	document.getElementById('headMain').style.display = "block";
	document.getElementById('logo-translucent').style.opacity = "0";
	document.getElementById('title').innerHTML = "OldTube";
}
function menuToggle() {
	menuToggleVar++;
	if(menuToggleVar == 1) {
		document.getElementById('headMain').style.left = "-20rem";
		document.getElementById('headMain').style.opacity = "0.75";
		document.getElementById('bg').style.left = "-20rem";
		document.getElementById('navmenu').style.display = "none";
	}
	if(menuToggleVar == 0) {
		document.getElementById('headMain').style.left = "0rem";
		document.getElementById('headMain').style.opacity = "1";
		document.getElementById('bg').style.left = "0rem";
		document.getElementById('navmenu').style.display = "block";
	}
	if(menuToggleVar > 1) {
		menuToggleVar = 0;
		
		document.getElementById('headMain').style.left = "0rem";
		document.getElementById('headMain').style.opacity = "1";
		document.getElementById('bg').style.left = "0rem";
		document.getElementById('navmenu').style.display = "block";
	}
}