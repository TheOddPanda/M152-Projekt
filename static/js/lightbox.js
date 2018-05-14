function openModal() {
    document.getElementById('closeViewModal').style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById('closeViewModal').style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(elementId) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("thumbnail");
    let captionText = document.getElementById("caption");
    if (elementId > slides.length) {
        slideIndex = 1
    }
    if (elementId < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
