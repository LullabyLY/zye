// JavaScript Document
window.onload=function(){
	var oimg=document.getElementById("img");
	var num=0;
	var aUrl=['images/1.jpg','images/2.jpg','images/3.jpg',
	          'images/4.jpg','images/5.jpg','images/6.jpg'];
	oimg.src=aUrl[num];
	oimg.style.width=950+"px";
	oimg.style.height=360+"px";
	var time=setInterval(turn,3000);
	function turn(){
		num++;
		if(num===aUrl.length){
			num=0;
		}
		oimg.src=aUrl[num];
	}
	oimg.onmousemove=function(){
		clearInterval(time);
	}
	oimg.onmouseout=function(){
		time=setInterval(turn,3000);
	}
}