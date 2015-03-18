/********************
		MENU
*********************/

$('.menu-anchor').on('click touchstart', function(e){
	$('html').toggleClass('menu-active');
  	e.preventDefault();
});

/********************
		MAPS
*********************/

$('#map_canvas1').addClass('scrolloff'); // set the pointer events to none on doc ready

$('#canvas1').on('click', function () {
    $('#map_canvas1').removeClass('scrolloff'); // set the pointer events true on click
});

// you want to disable pointer events when the mouse leave the canvas area;

$("#map_canvas1").mouseleave(function () {
    $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
});


/********************
		GALLERY
*********************/

var totalImages = 7;
var imageDir = "static/img/gallery/";
var imageName = 1;

var $overlay = $('<div id="overlay"></div>')
var $image = $("<img>")




$overlay.append($image);

while ( imageName <= totalImages){
	var image = imageDir + imageName;
	var imageHTML = "<a href=\"" + image + ".jpg\"><img src=\"" + image + ".jpg\"></img></a>"
	// console.log(imageHTML);
	$(".gallery .images").append(imageHTML);
	imageName++;
}

$("body").append($overlay);

$(".gallery .images a").on('click', function(e){
	e.preventDefault();
	var imageLocation = $(this).attr("href");
	$image.attr("src", imageLocation);
	$overlay.show();
})

$overlay.click(function(){
	$overlay.hide();
});

