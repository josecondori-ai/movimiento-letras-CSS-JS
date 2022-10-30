window.addEventListener("load", function(){
	var nodos = document.querySelectorAll(".mensaje");
	for(var i=0; i<nodos.length; i++){
		var text = nodos[i].innerText;
		var html = "";
		for(var i2=0; i2<text.length; i2++){
			if(text[i2] == " ")html += " ";
			 else html += "<span>"+text[i2]+"</span>"
		}
		nodos[i].innerHTML = html;
	}
});
