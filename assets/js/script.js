
$(document).ready(function(){

	$(window).on('scroll', function(){
		var link = $(".navbar2 a.dot");
		var top = $(window).scrollTop();

		$(".sec").each(function(){
			var id = $(this).attr("id");
			var height = $(this).height();
			var offset = $(this).offset().top -150;

			if(top >= offset && top < offset + height){
				link.removeClass("active");

				$(".navbar2").find('[data-scroll="' + id + '"]').addClass('active');
			}
		})
	})
})


let home = document.querySelector('#home2');
let challenge = document.querySelector('#challenge');
let solution = document.querySelector('#solution');
let slideshow = document.querySelector('#slideshow');

window.addEventListener("scroll", ()=>{
	var windo = window.pageYOffset;

	if(challenge.offsetTop <= windo && solution.offsetTop > windo){
		console.log("challenge")
		document.querySelector(".challenge").setAttribute("id", "active");
		document.querySelector(".solution").removeAttribute("id", "active");
		document.querySelector(".slideshow").removeAttribute("id", "active");
		document.querySelector(".home2").removeAttribute("id", "active");

	} else if(solution.offsetTop <= windo && slideshow.offsetTop > windo){
		console.log("solution")
		document.querySelector(".solution").setAttribute("id", "active");
		document.querySelector(".challenge").removeAttribute("id", "active");
		document.querySelector(".slideshow").removeAttribute("id", "active");
		document.querySelector(".home2").removeAttribute("id", "active");

	} else if(slideshow.offsetTop <= windo){
		console.log("slideshow")
		document.querySelector(".slideshow").setAttribute("id", "active");
		document.querySelector(".solution").removeAttribute("id", "active");
		document.querySelector(".challenge").removeAttribute("id", "active");
		document.querySelector(".home2").removeAttribute("id", "active");

	} else {
		console.log("home2")
		document.querySelector(".home2").setAttribute("id", "active");
		document.querySelector(".solution").removeAttribute("id", "active");
		document.querySelector(".challenge").removeAttribute("id", "active");
		document.querySelector(".slideshow").removeAttribute("id", "active");
	}
})

