var variable=0;
window.addEventListener('load', function(){
	const config ={
  	type: 'carousel',
		startAt: 0,
		perView: 2,
  	animationDuration: 1000,
		gap:0,
		breakpoints:{
			1920:{
				perView:1,
			},
			1000:{
				perView:1,
			}
		}
	};
	new Glide('.glide', config).mount()
})


// window.addEventListener('load', function(){
// 	new Glide(document.querySelector('.glide'), {
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		dots: '.dots',
// 		arrows: {
// 			prev: '.carousel__anterior',
// 			next: '.carousel__siguiente'
// 		},
// 		responsive: [
// 			{
// 			  // screens greater than >= 775px
// 			  breakpoint: 450,
// 			  settings: {
// 				// Set to `auto` and provide item width to adjust to viewport
// 				slidesToShow: 2,
// 				slidesToScroll: 2
// 			  }
// 			},{
// 			  // screens greater than >= 1024px
// 			  breakpoint: 800,
// 			  settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1
// 			  }
// 			}
// 		]
// 	});
// })
