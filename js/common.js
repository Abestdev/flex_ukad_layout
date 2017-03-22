$(document).ready(function() {

	

	$('menu ').on({
		click: function(){
			$('.dropDownMenu').slideDown(500).addClass('dropDownMenuShow')
		}, 

		mouseleave: function(){
			$('.dropDownMenu').fadeOut(500).removeClass('dropDownMenuShow');
		}, 


	});

	$(".owl-carousel").owlCarousel({

		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		singleItem : true,
		autoPlay   : true,
		pagination : false,
		navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],


		itemsDesktop : false,
		itemsDesktopSmall : false,
		itemsTablet : false,
		itemsMobile : false
	});

	$(".specialist-carousel").owlCarousel({
		items : 4,				
		navigation : false,
		pagination :true,
		autoPlay : 3000,
	 
 
     


	}); 
	

	
});

