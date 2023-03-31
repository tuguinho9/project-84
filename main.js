// Create a reference for the canvas
canvas = document.getElementById("myCanvas");
img_width = 300;
img_height = 100;
ctx = canvas.getContext("2d");
var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //definindo uma variável com uma nova imagem
	img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar essa variável
	img_imgTag.src = img_image;   // carregar uma imagem
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Escreva um código para obter o evento key-pressed
window.addEventListener("keydown", my_keydown)
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)) {
			alphabetkey();
			console.log ("alphabetkey");
			document.getElementById("d1").innerHTML="You pressed alphabet key";
		}
		else if(keyPressed >=48 && keyPressed <=57){
			//Escreva um código para verificar o tipo de tecla pressionada
            numberkey();
			document.getElementById("d1").innerHTML="You pressed number key";
		}
		else if(keyPressed >=37 && keyPressed <=40){
            arrowkey();
			document.getElementById("d1").innerHTML="You pressed arrow key";
		}
		else if(keyPressed >=17 && keyPressed <=20){
			specialkey();
			document.getElementById("d1").innerHTML="You pressed special key";
		}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function alphabetkey()
{
	//envie as imagens com suas respectivas mensagens. 
    img_image="alfabeto.png";
	add();
}
function numberkey()
{
	img_image="número.png";
	add();
}
function arrowkey()
{
	img_image="direcional.png";
	add();
}
function specialkey()
{
	img_image="especial.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}