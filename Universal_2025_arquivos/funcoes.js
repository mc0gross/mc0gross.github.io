if (parent.frames['cabecalho'] != null){
	var contextoAplicacao = parent.frames['cabecalho'].getContextPath();
}else{
	var contextoAplicacao = "/efomento";        
}

Number.prototype.formatMoney = function(c, d, t){
        var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function formataValorInteiro(campo) {

    var string = campo.value.replace(/\D/gi, ""),
         valor = parseInt(string, 10);
    
    campo.value = valor.formatMoney(0, ',', '.');

}

function abrirCurriculoPorUrl(url){
    var winref = window.open(url, "Currículo", "height=500,width=880,top=200,left=300,status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");    
    
    if (!winref) {
      alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
    }
      
    winref.focus();   
}

function abrirConsultaProcesso(processo){
    var url = contextoAplicacao+"/consultaprocesso/consultaprocesso.do?metodo=consultar&codigoProcesso=" + processo;
    var winref = window.open(url, "Currículo", "height=380,width=670,top=200,left=300,status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");    
    
    if (!winref) {
      alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
    }
      
    winref.focus();   
}  

function linhaFomentoChamada() {
    var intTop = ((screen.height - 400) / 2);
    var intLeft = ((screen.width - 680) / 2);
    var winref = window.open(contextoAplicacao+"/consultarChamadaLinhaFomento.do",
    "linhaFomentoChamada","height=400,width=680,top=" + intTop + ",left=" + intLeft + ",status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");
         
    if (!winref || typeof(winref) == 'undefined') {
        alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
    }
  
    winref.focus();      
}

function caAreaPopup(codLinhaFomento, seqChamada, versaoRegra) {
    var winref = window.open(contextoAplicacao+"/formularios/comitearea.do?metodo=comite&flagPopup=S&codLinhaFomento="+codLinhaFomento+"&seqChamada="+seqChamada+"&versaoRegra="+versaoRegra,
    "caArea","height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");
         
    if (!winref || typeof(winref) == 'undefined') {
        alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
    }
  
    winref.focus();      
}

function abreInstituicoes(campoParent,siglaPaisFiltro,flagCapes,flagCadastro) {
 var url = contextoAplicacao+"/formularios/instituicao.do?metodo=apresentar";
  
 if (campoParent != null && campoParent != '') {
  url += "&campoParent=" + campoParent;
 }

 if (siglaPaisFiltro != null && siglaPaisFiltro != '') {
  url += "&siglaPaisFiltro=" + siglaPaisFiltro;
 } 
 
 if (flagCapes != null && flagCapes != '') {
  url += "&flagCapes=" + flagCapes;
 }

 if (flagCadastro != null && flagCadastro != '') {
  url += "&flagCadastro=" + flagCadastro;
 } 

 var winref = window.open(url, "formInstituicoes", 
  "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");

  popupBloqueado(winref);
}

function popupBloqueado(winref) {
 if (!winref || typeof(winref) == 'undefined') {
   alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
   return false;
 }
 
  winref.focus(); 
  return true;
  
}

function abreSetorAtividade() {
 var url = "setorAtividade.do?metodo=apresentar";
 
 var winref = window.open(url, "formSetorAtividade", 
  "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");

 if (!winref) {
   alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
 }
  
 winref.focus(); 
}

function abreSetorAtividadeCorrelatos() {
	 var setor = document.getElementById("idSetorAtividadePrincipal");	
	 if(setor.value == ""){
		 alert('Escolha primeiro o setor da CNAE Predominante.');
		 return;
	 }
	 
	 var url = "setorAtividade.do?metodo=apresentar&idSetorAtividadePrincipal="+setor.value;
	 
	 var winref = window.open(url, "formSetorAtividade", 
	  "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");

	 if (!winref) {
	   alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
	 }
	  
	 winref.focus(); 
	}

function abreLinhaTematica() {
 var url = "linhaTematica.do?metodo=apresentar";
 
 var winref = window.open(url, "formLinhaTematica", 
  "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");

 if (!winref) {
   alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
 }
  
 winref.focus(); 
}

function abrePeriodico() {
 var url = "periodico.do?metodo=apresentar";
 
 var winref = window.open(url, "formPeriodico", 
  "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");

 if (!winref) {
   alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
 }
  
 winref.focus(); 
}

function abreAreaConhecimentoNivel(nroNivel) {
 var url = contextoAplicacao+"/formularios/comitearea.do?metodo=consultaAreaFormNivel&nroNivel=" + nroNivel;
 
 var winref = window.open(url, "formArea", 
  "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");

 if (!winref) {
   alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
 }
  
 winref.focus(); 
}

function abreTemaInduzido(linhaFomento,seqChamada,versaoRegra) {
 var url = contextoAplicacao+"/consultaTema.do?codigoLinhaFomento=" + linhaFomento + "&sequencia=" + seqChamada + "&versao=" + versaoRegra;
 
 var winref = window.open(url, "formTema", 
  "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");

 if (!winref) {
   alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
 }
  
 winref.focus(); 
}

function abreAreaConhecimento() {
 var url = contextoAplicacao+"/formularios/comitearea.do?metodo=consultaAreaForm";
 
 var winref = window.open(url, "formArea", 
  "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");

 if (!winref) {
   alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
 }
  
 winref.focus(); 
}

function abreAreaConhecimentoFUniversal() {
	 var url = contextoAplicacao + "/formularios/areaConhecimento.do?metodo=apresentar";
	 
	 var winref = window.open(url, "formAreaConhecimento", 
	  "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");

	 if (!winref) {
	   alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
	 }
	  
	 winref.focus(); 
}

function abreAreaConhecimentoFUniversalCorrelatas() {
	 var area = document.getElementById("idAreaConhecimentoPrincipal");	
	 if(area.value == ""){
		 alert('Escolha primeiro a Área Predominante.');
		 return;
	 }
	 
	 var url = contextoAplicacao + "/formularios/areaConhecimento.do?metodo=apresentar&idAreaConhecimentoPrincipal="+area.value;
	 
	 var winref = window.open(url, "formAreaConhecimento", 
	  "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");

	 if (!winref) {
	   alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
	 }
	  
	 winref.focus(); 
}

function abreProjetoIndicacao(processoMae) {
 var url = contextoAplicacao+"/contrato/indicacaoPibicPibit.do?metodo=consultarProjetosIndicacao&numeroProcesso="+processoMae;
 
 var winref = window.open(url, "formIndicacaoPibicPibit", 
  "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");

 if (!winref) {
   alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
 }
  
 winref.focus(); 
}

function getApplet() {
  var appt = document.applets[0];
	//alert("appt.isActive = " + appt.isActive + "\nappt.isShowing = " + appt.isShowing + "\nappt.isSignDocument = " + appt.isSignDocument + "\nappt.isSupported = " + appt.isSupported + "\nappt.isValid = " + appt.isValid + "\nappt.isVisible = " + appt.isVisible);
	//setVisible
	//wait
	
  if (!appt) {
    appt = document.embeds[0];
  }     
  
  return appt;
}

// Troca um caractere por outro em uma string
function ReplaceChar(valor, oldchar, newchar)
{
  var resultado = valor;
  var temp = "";           
  while (resultado.indexOf(oldchar) > 0)
  {                   
    pos = resultado.indexOf(oldchar);
    temp = resultado.substring(0, pos) + newchar + resultado.substring(pos + 1, resultado.length);
    resultado = temp;
  }
  return resultado;
}

// Retorna um float partindo de uma string digitado
function StrToFloat(valor)   {
  
  var resultado = valor;                         
  var temp = "";
  // Verifica se existem separadores de milhar e virgulas
  if ((valor.indexOf(".") > 0) && (valor.indexOf(",") > 0)){                                             
    // Retira os separadores de milhar
    resultado = ReplaceChar(resultado, ".", "");
    // Troca a virgula por ponto
    resultado = ReplaceChar(resultado, ",", ".");
  }
  else {
    //  Caso so exista virgula...
    if ((valor.indexOf(".") <= 0) && (valor.indexOf(",") > 0)){              
      // Veirica quao longe do fim da string esta a virgula
      //if (resultado.indexOf(",") >= (resultado.length - 3))
      //{
        // Troca a virgula por ponto
        resultado = ReplaceChar(resultado, ",", ".");
      //}                            
      //else
      //{
        // A virgula esta muito longe, remova-a
        //resultado = ReplaceChar(resultado, ",", "");
      //}
    }   
    else { // So existe um ponto 
      // Verifica quao longe do fim da string esta o ponto
      if (resultado.indexOf(".") < (resultado.length - 3)) {
        // Se trata de um separador de milhar, remove o ponto
        resultado = ReplaceChar(resultado, ".", "");
      }
    }
  } 
  result=parseFloat(resultado);
  if (isNaN(result))
  	return parseFloat("0.00");
  else
  	return parseFloat((Math.round(result*100))/100);
        //essa formula garante que a precisão é sempre de 2 casas após a virgula
} 

// Converte um Float para uma string no formato brasileiro
function FloatToStr(valor){

  var fracionario;
  var inteiro;
  var resultado;
  // Paga a parte inteira do numero
  inteiro = Math.floor(valor);
  // Paga parte fracionaria do numero
  fracionario = valor - inteiro;
  // Transforma a parte fracionario em um inteiro com 2 algarismos
  fracionario = Math.round(fracionario * 100);
  inteiro = inteiro.toString();
  if (inteiro.length > 3)
  {
    // Coloca os separadores de milhar
    for (i = inteiro.length; i > 0; i = i - 3)
    {                         
      if (i != inteiro.length)
       inteiro = inteiro.substring(0, i) + "." + inteiro.substring(i, inteiro.length);
    }
  }
  // Monta o valor final
  fracionario = fracionario.toString();
  if (parseInt(fracionario) < 10)
  {
    fracionario = "0" + fracionario;
  }
  resultado = inteiro + "," + fracionario;
  return resultado;

}

function abrirCurriculo(idProponente){
  url = "http://buscatextual.cnpq.br/buscatextual/visualizacv.jsp?id="+idProponente;
  var winref = window.open(url, "Currículo", "height=380,width=680,top=200,left=300,status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");
}

function FormataValor(campo,tammax,teclapres) {
  vr = campo.value;
  if (document.all){
    var tecla = teclapres.keyCode;
  }else{
    var tecla = teclapres.which;
  } 

  if (tecla == 9 || tecla == 0){
    return false;
  }else{
    if (tecla >= 48 && tecla <= 57){
      vr = FiltraCampo(campo);
    }
  }
  
  tam = vr.length; 
  if (tam < tammax && tecla != 8){ 
    tam = vr.length + 1 ; } 
  if (tecla == 8 ){ 
    tam = tam - 1 ; 
  }
  if ( tecla >= 48 && tecla <= 57 ) {// || tecla >= 96 && tecla <= 105 ){
    if ( tam <= 2 ){ 
      campo.value = vr ; }
    if ( (tam > 2) && (tam <= 5) ){
      campo.value = vr.substr( 0, tam - 2 ) + ',' + vr.substr( tam - 2, tam ) ; }
    if ( (tam >= 6) && (tam <= 8) ){
      campo.value = vr.substr( 0, tam - 5 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
    if ( (tam >= 9) && (tam <= 11) ){
      campo.value = vr.substr( 0, tam - 8 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
    if ( (tam >= 12) && (tam <= 14) ){
      campo.value = vr.substr( 0, tam - 11 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
    if ( (tam >= 15) && (tam <= 17) ){
      campo.value = vr.substr( 0, tam - 14 ) + '.' + vr.substr( tam - 14, 3 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ;}
  }
} 

function formataValorBlur(campo, valorDefault) {
  valorDefault = valorDefault || '';
  vr = retirarZerosEsquerdaMoeda(campo.value);
  campo.value = vr;
  vr = FiltraCampo(campo);
  tam = vr.length; 
  if (tam == 0 && valorDefault != ''){
     campo.value = valorDefault;
     return;
  }
  
  if (tam > 0 && StrToFloat(vr) == 0){
      campo.value = '0,00';
      return;
  }
  
  var valorAux = "";
  var j = 0;
  for (i = vr.length; i >= 0; i--,j++)  {                         
    
    if ( j <= 2 ){ 
      valorAux = vr ; }
    if ( (j > 2) && (j <= 5) ){
      valorAux = vr.substr( 0, j - 2 ) + ',' + vr.substr( j - 2, j ) ; }
	if ( (j >= 6) && (j <= 8) ){
      valorAux = vr.substr( 0, j - 5 ) + '.' + vr.substr( j - 5, 3 ) + ',' + vr.substr( j - 2, j ) ; }
    if ( (j >= 9) && (j <= 11) ){
      valorAux = vr.substr( 0, j - 8 ) + '.' + vr.substr( j - 8, 3 ) + '.' + vr.substr( j - 5, 3 ) + ',' + vr.substr( j - 2, j ) ; }
    if ( (j >= 12) && (j <= 14) ){
      valorAux = vr.substr( 0, j - 11 ) + '.' + vr.substr( j - 11, 3 ) + '.' + vr.substr( j - 8, 3 ) + '.' + vr.substr( j - 5, 3 ) + ',' + vr.substr( j - 2, j ) ; }
    if ( (j >= 15) && (j <= 17) ){
      valorAux = vr.substr( 0, j - 14 ) + '.' + vr.substr( j - 14, 3 ) + '.' + vr.substr( j - 11, 3 ) + '.' + vr.substr( j - 8, 3 ) + '.' + vr.substr( j - 5, 3 ) + ',' + vr.substr( j - 2, j ) ;}
  }
  if (valorAux.length > 0 && valorAux.length < 3) {
    valorAux = valorAux + ',00';
  }
  campo.value = valorAux;
}

function formataISSN(campo,tammax,teclapres) {

  vr = campo.value;
  if (document.all){
    var tecla = teclapres.keyCode;
  }else{
    var tecla = teclapres.which;
  } 
  
  if (tecla == 9 || tecla == 0){
    return false;
  }else{
    if ((tecla >= 48 && tecla <= 57) || tecla == 88 || tecla == 120){
      vr = FiltraCampo(campo);
    }
  }
  
  tam = vr.length; 
  if (tam < tammax && tecla != 8){ 
    tam = vr.length + 1 ; 
  } 
  if (tecla == 8 ){ 
    tam = tam - 1 ; 
  } else if ((tecla >= 48 && tecla <= 57) || tecla ==  88 || tecla == 120) {
    // 88 = X
		// 120 = x
    if ( tam < 5 ){ 
      campo.value = vr ; 
	} else if (tam == 5){
      campo.value = vr.substr( 0, 5) + '-';
	} else if (tam > 5){
      campo.value = vr.substr( 0, 4 ) + '-' + vr.substr( 4, tam);
	}	    
  }
}

function FiltraCampo(campo){
 var s = "";
 var cp = "";
 vr = campo.value;
 tam = vr.length;
 for (i = 0; i < tam ; i++) {  
  if (vr.substring(i,i + 1) != "/" && vr.substring(i,i + 1) != "-" && vr.substring(i,i + 1) != "."  && vr.substring(i,i + 1) != "," ){
    s = s + vr.substring(i,i + 1);}
 }
 campo.value = s;
 return campo.value;
}
// Funcao para mostrar o conteudo de uma textarea num span
function mostraConteudo(mensagem,mostra,valor){
  conteudo="";
  if(valor == 0){
    conteudo = "";
  }else{
    conteudo = "<table width='50'><tr><td>"+mensagem+"</td></tr></table>";
  }
  mostra.innerHTML = conteudo;
}
function mascaraData(campo){
   with(document.forms[0]){
     campo.value = limpaCampo(campo);
     valor = campo.value;
     tamanho = valor.length;
    
     if (tamanho > 2 && tamanho < 5){
      campo.value = valor.substr(0, tamanho - 2) + '/' + valor.substr(tamanho - 2, tamanho);
     }
     
    if (tamanho >= 5 && tamanho <= 10){
      campo.value = valor.substr(0, 2) + '/' + valor.substr(2, 2) + '/' + valor.substr(4, 4);
     }
   }
  }
  
  function limpaCampo(campo){
   var s = "";
   var cp = "";
   vr = campo.value;
   tam = vr.length;
   for (i = 0; i < tam ; i++) {  
    if (vr.substring(i,i + 1) != "/" && vr.substring(i,i + 1) != "-" && vr.substring(i,i + 1) != "."  && vr.substring(i,i + 1) != "," ){
      s = s + vr.substring(i,i + 1);}
   }
   campo.value = s;
   return cp = campo.value
  }



// Valida campos data
function verificarData(campo, msgErro){
var verStr = "0123456789";
var campoData = campo;
var valorData = "";
var dataTemp = "";
var separador = "/";
var dia;
var mes;
var ano;
var leap = 0;
var erro = 0;
var i;
erro = 0;
   
var data = new Date();
   
	valorData = campoData.value;
  
  if (valorData == '' || valorData == null) {
    return false;
  }
	/* Apaga todos os caracteres exceto 0..9 */
	for (i = 0; i < valorData.length; i++) {
		if (verStr.indexOf(valorData.substr(i,1)) >= 0) {
			dataTemp = dataTemp + valorData.substr(i,1);
		}
	}
	valorData = dataTemp;
	/* Sempre altera a data para oito dígitos */
	/* Se ano informado tiver 2 dígitos, o programa assumirá 20 mais os dois dígitos digitados --> 20xx */
	if (valorData.length == 6) {
		valorData = valorData.substr(0,4) + '20' + valorData.substr(4,2); }
	if (valorData.length != 8) {
		erro = 19;}
	/* O ano é inválido se for igual a zero (0000) */
	ano = valorData.substr(4,4);
	if (ano == 0) {
		erro = 20;
	}
	/* Validação do mês */
	mes = valorData.substr(2,2);
	if ((mes < 1) || (mes > 12)) {
		erro = 21;
	}
	/* Validação do dia */
	dia = valorData.substr(0,2);
	if (dia < 1) {
		erro = 22;
	}
	/* Verifica se o ano é bissexto */
	if ((ano % 4 == 0) || (ano % 100 == 0) || (ano % 400 == 0)) {
		leap = 1;
	}
	if ((mes == 2) && (leap == 1) && (dia > 29)) {
		erro = 23;
	}
	if ((mes == 2) && (leap != 1) && (dia > 28)) {
		erro = 24;
	}
	/* Validação dos demais meses do ano */
	if ((dia > 31) && ((mes == "01") || (mes == "03") || (mes == "05") || (mes == "07") || (mes == "08") || (mes == "10") || (mes == "12"))) {
		erro = 25;
	}
	if ((dia > 30) && ((mes == "04") || (mes == "06") || (mes == "09") || (mes == "11"))) {
		erro = 26;
	}
	/* Se o valor 0 for digitado no campo, o campo será limpado */
	if ((dia == 0) && (mes == 0) && (ano == 00)) {
		erro = 0; dia = ""; mes = ""; ano = ""; separador = "";
	}
	/* Se nenhum erro ocorrer, mostrar da data completa no campo data no formaAto dd/mm/yyyy */
	if (erro == 0) {
		campoData.value = dia + separador + mes + separador + ano;
	}
	/* A mensagem de erro é mostrada se a variável erro != 0 */
	else {
    alert(msgErro);
    if (document.all) {
      campoData.value = '';
      campoData.select();
      campoData.focus();
    }else{
      campoData.value = '';
      campoData.select();
      campoData.focus();
    }
      return false;
	}
}


// Valida campos data
function verificarDataMesAno(campo, msgErro){
var verStr = "0123456789";
var campoData = campo;
var valorData = "";
var dataTemp = "";
var separador = "/";
var mes;
var ano;
var leap = 0;
var erro = 0;
var i;
erro = 0;
   
var data = new Date();
   
	valorData = campoData.value;
  
  if (valorData == '' || valorData == null) {
    return false;
  }
	/* Apaga todos os caracteres exceto 0..9 */
	for (i = 0; i < valorData.length; i++) {
		if (verStr.indexOf(valorData.substr(i,1)) >= 0) {
			dataTemp = dataTemp + valorData.substr(i,1);
		}
	}
	valorData = dataTemp;
	/* Sempre altera a data para oito dígitos */
	/* Se ano informado tiver 2 dígitos, o programa assumirá 20 mais os dois dígitos digitados --> 20xx */
	if (valorData.length == 4) {
		valorData = valorData.substr(0,4) + '20' + valorData.substr(4,2); }
	if (valorData.length != 6) {
		erro = 19;}
	/* O ano é inválido se for igual a zero (0000) */
	ano = valorData.substr(4,4);
	if (ano == 0) {
		erro = 20;
	}
	/* Validação do mês */
	mes = valorData.substr(2,2);
	if ((mes < 1) || (mes > 12)) {
		erro = 21;
	}	
	/* Verifica se o ano é bissexto */
	if ((ano % 4 == 0) || (ano % 100 == 0) || (ano % 400 == 0)) {
		leap = 1;
	}
	if ((mes == 2) && (leap == 1) && (dia > 29)) {
		erro = 23;
	}
	if ((mes == 2) && (leap != 1) && (dia > 28)) {
		erro = 24;
	}
	
	/* Se o valor 0 for digitado no campo, o campo será limpado */
	if ((mes == 0) && (ano == 00)) {
		erro = 0; mes = ""; ano = ""; separador = "";
	}
	/* Se nenhum erro ocorrer, mostrar da data completa no campo data no formaAto dd/mm/yyyy */
	if (erro == 0) {
		campoData.value = dia + separador + mes + separador + ano;
	}
	/* A mensagem de erro é mostrada se a variável erro != 0 */
	else {
    alert(msgErro);
    if (document.all) {
      campoData.value = '';
      campoData.select();
      campoData.focus();
    }else{
      campoData.value = '';
      campoData.select();
      campoData.focus();
    }
      return false;
	}
}

// Valida campos data
function isDataInvalida(campo){
var verStr = "0123456789";
var campoData = campo;
var valorData = "";
var dataTemp = "";
var separador = "/";
var dia;
var mes;
var ano;
var leap = 0;
var erro = 0;
var i;
erro = 0;
   
var data = new Date();
   
	valorData = campoData.value;
  
  if (valorData == '') {
    return false;
  }
	/* Apaga todos os caracteres exceto 0..9 */
	for (i = 0; i < valorData.length; i++) {
		if (verStr.indexOf(valorData.substr(i,1)) >= 0) {
			dataTemp = dataTemp + valorData.substr(i,1);
		}
	}
	valorData = dataTemp;
	/* Sempre altera a data para oito dígitos */
	/* Se ano informado tiver 2 dígitos, o programa assumirá 20 mais os dois dígitos digitados --> 20xx */
	if (valorData.length == 6) {
		valorData = valorData.substr(0,4) + '20' + valorData.substr(4,2); 
  }
	if (valorData.length != 8) {
		erro = 19;
  }
	/* O ano é inválido se for igual a zero (0000) */
	ano = valorData.substr(4,4);
	if (ano == 0) {
		erro = 20;
	}
	/* Validação do mês */
	mes = valorData.substr(2,2);
	if ((mes < 1) || (mes > 12)) {
		erro = 21;
	}
	/* Validação do dia */
	dia = valorData.substr(0,2);
	if (dia < 1) {
		erro = 22;
	}
	/* Verifica se o ano é bissexto */
	if ((ano % 4 == 0) || (ano % 100 == 0) || (ano % 400 == 0)) {
		leap = 1;
	}
	if ((mes == 2) && (leap == 1) && (dia > 29)) {
		erro = 23;
	}
	if ((mes == 2) && (leap != 1) && (dia > 28)) {
		erro = 24;
	}
	/* Validação dos demais meses do ano */
	if ((dia > 31) && ((mes == "01") || (mes == "03") || (mes == "05") || (mes == "07") || (mes == "08") || (mes == "10") || (mes == "12"))) {
		erro = 25;
	}
	if ((dia > 30) && ((mes == "04") || (mes == "06") || (mes == "09") || (mes == "11"))) {
		erro = 26;
	}
	/* Se o valor 0 for digitado no campo, o campo será limpado */
	if ((dia == 0) && (mes == 0) && (ano == 00)) {
		erro = 0; dia = ""; mes = ""; ano = ""; separador = "";
	}
  if (erro == 0) {
		return true;
	} else {    
    return false;
	}
}

function somenteNumeros(e){
    somenteNumeros(e,false);
}

/**
* Somente Números. 
* permiteTeclaX, se for true permite também o caracter X
*/
function somenteNumeros(e,permiteTeclaX){
 if (document.all){
  var tecla = event.keyCode;
 }else{
  var tecla = e.which;
 }
 
 var permiteX = false;
 
 // 88 = 'X'
 // 120 = 'x'
 if (permiteTeclaX && (tecla == 88 || tecla == 120)) {
    permiteX = true;
 }

 if ((tecla > 47 && tecla < 58) || permiteX){ // numeros de 0 a 9
  return true;
 }else{
  if (tecla != 8 && tecla != 46 && tecla != 9 && tecla != 0){
    //comentado por Ivan Mecenas para evitar a digitação do ', %, & e ( nos campos numéricos
    //tecla != 37 && tecla != 38 && tecla != 39 && tecla != 40 && 
   if (document.all){
    event.keyCode = 0;
   }else{
    e.preventDefault();
   }
  }else{
   return true;
  }
 }
}


// Tab automático
var isNN = (navigator.appName.indexOf("Netscape")!=-1);

function autoTab(input,len, e) {
	var keyCode = (isNN) ? e.which : e.keyCode; 
	var filter = (isNN) ? [0,8,9] : [0,8,9,16,17,18,37,38,39,40,46];
	
	if(input.value.length >= len && !containsElement(filter,keyCode)) {
		input.value = input.value.slice(0, len);
		input.form[(getIndex(input)+1) % input.form.length].focus();
	}
	
function containsElement(arr, ele) {
	var found = false, index = 0;
	
	while(!found && index < arr.length)
		if(arr[index] == ele)
			found = true;
		else
			index++;
			
	return found;
}

function getIndex(input) {
	var index = -1, i = 0, found = false;
	
	while (i < input.form.length && index == -1)
		if (input.form[i] == input)
			index = i;
		else
			i++;
			
	return index;
}
return true;
}


function comparaDatas(dataAnterior, dataPosterior) {
	var dataAnt = dataAnterior.substring(6,10) + dataAnterior.substring(3,5) + dataAnterior.substring(0,2);
	var dataPos = dataPosterior.substring(6,10) + dataPosterior.substring(3,5) + dataPosterior.substring(0,2);
	
	if (parseInt(dataPos) >= parseInt(dataAnt) )
	{
		return true;
	}
}


/* Redimensiona o tamanho do frame para ocupar toda a tela */
function redimensiona(frameID,doc) {
  fr = doc.getElementById(frameID);  
  if (!fr) {
    fr = parent.doc.getElementById(frameID);
  }
  if (fr.contentDocument && fr.contentDocument.body.offsetHeight) {
    fr.height = fr.contentDocument.body.offsetHeight + 20; 
  } else if (fr.Document && fr.Document.body.scrollHeight) {
    fr.height = fr.Document.body.scrollHeight + 20;
  }
}





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
// IsNumeric(num)
// IsDate(data) -- valida datas no formato (dd/mm/aaaa)
// Mid(string,start,length)
// Left(string,length)
// Right(string,length)
// UCase(string)
// LCase(string)
// LTrim(string)
// RTrim(string)
// Trim(string)
//
// fCvData(pData,De,Para)
//		Esta função converte uma data (De / Para) cfe
//		numeração abaixo:
//		1 - (DD/MM/AAAA)
//		2 - (MM/DD/AAAA)
//		3 - (AAAAMMDD)
//									by SuperPro
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function isNumeric(pNum){

	if (pNum==''){
		return false;
	}
	for (var i = 0; i < pNum.length; i++){
		var ch = pNum.substring(i, i + 1);
		if (ch < '0' || '9' < ch){
			return false;
		}
	}
	return true;
}

function IsDate(pData){

	if(pData.length<10 || pData.length>10){
		alert('Data inválida\nInforme a data no formato (dd/mm/aaaa)');
		return false;
	}
	var ano = '' + pData.substring(6,10);
	var mes = '' + pData.substring(3,5);
	var dia = '' + pData.substring(0,2);
				
	if(dia>'31'){
		alert('Data inválida');
		return false;
	}
				
	if(mes>'12'){
		alert('Data inválida');
		return false;
	}

	if(mes=='02'){
		if(ano%4!=0 && dia>'28'){
			alert('Data Inválida');
			return false;
		}
		else{
			if(dia>'29'){
				alert('Data Inválida');
				return false;
			}
		}
	}
	
	if(mes<='07'){
		if(mes%2==0 && dia>'30'){
			alert('Data inválida');
			return false;
		}
	}
	else{
		if(mes>'09'){
			if(mes%2!=0 && dia>'30'){
				alert('Data inválida');
				return false;
			}
		}
	}
				
	return true
}

function Mid(campo,x,y){

	var res;
	if(x>0)
		x = x-1;
	if(x+y > campo.length)
		y = campo.length
	else
		y = x + y;
	res = campo.substring(x,y);
	return res;
}
	
function Left(campo,x){

	var res;
	if(x > campo.length)
		x = campo.length;
	res = campo.substring(0,x);
	return res;
}
	
function Right(campo,x){

	var res;
	if(x > campo.length){
		res = campo;
		return res;
	}
	res = campo.substring(campo.length-x,campo.length);
	return res;
}
	
function UCase(campo){

	return campo.toUpperCase()
}
	
function LCase(campo){

	return campo.toLowerCase()
}
	
function RTrim(campo){

	y=true;
	while(y==true){
		x = campo.length;
		if(Right(campo,1)==' '){
			campo = Left(campo,x-1);
			y=true;
		}
		else{
			y=false
		}
	}
	return campo;
}

/**
  * Soma dois valores formatados
  * valor1 = primeiro valor
  * valor3 = segundo valor
  * idCampo = id do campo que vai receber o valor
  * idDiv = id da div que vai exibir o valor
  * moeda = moeda a ser exibida
  */
function somaValoresFormatados(arrayValores, idCampo,idDiv,moeda) {
	if(arrayValores==null) {
    return;
  }
  
  var valorAcum = 0;
  for (i = 0; i < arrayValores.length; i++) {
    var flo = StrToFloat(arrayValores[i]);
    //essa formula garante que a precisão é sempre de 2 casas após a virgula
    flo = (Math.round(flo*100))/100;
    valorAcum += flo;
  }
  //essa formula garante que a precisão é sempre de 2 casas após a virgula
  valorAcum = (Math.round(valorAcum*100))/100;
  var vlrFormatado = FloatToStr(valorAcum);
  
  if (idCampo != null && idCampo != "undefined" &&
      document.getElementById(idCampo) != null &&
      document.getElementById(idCampo) != "undefined") {
    document.getElementById(idCampo).value = valorAcum;	
  }
  
  if (idDiv != null && idDiv != "undefined" && 
      document.getElementById(idDiv) != null && 
      document.getElementById(idDiv) != "undefined") {  
    document.getElementById(idDiv).innerHTML = moeda + vlrFormatado;
  }
}

/**
  * Multiplica dois ou mais valores formatados
  * valor1 = primeiro valor
  * valor3 = segundo valor
  * idCampo = id do campo que vai receber o valor
  * idDiv = id da div que vai exibir o valor
  * moeda = moeda a ser exibida
  */
function multiplicaValoresFormatados(arrayValores, idCampo,idDiv,moeda) {
	if(arrayValores==null) {
    return;
  }
  
  var valorAcum = 1;
  for (i = 0; i < arrayValores.length; i++) {
    valorAcum *= StrToFloat(arrayValores[i]);
  }
	
  var vlrFormatado = FloatToStr(valorAcum);
  
  if (idCampo != null && idCampo != "undefined") {
    document.getElementById(idCampo).value = vlrFormatado;	
  }
  
  if (idDiv != null && idDiv != "undefined") {  
    if ( document.getElementById(idDiv) != null ){
      document.getElementById(idDiv).innerHTML = moeda + vlrFormatado;
    }
  }
}

function LTrim(campo){

	y=true;
	while(y==true){
		x = campo.length-1;
		if(Left(campo,1)==' '){
			campo = Right(campo,x);
			y=true;
		}
		else{
			y=false;
		}
	}
	return campo;
}
	
function Trim(campo){

	return RTrim(LTrim(campo));
}

function fCvData(pData,De,Para){
// 1 - (DD/MM/AAAA)
// 2 - (MM/DD/AAAA)
// 3 - (AAAAMMDD)


	switch(De){
		case 1:{
			var ano = '' + pData.substring(6,10);
			var mes = '' + pData.substring(3,5);
			var dia = '' + pData.substring(0,2);
			break;
		}
		case 2:{
			var ano = '' + pData.substring(6,10);
			var mes = '' + pData.substring(0,2);
			var dia = '' + pData.substring(3,5);
			break;
		}
		case 3:{
			var ano = '' + pData.substring(0,4);
			var mes = '' + pData.substring(4,6);
			var dia = '' + pData.substring(6,8);
			break;
		}
	}

	if(IsDate(dia+'/'+mes+'/'+ano)!=True){
		alert('Data inválida');
		return null;
	}

	switch(Para){
		case 1:{
			var datafinal = dia+'/'+mes+'/'+ano;
			break;
		}
		case 2:{
			var datafinal = mes+'/'+dia+'/'+ano;
			break;
		}
		case 3:{
			var datafinal = ano+mes+dia;
			break;
		}
	}
		
	return datafinal
}

function valorArquivo(campoEsc,thisvalue) {
  campoEsc.value = thisvalue.value.toString();
  return true;
}  

function mostraCalendario(campo){
  var campoCalendario = new calendar1(campo);
  campoCalendario.year_scroll = true;
  campoCalendario.time_comp = false;
  campoCalendario.popup();
}

function mudaNomeArquivoUploadStr(){
    var uploadStr = document.forms[0].uploadStr;
    if (uploadStr != null && uploadStr.value == "true") {
    
        for (i = 1 ; true ; i++) {
            var campoArquivo = document.getElementById("nomeArquivoAnexo" + i);                       
            if (campoArquivo != null) {
                campoArquivo.value = '';
            } else {
                break;
            }
        }
   }
   //mudaNomeArqUploadStrMembroEquip();
} 

function mudaNomeArqUploadStrMembroEquip(){
    var uploadStr = document.forms[0].uploadStr;
    if (uploadStr != null && uploadStr.value == "true") {
    
        for (i = 1 ; true ; i++) {
            var campoArquivo = document.getElementById("nomeArquivoCV" + i);                                   
            if (campoArquivo != null) {
                campoArquivo.value = '';
            } else {
                break;
            }
        }
   }      
} 

function mudaNomeArquivoProjeto(idDiv,valor){
  
  //var uploadStr = document.forms[0].uploadStr;
  //if (uploadStr == null || uploadStr.value != "true") {
      var elemento = document.getElementById(idDiv);
      if (elemento != null && elemento.type == "text"){
        elemento.value = valor;
      }else{
        elemento = document.getElementById('novoNomeArquivoProjeto');
        
        if (elemento != null && elemento != 'undefined'){
          elemento.innerHTML = "Arquivo selecionado: " + valor;
        }
      }
   //}      
} 

function marcaSelect(campo) {
  if (campo != null && (campo.type.indexOf("select") != -1)) {  
      for (i = 0; i < campo.options.length; i++) {
        campo.options[i].selected = true;
      }
  }
}

function verificaSelectPreenchido(campo) {
  if (campo.options == null || campo.options == "undefined") {
    return false;
  }
  
  if (campo.options.length == null || campo.options.length == "undefined" || campo.options.length == 0) {
    return false;
  }
  
  return true;
}

/** Exibe as mensagens de erro modificadas */
var i18N_MyAppAlert = ""; // used by MyApp_dialogs.js
var boxWidth = 300;
function exibeMensagemPopup(textoMensagem, textoTitulo, idObjetoDiv, tipo){
	/*
		textoMensagem = mensagem de aviso, erro, alerta
		textoTitulo = titulo da caixa de diálogo
		idObjetoDiv = o div da caixa de diálogo
		tipo = tipos suportados: aviso, erro, alerta
	*/
	MyAppAlert(document.getElementById(idObjetoDiv + "_mensagem").innerHTML, document.getElementById(idObjetoDiv + "_titulo").innerHTML);
	if (tipo == "aviso" ) {
		alertDialog.setIcon('warning.gif');
	}else if(tipo == "erro"){
		alertDialog.setIcon('error.gif');
	}else if(tipo == "alerta"){
		alertDialog.setIcon('info.gif');
	}
  alertDialog.setTitle(textoTitulo);
  alertDialog.setContent(textoMensagem);
	
	if (this.outerHeight == "600" ) {
		posicaoX = document.body.offsetWidth - 450;
		posicaoY = document.body.offsetHeight - 250;
	}else{
		posicaoX = document.body.offsetWidth - 700;
		posicaoY = document.body.offsetHeight - 300;
	}

	alertDialog.moveTo(posicaoX, posicaoY);
  alertDialog.setWidth(boxWidth);
}

function exibeOcultaCampo(idObjeto){
	objeto = document.getElementById(idObjeto);
	if (objeto.style.display == 'none') {
		objeto.style.display = 'block';
	}else{
		objeto.style.display = 'none';
	}
}	

function maximoCaracter(campo, qtde, e){
  /*
    campo - o campo a ser validado
    qtde - quantidade máxima de caracteres permitidos
    e - evento interpretado pelo browser
    
    chamada: onkeypress(this, 10, event);
  */
  if (document.all){
    var tecla = event.keyCode;
  }else{
    var tecla = e.which;
  }
  
  var vMaximo = campo.value.length;
  if (vMaximo >= qtde){
    if (tecla != 8 && tecla != 46 && tecla != 9 && tecla != 37 && 
        tecla != 38 && tecla != 39 && tecla != 40){
      alert('Você não pode digitar mais que ' + qtde + ' caracteres  neste campo!');	
      if (document.all){
        event.keyCode = 0;
      }else{
        e.preventDefault();
      }
    }
  }
}

	function maximoCaracter2(controle,qtde)
	{
		var vMaximo = controle.value.length;
    if (navigator.appName == "Netscape"){
  		if (vMaximo > qtde){
  			alert('Você não pode digitar mais que ' + qtde + ' caracteres  neste campo!');	
  			controle.focus();
        return false;
  		}
    }else{
  		if (vMaximo > qtde){
  			alert('Você não pode digitar mais que ' + qtde + ' caracteres  neste campo!');	
  			controle.focus();
  			event.returnValue = event.keyCode==8;
  		}
    }
	}


function abreAjuda(arquivo){
  var parametros = "directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,titlebar=no,toolbar=no,height=300,width=400,left=100,top=50";
  var janelaAjuda = window.open(arquivo,"janelaAjuda",parametros);

  if (!janelaAjuda) {
    alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
  }
  
  janelaAjuda.focus();
}

function showMessage(titulo, mensagem, icone){
  /*
    Descrição:
      - exibe a mensagem sob todos os frames utilizando a tecnologia Dynapi
    Requisitos:
      - bibliotecas Dynapi
    Sintaxe:
      titulo -> o texto que aparecerá no título da caixa de mensagem
      mensagem -> a mensagem que aparece dentro da caixa de mensagem
      icone -> determina qual ícone vai aparecer na caixa de mensagem:
        erro (default) - exibe o ícone de erro (images/error.gif)
        alerta - exibe o ícone de alerta (images/warning.gif)
        aviso - exibe o ícone de aviso (/images/info.gif)
    Exemplo:
      <input type="button" value="Clique aqui" onclick="showMessage('Observe', 'Você não pode clicar dentro do frames agora', 'aviso')">
  */
  parent.parent.mensagemPopup(titulo, mensagem, icone);
}

function isTamanhoValido(campo,valorMax){
    valor = campo.value;
    tamanho = valor.length;
    if (tamanho > valorMax){
      return false;
    } else {
      return true;
    }
}

//############################################################################################
//Função que conta caracteres e delimita o textarea. Cecilia
// (Não funciona em Netscape 4.x
//############################################################################################
function contaCaracteres(tamanho,obj,cont){
//Funcao que limita a digitacao em campos textarea
//tamanho = maximo de caracteres permitidos
//obj = nome do campo(textarea) 
//cont = campo q vai guardar a qtd de caracteres digitados

  if (parseInt(eval("document.forms[0]" + "." + obj + ".value.length")) < tamanho -1){
    eval("document.forms[0]" + "." + cont + ".value = tamanho - document.forms[0]" + "." + obj + ".value.length");
    }else{
    eval("document.forms[0]" + "." + obj + ".value = document.forms[0]" + "." + obj + ".value.substr(0,tamanho-1);");
    eval("document.forms[0]" + "." + cont + ".value = '0';");
  }
}


function toggleImagens(imagem, elemento){
  /*
    Descrição:
      - função para alternar o portlet entre maximizado e minimizado
    Requisitos:
      - nenhum
    Sintaxe:
      imagem -> objeto da imagem que alternará com a maximizada e minimizada.
      elemento -> qual o DIV que deverá ser ocultado
    Exemplo:
      <img src="fechar_azul.gif" onclick="toggleImagens(this,'membrosEquipeContent')"
  */
  if (imagem != null && imagem.src.indexOf("fechar_azul.gif") > 0){
    imagem.src = contextoAplicacao+"/images/abrir_azul.gif";
    imagem.title = "Clique para expandir";
    document.getElementById(elemento).style.display = 'none';
  } else  if (imagem != null)  {
    imagem.src = contextoAplicacao+"/images/fechar_azul.gif";
    imagem.title = "Clique para recolher";
    document.getElementById(elemento).style.display = '';
    }
}


function desabilitarHabilitarCampo(valor, campo){
  /*
    Descrição:
      - função habilitar ou desabilitar todos os inputs visíveis e textarea
    Requisitos:
      - nenhum
    Sintaxe:
      campo -> id do campo que deseja desabilitar
    Exemplo:
      <input type="text" id="campoText" value="Nada a declarar">
      <br>
      <input id="botao" type="Button" value="Campo Text" onclick="desabilitarHabilitarCampo('campoText')"> 
  */
  var objeto = document.getElementById(campo);
  var indice = valor.selectedIndex;
  if (objeto != null){
    if (indice != null && indice == 0){
      objeto.disabled = true;
      objeto.styleId="campoDesabilitado";
    }else{
      objeto.disabled = false;
      objeto.styleId="campoHabilitado";
    }
  }
}




function abrirJanelaModal(endereco, nomeJanela, largura, altura){
  /*
    Descrição:
      - abre uma nova janela centralizada apenas com a barra de status, tamanho fixo
    Requisitos:
      - nenhum
    Sintaxe:
      endereco -> link que deve aparecer na janela, default: www.cnpq.br
      nomeJanela -> um nome da janela para sempre abrir a mesma e/ou focá-la, default: _blank
      largura -> a largura da janela, se for ignorada, default: 660
      altura -> a altura da janela, se for ignorada, default é 500
    Exemplos:
      <input id="botao" type="Button" value="Google" onclick="abrirJanelaModal('http://www.google.com.br','google',600,400)"> 
      <input id="botao" type="Button" value="Google" onclick="abrirJanelaModal('http://www.google.com.br')"> 
      <input id="botao" type="Button" value="Google" onclick="abrirJanelaModal('http://www.google.com.br','google')"> 
      <input id="botao" type="Button" value="Google" onclick="abrirJanelaModal('http://www.google.com.br','google',600)"> 
  */
	if (largura == '' || largura == null) {
    largura = 660;
    if (screen.width <= 800){
      largura = (largura/2);
    }
	}
	
	if (altura == '' || altura == null ) {
    altura = 500;
    if (screen.height <= 640){
      altura = (altura/2);
    }
	}
	
  var topo = ((window.screen.height - 160)-altura)/2; //posição relativa ao topo da página
  var esquerda = (window.screen.width - largura)/2; //posição relativa a esquerda da página
  
  var barraStatus = 1 // exibe o status
  var barraCanais = 0; // exibe o channelmode
  var barraDiretorios = 0; // exibe os directories
  var barraEndereco = 0; //exibe o location
  var barraMenu = 0; //exibe o menubar
  var barraRolagem = 1; //exibe os scrollbars
  var barraTitulo = 0; //exibe o titlebar
  var barraFerramenta = 0; //exibe o toolbar
  var telainteira = 0; // exibe em fullscreen
  
  var redimensionar = 0 // pode redimensionar?
  var nome = nomeJanela;
  if (nome == '' || nome == null){
    nome = "_blank";
  }
  
  var argumentos = "top="+ topo +",";
      argumentos += "left="+ esquerda +",";
      argumentos += "height="+ altura +",";
      argumentos += "width="+ largura +",";
      argumentos += "channelmode="+ barraCanais +",";
      argumentos += "directories="+ barraDiretorios +",";
      argumentos += "location="+ barraEndereco +",";
      argumentos += "menubar="+ barraMenu +",";
      argumentos += "scrollbars="+ barraRolagem +",";
      argumentos += "titlebar="+ barraTitulo +",";
      argumentos += "toolbar="+ barraFerramenta +",";
      argumentos += "status="+ barraStatus +",";
      argumentos += "resizable="+ redimensionar;
  
  if (endereco == "" || endereco == null){
    endereco = "http://www.cnpq.br";
  }
  
  if (typeof janelaModal == 'undefined'){
    janelaModal = window.open(endereco, nome, argumentos);
  }else{
    janelaModal.close();
    janelaModal = window.open(endereco, nome, argumentos);
  }
  janelaModal.focus();
}

function reposicionarBookmark(bookmark){
	/*
		Descrição:
			- reposiciona para um bookmark após submeter a página
		Requisitos:
			- nenhum
		Sintaxe:
			bookmark -> a âncora para onde a função deve reposicionar na página
		Exemplo:
			<body onload="reposicionarBookmark('portletMembros');">
	*/
  var f = document.forms[0];
  var foco = '';
  if (f.metodo.value == 'adicionaMembro' || f.metodo.value == 'excluiMembro'){
    bookmark = 'membrosEquipe';
  }else if(f.metodo.value == 'adicionaInstituicao' || f.metodo.value == 'excluiInstituicao'){
    bookmark = 'instituicaoParticipante';
  }else if(f.metodo.value == 'adicionaRecursoBolsa' || f.metodo.value == 'excluiRecursoBolsa'){
    bookmark = 'recursoBolsa';
  }else{
    bookmark = '';
  }  
  
	if (bookmark == '' || bookmark == null ) {
		return;
	}else{
    foco = bookmark;
		this.location = window.location.href + "#" + bookmark;
	}
  
  if (foco == '' || foco == null){
    return;
  }else{
    campoFoco(foco);
  }
  
}

function validacpf(cpf){  
  if (Trim(cpf) == "")  {
    return true;
  }
  
  var i;   
  s = cpf;   
  var c = s.substr(0,9);   
  var dv = s.substr(9,2);   
  var d1 = 0; 
  
  if (cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999' ) {
      alert("CPF Inválido");
      return false;
  }
  
  for (i = 0; i < 9; i++) {   
    d1 += c.charAt(i)*(10-i);   
  } 
  
  if (d1 == 0){   
    alert("CPF Inválido");   
    return false;   
  } 
  
  d1 = 11 - (d1 % 11); 
  
  if (d1 > 9) 
    d1 = 0; 
  
  if (dv.charAt(0) != d1) {   
    alert("CPF Inválido");  
    return false;   
  }   
  
  d1 *= 2; 
  
  for (i = 0; i < 9; i++) {   
    d1 += c.charAt(i)*(11-i);   
  } 
  
  d1 = 11 - (d1 % 11); 
  
  if (d1 > 9) 
    d1 = 0; 
  
  if (dv.charAt(1) != d1) {   
    alert("CPF Inválido")   
    return false;   
  } 
  
  return true; 
} 



function habilitaEstilo(){
  /*
    é utlizada para não aplicar o estilo da caixa portlet no Netscape,
    veja exemplo na página inicial.jsp
  */
  var navegadorVendor = navigator.vendor;
  var navegadorUserAgent = navigator.userAgent;
  if (navegadorVendor == "FireFox" && navegadorUserAgent.indexOf("Firefox") != -1) {
    return document.write("portletContent");
  }else if(navegadorVendor == "Netscape" && navegadorUserAgent.indexOf("Netscape") != -1) {
    return document.write("''");
  }else if(navegadorVendor == "undefined" && navegadorUserAgent.indexOf("MSIE") != -1) {
    return document.write("portletContent");
  }else{
    return document.write("portletContent");
  }
}


function minimizarPortlets(portlets){
  var imagem = '';
  var conteudo = '';
  if (portlets != '' && portlets != null){
    for (var i = 0; i < portlets.length; i++){
      imagem = document.getElementById(portlets[i] + 'Size');
      conteudo = portlets[i] + 'Content';
      if (conteudo != null && imagem != null){
        toggleImagens(imagem, conteudo);
      }
    }
  }
}

function campoFoco(idPortlet){
  var f = document.forms[0];
  var campo = '';
  var elemento = '';
  var complemento = '';
  
  if (idPortlet == 'membrosEquipe'){
    idPortlet = "membrosEquipe";
    complemento = 'funcao';
  }else if (idPortlet == 'instituicaoParticipante'){
    idPortlet = "instituicoes";
    complemento = 'funcao';
  }else if (idPortlet == 'recursoBolsa'){
    idPortlet = "bolsas";
    complemento = 'modalidade';
  }else{
    complemento = '';
  }
  
  var valor = 1;
  for (i = 1; true ; i++) {
    valor = i;
    elemento = idPortlet + "[" + i + "]." + complemento;
    campo = f.elements[elemento];
    if (campo == null){
      break;
    }
  }
  
  valor = (valor-2);
  if (valor < 0){
    valor = 0;
  }
  elemento = idPortlet + "[" + valor + "]." + complemento;
  campo = f.elements[elemento];
  if (campo != null){
    campo.focus();
  }
}


function formatarCampo(objeto, mascara) {
    /* 
    Descrição: 
      Formatação para qualquer mascara 
    Sintaxe: 
      formatarCampo (objeto, mascara)
      objeto -> o campo que queira colocar a máscara
      mascara -> o formato da máscara, utiliza-se o caracter # (jogo da velha) para representar os números
    Exemplo:
      CEP
      onkeyup="formatarCampo(this, '#####-###')"
      CPF
      onkeyup="formatarCampo(this, '###.###.###-##')"
      DATA
      onkeyup="formatarCampo(this, '##/##/####')"
      DSP
      onkeyup="formatarCampo(this, '######/####')"
    */
    var i = objeto.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(i)
    if (texto.substring(0,1) != saida) {
        objeto.value += texto.substring(0,1);
    }  
}

function limpaCamposArqAnexos() {
    var f = document.forms[0]; 
    if (f.arquivoProjeto != null) {
        f.arquivoProjeto.value = "";
        f.arquivoProjeto.style.display = "none";           
    }
    
    if (f.arquivoTrabApres != null) {
        f.arquivoTrabApres.value = "";
        f.arquivoTrabApres.style.display = "none";            
    }     
    
    if (f.arquivoCurriculo != null) {
        f.arquivoCurriculo.value = "";
        f.arquivoCurriculo.style.display = "none";        
    }  
    var ind = 0;
    while (true) {
        var campoCurr = document.getElementById("nomeArquivoCV" + ind);
        
        if (campoCurr == null) {
            break;
        }
        
        campoCurr.value = "";
        campoCurr.style.display = "none";
        
        ind++;
    }
}


  function validaDataNascCurriculo(valor) {
    
    var dataF = valor.substr(3,2) + '/' + valor.substr(0,2) + '/' + valor.substr(6,4);
        
    var data = new Date(dataF);
    var hoje = new Date();
    
    var idade = 0;
    idade = (hoje-data)/1000;
    idade = ((((idade / 60) / 60) / 24) /365);

    if (idade < 14) {
        alert('Necessário ter idade maior que 13 anos');
        document.forms[0].dataNascimento.focus();
        return false;
    }

    if (idade > 129) {
        alert('Necessário ter idade menor que 130 anos');
        document.forms[0].dataNascimento.focus();
        return false;
    }    
    return true;    
  }
  
  function ajustaDadosHost(appt) {
    var f = document.forms[0]; 
    f.hostEnvio.value = appt.getHost() + " - " + appt.getIp();
    f.sistemaOperacional.value = appt.getOsName() + " - " + appt.getOsVersion() 
                                + " - " + appt.getOsArch();    
  }
  
  function exibeEscondeCampo(idCampo,acao) {
    if (document.getElementById(idCampo) != null) {
        document.getElementById(idCampo).style.display = acao;
    }
  }
  
  function exibeEscondeCampoPorValor(idDiv,idCampo,acao) {
    // Se o valor for "S" o campo será exibido
    var rad = document.getElementById(idCampo);
    
    if (rad.checked) {    
        var divExibe = document.getElementById(idDiv);
        if (divExibe != null) {
            divExibe.style.display = acao;
        }    
    }
  }
  
  
function somenteLetrasNumeros(e){
 if (document.all){
  var tecla = event.keyCode;
 }else{
  var tecla = e.which;
 }
 
  // numeros de 0 a 9, letras A a Z, letras a a z
 if ((tecla > 47 && tecla < 58) || (tecla > 64 && tecla < 90) || (tecla > 96 && tecla < 122)){
  return true;
 }else{
  if (tecla != 8 && tecla != 9 && tecla != 0){
   if (document.all){
    event.keyCode = 0;
   }else{
    e.preventDefault();
   }
  }else{
   return true;
  }
 }
}

function limpaCaracteresInvalidos(valor){
        var tam, descricao;
        var elemento;
        var obj = valor.value;
        elemento = ""; 
        tam = parseInt(obj.length,10);
        for(var i=0; i < tam; i++){
                descricao = obj.charAt(i);
                if((descricao >= '0' && descricao <= '9') || (descricao > 64 && descricao < 90) || (descricao > 96 && descricao < 122)){
                        elemento = "" + elemento + descricao;
                }
        }
        return elemento;
}

function FloatToStr4casas(valor){

  var fracionario;
  var inteiro;
  var resultado;
  // Paga a parte inteira do numero
  inteiro = Math.floor(valor);
  // Paga parte fracionaria do numero
  fracionario = valor - inteiro;
  
  // Transforma a parte fracionario em um inteiro com 4 algarismos
  fracionario = Math.round(fracionario * 10000);

  inteiro = inteiro.toString();
  if (inteiro.length > 3)
  {
    // Coloca os separadores de milhar
    for (i = inteiro.length; i > 0; i = i - 3)
    {                         
      if (i != inteiro.length)
       inteiro = inteiro.substring(0, i) + "." + inteiro.substring(i, inteiro.length);
    }
  }
  // Monta o valor final
  fracionario = fracionario.toString();
  if (parseInt(fracionario) < 10)
  {
    fracionario = "0" + fracionario;
  }
  resultado = inteiro + "," + fracionario;
  return resultado;

}

function abreEspelhoFinanceiro(codigoPrestacaoContas){
    var url = "espelhoFinanceiro.do?metodo=iniciar";
    var topo = ((window.screen.height - 160)-600)/2; //posição relativa ao topo da página
    var esquerda = (window.screen.width - 720)/2; //posição relativa a esquerda da página
 
    var winref = window.open(url, "espelhoFinanceiro", 
  "height=600,width=720,top="+topo+",left="+esquerda+",status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");

 if (!winref) {
   alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
 }
  
 winref.focus(); 
}

function abreMovimentacaoFinanceira(numeroProcesso){
    var url = "movimentacaoFinanceira.do?metodo=iniciar&numeroProcesso="+numeroProcesso;
    var topo = ((window.screen.height - 160)-400)/2; //posição relativa ao topo da página
    var esquerda = (window.screen.width - 700)/2; //posição relativa a esquerda da página
 
    var winref = window.open(url, "movimentacaoFinanceira", 
  "height=400,width=700,top="+topo+",left="+esquerda+",status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");

 if (!winref) {
   alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
 }
  
 winref.focus(); 
}

function tamanhoTela(medida){
	var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
	
	if (medida == 'largura'){
		return myWidth; 
	}else{
		return myHeight;
	}
  //window.alert( 'Width = ' + myWidth +'\nHeight = ' + myHeight );
}

function formatarValorReais(valor){
  var vr = retiraFormatacao(valor);
  var tam = vr.length; 
  var valorAux = "";
  var j = 0;
	var retorno = 0;

  for (i = vr.length; i >= 0; i--,j++)  {                         
    if ( j <= 2 ){ 
      valorAux = vr ; 
		}
    if ( (j > 2) && (j <= 5) ){
      valorAux = vr.substr( 0, j - 2 ) + ',' + vr.substr( j - 2, j ); 
		}
    if ( (j >= 6) && (j <= 8) ){
      valorAux = vr.substr( 0, j - 5 ) + '.' + vr.substr( j - 5, 3 ) + ',' + vr.substr( j - 2, j ); 
		}
    if ( (j >= 9) && (j <= 11) ){
      valorAux = vr.substr( 0, j - 8 ) + '.' + vr.substr( j - 8, 3 ) + '.' + vr.substr( j - 5, 3 ) + ',' + vr.substr( j - 2, j ); 
		}
    if ( (j >= 12) && (j <= 14) ){
      valorAux = vr.substr( 0, j - 11 ) + '.' + vr.substr( j - 11, 3 ) + '.' + vr.substr( j - 8, 3 ) + '.' + vr.substr( j - 5, 3 ) + ',' + vr.substr( j - 2, j ); 
		}
    if ( (j >= 15) && (j <= 17) ){
      valorAux = vr.substr( 0, j - 14 ) + '.' + vr.substr( j - 14, 3 ) + '.' + vr.substr( j - 11, 3 ) + '.' + vr.substr( j - 8, 3 ) + '.' + vr.substr( j - 5, 3 ) + ',' + vr.substr( j - 2, j );
		}
		if ( (j >= 18) && (j <= 20) ){
			valorAux = vr.substr( 0, j - 17 ) + '.' + vr.substr( j - 17, 3 ) + '.' + vr.substr( j - 14, 3 ) + '.' + vr.substr( j - 11, 3 ) + '.' + vr.substr( j - 8, 3 ) + '.' + vr.substr( j - 5, 3 ) + ',' + vr.substr( j - 2, j );
		}
  }
  if (valorAux.length > 0 && valorAux.length < 3) {
    valorAux = valorAux + ',00';
  }
  retorno = valorAux;
	return retorno;
}

function retiraFormatacao(valor){
	var retorno = '';
	var temp = '';
	var temp2 = '';

	if (valor == '' || valor == null){
		return '';
	}
	
	retorno = valor; 	

	for (var i = 0; i < retorno.length; i++){
		temp = retorno.substring(i,i+1);
		if (temp >= 0 && temp <= 9) {
			temp2 = temp2 + temp;
		}
	}
	retorno = temp2;
	return retorno;
}


 function bloqueiaBotoes(){
   var formulario = document.forms[0];
   var campos;

   var objeto = "";   

    campos = document.getElementsByTagName("input");
    for (var j = 0; j < campos.length; j++){
     objeto = formulario.elements[campos[j].id];
     if (objeto != null && objeto.type == "button") {
      objeto.disabled = true;
     }
    }
  }
  
function janelaLinhaFomentoChamada() {
  var winref = window.open(contextoAplicacao+"/consultarChamadaLinhaFomento.do",
      "linhaFomentoChamada","height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");

 if (!winref || typeof(winref) == 'undefined') {
   alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
 }
  
 winref.focus();      
}  

function mostraImagemCarregando(){
    document.getElementById('imagemCarregando').style.display = "block";
}


function ocultaImagemCarregando(){
    document.getElementById('imagemCarregando').style.display = "none";
}


function abrirHistorico(codProposta, numeroProtocolo){
  var url = contextoAplicacao+"/caixadeentrada/historicoSolicitacao.do?acao=todas&codProposta="+codProposta+"&numeroProtocolo="+numeroProtocolo;
  var winref = window.open(url, "historico", 
  "height=800,width=1000,top=100,left=100,status=no,toolbar=no,menubar=no,location=auto,scrollbars=yes,resizable=yes");
  winref.focus();
}


function abrirProducoesOrientacoes(idProponente){
  var url = contextoAplicacao+"/planilha/publicacao.do?metodo=apresentar&codRH="+idProponente;  
  var winref = window.open(url, "producoes", 
  "height=500,width=780,top=100,left=100,status=no,toolbar=no,menubar=no,location=auto,scrollbars=yes,resizable=yes");
  if (!winref || typeof(winref) == "undefined") {
    alert("É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.");
  }
  winref.focus();    
}

function abrirProducoesOrientacoes(idProponente, codLinhaFomento, seqChamada, codPeriodoSubmissao, codComiteAssessor ){
  var url = contextoAplicacao+"/planilha/publicacao.do?metodo=apresentar&codRH="+idProponente+"&codLinhaFomento="+codLinhaFomento+"&seqChamada="+seqChamada+"&codPeriodoSubmissao="+codPeriodoSubmissao+"&codComiteAssessor="+codComiteAssessor;  
  var winref = window.open(url, "producoes", 
  "height=500,width=780,top=100,left=100,status=no,toolbar=no,menubar=no,location=auto,scrollbars=yes,resizable=yes");
  if (!winref || typeof(winref) == "undefined") {
    alert("É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.");
  }
  winref.focus();    
}

function apenasNumeros(e){
 if (document.all){
  var tecla = event.keyCode;
 }else{
  var tecla = e.which;
 }

 if (tecla > 47 && tecla < 58){ // numeros de 0 a 9
  return true;
 }else{
  if (tecla != 8 && tecla != 44 && tecla != 9 && tecla != 0){
   if (document.all){
    event.keyCode = 0;
   }else{
    e.preventDefault();
   }
  }else{
   return true;
  }
 }
}

function zerosEsquerda(campo, tam){
	if (campo.value == null || campo.value == ""){
		return;
	}
	var tamanho = tam;
	var total = parseInt(tamanho - campo.value.length);
	var temp = "";
	var retorno = "";

	if (campo.value.indexOf(",") >= 0){
		var	j = 0;
	}else{
		var	j = 1;
	}
	
	for (i = j; i < total; i++){
		temp = temp + "0";
	}
	retorno = temp + "" + campo.value;
	campo.value = retorno;
}

function formataValorPontuacao(campo) {
	if (campo.value == null || campo.value == ""){
		return;
	}
  vr = campo.value;  
  vr = FiltraCampo(campo);
  
  tam = vr.length; 
  var valorAux = "";
  var j = 0;
  for (i = vr.length; i >= 0; i--,j++)  {                         
    if ( j <= 2 ){ 
      valorAux = vr ; 
		}
    if ( (j > 2) && (j <= 4) ){
      valorAux = vr.substr( 0, j - 1 ) + ',' + vr.substr( j - 1, j ) ; 
		}
  }
	if (valorAux.length > 5){
		valorAux = Left(valorAux,5);
	}
  campo.value = valorAux;
}

function validaFormatoPontuacao(campo){
	if (campo.value == null || campo.value == ""){
		return;
	}
	vr = campo.value;  
  var valorAux = "";
	if (vr.indexOf(",") == -1){
		valorAux = vr + ",0";
		campo.value = valorAux;
	}
}

function validaEmailLote(campo, emailsValidos){
    if (campo.value == null || campo.value == ""){
        return true;
    }
    campoOriginal = campo.value;
    emails = ReplaceChar(campo.value, ";", ",");
    emails = emails.split(',');
    for(var i = 0; i < emails.length; i++){
        campo.value = emails[i];
        valida = validaEmail(campo, emailsValidos);
        if(!valida){
            campo.value = campoOriginal;
            return false;
        }
    }
    campo.value = campoOriginal;
    return true;
}

function validaEmail(campo, emailsValidos){
    campo.value = campo.value.toLowerCase();
    var objeto = campo.value;
    var mausCaracteres = "*|,\:<>[]{}`\'';()&$#% ";
    var bonsCaracteres = "@.";
    var posArroba = objeto.indexOf("@");
    var temp = "";
    if (objeto == null || objeto == ""){
        return true;
    }

    if (objeto.length < 5){ // o email é menor que 5 caracteres
        alert("E-mail inválido! Possui menos de 5 caracteres.");
        campo.focus();
        return false;
    }

    if (objeto.indexOf("@",posArroba+1) != -1){ // Contém mais de um " @ "
        alert("E-mail inválido! Contém mais de um arroba.");
        campo.focus();    
        return false;
    }

    if (objeto.lastIndexOf("@") > objeto.lastIndexOf(".")){ //Não tem ponto depois do arroba
        alert("E-mail inválido! Não tem nenhum ponto.");
        campo.focus();
        return false;
    }

    if (objeto.indexOf("..",0) != -1){ // . e . colados
        alert("E-mail inválido! Existem dois ou mais pontos juntos.");
        campo.focus();
        return false;
    }

    if (objeto.indexOf("@.",0) != -1 || objeto.indexOf(".@",0) != -1){ // . e @ colados
        alert("E-mail inválido! Ponto e arroba não podem estar juntos.");
        campo.focus();
        return false;
    }

    for (var i = 0; i < objeto.length; i++){
        if (mausCaracteres.indexOf(objeto.charAt(i)) != -1){ // Contém caracteres inválidos, mausCaracteres
            alert("Seu e-mail contém caracteres inválidos!");
            campo.focus();
            return false;
        }

        temp = objeto.substring(i,i+1);
        if(i+1 == objeto.length && temp == "."){
            alert("E-mail inválido! Você não pode colocar ponto no final.");
            campo.focus();
            return false;
        }
    }

    for (var i = 0; i < bonsCaracteres.length; i++){
        if (objeto.indexOf(bonsCaracteres.charAt(i)) == -1){ // não tem bonsCaracteres
            alert("E-mail inválido! Não possui nem arroba ou ponto.");
            campo.focus();
            return false;
        }

        if (objeto.indexOf(bonsCaracteres.charAt(i)) == 0){ // começou com bonsCaracteres (. ou @)
            alert("E-mail inválido! Começou com arroba ou com ponto.");
            campo.focus();
            return false;
        }

        if (objeto.lastIndexOf(bonsCaracteres.charAt(i),0) > objeto.length-3){ //existe menos de 2 caracteres depois do ultimo goodchar
            alert("E-mail inválido! Possui menos que dois caracteres depois do último ponto.");
            campo.focus();
            return false;
        }
    }
  
    if(emailsValidos != null && emailsValidos != "undefined" && emailsValidos.length > 0){  
        var booleanEmailValido = false;
        var dominio = emailsValidos.split(',');
        var dominios = "";
        for(var i = 0; i < dominio.length; i++){
            if(objeto.indexOf(dominio[i]) != -1){
                booleanEmailValido = true;
                dominios += dominio[i] + ' - ';
                break;
            }
        }    
        if(!booleanEmailValido){
            alert("E-mail inválido! Este campo só pode conter email(s) com o(s) domínio(s): "+dominio);
            return false;        
        }
        return true;
    }
}

//Formata a data para o seguinte formato: Ex.: February 14 2007
function dataFormatoIngles(pData) {
    var data = null;        
    // Lista dos meses em inglês
    mes = [];
    mes[0] = "January";
    mes[1] = "February";
    mes[2] = "March";
    mes[3] = "April";
    mes[4] = "May";
    mes[5] = "June";
    mes[6] = "July";
    mes[7] = "August";
    mes[8] = "September";
    mes[9] = "October";
    mes[10] = "November";
    mes[11] = "December";
    
    pData = pData.split('/');        
    data = mes[(pData[1] - 1)] + ' ' + pData[0] + ' ' + pData[2];
    
    return data;
}
//Antes de chamar esta função, chame o método dataFormatoInglês para cada uma das 
//datas, depois é só chamar a função abaixo que ela retorna a diferença em dias
//entre as duas datas.
function dateDiff(dataInicial, dataFinal){
    return (((Date.parse(dataFinal))-(Date.parse(dataInicial)))/(24*60*60*1000)).toFixed(0);
}

/*Substitui caracteres especiais na passagem de parâmetro*/
function encodeTotal(texto) {
     return texto;
}

function formatarCampoMascara(objeto, mascara,teclapress){
  /* 
    Descrição: 
      Formatação para qualquer mascara 
    Sintaxe: 
      formatarCampo (objeto, mascara)
      objeto -> o campo que queira colocar a máscara
      mascara -> o formato da máscara, utiliza-se o caracter # (jogo da velha) para representar os números
      teclapress -> event (evento)
    Exemplo:
      CEP
      onkeypress="formatarCampo(this, '#####-###',event)"
      CPF
      onkeypress="formatarCampo(this, '###.###.###-##',event)"
      DATA
      onkeypress="formatarCampo(this, '##/##/####',event)"
  */
  var tecla = getKey(teclapress);
	   // Pega o valor ASCII da tecla que o usu?rio pressionou   
	  	var ctrl = teclapress.ctrlKey;   	   	  
	   // Teclas Insert, Tab, Del, Page UP, Page Down, Home, End, setas de movimenta??o, Shift e CTrl.
	   if (tecla == 8 || tecla == 9 || tecla == 37 || tecla == 38 || tecla == 39 || 
	       tecla == 40 || tecla == 46 || tecla == 36 || tecla == 35 || 
		   tecla == 33 || tecla == 34  || tecla == 45 || tecla == 16 || tecla == 17)
	   {
		    return true; 
	   }
		   
	   // Teclas ALT
	   if (tecla == 18){
	   		return true; 	
	   }
	   //CTRL + V 
	   if (ctrl && tecla==86) {
	   		return true;
	   }
	   //CTRL + C 
	   if (ctrl && tecla==67) {
	   		return true;
	   }
	   //CTRL + Z
	   if (ctrl && tecla==90) {
	   		return true;
	   }
	   //CTRL + X
	   if (ctrl && tecla==88) {
	   		return true;
	   }
  var i = objeto.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i)
  if (texto.substring(0,1) != saida){
    objeto.value += texto.substring(0,1);
  }  
}


function getKey (event) {
    return event.keyCode?event.keyCode:(event.which?event.which:event.charCode);
}

/*** 
* Descrição.: formata um campo do formulário de 
* acordo com a máscara informada... 
* Parâmetros: - objForm (o Objeto Form) 
* - campo (string contendo o nome 
* do textbox) 
* - sMask (mascara que define o 
* formato que o dado será apresentado, 
* usando o algarismo "9" para 
* definir números e o símbolo "!" para 
* qualquer caracter... 
* - evento (evento) 
* Uso.......: <input type="textbox" 
* name="xxx"..... 
* onkeypress="return txtBoxFormat(document.rcfDownload, 'str_cep', '99999-999', event);"> 
* Observação: As máscaras podem ser representadas como os exemplos abaixo: 
* CEP -> 99.999-999 
* CPF -> 999.999.999-99 
* CNPJ -> 99.999.999/9999-99 
* Data -> 99/99/9999 
* Tel Resid -> (99) 999-9999 
* Tel Cel -> (99) 9999-9999 
* Processo -> 99.999999999/999-99 
* C/C -> 999999-! 
* E por aí vai... 
***/

function txtBoxFormat(campo, sMask, evento) {
     var i, nCount, sValue, fldLen, mskLen,bolMask, sCod, nTecla,sMask;
	
	 

     if(document.all) { // Internet Explorer
       nTecla = evento.keyCode; }
     else if(document.layers) { // Nestcape
       nTecla = evento.which;
     }

     sValue = campo.value;
	 

     // Limpa todos os caracteres de formatação que
     // já estiverem no campo.
     sValue = sValue.toString().replace( "-", "" );
     sValue = sValue.toString().replace( "-", "" );
     sValue = sValue.toString().replace( ".", "" );
     sValue = sValue.toString().replace( ".", "" );
     sValue = sValue.toString().replace( "/", "" );
     sValue = sValue.toString().replace( "/", "" );
     sValue = sValue.toString().replace( "(", "" );
     sValue = sValue.toString().replace( "(", "" );
     sValue = sValue.toString().replace( ")", "" );
     sValue = sValue.toString().replace( ")", "" );
     sValue = sValue.toString().replace( " ", "" );
     sValue = sValue.toString().replace( " ", "" );
     fldLen = sValue.length;
	if(fldLen!=0){
	 if (fldLen == 11){
	 sMask = "999.999.999-99";
	
	 }
	 else if (fldLen == 14){
     sMask = "99.999.999/9999-99";
	 
     }else{
	 alert("CPF ou CNPJ inválido.")
         campo.value = '';
         campo.focus();         
     }
	 
     i = 0;
     nCount = 0;
     sCod = "";
     mskLen = fldLen;

     while (i <= mskLen) {
       bolMask = ((sMask.charAt(i) == "-") || (sMask.charAt(i) == ".") || (sMask.charAt(i) == "/"))
       bolMask = bolMask || ((sMask.charAt(i) == "(") || (sMask.charAt(i) == ")") || (sMask.charAt(i) == " "))
   
       if (bolMask) {
         sCod += sMask.charAt(i);
         mskLen++; }
       else {
         sCod += sValue.charAt(nCount);
         nCount++;
       }

       i++;
     }
     campo.value = sCod;

     if (nTecla != 8) { // backspace
       if (sMask.charAt(i-1) == "9") { // apenas números...
         return ((nTecla > 47) && (nTecla < 58)); } // números de 0 a 9
       else { // qualquer caracter...
         return true;
       } 
     } else {
       return true;
     }
  }
}
//Fim da Função Máscaras Gerais
//função de desabilita os campos dos dados bancários
function desabilitaDadosBancarios(flagHab, contexto){
    form = document.forms[0];
    form.action = contexto+"/contrato/confirmarDadosBancarios.do";
    form.acao.value = "formulario"
    form.submit();
}

// início das funções que calculam a diferença entre as datas
function Dia(Data_DDMMYYYY){
	string_data = Data_DDMMYYYY.toString();
	posicao_barra = string_data.indexOf("/");
	if (posicao_barra!= -1){
		dia = string_data.substring(0,posicao_barra);
		return dia;
	}else{
		return false;
	}
}

function Mes(Data_DDMMYYYY){
	string_data = Data_DDMMYYYY.toString();
	posicao_barra = string_data.indexOf("/");
	if (posicao_barra!= -1){
		dia = string_data.substring(0,posicao_barra);
		string_mes = string_data.substring(posicao_barra+1,string_data.length);
		posicao_barra = string_mes.indexOf("/");
		if (posicao_barra!= -1){
			mes = string_mes.substring(0,posicao_barra);
			mes = Math.floor(mes);
			return mes;
		}else{
			return false;
		}
	}else{
		return false;
	}
}

function Ano(Data_DDMMYYYY){
	string_data = Data_DDMMYYYY.toString();
	posicao_barra = string_data.indexOf("/");
	if (posicao_barra!= -1){
		dia = string_data.substring(0,posicao_barra);
		string_mes = string_data.substring(posicao_barra+1,string_data.length);
		posicao_barra = string_mes.indexOf("/");
		if (posicao_barra!= -1){
			mes = string_mes.substring(0,posicao_barra);
			mes = Math.floor(mes);
			ano = string_mes.substring(posicao_barra+1,string_mes.length);
			return ano;
		}else{
			return false;
		}
	}else{
		return false;
	}
}

function Calcula_Data(data_DDMMYYYY,dias,adicao){
	Var_Dia=Dia(data_DDMMYYYY);
	Var_Mes=Mes(data_DDMMYYYY);
	Var_Mes=Math.floor(Var_Mes)-1;
	Var_Ano=Ano(data_DDMMYYYY);
	
	var data = new Date(Var_Ano,Var_Mes,Var_Dia);
	if (adicao == true){
		operacao = '+'
		var diferenca = data.getTime() + (dias * 1000 * 60 * 60 * 24);
	}else{
		operacao = '-'
		var diferenca = data.getTime() - (dias * 1000 * 60 * 60 * 24);
	}
	var diferenca = new Date(diferenca);
	alert(string_data+operacao+dias+' dias = '+diferenca.getDate()+'/'+(parseInt(diferenca.getMonth())+1)+'/'+diferenca.getYear());
}

function totalDias(data1_DDMMYYYY,data2_DDMMYYYY){
	Var_Dia1=Dia(data1_DDMMYYYY);
	Var_Mes1=Mes(data1_DDMMYYYY);
	Var_Mes1=Math.floor(Var_Mes1)-1;
	Var_Ano1=Ano(data1_DDMMYYYY);
	var data1 = new Date(Var_Ano1,Var_Mes1,Var_Dia1);
	Var_Dia2=Dia(data2_DDMMYYYY);
	Var_Mes2=Mes(data2_DDMMYYYY);
	Var_Mes2=Math.floor(Var_Mes2)-1;
	Var_Ano2=Ano(data2_DDMMYYYY);
	var data2 = new Date(Var_Ano2,Var_Mes2,Var_Dia2);
	var diferenca = data1.getTime() - data2.getTime();
	var diferenca = Math.floor(diferenca / (1000 * 60 * 60 * 24));
	//alert('Diferença em dias entre '+data1_DDMMYYYY+' e '+data2_DDMMYYYY+' = '+diferenca*(-1));
	return diferenca*(-1);
}
// fim das funções que calculam a diferença entre as datas


function limiteValorNota(campo, valorMinimo, valorMaximo){
	var valorCampo = campo.value;
	if (StrToFloat(valorCampo) < StrToFloat(valorMinimo)){
		alert('O valor da nota não pode ser menor que ' + valorMinimo);
		campo.focus();
		return false;
	}
	if (StrToFloat(valorCampo) > StrToFloat(valorMaximo)){
		alert('O valor da nota não pode ser maior que ' + valorMaximo);
		campo.focus();
		return false;
	}
}


function formataPrioridadePlanilha(prefixo, objeto, mascara){
   /*
     Descrição:
         Formatação para qualquer mascara 
    Sintaxe: 
      
      formataPrioridadePlanilha (prefixo, objeto, mascara)
      prefixo -> caracter que desejar que seja incluído no começo, como um código
      objeto -> o campo que queira colocar a máscara
      mascara -> o formato da máscara, utiliza-se o caracter # (jogo da velha) para representar os números
      
    Exemplo:
      Código Planilha
      onblur="formataPrioridadePlanilha('P',this,'####')"
   
   */
	
	formatarCampo(objeto,mascara);
	
	if (objeto.value == null || objeto.value == ""){
		return;
	}
	
	if (objeto.value.indexOf("P") >= 0){
		objeto.value = objeto.value.substr(objeto.value.indexOf("P")+1,objeto.value.length);
	}

	if (objeto.value.length == mascara.length){
		objeto.value = objeto.value.substr(0,objeto.value.length-1);
	}
	var tamanho = mascara.length;
	var temp = "";
	var retorno = "";
	var	j = objeto.value.length;
	
	for (i = j; i < tamanho-1; i++){
		temp = temp + "0";
	}
	retorno = temp + "" + objeto.value;
		
	objeto.value = prefixo + retorno;
}


function apenasNumeros2(e){
	if (document.all){
		var tecla = event.keyCode;
	}else{
		var tecla = e.which;
	}
 
	if (tecla > 47 && tecla < 58){
		return true;
	}else{
		if (tecla != 8 && tecla != 9 && tecla != 0){
			if (document.all){
				event.keyCode = 0;
			}else{
				e.preventDefault();
			}
		}else{
			return true;
		}
	}
}


function formatador(p) {
	this.obj = typeof p.obj !="undefined" ? p.obj : null;
	this.variacao = typeof p.variacao !="undefined" ? p.variacao : null;
	this.monetario = typeof p.monetario !="undefined" ? p.monetario : null;
	this.valores = typeof p.valores !="undefined" ? p.valores : null;
	this.decimal = typeof p.decimal !="undefined" ? p.decimal : ",";
	this.ponto = typeof p.pont !="undefined" ? p.ponto : ".";
	
	if (!this.obj) return false;
	
	this.obj.formatador = this;
	
	this.getValorLimpo = function() {
	var limpo = "", valor = this.obj.value;

		for (var x=0; x<valor.length; x++) {
		atualChar = valor.substring(x,x+1);
		preChar = valor.substring(x-1,x);
		
			if (this.monetario) {
				if ( !(atualChar == 0 && !preChar) && atualChar >= 0 && atualChar <= 9 && atualChar !=" ") {
				limpo += atualChar;
				}
			}
			
			else {
				if ( atualChar >= 0 && atualChar <= 9 && atualChar !=" " || !(atualChar =="," && !preChar) && (atualChar == "," && limpo.indexOf(",") == -1)) {
				limpo += atualChar;
				}
			}
		}

	return limpo;
	}
	
	this.inverterValor = function(v) {
	// transforma o valor em array e utiliza a inversao nativa do browser
	return v.split("").reverse().join("");
	}
	
	this.buscarValor = function(o, v, i) {	
	    var h = o.length, l = -1, m;

	    while(h - l > 1)
	        if(o[m = h + l >> 1] < v) l = m;
	        else h = m;

    return o[h] != v ? i ? h : -1 : h;
	}
	
	this.inserirMarcacao = function(v) {
	var valor = "";
	
		for (var x=0; x<v.length; x++) {
		valor += v.substring(x,x+1);
			if (x == 1) { valor += this.decimal; }
			else if ( (x - 1) % 3 == 0) { valor+= this.ponto; }
		}

		return valor;
	}
	
	this.consertarValor = function(v) {
	var valor = v;
	
		if (isNaN(valor.substring(valor.length-1,valor.length))) {
			valor = valor.substring(0,valor.length-1);
		}
		
		if (this.monetario) {
		if (valor.length == 0) { valor = "00,0"; }	
		if (valor.length == 1) { valor += "0,0"; }	
		if (valor.length == 2) { valor += ",0"; }
		}
		
	return valor;
	}
	
	this.validarValor = function() {
		if (this.obj.value == "") return;

		var valor = this.obj.value;
		
			if (!this.monetario) {
				if (valor.indexOf(",") !=-1) {
					valor = valor.substring(0,valor.indexOf(",")+3);
				}
			}
		
		// remove todos os "." para nao interferir no float
		valor = valor.replace(/[.]/g,"");
		// transforma a marcacao decimal "," para "."
		valor = valor.replace(",",".");
		// transforma a string em float		
		valor = parseFloat(valor);	
			
		if (this.variacao) {
		variacao = eval(this.variacao);
		
			if (valor < variacao[0]) {
			alert("Valor inserido: " + valor + "\n" + "Mínimo exigido: " + variacao[0]);
//			this.obj.className = "selectValor";
			this.obj.value = "";
      this.obj.focus();
			}
			if (valor > variacao[1]) {
			alert("Valor inserido: " + valor + "\n" + "Máximo permitido: " + variacao[1]);
//			this.obj.className = "selectValor";
			this.obj.value = "";
      this.obj.focus();
			}
		}
		
		if (this.valores) {
		valores = eval(this.valores);
			if (this.buscarValor(valores,valor) == -1) {
			alert("Valores inserido: " + valor + "\n" + "Valores permitidos: " + valores.join(" ou "));
//			this.obj.className = "selectValor";
			this.obj.value = "";
      this.obj.focus();
			}
		}

		if (!this.monetario) {
			if (this.obj.value != "") {
			valor = valor + "";
			valor = valor.replace(".",",");
			this.obj.value = valor;
			}
		}
	}
	
	this.realizarFormatacao = function() {
	// captura o valor do input e retira qualquer formatação / letra
	valor = this.getValorLimpo();

		// inverte o valor para realizar a marcação
		valor = this.inverterValor(valor);

		if (this.monetario) {
		// executa a formatacao que insere os pontos flutuantes
		valor = this.inserirMarcacao(valor);
		// remove marcação no começo do valor
		valor = this.consertarValor(valor);
		}
	
		// retorna o valor formatado à ordem inicial e atribui o mesmo ao objeto
		this.obj.value = this.inverterValor(valor);
	}
	
	this.obj.onfocus = function() {
		//this.formatador.obj.className = "selectValor";
	}
	
	this.obj.onkeyup = function() {
		this.formatador.realizarFormatacao();
	}
	
	if (this.obj.onblur) this.oldBlur = this.obj.onblur;
	
	this.obj.onblur = function() {

		if (this.formatador.oldBlur) eval(this.formatador.oldBlur());
		
		this.formatador.validarValor();

		//if (this.formatador.obj.className != "selectValor") {
		//this.formatador.obj.className = "selectValor";
		//}
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

function abreAreaConhecimentoFormulario() {

    var url = contextoAplicacao+"/formularios/comitearea.do?metodo=consultaAreaConhecimentoForm";
 
    var winref = window.open(url, "formArea", 
    "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");

    if (!winref) {
    
        alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
        
    }
  
    winref.focus(); 
    
}

function maximoCaracterDeletaExcedentes(objeto, qtdMax){

  	var vMaximo = objeto.value.length;
    
    if (vMaximo > qtdMax){
    
        var textoInicial = objeto.value;
        var textoFinal  = textoInicial.substring(0, qtdMax-1);
        objeto.value = textoFinal;
        
        if (navigator.appName == "Netscape"){
        
            alert('Você não pode digitar mais que ' + qtdMax + ' caracteres  neste campo!');	
  			objeto.focus();
            return false;
            
        }else{
        
            alert('Você não pode digitar mais que ' + qtdMax + ' caracteres  neste campo!');	
  			objeto.focus();
  			event.returnValue = event.keyCode==8;
            
        }
        
    }

}

function limpaValorZero(campo){
    if (campo.value == '0,00' || campo.value == '0'){
        campo.value = '';
    }
}

function retirarZerosEsquerdaMoeda(string){
    var tam = string.length;
    if(string == ''){ 
        return;
    }	
    for (var i = 0; i < tam -1; i++) {
	if (string.substring(0,1) == '0' || string.substring(0,1) == '.'){
            string = string.substring(1, string.length);
	}else{
            break;
        }
    }
    if (string.substring(0,1) == ','){
	string = '0' + string;
    }
    return string;
}

function marcarDesmarcar(pimagem, campoVetorSelecao, caminhoApp){
    if (pimagem.title == 'Marcar Todos'){
        pimagem.title = 'Desmarcar Todos';
        pimagem.src = caminhoApp + '/images/checked.jpg';
        marcar(true, campoVetorSelecao);
    }else{
        pimagem.title = 'Marcar Todos';
        pimagem.src = caminhoApp + '/images/nchecked.jpg';
        marcar(false, campoVetorSelecao);
    }
}
function marcar(pboolean, campo) {
    if (campo != null) {
        for (i = 0; i < campo.length; i++) {              
            campo[i].checked = pboolean;
        }             
    }     
}  


var janelaAberta = null;
function abrirPopupCentralizado(url, nome, propriedades, largura, altura){
    posx = (screen.width/2)-(largura/2); 
    posy = (screen.height/2)-(altura/2); 
    medidas='width=' + largura + ' height=' + altura + ' top=' + posy + ' left=' + posx + ' ';
    var novaJanela = window.open(url,nome,propriedades +','+ medidas);
    if(janelaAberta == null){
	janelaAberta = novaJanela;
    }
    return novaJanela;
}

function formatarValorNumerico(parametro){
    var DecimalSeparator = Number("1.2").toLocaleString().substr(1,1);
    var AmountWithCommas = parametro.toLocaleString();
    var arParts = String(AmountWithCommas).split(DecimalSeparator);
    var intPart = arParts[0];
    var decPart = (arParts.length > 1 ? arParts[1] : '');
    decPart = (decPart + '00').substr(0,2);
    
    return intPart + DecimalSeparator + decPart;
}




