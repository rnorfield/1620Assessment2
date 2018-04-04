color = document.getElementById('color1');
preview = document.getElementById('preview');
numberswitch = document.getElementById('numbut');
rangeswitch = document.getElementById('rangebut');
hairrange = document.getElementById('range1');
eyerange = document.getElementById('range2');
noserange = document.getElementById('range3');
mouthrange = document.getElementById('range4');
plusbtn = document.getElementById('plusbut');
randbtn = document.getElementById('randbut');
hair = document.getElementById('hair');
eye = document.getElementById('eyes');
nose = document.getElementById('nose');
mouth = document.getElementById('mouth');
auto = document.getElementById('autobut');
stopauto = document.getElementById('stopautobut');
var mycolor = 0;
var currenthair = 1;
var currenteyes = 1;
var currentnose = 1;
var currentmouth = 1;
var rangebuttons = document.getElementsByClassName('rangebtns');

var hairwidth = 60;
var eyewidth = 20;
var nosewidth = 20;
var mouthwidth = 20;

color.addEventListener("change", function(){
	preview.style.backgroundColor = color.value;
});



hairrange.addEventListener("change", function(){
	hairwidth = hairrange.value;
	hair.style.width = hairwidth + "%";
});
eyerange.addEventListener("change", function(){
	eyewidth = eyerange.value;
	eyes.style.width = eyewidth + "%";
});
noserange.addEventListener("change", function(){
	nosewidth = noserange.value;
	nose.style.width = nosewidth + "%";
});
mouthrange.addEventListener("change", function(){
	mouthwidth = mouthrange.value;
	mouth.style.width = mouthwidth + "%";
});

hair.addEventListener("click", function(){
	currenthair += 1;
	if(currenthair >=4){
		currenthair = 1;
	}
	hair.src =  "img/hair"+currenthair+".png";
});
eyes.addEventListener("click", function(){
	currenteyes += 1;
	if(currenteyes >=4){
		currenteyes = 1;
	}
	eyes.src =  "img/eyes"+currenteyes+".png";
});
mouth.addEventListener("click", function(){
	currentmouth += 1;
	if(currentmouth >=4){
		currentmouth = 1;
	}
	mouth.src =  "img/mouth"+currentmouth+".png";
});
nose.addEventListener("click", function(){
	currentnose += 1;
	if(currentnose >=4){
		currentnose = 1;
	}
	nose.src =  "img/nose"+currentnose+".png";
});

plusbtn.addEventListener('click', function(){
	createface();
});

randbtn.addEventListener('click', function(){
	randomface();
});

function randomface(){
	currenthair = Math.floor((Math.random() * 3)+ 1);
	currenteyes = Math.floor((Math.random() * 3)+ 1);
	currentnose = Math.floor((Math.random() * 3)+ 1);
	currentmouth = Math.floor((Math.random() * 3)+ 1);
	hairwidth = (Math.floor((Math.random() * 70)));
	eyewidth = (Math.floor((Math.random() * 40)))
	nosewidth = (Math.floor((Math.random() * 30)))
	mouthwidth = (Math.floor((Math.random() * 35)))
	hairrange.value = hairwidth;
	eyerange.value = eyewidth;
	noserange.value = nosewidth;
	mouthrange.value = mouthwidth;
	hair.style.width = hairwidth + "%";
	eyes.style.width = eyewidth + "%";
	nose.style.width = nosewidth + "%";
	mouth.style.width = mouthwidth + "%";
	rgb1 = Math.floor((Math.random()*255));
	rgb2 = Math.floor((Math.random()*255));
	rgb3 = Math.floor((Math.random()*255));
	hair.src =  "img/hair"+currenthair+".png";
	eyes.src =  "img/eyes"+currenteyes+".png";
	mouth.src =  "img/mouth"+currentmouth+".png";
	nose.src =  "img/nose"+currentnose+".png";

	preview.style.backgroundColor = "rgb(" +rgb1+","+rgb2+","+rgb3+")";
}

function createface(){
	var div = document.createElement("DIV");
	div.setAttribute("id", "copy");
	div.setAttribute("class", "copy");
	div.style.backgroundColor = preview.style.backgroundColor;
	div.setAttribute("display", "block");
	var img1 = document.createElement("IMG");
	img1.setAttribute("src", "img/hair"+currenthair+".png");
	img1.setAttribute("class", "copyitems");
	img1.setAttribute("width", hairwidth+"%");
	var img2 = document.createElement("IMG");
	img2.setAttribute("src", "img/eyes"+currenteyes+".png");
	img2.setAttribute("class", "copyitems");
	img2.setAttribute("width", eyewidth+"%");
	var img3 = document.createElement("IMG");
	img3.setAttribute("src", "img/nose"+currentnose+".png");
	img3.setAttribute("class", "copyitems");
	img3.setAttribute("width", nosewidth+"%");
	var img4 = document.createElement("IMG");
	img4.setAttribute("src", "img/mouth"+currentmouth+".png");
	img4.setAttribute("class", "copyitems");
	img4.setAttribute("width", mouthwidth+"%");
	div.appendChild(img1);
	div.appendChild(img2);
	div.appendChild(img3);
	div.appendChild(img4);
	document.getElementById("display").appendChild(div); 
}

numberswitch.addEventListener("click", function(){
	changetype("number");
});

rangeswitch.addEventListener("click", function(){
	changetype("range");
});

function changetype(mytype){
	rangebuttons[0].type = mytype;
	rangebuttons[1].type = mytype;	
	rangebuttons[2].type = mytype;
	rangebuttons[3].type = mytype;
}

var create;

function startcreate(){
	create = setInterval(function(){ 
		
		randomface();
		createface();

		 }, 500);
}

function stopcreate(){
	clearInterval(create);
}
auto.addEventListener('click', function(){
	startcreate();
})

stopauto.addEventListener('click', function(){
	stopcreate();
})
