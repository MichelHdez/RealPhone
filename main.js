//Variables de las flechas y el circulo que contiene las imágenes 
let circle = document.getElementById('circle');
let upbtn = document.getElementById('upbtn');
let downbtn = document.getElementById('downbtn');

let rotate = circle.style.transform;
let rotateSum; 
	//Upbtn
	upbtn.onclick = function () {
		rotateSum = rotate + "rotate(-90deg)";
		circle.style.transform = rotateSum;
		rotate = rotateSum;
	}

	//Downbtn 
	downbtn.onclick = function () {
		rotateSum = rotate + "rotate(90deg)";
		circle.style.transform = rotateSum;
		rotate = rotateSum;
	}