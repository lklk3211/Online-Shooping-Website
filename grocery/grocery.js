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
		
		
	
	$(document).ready(function(){
		$('#icon').click(function(){
			$('#horizontal-list').toggle();
		});
		$('.a10').mouseenter(function(){
			$(this).css('color','#33cc33');
		});
		$('.a10').mouseleave(function(){
			$(this).css('color','black');
		});
		$('.x').mouseenter(function(){
			$(this).css('color','#006666');
		});
		$('.x').mouseleave(function(){
			$(this).css('color','black');
		});
		$('#contact').hover(function(){
			$('#h').toggle();
		});
	});

	// toggleCart function to display cart on its click:
			var coll = document.getElementById("showDiv");
			coll.addEventListener('click', function() {
					this.classList.toggle("active");
					var content = this.nextElementSibling;
					//console.log(coll);
					if (content.style.display == "block") {
					  content.style.display = "none";
					} else {
					  content.style.display = "block";
					}
			  });

	
	
	     var removeCart = document.getElementsByClassName("remove");
		 //console.log(removeCart);
		 for (var i=0;i<removeCart.length;i++){
		     var button = removeCart[i];
			 button.addEventListener('click',function(event){
			    var buttonClicked = event.target;
				buttonClicked.parentElement.parentElement.remove();
				updateCartTotal();
			 })	 
		 }
		 
		 
		 
		 //console.log(document.getElementsByClassName('cart-price'))[0].innerText;
		 
		 function updateCartTotal(){
		     //var cartItemContainer = document.getElementsByClassName('cart-items')[0];
		     var cartRows = document.getElementsByClassName('cart-row');
			 //console.log("CART ROWS ARE :" + cartRows); 
			 var i;
			 var total=0;
			 for (i=0;i<parseInt(cartRows.length);i++){
				  //console.log(document.getElementsByClassName('cart-price')[i].innerText);
				  //console.log(cartRows[i]);
				  var priceElement = document.getElementsByClassName('cart-price')[i];
				  var quantityElement = document.getElementsByClassName('cart-quantity-input')[i];
				  var price = parseFloat(priceElement.innerText);
	              //console.log(price);
				  var quantity = parseFloat(quantityElement.value);
				  //console.log(quantity);
				  //console.log(price*quantity);
				  total += (price*quantity);
			 }
		   // console.log(total);
			document.getElementsByClassName('cart-total-price')[0].innerText = total;
			
			var DeliveryCharge = document.getElementsByClassName("cart-delivery")[0];
			var del = Math.round((10/100)*total);     // Taking delivery charge as 10% of total.
			DeliveryCharge.innerHTML = del;
			
			var TotalToPay = document.getElementsByClassName("total")[0];
			TotalToPay.innerHTML = total + del;
		 }
		 updateCartTotal();
	   
	     
		 /*
		 var quantityInputs = document.getElementsByClassName('cart-quantity-input');
		 for (var i=0;i<quantityInputs.length;i++){
		    var input =quantityInputs[i];
			input.addEventListener('change',quantityChanged);
		 }
		 
		 function quantityChanged(event){
		    var input = event.target;
		    // This function returns false, if it is not a number or negative no 	
			if (isNaN(input.value) || input.value <= 0){
			    input.value = 1;
			}
			updateCartTotal();
		 }
		 quantityChanged(); */
		 
	
	     var addToCartButtons = document.getElementsByClassName('shop-item-button');
	     for (var i=0;i<addToCartButtons.length;i++){
	        var button = addToCartButtons[i];
		    button.addEventListener('click',addToCartClicked);	
	     }
		 
		 function addToCartClicked(event){
		    var button = event.target;
			var shopItem = button.parentElement.parentElement;
			if (shopItem.className == "fruits1"){
				console.log(shopItem);
				var title = shopItem.getElementsByClassName('food')[0].textContent;
				var price = parseFloat(shopItem.getElementsByClassName('cost')[0].innerText);
				var imageSrc = shopItem.querySelector('img').src;
				console.log(title,price,imageSrc);
				addItemToCart(title,price,imageSrc);
		    }
           else{
		      shopItem = button.parentElement.parentElement.parentElement;
			  console.log(shopItem);
				var title = shopItem.getElementsByClassName('food')[0].textContent;
				var price = parseFloat(shopItem.getElementsByClassName('cost')[0].innerText);
				var imageSrc = shopItem.querySelector('img').src;
				console.log(title,price,imageSrc);
				addItemToCart(title,price,imageSrc);
		   }		
		}
		
		function addItemToCart(title,price,imageSrc){
		    //var cartRow = document.createElement('div');    // We will append this cart Row to the end of the cart.
			//cartRow.innerText = title + "  " + price;
			// Adding class to this row:
			//cartRow.classList.add('cart-row');
			//cartRow.classList.add('remove');
			var cartItems = document.getElementsByClassName('cart-items')[0];
			alert(title + " is added to your cart");
			
			/* // To check whether the item is already added???
			var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
			console.log(cartItemNames);
			for (var i=0;i<cartItemNames.length;i++){
			       //console.log(cartItemNames[i].innerText,title);
			     if (cartItemNames[i].innerText == title){ 
                     alert("This item is already added to cart");
					 return;
				}	 
			}   */
			
			var cartRowContents = `
			   <div class="cart-row" style="display:flex;justify-content:space-around;margin-left:-14%;">
			      <div class="cart-item cart-column">
				      <img class="cart-item-image" src="${imageSrc}" width="80" height="80" style="border-radius:12.5%">
                      <span class="cart-item-title" style="margin-left:3px;vertical-align:top;"> ${title} </span> 
				  </div>
				  <div class="cart-price cart-column" style="margin-left:-10%;"> ${price} </div>
				  <div class="cart-quantity cart-column">
				       <input class="cart-quantity-input" style="width:40px;margin-right:100px;" type="number" value="1">
					   <button class="remove" type="button" style="width:150px;background-color:yellow;"> REMOVE </button>
				  </div>
			    </div>	  
				  `;			
			cartItems.innerHTML += cartRowContents;              // innerHTML is must to use as we add html code as a content.
			//cartItems.append(cartRow);	
			
		 
			//console.log(cartRow.getElementsByClassName('remove')[0]);
			var cartItems = document.getElementsByClassName('cart-items')[0];
			var n = cartItems.getElementsByClassName('remove').length;
			for (var i=0;i<n;i++){
				 document.getElementsByClassName('remove')[i].addEventListener('click',function(event){
						 var buttonClicked = event.target;
						 console.log(buttonClicked.parentElement.parentElement);
						 buttonClicked.parentElement.parentElement.remove();
						 updateCartTotal();
				 });   
			} 
			//var cartItems = document.getElementsByClassName('cart-items')[0];
			var p = cartItems.getElementsByClassName('cart-quantity-input').length;
			for (var i=0;i<p;i++){
				 document.getElementsByClassName('cart-quantity-input')[i].addEventListener('change',function(event){
				            var input = event.target;
							// This function returns false, if it is not a number or negative no 	
							if (isNaN(input.value) || input.value <= 0){
								input.value = 1;
							}
							updateCartTotal();
				 });   
			} 
		    updateCartTotal();	
      }
	
	