function i(){
	// window.location.href = "http://www.fb.com/thestudio137";
	var form = document.createElement("form");
	form.method = "GET";
	form.action = "https://www.instagram.com/studio137bolivia/";
	form.target = "_blank";
	document.body.appendChild(form);
	form.submit();
}

function f(){
	// window.location.href = "http://www.fb.com/thestudio137";
	var form = document.createElement("form");
	form.method = "GET";
	form.action = "http://www.fb.com/thestudio137";
	form.target = "_blank";
	document.body.appendChild(form);
	form.submit();
}

function w(){
	// window.location.href = "http://www.fb.com/thestudio137";
	var form = document.createElement("form");
	form.method = "GET";
	form.action = "https://wa.me/68236492";
	form.target = "_blank";
	document.body.appendChild(form);
	form.submit();
}

function portafolio(){
  location.href='portafolio.html';
}

function menu(text){
  var a=0;

  if (text=='servicios') {
    cleanall();
    var x = document.getElementById('menu_servicios');
    x.style.opacity = "1";
		var y = document.getElementById('servicios');
    y.style.opacity = "1";
  }else if (text=='nosotros') {
    cleanall();
    var x = document.getElementById('menu_nosotros');
    x.style.opacity = "1";
		var y = document.getElementById('nosotros');
    y.style.opacity = "1";
  }else if (text=='contacto') {
    cleanall();
    var x = document.getElementById('menu_contacto');
    x.style.opacity = "1";
		var y = document.getElementById('contacto');
    y.style.opacity = "1";
  }else if (text=='trayectoria') {
    cleanall();
    var x = document.getElementById('menu_trayectoria');
    x.style.opacity = "1";
		var y = document.getElementById('trayectoria');
    y.style.opacity = "1";
  }else if (text=='portafolio') {
    cleanall();
    var x = document.getElementById('menu_portafolio');
    x.style.opacity = "1";
		var y = document.getElementById('portafolio');
    y.style.opacity = "1";
  }else {
    null;
  }

}

function loadFunc() {
  cleanall();
  var x = document.getElementById('menu_inicial');
  x.style.opacity = "1";
}

function cleanall() {
  var x = document.getElementById('menu_inicial');
  x.style.opacity = "0";
  var x = document.getElementById('menu_servicios');
  x.style.opacity = "0";
  var x = document.getElementById('menu_nosotros');
  x.style.opacity = "0";
  var x = document.getElementById('menu_contacto');
  x.style.opacity = "0";
  var x = document.getElementById('menu_trayectoria');
  x.style.opacity = "0";
  var x = document.getElementById('menu_portafolio');
  x.style.opacity = "0";

  var x = document.getElementById('servicios');
  x.style.opacity = ".5";
  var x = document.getElementById('nosotros');
  x.style.opacity = ".5";
  var x = document.getElementById('contacto');
  x.style.opacity = ".5";
  var x = document.getElementById('trayectoria');
  x.style.opacity = ".5";
  var x = document.getElementById('portafolio');
  x.style.opacity = ".5";
}
