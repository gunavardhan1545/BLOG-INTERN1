// Toggle Navigation Menu (Mobile)
function toggleMenu() {
    let nav = document.getElementById("nav-menu");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

// Toggle Blog Content
function toggleContent(button) {
    let content = button.nextElementSibling;
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.innerText = "Read Less";
    } else {
        content.style.display = "none";
        button.innerText = "Read More";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtns = document.querySelectorAll(".read-more-btn");

    readMoreBtns.forEach((btn) => {
        btn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevents the page from refreshing
            const post = this.closest(".blog-post"); // Ensures it selects the correct post
            const shortText = post.querySelector(".short-text");
            const fullText = post.querySelector(".full-text");

            if (fullText.style.display === "none" || fullText.style.display === "") {
                fullText.style.display = "block";
                shortText.style.display = "none";
                this.textContent = "Read Less";
            } else {
                fullText.style.display = "none";
                shortText.style.display = "block";
                this.textContent = "Read More";
            }
        });
    });
});
