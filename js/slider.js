sliderInt = 0;

$(document).ready(function(){
	$('#slider > img#0').fadeIn(300);
	startSlider();
});

function startSlider(){
	count = $('#slider > img').size();
	loop = setInterval(function(){
		$('#slider > img').fadeOut(300);
		sliderInt = (sliderInt + 1) % count;
		$('#slider > img#' + sliderInt).fadeIn(300);
		
	}, 3000);
}

function prev(){
	count = $('#slider > img').size();
	sliderInt = (sliderInt - 1).mod(count);
	console.log(sliderInt);
	showSlide();
}

function next(){
	count = $('#slider > img').size();
	sliderInt = (sliderInt + 1) % count;
	console.log(sliderInt);
	showSlide();
}

function stopLoop(){
	window.clearInterval(loop);
}

function showSlide(id){
	stopLoop();
	$('#slider > img').fadeOut(300);
	$('#slider > img#' + sliderInt).fadeIn(300);
	startSlider();
}

Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};

$("#slider > img").hover(
	function(){
		stopLoop();
	},
	function(){
		startSlider();
	}
);