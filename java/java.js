
$(window).on("load",function(){
	$(".loader_container").fadeOut(1000);
});

var variable=0;
window.addEventListener('load', function(){
	const config ={
		type: 'carousel',
		perView: 3,
  	animationDuration: 600,
		gap:0,
		breakpoints:{
			1920:{
				perView:2,
			},
			1000:{
				perView:1,
			}
		}
	};
	new Glide('.glide', config).mount()
})

if(variable==1)
console.log("peque");

function insta(){
	var form = document.createElement("form");
	form.method = "GET";
	form.action = "https://www.instagram.com/studio137bolivia/";
	form.target = "_blank";
	document.body.appendChild(form);
	form.submit();
}

function what(){
	var form = document.createElement("form");
	form.method = "GET";
	form.action = "https://wa.me/59168236492";
	form.target = "_blank";
	document.body.appendChild(form);
	form.submit();
}

function face(){
	var form = document.createElement("form");
	form.method = "GET";
	form.action = "http://www.fb.com/thestudio137";
	form.target = "_blank";
	document.body.appendChild(form);
	form.submit();
}

function studio137(){
	location.href='../index.html';
}

function switch1 () {
	location.href='../portafolio.html';
}
