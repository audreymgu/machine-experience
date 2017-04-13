var audio = document.getElementById('init');

function redirectHandler() {
  window.location = 'landing.html';
}

audio.addEventListener('ended', redirectHandler, false);

function play(){
	audio.play();
}

// Animations

var timeoutID;

function delayedHide() {
	timeoutID = window.setTimeout(hideObject, 1000);
}

function hideObject() {
	$("h1").addClass("hidden");
}

function fadeOut() {
	$("h1").removeClass("fade-in");
	$("h1").addClass("fade-out");
}

//Text Generation

function generate() {
	var rtn = '';
	var ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var ID_LENGTH = 8;
	for (var i = 0; i < ID_LENGTH; i++) {
		rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
	}
	var lead = document.getElementById("output").innerHTML;
	document.getElementById("output").innerHTML = lead + rtn;
}


