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
	var spans = getElementsByClass("span", "js--datenschutz-email");
	for (var i = 0; i < spans.length; i++)
		spans[i].parentNode.replaceChild(link.cloneNode(true), spans[i]);
}
function teilhabeEmail() {
	var eml  = 'teilhabe'   // The email address...
	eml += '@'
	eml += 'leitfaden-fernarbeit.de'

	var link = document.createElement("a");
	link.setAttribute("href", "mailto:" + eml);
	link.appendChild(document.createTextNode(eml));
	var spans = getElementsByClass("span", "js--teilhabe-email");
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
document.addEventListener("click", function(e) {
    const navMenu = document.getElementById("nav--menu");
    const navLinks = navMenu.getElementsByTagName("a");
    let navToggle = document.getElementById("nav--toggle-button");
    let pressed = (navToggle.getAttribute("aria-pressed") === "true");
    let targetElement = e.target; // clicked element
    do {
        if (targetElement == navMenu) {
          // This is a click inside. Do nothing, just return.
          return;
        }
        for (var i = navLinks.length - 1; i >= 0; --i) {
          if (targetElement == navLinks[i]) {
            // close, when link is clicked
            navToggle.click();
          }
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
    } while (targetElement);
    // This is a click outside.
    if (pressed) { navToggle.click(); } // execute on navigation-closing link ID
});
// close nav-menu on "ESC"
window.addEventListener("keyup",function(e){
  let navToggle = document.getElementById("nav--toggle-button");
  let pressed = (navToggle.getAttribute("aria-pressed") === "true");
  if(e.key==="Escape" && pressed ) {
    // close nav
    navToggle.click();
  }
});


// accessibility helper for elements (other than <buttons>) used as toggle buttons
// call from within HTML-element with onclick="toggleButtonClick()" and onkeypress="toggleButtonKeyPress()"
// don't forget to add role="button" and aria-pressed="false" and tabindex="0" to the element
// also add an aria-label and describe what the button does so that it is accessible by keyboards and screen readers
//
// function to apply changes to element onclick (call in HTML)
function toggleButtonClick() {
  toggleButton(event.target);
}
// function to apply changes to element onkeypress (call in HTML)
function toggleButtonKeyPress() {
  // Check to see if space or enter were pressed
  if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") { // "Spacebar" for IE11 support
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    // initiate a click on the element, triggering the function that fires onclick
    event.target.click();
  }
}
// function that is called on either click or onkeypress
function toggleButton() {
  // Check to see if the button is pressed
  var unpressed = (event.target.getAttribute("aria-pressed") === "false");
  // We can add more functionality to this script here. Toggling the aria-pressed attribute for now.
  if(unpressed) {
    // Change aria-pressed to the opposite state
    event.target.setAttribute("aria-pressed", "true");
  } else {
    // Change aria-pressed to the opposite state
    event.target.setAttribute("aria-pressed", "false");
  }
}
