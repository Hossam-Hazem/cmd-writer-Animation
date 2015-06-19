$(document).ready(function(){
	var text = $('.text').html()
	$('.text').text('');
	writeconsole($.parseHTML(text),0);
	//console.log($($.parseHTML($('.text').html())[1])[0].id)

});
function writeconsole(x,currentelement){
	if(currentelement==x.length)
		return;
	
	var tagname = $(x[currentelement])[0].nodeName
	var classname = $(x[currentelement])[0].className
	var idname=$(x[currentelement])[0].id
	console.log('currentelemnt = '+currentelement + 'tagname = '+tagname  )
	if(tagname=='BR'){
		console.log('currentbrbefore = '+currentelement)
		writeelement(x,'</br>',currentelement,true);
	}
	else{
		if(tagname =='#text'){
			 settag('.text','','')
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
	console.log('cursor = '+$c )
	console.log('tagname = '+'<'+tagname+'>' )
	var tag=tagname;
	if(tagname=='.text'){
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
		$('.text').append(tag);
		$(tagname+':last').append($c);
	
	return tagname+':last';
}
function writeelement(elements,text,currentelement,init){
	console.log('text = '+text)
	console.log(init)
	if(init){
		if(text=='</br>'){
			$('.cursor').before('</br>');
			console.log('currentbrafter = '+currentelement)
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
			setTimeout(function(){writeelement(elements,text,currentelement,false);},270)
			}
		}
	
	
}
