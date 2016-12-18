$(document).click(function () {
	// body...
	console.log("clicked!");
});


/*$(document).keypress(function (e) {
	console.log(String.fromCharCode(e.keyCode));
});*/

/* .keypress() API of jQuery 

We can add functionality when some key is pressed .

We can select the desired area by selector

$(document).keypress(function(){};);

Also , if we want to keep track of which key is pressed , we can pass that key as argument
Ex. 

$(document).keypress(function (e) {
	// here in this function e is the key pressed

	// we can access the ASCII code of key press by following function
	console.log(e.keyCode);

	// we can access the character by , string.fromCharCode() method
	console.log(string.fromCharCode(e.keyCode));
});
*/

//window.addEventListener("keypress",function(e){console.log(e.keyCode)});

//equivalent jQuery code 
/*$(document).keypress(function (e) {
	// body...
	console.log("jQuery , key pressed : ",String.fromCharCode(e.keyCode));
});*/

/*
	keypress : alphanumeric key (all distinct , capitals and smalls)
	keydown : when key is pressed (A means A , no a )
	keyup : when key is released .
*/

/*window.addEventListener("keyup",function(e){
	console.log("Key : ",String.fromCharCode(e.keyCode)," is just released !");
});*/

/*$(document).keyup(function  (e) {
	// body...
	console.log("jQuery , Key released : ",String.fromCharCode(e.keyCode));
});*/

/*window.addEventListener("keydown",function(e){
	console.log("Key : ",String.fromCharCode(e.keyCode)," is just pressed !");
});*/

/*$(document).keydown(function  (e) {
	// body...
	console.log("jQuery , Key pressed down : ",String.fromCharCode(e.keyCode));
});
*/


$(document).keydown(function  (e) {
	// body...
	var character = String.fromCharCode(e.keyCode);

	if(character === 'A') {

		const btn = $("button[data-key = '65']");

		btn.addClass("playing");

		window.addEventListener("transitionend", function  (e) {
			// body...
				btn.removeClass("playing");
		});
	};

	if(character === 'S') {

		const btn = $("button[data-key = '83']");

		btn.addClass("playing");

		window.addEventListener("transitionend", function  (e) {
			// body...
				btn.removeClass("playing");
		});
	};

	if(character === 'D') {

		const btn = $("button[data-key = '68']");

		btn.addClass("playing");

		window.addEventListener("transitionend", function  (e) {
			// body...
				btn.removeClass("playing");
		});
	};

	if(character === 'F') {

		const btn = $("button[data-key = '70']");

		btn.addClass("playing");

		window.addEventListener("transitionend", function  (e) {
			// body...
				btn.removeClass("playing");
		});
	};

	if(character === 'G') {

		const btn = $("button[data-key = '71']");

		btn.addClass("playing");

		window.addEventListener("transitionend", function  (e) {
			// body...
				btn.removeClass("playing");
		});
	};

	if(character === 'H') {

		const btn = $("button[data-key = '72']");

		btn.addClass("playing");

		window.addEventListener("transitionend", function  (e) {
			// body...
				btn.removeClass("playing");
		});
	};

	if(character === 'J') {

		const btn = $("button[data-key = '74']");

		btn.addClass("playing");

		window.addEventListener("transitionend", function  (e) {
			// body...
				btn.removeClass("playing");
		});
	};

	if(character === 'K') {

		const btn = $("button[data-key = '75']");

		btn.addClass("playing");

		window.addEventListener("transitionend", function  (e) {
			// body...
				btn.removeClass("playing");
		});
	};

	if(character === 'L') {

		const btn = $("button[data-key = '76']");

		btn.addClass("playing");

		window.addEventListener("transitionend", function  (e) {
			// body...
				btn.removeClass("playing");
		});
	};

}); 







/* ---------------------------------------------------------------- 

if I dont want to use 9 if(){} statement, can I do something like the followig code

but exactly this code is not working .

$(document).keydown(function  (e) {
	// body...
	var character = e.keyCode;
	console.log(character);

		const btn = $("button[data-key = character ]");

		btn.addClass("playing");

		window.addEventListener("transitionend", function  (e) {
			// body...
				btn.removeClass("playing");
		});
});

*/


