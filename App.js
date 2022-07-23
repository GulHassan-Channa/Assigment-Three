var screenValue = document.getElementById('screen');


function abc(buttonValue) {
       // alert(buttonValue)
        screenValue.value += buttonValue
      
}
function calculate() {
        screenValue.value = eval(screenValue.value)

}

function clearScreen() {
        screenValue.value = " ";
}




// Slider Code 

var slideIndex = 1;
showSlides(slideIndex);
// Next 
function plusSlides(n) {
        showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
        showSlides(slideIndex = n);
}

function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("Images");
        if (n > slides.length) {
                slideIndex = 1
        }
        if (n < 1) {
                slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
}
