/********************
		MENU
*********************/

$('.menu-anchor').on('click touchstart', function(e){
	$('html').toggleClass('menu-active');
  	e.preventDefault();
});

/********************
		GALERIA
*********************/

$.getJSON("./static/img/gallery/images.json", function(data){
	console.log(data)
});
