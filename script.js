document.addEventListener("DOMContentLoaded", function () {
    // Download CV when clicking the button
    document.getElementById("downloadCV").addEventListener("click", function () {
        window.open("Mahmoud.pdf", "_blank");
    });

    // Scroll animations
    const sections = document.querySelectorAll(".container");

    const revealSection = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection(); // Trigger on page load
});
