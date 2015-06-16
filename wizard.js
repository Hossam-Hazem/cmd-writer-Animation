$(document).ready(function(){
	writeconsole('=Hey!= My name ee<<is /Hossam/,+ and this is a console writer.',false,false);
});
function writeconsole(x,Sec,Center){
	if(x.length==0)
		return;
	var t = 150;
	var y=x.charAt(0);
	switch(y) {
    case '<':
        t=700;
		setTimeout(function(){backspace()},200);
        break;
    case '+':
        t=500;
		setTimeout(function(){enter();},200);
        break;
    case '/':
    		if(!Sec)
    		 	SetSec();
    		 Sec=!Sec
    		break;
    case '=':
    		if(!Center)
    			SetCenter();
    		Center=!Center;
    		break;
    default:
         writechar(y,Sec,Center);
	}

	x=x.substring(1);
	setTimeout(function(){
		writeconsole(x,Sec,Center);
	},t)
}
function writechar(x,Sec,Center){
	if(Center)
		$('center:last').append(x);
	else{
		if(Sec)
			$('.Secondary:last').append(x);
		else 
			$('.text').append(x);
	}
}
function enter(){
	$('.text').append('<br>');
}
function backspace(Sec,Center){
	if(Center){
		var x=$('center:last').html();
		$('center:last').html(x.substring(0,x.length-1))
	}
	else{
		if(Sec){
			var x=$('.Secondary:last').html();
			$('.Secondary:last').html(x.substring(0,x.length-1))
		}
		else{ 
			var x=$('.text').html();
			$('.text').html(x.substring(0,x.length-1))
		}
	}
	
}
function SetSec(){
		$('.text').append("<span class='Secondary'>");
}
function SetCenter(){
		$('.text').append("<center>");
}