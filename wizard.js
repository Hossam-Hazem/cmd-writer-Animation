$(document).ready(function(){
	var text = $('.text').html()
	$('.text').text('');
	//$('.text').append('<'+'i'+'>');
	writeconsole($.parseHTML(text),0);
	//console.log($($.parseHTML($('.text').html())[1])[0].nodeName)

});
function writeconsole(x,currentelement){
	if(currentelement==x.length)
		return;
	console.log(currentelement)
	console.log(x)
	var tagname = $(x[currentelement])[0].nodeName
	if(tagname=='BR'){
		writeelement(x,'</br>',currenttag,currentelement,true);
	}
	else{
		if(tagname =='#text'){
			 settag('.text')
		}
		else{
			settag(tagname.toLowerCase())
		}
		writeelement(x,$(x[currentelement])[0].textContent,currentelement,true);
	}
	
}
function settag(tagname){
	var $c = $('.cursor');
	$c.remove();
	console.log('cursor = '+$c )
	console.log('tagname = '+'<'+tagname+'>' )
	if(tagname=='.text'){
		$('.text').append($c);
	}
	else{
		$('.text').append('<'+tagname+'>');
		$(tagname+':last').append($c);
	}
	return tagname+':last';
}
function writeelement(elements,text,currentelement,init){
	console.log('text = '+text)
	if(init==true){
		if(text=='</br>'){
			$('.cursor').before('</br>');
			writeconsole(elements,currentelement+1);
		}
		init=false;	
	}
	if(text.length==0)
		writeconsole(elements,currentelement+1);
	else{

		var x = text.charAt(0);
		$('.cursor').before(x);
		text=text.substring(1);
		setTimeout(function(){writeelement(elements,text,currentelement,false);},1000)
	}
}
function writechar(x,Sec,Center){
	
	
}
function enter(){
	
}
function backspace(Sec,Center){
	
}
function SetSec(){
		$('.text').append("<span class='Secondary'>");
}
function SetCenter(){
		$('.text').append("<center>");
}