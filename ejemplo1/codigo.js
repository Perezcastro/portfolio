var dibujo, lienzo;
var t,b1,b2,b3;
function inicio()
{

	t=document.getElementById("rayaUsuario");
	b1=document.getElementById("botonRayas");
	b2=document.getElementById("botonCirculo");
	b3=document.getElementById("botonCuadrado");
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");

	b1.addEventListener("click",dibujaParrilla);
	b2.addEventListener("click",dibujaCirculo);
	b3.addEventListener("click",dibujaCuadrado);

}

function dibujaCuadrado()
{
	lienzo.moveTo(100,100);
	lienzo.lineTo(200,100);
	lienzo.lineTo(200,200);
	lienzo.lineTo(100,200);
	lienzo.lineTo(100,100);	
	lienzo.strokeStyle= "#00FF00";
	lienzo.stroke();

}

function dibujaCirculo()
{
	lienzo.beginPath();
	lienzo.strokeStyle= "#FF0000";
	lienzo.arc(150,150,50,2*Math.PI,false);
	lienzo.closePath();
	lienzo.stroke();

}

function dibujaParrilla()
{
	var n;
	var ancho,largo;

	n=Number(t.value);
	ancho = (300/n);
	largo = (300/n);

	lienzo.strokeStyle="#000000";


	for(var linea=0;linea<n;linea++)
	{
		punto=linea*ancho;
		
		lienzo.moveTo(punto+0.5,0.5);
		lienzo.lineTo(punto+0.5,300.5);
		lienzo.stroke();

		lienzo.moveTo(0.5,punto+0.5);
		lienzo.lineTo(300.5,punto+0.5);
		lienzo.stroke();
		
	}


}