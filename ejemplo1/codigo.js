var dibujo, lienzo;

function inicio()
{
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");

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