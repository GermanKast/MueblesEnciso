
/**************************************** inicio animacion links en navbar en tamaño de celular **************************************/
		const btnIconList = document.getElementById("span-icon-list");

		btnIconList.addEventListener("click", () => {

			const navbarLinks = document.getElementsByClassName("navbar-links")[0];

			if(navbarLinks.style.top == "-260px"){
				navbarLinks.style.top = "0px";
			}else{
				navbarLinks.style.top = "-260px";
			}
		});
/******************************************************* fin animacion links ***********************************************************/
/***************************************************** inicio animacion Navbar *********************************************************/
		let lastScroll = 0;
		let timeToToggleNavbar;

		window.addEventListener("scroll", () => {

			const navbarHidden = isNavbarHidden();

			clearTimeout(timeToToggleNavbar); // si existe detiene la funcion que espera ser ejecutada
			// si la pagina tiene una pos Y mayor a 500 ya se pasó la seccion del header y ya se puede empezar a mostrar u ocultar el navbar
			if(window.pageYOffset <= 150){
				if(navbarHidden)showNavbar();
			}else{

				const scrollDown = window.pageYOffset > lastScroll ? true : false;

				if(scrollDown && !navbarHidden){
					timeToToggleNavbar = setTimeout( hideNavbar , 200);
				}
				if(!scrollDown && navbarHidden){
					timeToToggleNavbar = setTimeout( showNavbar, 200);
				}
			}
				
			lastScroll = window.pageYOffset;
		});

		function isNavbarHidden(){
			let navbar = document.getElementById('navbar');
			return navbar.classList.contains('hide-navbar');
		}

		function hideNavbar(){
			const navbar = document.getElementById('navbar');
			const navbarLinks = document.getElementsByClassName("navbar-links")[0];

			if(navbarLinks.style.top == "0px"){ // si los links estan desplegados se ocultan
				navbarLinks.style.top = "-260px";
			}

			navbar.classList.add('hide-navbar');
		}

		function showNavbar(){
			let navbar = document.getElementById('navbar');
			navbar.classList.remove('hide-navbar');
		}

/***************************************************** Fin Navbar ***************************************************************/
/************************************************** cambiar pagina ***************************************************************/
function changePage(page){

	const path = document.location.href;
	const catalogPage = "catalog-" + page;
	let finalPath = "";

	if( path.includes("index") ){
		finalPath = path.replace('index',catalogPage);
	}else{
		finalPath = path + catalogPage + ".html";
	}

	document.location.href = finalPath;

}
/*********************************************** fin cambiar pagina ***************************************************************/