const navslide = () => {
   const burger = document.querySelector(".landpage__menuicon");
   const nav = document.querySelector(".landpage__list");
   const closebtn = document.querySelector(".landpage__close");

   burger.addEventListener("click", () => {
      nav.classList.toggle("active");
   });

   closebtn.addEventListener("click", () => {
      nav.classList.remove("active");
   });
};

navslide();
