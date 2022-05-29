var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("image");

  slideIndex++;
  if (slideIndex == slides.length) {slideIndex = 0}

  slides[slideIndex].style.display = "block";

  for (i = 0; i < slides.length; i++) {
    if (i!=slideIndex)
      slides[i].style.display = "none";
  }

  setTimeout(showSlides, 5000); // Change image every 5 seconds
}