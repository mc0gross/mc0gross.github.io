/*
	aplica uma mascara especifica a um campo do tipo text
	parametros:
		o = referencia do objeto (input)
		m = mascara
			data (dd/mm/aaaa) - ##/##/####
			cpf - ###.###.###-##
		e = evento (array)
		f = fill (insere toda a mascara substituindo o caracter # pelo especificado em f)
*/
var InputMask = function(o,m,e,f) {

	if (o == null || m == null) return false
	if (e == null) e = "blur";

	function mask(e) {
	
		if (e.keyCode == 8) o.value = o.value.substring(0,o.value.length)
		
		else {	
				
			valor = getValorLimpo(o.value);
			novoValor = m;
			charEspecial = getPosicaoEspecial(m);
			iterator = 0;
			
			if (f) {
			
				valor = reverterString(valor);		
				
				novoValor = reverterString(novoValor);
				
				for (var x=0; x<valor.length; x++) { 
					novoValor = novoValor.replace("#",valor.substring(x,x*1+1)); 
				}
				
				while (novoValor.indexOf("#") !=-1) { 
					novoValor = novoValor.replace("#",f); 
				}
				
				o.value = reverterString(novoValor);
			}
			
			else {
				for (var x=0; x<valor.length; x++) { novoValor = novoValor.replace("#",valor.substring(x,x*1+1)); }	
				
				for (var x=0; x<charEspecial.length; x++) {
					if (valor.length >= (charEspecial[x] - x) ) { 
						iterator++; 
					}
				}

				o.value = novoValor.substring(0, (valor.length + iterator) );
			}
		}
	}
	
	function reverterString(s) {
		return s.split("").reverse().join("");
	}
	
	function getValorLimpo(v) {
		aux = "";
			for (var x=0; x<v.length; x++) {
				if (v.substring(x,x+1) >= 0 && v.substring(x,x+1) <= 9 && v.substring(x,x+1) !=" ") {
					aux+= v.substring(x,x+1);
				}
			}
		return aux;
	}
	
	function getPosicaoEspecial(v) {
		aux = new Array();
			for (var x=0; x<v.length; x++) {
				if (isNaN(v.substring(x,x+1)) && v.substring(x,x+1) !="#") {
					aux.push(x);
				}
			}
		return aux;
	}
	
	isArray = (typeof e == "object" && "splice" in e && "join" in e) ? true : false
	
	if (isArray) { 
		for (var x in e) { 
			addListener(o,e[x],mask);
		} 
	}
	
	else { 
		addListener(o,e,mask);
	}
	
}

function addListener(element, type, expression, bubbling) {
bubbling = bubbling || false;

	if(window. addEventListener) { // Standard
	element.addEventListener(type, expression, bubbling);
	return true;
	} 
	
	else if(window.attachEvent) { // IE
	element.attachEvent('on' + type, expression);
	return true;
	}
	
	else return false;
}