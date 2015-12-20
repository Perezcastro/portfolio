var dibujo, lienzo;
var t,b1,b2,b3;

function inicio()
{

	t=document.getElementById("rayaUsuario");
	b1=document.getElementById("dibujaRayas");
	b1=document.getElementById("dibujaCirculo");
	b1=document.getElementById("dibujaCuadrado");
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");


function dibujaParrilla(n)
{
	
}


	lienzo.moveTo(100,100);
	lienzo.lineTo(200,100);
	lienzo.lineTo(200,200);
	lienzo.lineTo(100,200);
	lienzo.lineTo(100,100);	
	lienzo.strokeStyle= "#00FF00";
	lienzo.stroke();
	
	lienzo.beginPath();
	lienzo.strokeStyle= "#FF0000";
	lienzo.arc(150,150,50,2*Math.PI,false);
	lienzo.closePath();
	lienzo.stroke();
}