// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

// EMAIL JS
// (for spam protection)
// Usage:
// * Fill in your email address in the variable ‘XXeml’ below,
// * Put a span with class="js-XXemail" where you want the link,
// * Add <script>window.onload = myEmail();</script> after calling this script.
//
// Returns an array of elements with the given class
function getElementsByClass(elem, classname) {
	var classes = new Array();
	var alltags = document.getElementsByTagName(elem);
	for (i = 0; i < alltags.length; i++)
		if (alltags[i].className == classname)
			classes[classes.length] = alltags[i];
	return classes;
}
function myEmail() {
	var eml  = 'fernarbeit'   // The email address...
	eml += '@'
	eml += 'pxi.gmbh'

	var link = document.createElement("a");
	link.setAttribute("href", "mailto:" + eml);
	link.appendChild(document.createTextNode(eml));
	var spans = getElementsByClass("span", "js-email");
	for (var i = 0; i < spans.length; i++)
		spans[i].parentNode.replaceChild(link.cloneNode(true), spans[i]);
}
function datenschutzEmail() {
	var eml  = 'datenschutz'   // The email address...
	eml += '@'
	eml += 'pxi.gmbh'

	var link = document.createElement("a");
	link.setAttribute("href", "mailto:" + eml);
	link.appendChild(document.createTextNode(eml));
	var spans = getElementsByClass("span", "js-datenschutz-email");
	for (var i = 0; i < spans.length; i++)
		spans[i].parentNode.replaceChild(link.cloneNode(true), spans[i]);
}

// FRAMEBREAKER
// (disable viewing this site in iframes)
// Usage:
// * Add <script>window.onload = frameBreaker();</script> after calling this script.
//
function frameBreaker()
{
  if (top.location != location) {
	top.location.href = document.location.href ;
  }
}

// Helper for _navmenu.css
// close Menu with ID #open if the user clicks outside of it
document.addEventListener("click", (evt) => {
    const flyoutElement = document.getElementById("open");
    let targetElement = evt.target; // clicked element
    do {
        if (targetElement == flyoutElement) {
            // This is a click inside. Do nothing, just return.
            // document.getElementById("flyout-debug").textContent = "Clicked inside!"; // add div with id flyout debug to HTML, comment in for debugging
            return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
    } while (targetElement);

    // This is a click outside.
    // Simulate a click event on link to update :active #ID to #close
    var simulateClick = function (elem) {
    	// Create our event (with options)
    	var evt = new MouseEvent('click', {
    		bubbles: true,
    		cancelable: true,
    		view: window
    	});
    	// If cancelled, don't dispatch our event
    	var canceled = !elem.dispatchEvent(evt);
    };
    var closeNavMenu = document.querySelector('#nav--close'); // execute on navigation-closing link ID
    simulateClick(closeNavMenu);

    // document.getElementById("flyout-debug").textContent = "Clicked outside!"; // see debug above
});
