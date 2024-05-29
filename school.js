// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slide");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].className = slides[i].className.replace(" active", "");
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) { slideIndex = 1 }
//   slides[slideIndex - 1].className += "active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


       
    
//         $(document).ready(function() {
//             // Add 'active' class to the link corresponding to the current page
//             $('[href]').each(function() {
//                 if (this.href === window.location.href) {
//                     $(this).addClass('toggle-button');
//                 }
//             });
//         });
   





        
        const slideContainer = document.querySelector('.slide-container');
        const images = document.querySelectorAll('.slide img');
        const imageCount = images.length;
        let currentIndex = 0;
    
        function nextSlide() {
            currentIndex = (currentIndex + 1) % imageCount;
            const translateX = -currentIndex * 100;
            slideContainer.style.transform = `translateX(${translateX}%)`;
        }
    
        setInterval(nextSlide, 3000); // Change image every 3 seconds
    