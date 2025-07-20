
const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");
const prevBtn = document.createElement("span");
const nextBtn = document.createElement("span");
let currentIndex = 0;

// Add navigation buttons
prevBtn.classList.add("lightbox-nav", "prev-btn");
prevBtn.innerHTML = "&#10094;"; // Left arrow
nextBtn.classList.add("lightbox-nav", "next-btn");
nextBtn.innerHTML = "&#10095;"; // Right arrow

lightbox.appendChild(prevBtn);
lightbox.appendChild(nextBtn);

// Add styles for navigation buttons
const style = document.createElement("style");
style.innerHTML = `
    .lightbox-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #d4af37;
        font-size: 50px;
        font-weight: bold;
        cursor: pointer;
        transition: color 0.3s;
        user-select: none;
        padding: 10px;
    }
    .lightbox-nav:hover {
        color: #ffd700;
    }
    .prev-btn {
        left: 20px;
    }
    .next-btn {
        right: 20px;
    }
`;
document.head.appendChild(style);

function showImage(index) {
    lightboxImg.src = galleryItems[index].src;
    currentIndex = index;
}

galleryItems.forEach((img, index) => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
        showImage(index);
    });
});

closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});

prevBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent lightbox from closing
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showImage(currentIndex);
});

nextBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent lightbox from closing
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showImage(currentIndex);
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
    if (lightbox.classList.contains("active")) {
        if (e.key === "ArrowLeft") {
            prevBtn.click();
        } else if (e.key === "ArrowRight") {
            nextBtn.click();
        } else if (e.key === "Escape") {
            closeLightbox.click();
        }
    }
});


