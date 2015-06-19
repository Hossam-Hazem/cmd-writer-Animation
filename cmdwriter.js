$(document).ready(function(){
	var text = $('.consolewriter').html()
	$('.consolewriter').text('');
	$('.consolewriter').append("<span class ='cursor'>|</span>")
	writeconsole($.parseHTML(text),0);


});
function writeconsole(x,currentelement){
	if(currentelement==x.length)
		return;
	
	var tagname = $(x[currentelement])[0].nodeName
	var classname = $(x[currentelement])[0].className
	var idname=$(x[currentelement])[0].id

	if(tagname=='BR'){

		writeelement(x,'</br>',currentelement,true);
	}
	else{
		if(tagname =='#text'){
			 settag('.itext','','')
		}
		else{
			settag(tagname.toLowerCase(),classname,idname)
		}
		writeelement(x,$(x[currentelement])[0].textContent,currentelement,true);
	}
	
}
function settag(tagname,classname,idname){
	var $c = $('.cursor');
	$c.remove();


	var tag=tagname;
	if(tagname=='.itext'){
		tagname ='.itext';
		tag="<span class = 'itext'>";
	}
	else{
		if(classname!='')
			tag=tag+' class ="'+classname+'"';
		if(idname!='')
			tag=tag+' id="'+idname+'"';
		tag='<'+tag+'>'
	}
		$('.consolewriter').append(tag);
		$(tagname+':last').append($c);
	
	return tagname+':last';
}
function writeelement(elements,text,currentelement,init){

	if(init){
		if(text=='</br>'){
			$('.cursor').before('</br>');

			writeconsole(elements,currentelement+1);
		}
		init=false;	
	}
	if(text!='</br>'){
		if(text.length==0)
			writeconsole(elements,currentelement+1);
		else{
			var x = text.charAt(0);
				if(x=='/'){
					var $c = $('.cursor');
					var parent=$c.parent()
					var temp=parent.text();
					temp=temp.substring(0,temp.length-2);
					parent.text(temp);
					parent.append($c);
				}
				else{
					$('.cursor').before(x);
				}
				text=text.substring(1);
			setTimeout(function(){writeelement(elements,text,currentelement,false);},1000)
			}
		}
	
	
}
