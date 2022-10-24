let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}


const headers = document.querySelectorAll('.header')

window.addEventListener('scroll', checkHeaders)

function checkHeaders() {
    const triggerBottom = window.innerHeight / 5 * 4

    headers.forEach(header => {
        const headerTop = header.getBoundingClientRect().top

        if(headerTop < triggerBottom) {
            header.classList.add('show')
        } else {
            header.classList.remove('show')
        } 
    })
} 