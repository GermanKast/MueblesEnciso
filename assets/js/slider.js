/******************************************** inicio Slider galeria imagenes *********************************************************/
		let slideIndex = 1;
		showSlides(slideIndex);

		// Control siguiente/anterior
		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}

		// Controles de miniatura
		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}

		function showSlides(n) {

			let i;
			let slides = document.getElementsByClassName("slides");
			let dots = document.getElementsByClassName("dot");

			// seccion que restablece el index para que nunca sea mayor o menor al numero de imagenes
			if (n > slides.length) {slideIndex = 1}
			if (n < 1) {slideIndex = slides.length}

			//se recorren todas las imagenes y se ocultan
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
			// se recorren todos los puntos inferiores y se desactivan
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}

			// segun el index se muestra la imagen y el punto inferior
			slides[slideIndex-1].style.display = "block";
			dots[slideIndex-1].className += " active";

		}
/******************************************** fin Slider galeria imagenes *********************************************************/