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

$.getJSON("./img/gallery/images.json", function(data){
	console.log(data)
});
