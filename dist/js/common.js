// ;
// // Get the modal
// var modal = document.getElementById('id03');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }



;
var slideIndex = 1;
showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

function currentSlide(n) {
  showSlides(slideIndex = n);
  fillModal(slideIndex); // Fill modal window of current slide 
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  var dots = document.getElementsByClassName("slider__dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slider__dot--active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " slider__dot--active";
}



// Get collection of content from all slides
var slideTexts = document.getElementsByClassName("slider__text");

var modalText = document.getElementById("content01");

fillModal(slideIndex);

function fillModal(n){
  modalText.innerHTML = slideTexts[n-1].innerHTML;
}


var modal = document.getElementById("id01");
function showModal(){
  modal.style.display = 'block';
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}