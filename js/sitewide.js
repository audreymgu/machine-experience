var timeoutID;

function delayedHide() {
	timeoutID = window.setTimeout(hideObject, 1000);
}

function hideObject() {
	$("h1").addClass("hidden");
}

function fadeOut() {
	$("h1").addClass("fade-out");
}

$('a').click(function (e) {
    e.preventDefault();                   // prevent default anchor behavior
    var goTo = this.getAttribute("href"); // store anchor href

    // do something while timeOut ticks ... 

    setTimeout(function(){
         window.location = goTo;
    },1000);       
}); 