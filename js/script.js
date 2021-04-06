$('.album_slider').slick({
	arrows:true,
	slidesToShow: 3,
	slidesToScroll: 1,
});

let filter_arrow1 = $('#filter_button1');
let filter_arrow2 = $('#filter_button2');
let filter_arrow3 = $('#filter_button3');
let filter_arrow4 = $('#filter_button4');

filter_arrow1.i =0;
filter_arrow2.i =0;
filter_arrow3.i =0;
filter_arrow4.i =0;


filter_arrow1.addEventListener('click', function () {
	if (filter_arrow1.i%2==0) {
		filter_arrow1.classList.remove('filter_item_button_on');
	};
	if (filter_arrow1.i==0){
		filter_arrow1.addClass('filter_item_button_on');
	};
	filter_arrow1.i = filter_arrow1.i + 1;
}, false)
