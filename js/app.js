$(document).ready(function(){
	// go up scroll Top
	$(".go-up").click(function(){
		$("body, html").animate({scrollTop:0}, 800);
	});
	// carousel img part gallery
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});
	// add class active cho menu 
	$("nav ul li a ").click(function(){
		$("nav ul li a").removeClass('active');
		$(this).addClass('active');
	});

	// khoi tao hieu ung wow
	new WOW().init();
	 // hieu uwng phan header-main
	TweenMax.from(".header-main-title",1.5,{y:200 });

	  // hieu uwng phan services
	TweenMax.staggerFrom(".service .service-item",2,{y:1000, opacity:0}, 0.3);
	  // hieu ung phan project
	$('.project-content').hide();
	$(".project-click1").click(function(){
	  	$('.show-content1').toggle();
	});
	$(".show-content1").click(function(){
	  	$(this).hide();
	});
	$(".project-click2").click(function(){
	  	$('.show-content2').toggle();
	});
	$(".show-content2").click(function(){
	  	$(this).hide();
	});
	$(".project-click3").click(function(){
	  	$('.show-content3').toggle();
	});
	$(".show-content3").click(function(){
	  	$(this).hide();
	});
	$(".project-click4").click(function(){
	  	$('.show-content5').toggle();
	});
	$(".show-content4").click(function(){
	  	$(this).hide();
	});
	$(".project-click5").click(function(){
	  	$('.show-content5').toggle();
	});
	$(".show-content5").click(function(){
	  	$(this).hide();
	});
	$(".project-click6").click(function(){
	  	$('.show-content6').toggle();
	});
	$(".show-content6").click(function(){
	  	$(this).hide();
	});

	// count up
	
	$('.counter').each(function() {
		var $this = $(this),
		countTo = $this.attr('data-count');
		$({ countNum: $this.text()}).animate({
				countNum: countTo
		},
		{
			duration: 40000,
			easing:'linear',
			step: function() {
				$this.text(Math.floor(this.countNum));
			},
			complete: function() {
				$this.text(this.countNum);
	        }
		});  
	});
});