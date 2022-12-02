$(document).ready(function(){
	    $("#Read").click(function(){
		    $(this).hide();
		    $(".Read1").show();
			$("#Read2").show();
		});
    
		$('#contact').hover(function(){
			$('#h').toggle();
		});
		$("#Read2").click(function(){
		    $(this).hide();
		    $(".Read1").hide();
			$("#Read").show();
		});
		$('#icon').click(function(){
			$('#horizontal-list').toggle();
		});
		$('#bank').mouseenter(function(){
			$(this).css('color','red');
		});
		$('#bank').mouseleave(function(){
			$(this).css('color','black');
		});
		$('.center').mouseenter(function(){
			$(this).css('color','#ff6666 ');
		});
		$('.center').mouseleave(function(){
			$(this).css('color','black');
		});
		$('.x').mouseenter(function(){
			$(this).css('color','#006666');
		});
		$('.x').mouseleave(function(){
			$(this).css('color','black');
		});
	});
	
		var slideIndex = 0;
		showSlides();

		function showSlides() {
		  var i;
		  var slides = document.getElementsByClassName("mySlides");
		  var dots = document.getElementsByClassName("dot");
		  for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
		  }
		  slideIndex++;
		  if (slideIndex > slides.length) {slideIndex = 1}    
		  for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		  }
		  slides[slideIndex-1].style.display = "block";  
		  dots[slideIndex-1].className += " active";
		  setTimeout(showSlides, 2000); // Change image every 2 seconds
		}
    