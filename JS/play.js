document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots=document.querySelectorAll('.dot')
    const totalSlides = slides.length;

  
    function showSlide(slideIndex) {  
      slides.forEach((slide, index) => {
        slide.classList.remove('show');
        if (index === slideIndex) {
          slide.classList.add('show');
         
        }
      });
    }
   
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
  
      if(currentSlide ==totalSlides) {
        currentSlide=0
        showSlide(currentSlide)
       
      }
    }  
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); 

  });

