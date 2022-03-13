// var counter = 1;

// setInterval(function () {
//    document.getElementById("radio" + counter).checked = true;
//    counter++;
//    if (counter > 4) {
//       counter = 1;
//    }
// }, 5000);

var slideindex = 1;

showlides(slideindex);

function pluslides(n) {
   showlides((slideindex += n));
}

function currentslides(n) {
   showlides((slideindex = n));
}

function showlides(n) {
   var i;
   var slides = document.getElementsByClassName("myslides");
   var dots = document.getElementsByClassName("dot");
   if (n > slides.length) {
      slideindex = 1;
   }
   if (n < 1) {
      slideindex = slides.length;
   }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }

   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideindex - 1].style.display = " block";
   dots[slideindex - 1].className += " active";
}
