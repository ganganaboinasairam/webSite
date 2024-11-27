// script.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Website Loaded");
    // Additional interactivity can be added here.
	
	if (window.location.hash) {
        window.history.replaceState(null, null, window.location.href.split("#")[0]);
    }
});

