var verticalpos="noTopo"

function centralizaDivFlutuante(idDiv){
	var posicaoX = 280,	posicaoY = 110;
	var ns = (navigator.appName.indexOf("Netscape") != -1);
	var d = document;
	
	//var larguraImagem = 312;
	//var alturaImagem = 108;
	//posicaoX = (screen.width - larguraImagem) / 4;
	//posicaoY = (screen.height - alturaImagem) / 2;
	
	function fixaDiv(id){
		var el1=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id];
		if(d.layers)el1.style=el1;
		el1.sP1=function(x,y){this.style.left=x;this.style.top=y;};
		el1.x = posicaoX;
		if (verticalpos=="noTopo"){
			el1.y = posicaoY;
			el1.x = posicaoX;
		}else{
			el1.y = ns ? pageYOffset + innerHeight : iebody().scrollTop + iebody().clientHeight;
			el1.y -= posicaoY;
		}
		return el1;
	}
	window.fixaEsquerda=function(){
		if (verticalpos=="noTopo"){
			var pY = ns ? pageYOffset : iebody().scrollTop;
			ftlObj1.y += (pY + posicaoY - ftlObj1.y)/8;

			var pX = ns ? pageXOffset : iebody().scrollLeft;
			ftlObj1.x += (pX + posicaoX - ftlObj1.x)/8;
		}else{
			var pY = ns ? pageYOffset + innerHeight : iebody().scrollTop + iebody().clientHeight;
			ftlObj1.y += (pY - posicaoY - ftlObj1.y)/8;
		}
		ftlObj1.sP1(ftlObj1.x, ftlObj1.y);
		setTimeout("fixaEsquerda()", 10);
	}
	ftlObj1 = fixaDiv(idDiv);
	fixaEsquerda();
}

function iebody(){
  return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}



/*
O código abaixo serve para deixar a tabela de totalização da planilha de Julgamento
flutuando no rodapé da página
*/

var persistenciaFechar=0 //set to 0 or 1. 1 means once the bar is manually closed, it will remain closed for browser session
var inicioX = 0 //set x offset of bar in pixels
var inicioY = 0 //set y offset of bar in pixels
var posicaoVertical="frombottom" //enter "fromtop" or "frombottom"

function get_cookie(Name) {
	var search = Name + "="
	var returnvalue = "";
	if (document.cookie.length > 0) {
		offset = document.cookie.indexOf(search)
		if (offset != -1) {
			offset += search.length
			end = document.cookie.indexOf(";", offset);
			if (end == -1) end = document.cookie.length;
				returnvalue=unescape(document.cookie.substring(offset, end))
		}
	}
	return returnvalue;
}

function barraEstatica(barra){
	if (barra == null){
		return
	}
	barheight=document.getElementById(barra).offsetHeight
	var ns = (navigator.appName.indexOf("Netscape") != -1) || window.opera;
	var d = document;
	function ml(id){
		var el=d.getElementById(id);
		if (!persistenciaFechar || persistenciaFechar && get_cookie("remainclosed")=="")
			el.style.visibility="visible"
		if(d.layers)el.style=el;
		el.sP=function(x,y){this.style.left=(x)+"px";this.style.top=y+"px";};
		el.x = inicioX;
		if (posicaoVertical=="fromtop"){
			el.y = inicioY;
			el.x = inicioX;
		}else{
			el.y = ns ? pageYOffset + innerHeight : iebody().scrollTop + iebody().clientHeight;
			el.y -= inicioY;
		}
		return el;
	}
	window.stayTopLeft=function(){
		if (posicaoVertical=="fromtop"){
			var pY = ns ? pageYOffset : iebody().scrollTop;
			ftlObj.y += (pY + inicioY - ftlObj.y)/8;
		}else{
			var pY = ns ? pageYOffset + innerHeight - barheight: iebody().scrollTop + iebody().clientHeight - barheight;
			ftlObj.y += (pY - inicioY - ftlObj.y)/8;

			var pX = ns ? pageXOffset : iebody().scrollLeft;
			ftlObj.x += (pX + inicioX - ftlObj.x)/8;
		}
		ftlObj.sP(ftlObj.x, ftlObj.y);
		temporizador = window.setTimeout("stayTopLeft()", 0);
	}
	ftlObj = ml("rodapeTotal");
	stayTopLeft();
}

function barraParada(idBarra){
	topoBody = iebody().scrollHeight;
	document.getElementById(idBarra).style.top = topoBody;
	window.clearTimeout(temporizador);
}

