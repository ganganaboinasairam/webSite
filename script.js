
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "Gallery/image1.jpg",
        "Gallery/image2.jpg",
        "Gallery/image3.jpg",
        "Gallery/image4.jpg"
    ];

    const galleryDiv = document.getElementById("portraitGallery");
    galleryDiv.innerHTML = ""; // Clear any existing content

    images.forEach(imageSrc => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-6"); // Adjust size as needed

        const img = document.createElement("img");
        img.src = imageSrc;
        img.classList.add("img-fluid", "rounded");
        img.alt = "Pencil Portrait";

        colDiv.appendChild(img);
        galleryDiv.appendChild(colDiv);
    });
	
	const navbar = document.querySelector(".navbar");
    const brand = document.querySelector(".navbar-brand");
    const navbarOffset = navbar.offsetTop;

    window.addEventListener("scroll", function () {
        if (window.pageYOffset >= navbarOffset) {
            navbar.classList.add("sticky");
            brand.textContent = "Ganganaboina Sairam"; // Change text when sticky
        } else {
            navbar.classList.remove("sticky");
            brand.textContent = "Portfolio"; // Revert when not sticky
        }
    });
});	

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        const navbarHeight = document.querySelector(".navbar").offsetHeight;

        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight, /* Ensures proper alignment */
            behavior: "smooth"
        });
    });
});
