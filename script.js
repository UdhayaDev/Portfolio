// Initialize Swiper slider for certificates
new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 2500,
    },
    slidesPerView: 1
});

// Function to toggle project description on click/tap
function toggleDesc(card) {
    const desc = card.querySelector(".project-desc");

    // Close any other open descriptions
    document.querySelectorAll(".project-desc").forEach(d => {
        if (d !== desc) {
            d.classList.remove("show");
        }
    });

    // Toggle the clicked description
    desc.classList.toggle("show");
}

// Optional: close description if user clicks outside a project card
document.addEventListener("click", function(event) {
    const isProject = event.target.closest(".project");
    if (!isProject) {
        document.querySelectorAll(".project-desc").forEach(desc => {
            desc.classList.remove("show");
        });
    }
});