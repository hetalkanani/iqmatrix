// header more menu
document.getElementById("hemburger-menu").addEventListener("click", function () {
	document.getElementById("hemburger-menu").classList.toggle("show-menu");
	document.getElementById("hemburger-menu-list").classList.toggle("show-menu-list");
});

// mobile menu sidebar
document.getElementById("hemburger-mobilemenu").addEventListener("click", function () {
	document.getElementById("left-sidebar").classList.toggle("open-sidebar");
	document.getElementById("hemburger-mobilemenu").classList.toggle("show-menu");

});

// dash-head location change for responsive
function moveDiv() {
	var sourceDiv = document.getElementById("dash-head");
	var destinationDiv = document.getElementById("report-wrap");
	var sourcedestinationDiv = document.getElementById("main-wrapper");

	// Check if the window width is below 1199 pixels
	if (window.innerWidth <= 1199) {
		// Move the source div to the beginning of the destination div
		if (sourceDiv) {
			destinationDiv.insertBefore(sourceDiv, destinationDiv.firstChild);
		}
	} else {
		// Move the source div back to its original location
		if (sourcedestinationDiv) {
			sourcedestinationDiv.insertBefore(sourceDiv, sourcedestinationDiv.firstChild);
		}
	}
}
// Execute moveDiv function on window load and resize events
window.onload = moveDiv;
window.onresize = moveDiv;
