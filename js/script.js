//бургер меню
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu,.header__search').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
		{
			breakpoint: 768,
			settings: {
				slidesToShow:2
			}
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow:1
			}
		}
		]
	});
});





function initMap() {
	var uluru = {lat: 49.7999654, lng: 73.095208};
// The map, centered at Uluru
	var map = new google.maps.Map(
	document.getElementById('map'), {zoom: 14, center: uluru});
// The marker, positioned at Uluru
	var marker = new google.maps.Marker({position: uluru, map: map});
}