var button = document.querySelector('button');
var box = document.getElementById('mod');
var txt = document.getElementById('intro');

function changeColor(){
	if(box.style.background == 'purple'){
		box.style.background = 'green';
	}else{
		box.style.background = 'purple';
	}
	txt.textContent = 'green and purple are my top 2 favorite colors :) .';
}