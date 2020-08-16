var colors=generaterandomcolors(6);

var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.querySelector("#colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");





resetbutton.addEventListener("click", function() {
	//generate all new colors
	colors = generaterandomcolors(6);
	//pick a new random color from array
	pickedcolor = pickcolor();
	//change colorDisplay to match picked Color
	colordisplay.textContent = pickedcolor;
	messagedisplay.textContent="";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#232323";
});

colordisplay.textContent= pickedcolor;

for(var i=0;i<squares.length; i++)
{
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===pickedcolor)
		{
			messagedisplay.textContent="Correct";
			changecolors(clickedcolor);
			h1.style.backgroundColor=clickedcolor
		}else {
			this.style.backgroundColor="#232323";
			messagedisplay.textContent="Try again";
		}
	});
}

function changecolors(color){
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function pickcolor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generaterandomcolors(num){
	arr=[];

	for(var i=0;i<num;i++){
		arr.push(randomcolor());
	}
  return arr;
}


function randomcolor () {
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);

	return"rgb(" + r +", " + g +", "+ b + ")";
	// body...
}