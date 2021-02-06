function gettime(){
	document.getElementById("dharmik").innerHTML = new Date();
}
function changeColor(color){
	document.getElementById("demo").style.color = color;
	//document.getElementById("demo").className = "myclass";
}
function changeSize(size){
	document.getElementById("demo").style.fontSize = size+"px";
	//document.getElementById("demo").className = "myclass";
}
function changeBackground(){
	var a = ["red","green","blue","yellow","pink","black"];
	var b = Math.floor(Math.random()*5);
	document.getElementById("bodycontent").style.backgroundColor = a[b];
}

//setInterval(changeBackground, 1000);