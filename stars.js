var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var cw = canvas.width;
var ch = canvas.height;

function filledStar(x,y,a){
	ctx.beginPath();
	ctx.strokeStyle="pink";
	ctx.fillStyle="rgb(199,21,133)";
	
	ctx.moveTo(x,y);
	ctx.lineTo(x+a, y);
	ctx.stroke();
	ctx.lineTo(x+a/6, y+a/2);
	ctx.stroke();
	ctx.lineTo(x+a/2, y-a/3);
	ctx.stroke();
	ctx.lineTo(x+a-a/6, y+a/2);
	ctx.stroke();
	ctx.lineTo(x,y);
	ctx.stroke();
	
	ctx.fill();
}

filledStar(40,50,75);
filledStar(130,120,100);
filledStar(250,220,150);

