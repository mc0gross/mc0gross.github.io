if (parent.frames['cabecalho'] != null){
	var contextoAplicacao = parent.frames['cabecalho'].getContextPath();
}else{
	var contextoAplicacao = "/efomento";
}

function abreTemaInduzido(linhaFomento,seqChamada,versaoRegra) {    
   
   var url = contextoAplicacao+"/consultaTema.do?codigoLinhaFomento=" + linhaFomento + "&sequencia=" +seqChamada + "&versao=" + versaoRegra;

   var winref = window.open(url, "formTema", 
    "height=500,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");
  
   if (!winref) {
     alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
   }    
   winref.focus(); 
}

function abreAtividade(index) {    
   var url = contextoAplicacao+"/formularios/atividade.do?metodo=apresentar";

   if ((index != null && index != '') || index == '0') {
    url += "&index=" + index;
   }   
   
   var winref = window.open(url, "formAtividade", 
    "height=500,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");
  
   if (!winref) {
     alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
   }    
   winref.focus(); 
}

  function abreInstituicoesPart(campoParent,siglaPaisFiltro,index,flagParticipante) {
   var url = "instituicao.do?metodo=apresentar";

   if (campoParent != null && campoParent != '') {
    url += "&campoParent=" + campoParent;
   }
  
   if (siglaPaisFiltro != null && siglaPaisFiltro != '') {
    url += "&siglaPaisFiltro=" + siglaPaisFiltro;
   }

   if ((index != null && index != '') || index == '0') {
    url += "&index=" + index;
   }   

   if (flagParticipante != null && flagParticipante != '') {
    url += "&flagParticipante=" + flagParticipante;
   }   

   var winref = window.open(url, "formInstituicoes", 
    "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");
  
   if (!winref) {
     alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
   }
    
   winref.focus(); 
  }
  
    function abreInstituicoesContrapartida(campoParent,siglaPaisFiltro,index,contrapartida) {
           var url = "instituicao.do?metodo=apresentar";
        
           if (campoParent != null && campoParent != '') {
            url += "&campoParent=" + campoParent;
           }
          
           if (siglaPaisFiltro != null && siglaPaisFiltro != '') {
            url += "&siglaPaisFiltro=" + siglaPaisFiltro;
           }
        
           if ((index != null && index != '') || index == '0') {
            url += "&index=" + index;
           }   
        
           if (contrapartida != null && contrapartida != '') {
            url += "&contrapartida=" + contrapartida;
           }   
        
           var winref = window.open(url, "formInstituicoes", 
            "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");
          
           if (!winref) {
             alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
           }
            
           winref.focus(); 
    }

  function abreFonteFinanciamento(campoParent,siglaPaisFiltro,index,fonteFinanciamento) {
   var url = "instituicao.do?metodo=apresentar";

   if (campoParent != null && campoParent != '') {
    url += "&campoParent=" + campoParent;
   }
  
   if (siglaPaisFiltro != null && siglaPaisFiltro != '') {
    url += "&siglaPaisFiltro=" + siglaPaisFiltro;
   }

   if ((index != null && index != '') || index == '0') {
    url += "&index=" + index;
   }   
   
   if (fonteFinanciamento != null && fonteFinanciamento != '') {
    url += "&fonteFinanciamento=" + fonteFinanciamento;
   }      

   var winref = window.open(url, "formInstituicoes", 
    "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");
  
   if (!winref) {
     alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
   }
    
   winref.focus(); 
  }  

   /* function selecionaCurso(index) {
       var url = contextoAplicacao+"/formularios/visualizaCapes.do?metodo=apresentar";
       
       if ((index != null && index != '') || index == '0') {
          url += "&index=" + index;
       }  
    
       var winref = window.open(url, "formCursos", 
        "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");
      
       if (!winref) {
         alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
       }
        
       winref.focus(); 
      }
      
    function selecionaCurso(index, objRetorno) {
       var url = contextoAplicacao+"/formularios/visualizaCapes.do?metodo=apresentar";
       
       if ((index != null && index != '') || index == '0') {
          url += "&index=" + index;
       }  
       
       if (objRetorno != null && objRetorno != '') {
          url += "&objRetorno=" + objRetorno;
       }  
       
    
       var winref = window.open(url, "formCursos", 
        "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");
      
       if (!winref) {
         alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
       }
        
       winref.focus(); 
      }*/
      
  function montarUrl(url, arr, p) {
	var _url = url;
	for (var x=0; x<p.length; x++) {
		if (p[x] == null || p[x] == "") continue;
		_url += "&" + arr[x] + "=" + p[x];
	}
	return _url;
    }
    
    function abrirJanela(url, p) {
            var win = window.open(url, "Janela", p);
            if (win) win.focus();
            else alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
    }
    
    /*
    *Foi criada a essa function para facilitar a passagem de parâmetros
    *na necessidade de passar mais um parâmetro basta colocar o nome dele no arr ['index', 'objRetorno', 'idInstituicao'];
    *se necessitar usar somente o idInstituição deve-se chamar a function selecionaCurso(null,null,valor)
    */
    function selecionaCurso() { 
            var url = contextoAplicacao+"/formularios/visualizaCapes.do?metodo=apresentar";
            var arr = ['index', 'objRetorno', 'idInstituicao'];
            var _url = montarUrl(url, arr, arguments);
            var _p = "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes";
            abrirJanela(_url, _p);
    }

  function atualizaValoresBolsa() {
    var d = document;
    var valores = new Array();  
    var ind = 0;
    while (true) { 
      var qtde = 'qtdeBolsas' + ind;
      qtde = d.getElementById(qtde);
      var idDiv = 'divValorBolsa' + ind;
      var idVlrTotal = 'valorBolsa' + ind;
      var idVlrUnit = 'valorUnitario' + ind;

      if (qtde == null || qtde == "undefined") {
        break;
      }
      
      if ( qtde.value == "" ){
        valores[0] = "1";
      }else {
        valores[0] = qtde.value;
      }
      valores[1] = d.getElementById(idVlrUnit).value;    

      multiplicaValoresFormatados(valores,idVlrTotal,idDiv,''); 
      ind++;      
    }
    atualizaValorTotalBolsa();
  }  
  
  function atualizaValorTotalBolsa() {
    var valores = new Array();  
    var valoresDolar = new Array();  
    var ind = 0;
    var indReal = 0;
    var indDolar = 0;
    var individual = document.getElementById('bolsaIndividual');
    while (true) {
      var vlrTotal = document.getElementById('valorBolsa' + ind);

      if (vlrTotal == null || vlrTotal == "undefined") {
        break;
      }
      
      var ext = document.getElementById('exterior' + ind);        
      
      if (ext.value == "true" && individual.value != "true") {        
        valoresDolar[indDolar] = vlrTotal.value;  
        indDolar++;
      } else {
        valores[indReal] = vlrTotal.value;
        indReal++;
      }
      
      ind++;      
    }

    if (indDolar > 0) {
        var divDolar = document.getElementById('divRecDolar');
        
        if (divDolar != null) {  
            divDolar.style.display = "block";
            somaValoresFormatados(valoresDolar,null,'valorRecursoBolsaDolar',''); 
            
            var cotacao = document.getElementById('idCotacaoDolar').value;
            var divValorConvertido = document.getElementById('divRecursoBolsaConvetido');
            divValorConvertido.style.display = "block";
            var valorConsolidadoDolarReal = 0;
            
            var valorAcum = 0;
            for (i = 0; i < valores.length; i++) {
              var flo = StrToFloat(valores[i]);
              //essa formula garante que a precisão é sempre de 2 casas após a virgula
              flo = (Math.round(flo*100))/100;
              valorAcum += flo;
            }
            valorAcum = (Math.round(valorAcum*100))/100;
            
            var valorAcumDolar = 0;
            for (i = 0; i < valoresDolar.length; i++) {
              var flo = StrToFloat(valoresDolar[i]);
              //essa formula garante que a precisão é sempre de 2 casas após a virgula
              flo = (Math.round(flo*100))/100;
              valorAcumDolar += flo;
              
            }
            valorConsolidadoDolarReal = (valorAcumDolar * cotacao);
            valorConsolidadoDolarReal = ((Math.round(valorConsolidadoDolarReal*100))/100);
            valorConsolidadoDolarReal = valorConsolidadoDolarReal + valorAcum;
            valorConsolidadoDolarReal = FloatToStr(valorConsolidadoDolarReal);
            document.getElementById('valorRecursoBolsaConvertido').innerHTML = 'R$ ' + valorConsolidadoDolarReal;
            document.getElementById('idCotacaoUtilizada').innerHTML = 'Total - Bolsa em R$ (Cotação US$=' + cotacao+')';
            
        }
    } else {
    	 var divValorConvertido = document.getElementById('divRecursoBolsaConvetido');
    	 
    	 if (divValorConvertido != null) {
    		 divValorConvertido.style.display = "none";
    	 }
    }
    
    if (indReal > 0) {
        somaValoresFormatados(valores,null,'valorRecursoBolsa','');
    }
 
  }

function selecionaUfLocalizacao(index) {
    var municipio = document.getElementById("municipioLocalizacao" + index);
    var localidade = document.getElementById("localizacaoGeografica" + index);
    municipio.value = '';
    localidade.value = '';
}

function selecionaModalidade(index,valorCombo,individual,auxDesloc) {
  
  var f = document.forms[0];
  if ( !individual ) {    
    var imagem = document.getElementById('beneficio'+index);        
    if (valorCombo != '') {                    
      imagem.style.display = 'block';
    } else {          
      imagem.style.display = 'none';
    }
  }
}

function selecionaFuncao(indice) {
  //Limpar campos ao selecinar nacionalidade
  var f = document.forms[0];
  var nome = document.getElementById('nome' + indice);
  var cpf = document.getElementById('cpf' + indice);
  var nac = document.getElementById('nacionalidade' + indice);        
  var idCNPq = document.getElementById('idCNPq' + indice);        
  var codRH = document.getElementById('codRH' + indice);
  var pais = document.getElementById('pais' + indice);
  var dataNasc = document.getElementById('dataNascimento' + indice);
  var possuiCV = document.getElementById('possuiCVLattes' + indice);
  var cvLattes = document.getElementById('cvMembro' + indice);
  var codRHCript = document.getElementById('codRHCript' + indice);
  var precisaEdicao = document.getElementById('precisaEdicao' + indice);
  var membroExt = document.getElementById('membroExt' + indice);  
  
  nome.value = '';
  nac.selectedIndex = 0;
  cpf.value = '';
  idCNPq.value = '';
  codRH.value = '';
  pais.value = '';
  dataNasc.value = '';
  possuiCV.value = '';  
  codRHCript.value = '';
  precisaEdicao.value = '';
  cvLattes.style.display = 'none';
  membroExt.style.display = 'none';
}


function selecionaInstituicao(indice,valorCombo,nac) {
  //Limpar campos ao selecinar nacionalidade
  var f = document.forms[0];
  var imagem = document.getElementById('adicionaInst' + indice);

  if (valorCombo != '') {
    imagem.style.display = 'block';        
    
    var idInst = f.elements['instituicoes['+indice+'].idInst'].value;
    
    if (idInst == '') {
      abreInstituicoesPart('',nac,indice,'S');
    }
  } else {
    imagem.style.display = 'none';
  }
  
}

function selecionaInstituicaoContrapartida(indice,valorCombo,nac) {
  //Limpar campos ao selecinar nacionalidade
  var f = document.forms[0];
  var imagem = document.getElementById('adicionaInstContrapartida' + indice);

  if (valorCombo != '') {
    imagem.style.display = 'block';        
    
    var idInst = f.elements['recursoContrapartida['+indice+'].idInst'].value;
    
    if (idInst == '') {
      abreInstituicoesContrapartida('',nac,indice,'S');
    }
  } else {
    imagem.style.display = 'none';
  }
  
}

function atribuiValores() {        
  var f = document.forms[0];
  var indice = f.indexMembro.value;
  var nome = document.getElementById('nome' + indice);
  var nac = document.getElementById('nacionalidade' + indice);        
  var idCNPq = document.getElementById('idCNPq' + indice);        
  var codRH = document.getElementById('codRH' + indice);
  var pais = document.getElementById('pais' + indice);
  var dataNasc = document.getElementById('dataNascimento' + indice);
  var possuiCV = document.getElementById('possuiCVLattes' + indice);
  var cvLattes = document.getElementById('cvMembro' + indice);
  var codRHCript = document.getElementById('codRHCript' + indice);
  var precisaEdicao = document.getElementById('precisaEdicao' + indice);
  var membroExt = document.getElementById('membroExt' + indice);
  var funcaoPedeCV = document.getElementById('funcaoPedeCV' + indice);
  var curriculoEst = document.getElementById('curriculo'+indice); 
  var flagCurriculoEst = document.getElementById('flagCurriculo'+indice); 
  var idInstituicao = document.getElementById('idInstituicao'+indice); 
  var nomeInstituicao = document.getElementById('nomeInstituicao'+indice);
  

  if (f.cpfTemp.value != "") {
    
    if (f.funcaoPedeCVTemp != null) {
        funcaoPedeCV.value = f.funcaoPedeCVTemp.value;    
        if ( (f.funcaoPedeCVTemp.value == 'S' && f.possuiCVTemp.value != 'S') || 
             (f.funcaoPedeCVTemp.value == '' && f.possuiCVTemp.value == '' ) ) {
          alert('Função necessita que o membro de equipe possua Currículo Lattes cadastrado. \n' +
                'Solicite ao membro de equipe que cadastre seu Currículo Lattes por meio do opção' + 
                '"Atualize seu Currículo" na página inicial do CNPq: http://www.cnpq.br');
        }
    }
    
    if (f.nomeTemp.value != '' && f.nomeTemp.value != '_') {
      nome.value = f.nomeTemp.value;        
      idCNPq.value = f.idCNPQTemp.value;        
      codRH.value = f.codRHTemp.value;
      pais.value = f.paisTemp.value;
      dataNasc.value = f.dataNascimentoTemp.value; 
      
      if (f.codRHCriptTemp != null && codRHCript != null) {
        codRHCript.value = f.codRHCriptTemp.value; 
      }

      if (f.precisaEdicaoTemp != null && precisaEdicao != null) {      
        precisaEdicao.value = f.precisaEdicaoTemp.value; 
      }
      
      if (f.idInstituicaoTemp != null && idInstituicao != null) {      
        idInstituicao.value = f.idInstituicaoTemp.value; 
      }
      
      if (f.nomeInstituicaoTemp != null && nomeInstituicao != null) {      
        nomeInstituicao.value = f.nomeInstituicaoTemp.value; 
      }
      
      for (i = 0; i < nac.options.length; i++) {
        var valor = nac.options[i].value;
        if (valor == f.nacionalidadeTemp.value) {
          nac.options[i].selected = "selected";
          break;
        }
      }
      bloqueiaCamposMembros();      
    } else if (f.partPropVisivel.value == "false") {   
        buscaMembroExt(indice,f.cpfTemp.value,nac.value);
    }else if(f.nomeTemp.value == '_'){
        nome.value = '';
        dataNasc.value = '';
        idCNPq.value = '';
        codRH.value = '';
    }
    
    if (f.possuiCVTemp != null) {
        if (f.possuiCVTemp.value == 'S') {
          possuiCV.value = true;    
          
          if (cvLattes != null) {
              cvLattes.style.display = 'block';          
              flagCurriculoEst.value = false;
              curriculoEst.style.display = 'none';
          }
        } else {
          
          possuiCV.value = false;  
          
          if (cvLattes != null) {        
            cvLattes.style.display = 'none';
            flagCurriculoEst.value = true;
            curriculoEst.style.display = 'block';
          }
        }
    }
    
    if (precisaEdicao != null && membroExt != null) {
        if (precisaEdicao.value == 'N') {
          membroExt.style.display = 'none';
        } else {
          precisaEdicao.value = 'S';
          membroExt.style.display = 'block';
        }
    }
  } 
  mudaDivPart("true",'','',false);
  
  if(f.possuiCVTemp.value == 'N'  ){
	mudaDivEmail(indice,true);
  }else{
	mudaDivEmail(indice,false);
  }
  
  limparTemp();
}

function limparTemp() {
  var f = document.forms[0];
  f.cpfTemp.value = '';
  f.idCNPQTemp.value = '';
  f.codRHTemp.value = '';          
  f.nomeTemp.value = '';   
  f.dataNascimentoTemp.value = '';
  f.paisTemp.value = '';
  f.nacionalidadeTemp.value = '';
  
  if (f.codRHCriptTemp != null) {
    f.codRHCriptTemp.value = '';
  }
  
  if (f.precisaEdicaoTemp != null) {  
    f.precisaEdicaoTemp.value = '';
  }
  
  if (f.funcaoPedeCVTemp != null) {  
    f.funcaoPedeCVTemp.value = '';
  }
  
  if (f.possuiCVTemp != null) {    
    f.possuiCVTemp.value = '';  
  }
}

function apagaArquivosUpload(num){
	try {
   		document.frames['componenteUpload'+num].apagaArquivosComp(num);
	} catch (e) {}
    
}
function redimensionaDinamico(numAleatorio) {
    
    var frameID = 'componenteUpload'+numAleatorio;

      fr = document.getElementById(frameID);  
      
      if (!fr) { 
        fr = parent.document.getElementById(frameID); 
      }
      if (fr.contentDocument && fr.contentDocument.body.offsetHeight) { 
        fr.height = fr.contentDocument.body.offsetHeight + 20;  
      } else if (fr.Document && fr.Document.body.scrollHeight) { 
                fr.height = fr.Document.body.scrollHeight + 20;
      } 
    //document.frames[nomeFrame].redimensiona(nomeFrame,document);
}

function selecionaNacionalidade(index,valorCombo, nomeNumAleatorio) {
  //Limpar campos ao selecinar nacionalidade
  
  var f = document.forms[0];
  //descomentado por Ivan Mecenas em 01/06/2006
  //motivo: quando selecionada a nacionalidade Estrangeira e após a digitação das informações na popup
  //        mudar o valor para Brasileira, conservar os valores causa erro na validação do CPF
  f.elements['membrosEquipe['+index+'].cpf'].value = '';
  f.elements['membrosEquipe['+index+'].nome'].value = '';
  //f.elements['membrosEquipe['+index+'].funcao'].selectedIndex=0;
  f.elements['membrosEquipe['+index+'].dataNascimento'].value='';
  f.elements['membrosEquipe['+index+'].idCNPq'].value = '';
  f.elements['membrosEquipe['+index+'].codRH'].value = ''; 
  f.elements['membrosEquipe['+index+'].pais'].value = '';
  var precisaEdicao = document.getElementById('precisaEdicao' + index);
  var imagem = document.getElementById('membroExt'+index)        
  var curriculoEst = document.getElementById('curriculo'+index); 
  var flagCurriculoEst = document.getElementById('flagCurriculo'+index); 
  var idNumAleatorio = document.forms[0][nomeNumAleatorio].value;
  
  if (valorCombo == 'E'){   
    buscaMembroExt(index,f.elements['membrosEquipe['+index+'].cpf'].value,f.elements['membrosEquipe['+index+'].nacionalidade'].value);
    imagem.style.display = 'block';
    curriculoEst.style.display = 'block';
    flagCurriculoEst.value = true;
    redimensionaDinamico(idNumAleatorio);
  } else {
    imagem.style.display = 'none';
    curriculoEst.style.display = 'none';
    flagCurriculoEst.value = false;
    apagaArquivosUpload(idNumAleatorio);
    
  }
  
  precisaEdicao.value = 'S';
}

function validaCPF() {
  var f = document.forms[0];
  var nacionalidade = f.elements['membrosEquipe['+f.indexMembro.value+'].nacionalidade'].value;
  if (f.cpfTemp.value == null || f.cpfTemp.value == "") {
    if (nacionalidade != 'E' && nacionalidade != '') {
      //alert("Informe o cpf desejado");
      return false;
    }
  } else {
    if (!validacpf(f.cpfTemp.value)) {
      f.elements['membrosEquipe['+f.indexMembro.value+'].cpf'].value = '';
      return false;
    }
  }
  return true;
}

function validaCPFMembros(cpf) {
  
  var f = document.forms[0];
  var nacionalidade = f.elements['membrosEquipe['+f.indexMembro.value+'].nacionalidade'].value;
  var nome = f.elements['membrosEquipe['+f.indexMembro.value+'].nome'];
  var dataNascimento = f.elements['membrosEquipe['+f.indexMembro.value+'].dataNascimento'];
  var idCNPq = f.elements['membrosEquipe['+f.indexMembro.value+'].idCNPq'];
  var codRH = f.elements['membrosEquipe['+f.indexMembro.value+'].codRH'];
  
  if (f.cpfTemp.value == null || f.cpfTemp.value == "") {
    
    nome.value = '';
    dataNascimento.value = '';
    idCNPq.value = '';
    codRH.value = '';
  
    if (nacionalidade != 'E' && nacionalidade != '') {
      //alert("Informe o cpf desejado");
	  mudaDivEmail(f.indexMembro.value,false);
      return false;
    }
  } else {
    if (!validacpf(f.cpfTemp.value)) {
      f.elements['membrosEquipe['+f.indexMembro.value+'].cpf'].value = '';
      nome.value = '';
      dataNascimento.value = '';
      idCNPq.value = '';
      codRH.value = '';
	  mudaDivEmail(f.indexMembro.value,false);
      return false;
    }
  }
  
  if (document.getElementById("btEnviar") != null){
     document.getElementById("btEnviar").disabled = false;
  }
  if (document.getElementById("btSalvar") != null){
    document.getElementById("btSalvar").disabled = false;
  }
  
  return true;
}

function desabilitaBotaoConsulta(){
	desabilitarBotao('btSalvar');
	desabilitarBotao('btEnviar');
	desabilitarBotao('btExcluir');
	desabilitarBotao('btImprimir');
	desabilitarBotao('btVoltar');
}

function ajaxCPF(indice) {
  var f = document.forms[0];
  var cpf = document.getElementById('cpfTemp');
  var cpfInd = document.getElementById('cpf' + indice);         
  var funcao = document.getElementById('funcaoTemp');
  var funcaoInd = document.getElementById('funcao' + indice);
  
  f.indexMembro.value = indice;
  cpf.value = cpfInd.value;        
  funcao.value = funcaoInd.value;
  f.btCPF.click();
  document.getElementById("btSalvar").disabled = false;
  if (document.getElementById("btEnviar") != null){
     document.getElementById("btEnviar").disabled = false;
  }
  if (document.getElementById("btExcluir") != null){
    document.getElementById("btExcluir").disabled = false;
  }
  document.getElementById("btImprimir").disabled = false;  
  document.getElementById("btVoltar").disabled = false; 
}  

function adicionaMembro(valor, linha) {
  if (valor == true) {
    var f = document.forms[0];
    desbloqueiaTodosCampos();
    f.metodo.value = 'adicionaMembro';
    desabilitaEnvioArquivos();
    f.action = f.action + '#' + linha;
    f.submit();    
  }
}

function adicionaAtividade(indexAtividade, linha) {  
    var f = document.forms[0];
    f.indexAtividade.value = indexAtividade;
    desbloqueiaTodosCampos();
    f.metodo.value = 'adicionaAtividade';
    desabilitaEnvioArquivos();
    f.action = f.action + '#' + linha;
    f.submit();      
}

function submeteAtividade(indexAtividade, linha) {  
    var f = document.forms[0];
    f.indexAtividade.value = indexAtividade;
    desbloqueiaTodosCampos();
    f.metodo.value = 'abreAtividade';
    desabilitaEnvioArquivos();
    f.action = f.action + '#' + linha;
    f.submit();      
}

function adicionaInstituicao(valor,linha) {
  if (valor) {
    var f = document.forms[0];
    desbloqueiaTodosCampos();
    f.metodo.value = 'adicionaInstituicao';
    desabilitaEnvioArquivos();
    f.action = f.action + '#' + linha;
    f.submit();    
  }
}

function adicionaResultadoEsperado(valor,linha) {
  if (valor) {
    var f = document.forms[0];
    desbloqueiaTodosCampos();
    f.metodo.value = 'adicionaResultadoEsperado';
    desabilitaEnvioArquivos();
    f.action = f.action + '#' + linha;
    f.submit();    
  }
}

function adicionaRecursoContrapartida(valor,linha) {
  if (valor) {
    var f = document.forms[0];
    desbloqueiaTodosCampos();
    f.metodo.value = 'adicionaRecursoContrapartida';
    desabilitaEnvioArquivos();
    f.action = f.action + '#' + linha;
    f.submit();    
  }
}

function adicionaFonteFinanciamento(valor,linha) {
  if (valor) {
    var f = document.forms[0];
    desbloqueiaTodosCampos();
    f.metodo.value = 'adicionaFonteFinanciamento';
    desabilitaEnvioArquivos();
    f.action = f.action + '#' + linha;
    f.submit();    
  }
}

function adicionaLocalizacaoColeta(valor,linha) {
  if (valor) {
    var f = document.forms[0];
    desbloqueiaTodosCampos();
    f.metodo.value = 'adicionaLocalizacaoColeta';
    desabilitaEnvioArquivos();
    f.action = f.action + '#' + linha;
    f.submit();    
  }
}

function adicionaRecursoBolsa(valor) {          
  if (valor == true) {
    var f = document.forms[0];
    f.metodo.value = 'adicionaRecursoBolsa';
    desabilitaEnvioArquivos();
    f.submit();
  }
}

function excluiMembro(index) {    
  var f = document.forms[0];
  
  if(verificaMembroAtividade(index)) {
    return false;
  }
  
  desbloqueiaTodosCampos();
  f.metodo.value = 'excluiMembro';
  f.indexMembro.value = index;
  desabilitaEnvioArquivos();
  f.submit();  
}  


function verificaMembroAtividade(index) {
  var f = document.forms[0]; 
  var retorno = false;
  var atividades = "";
  
  for (i = 0; true ; i++) {
    var idResp = f.elements['atividades['+i+'].idResponsavel'];
    if (idResp != null) {
      if (idResp.value == index) {
        retorno = true;
        
        var nomeAtividade = f.elements['atividades['+i+'].nomeAtividade'];
        if (atividades == '') {            
            atividades += nomeAtividade.value;
        } else {
            atividades += ', ' + nomeAtividade.value;
        }
      }
    } else {
      break;
    }
  }
  
  if (retorno) {
    if (!confirm('Este membro de equipe é responsável pela(s) atividade(s): ' + atividades + 
        '\nSe removê-lo, a atividade também será removida. '+
        '\nDeseja continuar ?')) {
        return true;
    } else {
        return false;
    }
  } else {
    return false;
  }
}

function excluiAtividade(index, linha) {
  var f = document.forms[0];
  desbloqueiaTodosCampos();
  f.metodo.value = 'excluiAtividade';
  f.indexAtividade.value = index;
  desabilitaEnvioArquivos();
  f.action = f.action + '#' + linha;
  f.submit();  
} 

function excluiInstituicao(index,linha) {
  var f = document.forms[0];
  desbloqueiaTodosCampos();
  f.metodo.value = 'excluiInstituicao';
  f.indexMembro.value = index;
  desabilitaEnvioArquivos();
  f.action = f.action + '#' + linha;
  f.submit();  
}  

function excluiResultadoEsperado(index,linha) {
  var f = document.forms[0];
  desbloqueiaTodosCampos();
  f.metodo.value = 'excluiResultadoEsperado';
  f.indexResultadoEsperado.value = index;
  desabilitaEnvioArquivos();
  f.action = f.action + '#' + linha;
  f.submit();  
}  

function excluiRecursoContrapartida(index,linha) {
  var f = document.forms[0];
  desbloqueiaTodosCampos();
  f.metodo.value = 'excluiRecursoContrapartida';
  f.indexRecursoContrapartida.value = index;
  desabilitaEnvioArquivos();
  f.action = f.action + '#' + linha;
  f.submit();  
}  

function excluiFonteFinanciamento(index,linha) {
  var f = document.forms[0];
  desbloqueiaTodosCampos();
  f.metodo.value = 'excluiFonteFinanciamento';
  f.indexMembro.value = index;
  desabilitaEnvioArquivos();
  f.action = f.action + '#' + linha;
  f.submit();  
}  

function excluiLocalizacaoColeta(index,linha) {
  var f = document.forms[0];
  desbloqueiaTodosCampos();
  f.metodo.value = 'excluiLocalizacaoColeta';
  f.indexMembro.value = index;
  desabilitaEnvioArquivos();
  f.action = f.action + '#' + linha;
  f.submit();  
}  

function excluiRecursoBolsa(index) {
  var f = document.forms[0];
  f.metodo.value = 'excluiRecursoBolsa';
  f.indexMembro.value = index;
  desabilitaEnvioArquivos();
  f.submit();
} 

function buscaMembroExt(index, cpf, nacionalidade){
  var url = 'buscaMembro.do?metodo=apresentar&index='+index+'&cpf='+cpf+'&nacionalidade='+nacionalidade;
  abrirJanelaModal(url,'cadastraMembro',660,300);
  //window.open(url, "cadastraMembro", 
  //"height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");
}

function buscaBeneficio(index) {
    recBeneficio(index,false);
}


function recBeneficio(index, individual, auxDeslocamento, auxDeslocSelec){
  var idInst = document.getElementById('idInstituicao');  
  var idMod = document.getElementById('modalidadeBolsas'+index);
  
    var auxDeslocSelec = 'N';
    if (document.getElementById('auxDeslocSelecionado'+index) != null && document.getElementById('auxDeslocSelecionado'+index).value != '') {
        auxDeslocSelec = document.getElementById('auxDeslocSelecionado'+index).value;
    }
  
  var lf = document.getElementById('linhaFomento');  
  var seqCham = document.getElementById('seqChamada');   
  var pais = document.getElementById('paisInstituicao');    
  var valor = null;
  var texto = null;
  var url;
  
  if ( individual ){
    valor = document.getElementById('modalidade').value;
    texto = document.getElementById('nomeModalidade').value;
  } else {
    valor = idMod.options[idMod.selectedIndex].value;
    texto = idMod.options[idMod.selectedIndex].text;
  }
  
    if (valor != '') {
        url = contextoAplicacao +  '/formularios/beneficio.do?metodo=apresentar&index='+index+'&idModalidade='+valor+'&nomeModalidade='
                +texto+'&seqChamada='+seqCham.value+'&linhaFomento='+lf.value+'&pais='+pais.value+'&auxDeslocamento='+auxDeslocamento +'&deslocamento='+auxDeslocSelec;
        
        var winref = window.open(url, "beneficio", 
        "height=400,width=680,top=10,left=10,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");
        if (!winref) {
         alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
        }
        winref.focus();   
        return true;
   }
   
   return false;
}

function atualizaValorRecursoOCC() {
  var f = document.forms[0];  
  var valores = new Array();
  for (i = 0; true ; i++) {
    var col = f.elements['itensDispendio['+i+'].valorSolicitado'];
    if (col != null) {
      valores[i] = col.value;
    } else {
      break;
    }
  }
  somaValoresFormatados(valores,null,'valorRecursoOcc','R$ ');   
}

function atualizaValorRecursoCusteio() {
  var f = document.forms[0];  
  var valores = new Array();
  var x = 0;
  for (i = 0; true ; i++) {
	var col = f.elements['itensDispendio['+i+'].valorSolicitado'];
    var descricaoElemento = f.elements['itensDispendio['+i+'].descricaoElemento'];
    
    if (descricaoElemento != null) {
    	if (descricaoElemento.value == "custeio") {
    		valores[x++] = col.value;   		
    	}
	} else {
		break;
	}
  }
  somaValoresFormatados(valores,null,'valorRecursoCusteio','R$ ');
}

function atualizaValorRecursoCapital() {
  var f = document.forms[0];  
  var valores = new Array();
  var x = 0;
  for (i = 0; true ; i++) {
	var col = f.elements['itensDispendio['+i+'].valorSolicitado'];
    var descricaoElemento = f.elements['itensDispendio['+i+'].descricaoElemento'];
    
    if (descricaoElemento != null) {
    	if (descricaoElemento.value == "capital") {
    		valores[x++] = col.value;
    	}
	} else {
		break;
	}
  }
  somaValoresFormatados(valores,null,'valorRecursoCapital','R$ ');
}

function atualizaValorRecursoBolsa() {
  var f = document.forms[0];  
  var valores = new Array();
  for (i = 0; true ; i++) {
    var col = f.elements['bolsas['+i+'].valorBolsa'];
    if (col != null) {
      valores[i] = col.value;
    } else {
      break;
    }
  }
  somaValoresFormatados(valores,null,'valorRecursoBolsa','');   
}

function abrirCurriculoMembroIndex(index){
  var f = document.forms[0];
  var idProponente = f.elements['membrosEquipe['+index+'].codRHCript'];

  if (idProponente != null && idProponente.value != "") {
    url = "http://buscatextual.cnpq.br/buscatextual/visualizacv.jsp?id="+idProponente.value;
    var winref = window.open(url, "Currículo", "height=380,width=680,top=200,left=300,status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");    
  
    if (!winref) {
      alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
    }
      
    winref.focus(); 
  }
}

function bloqueiaCamposMembros(){
  /*
    Descrição:
      - função desabilitar todos os inputs de membros
    Requisitos:
      - nenhum
    Sintaxe:
      - nenhuma
    Exemplo:
      <body onload="bloqueiaCamposMembros()">
  */
  var f = document.forms[0];  
  for (i = 0; true ; i++) {
    var campoFuncao = f.elements['membrosEquipe['+i+'].funcao'];
    var campoCPF = f.elements['membrosEquipe['+i+'].cpf'];
    var campoNacionalidade = f.elements['membrosEquipe['+i+'].nacionalidade'];
    var campoPrecisaEdicao = f.elements['membrosEquipe['+i+'].precisaEdicao'];
    var numProtocolo = f.elements['membrosEquipe['+i+'].numProtocoloCurriculo'];         

    //Mostra o upload para os casos de nacionalidade Brasileiro
    if ( numProtocolo != null && numProtocolo != 'undefined' && numProtocolo.value != '') {
      document.getElementById('curriculo'+i).style.display = 'block';
    }
    
    if (campoCPF != null && campoFuncao != null && campoPrecisaEdicao != null) {
      if (campoFuncao.value == '' || campoPrecisaEdicao.value == 'N'){
        campoCPF.disabled = true;
        campoNacionalidade.disabled = true;
        campoCPF.styleId="campoDesabilitado";
        campoNacionalidade.styleId="campoDesabilitado";
      }
    } else {
      break;
    }
  }
}

function bloqueiaCamposMembrosPrint(){
  
  var f = document.forms[0];  
  for (i = 0; true ; i++) {
  
    var campoNacionalidade = f.elements['membrosEquipe['+i+'].nacionalidade'];   
    
    if (campoNacionalidade == null || campoNacionalidade == "undefined") {
      break;
    } 
        
    var valorNacionalidade = campoNacionalidade.options[campoNacionalidade.selectedIndex].value;
    var campoNome = f.elements['membrosEquipe['+i+'].nome'];
    var campoPais = f.elements['membrosEquipe['+i+'].pais'];   
    
    if (valorNacionalidade == 'E') {
      document.getElementById('divCurriculo'+i).style.display = 'block';
      campoNome.disabled = false;
      campoPais.disabled = false;
    } else {
      document.getElementById('divCurriculo'+i).style.display = 'none';
      campoNome.disabled = true;
      campoPais.disabled = true;
    }
  }
}

function bloqueiaCamposModalidade(){
  /*
    Descrição:
      - função desabilitar todos os inputs de membros
    Requisitos:
      - nenhum
    Sintaxe:
      - nenhuma
    Exemplo:
      <body onload="bloqueiaCamposModalidade()">
  */
  var f = document.forms[0];  
  for (i = 0; true ; i++) {
    var campoModalidade = f.elements['bolsas['+i+'].modalidade'];
    //var campoDuracao = f.elements['bolsas['+i+'].duracao'];
    var campoQuantidade = f.elements['bolsas['+i+'].qtdeBolsas'];
    if (campoQuantidade != null) {
      if (campoModalidade.selectedIndex == 0){
        //campoDuracao.disabled = true;
        campoQuantidade.disabled = true;
        campoQuantidade.styleId="campoDesabilitado";
      }
    } else {
      break;
    }
  }
}

function mudaDivPart(mantemVlrEst,indice, nomeNumAleatorio, cond) {
  
  var f = document.forms[0]; 
  var index = 0;   
  
    if (document.getElementById('divCurriculo'+indice) == null) {
        return false;
    }
  
      while (true) {
        
        if (indice.toString() != "") {
            index = indice;
        }
        
        var nac = f.elements['membrosEquipe['+index+'].nacionalidade'];   
        
        if (nac == null || nac == "undefined") {
          break;
        }      
      
        var valor = nac.options[nac.selectedIndex].value;
        var cpf = f.elements['membrosEquipe['+index+'].cpf'];
        var nome = f.elements['membrosEquipe['+index+'].nome'];  
        var dataNasc = f.elements['membrosEquipe['+index+'].dataNascimento'];   
        var pais = f.elements['membrosEquipe['+index+'].pais'];   
        var idCNPq = f.elements['membrosEquipe['+index+'].idCNPq'];   
        var codRH = f.elements['membrosEquipe['+index+'].codRH'];  
        var url = f.elements['membrosEquipe['+index+'].urlCurriculo'];         
        //var numProtocolo = f.elements['membrosEquipe['+index+'].numProtocoloCurriculo'];         
        
        
        //|| numProtocolo != ''
        if (valor == 'E' ) {
            document.getElementById('divCurriculo'+index).style.display = 'block';
            nome.disabled = false;
            dataNasc.disabled = false;  
            pais.disabled = false
        
            document.getElementById("btSalvar").disabled = false;  
            document.getElementById("btEnviar").disabled = false;     
            document.getElementById("btImprimir").disabled = false;  
            
            if(document.getElementById("btVoltar")){  
            	document.getElementById("btVoltar").disabled = false;
            }         
                    
            if (document.getElementById("btExcluir") != null){
                document.getElementById("btExcluir").disabled = false;
            }
                
        } else {            
            document.getElementById('divCurriculo'+index).style.display = 'none';
            nome.disabled = true;
            dataNasc.disabled = true;   
            pais.disabled = true;
            
            if(cond){
                var idNumAleatorio = document.forms[0][nomeNumAleatorio].value;
                apagaArquivosUpload(idNumAleatorio);
            }
        }
        
        if (mantemVlrEst == "") {
            //Limpar campos
            nome.value = '';
            dataNasc.value = '';
            pais.selectedIndex = 0;
            cpf.value = '';
            idCNPq.value = '';
            codRH.value = '';  
            url.value = '';
        }        
        
        if (indice.toString() != "") {
            break;
        }
        index++;
  }   
}

function ajustaTextArea() {
    var nCol = 60;
    if (document.all) {
        nCol = 65;
    }
    
    var descLinhaTem = document.getElementById("descLinhaTematica");
    if (descLinhaTem != null) {
        descLinhaTem.cols = nCol;
    }
    
    var descSetor = document.getElementById("descSetorAtividade");
    if (descSetor != null) {
        descSetor.cols = nCol;
    }
    
    var descArea = document.getElementById("descAreaConhecimento");
    if (descArea != null) {
        descArea.cols = nCol;
    }    
}

function selRecursoBolsa(campo,index,ultimo,individual,auxDesloc) {
    var buscou;
    var auxDeslocSelec = 'N';
    if (document.getElementById('auxDeslocSelecionado'+index) != null && document.getElementById('auxDeslocSelecionado'+index).value != '') {
        auxDeslocSelec = document.getElementById('auxDeslocSelecionado'+index).value;
    }
    
    buscou = recBeneficio(index, individual, auxDesloc, auxDeslocSelec);    
    
    if (buscou) {
        selecionaModalidade(index,campo.value,individual,auxDesloc);
        
        if (!individual) {
            adicionaRecursoBolsa(ultimo);
        }
        
        desabilitarHabilitarCampo(campo,'qtdeBolsas'+index);   
    }
}

function enviar(){
  if (verificaExtensaoArquivos() == false){
    alert("As extensões dos arquivos em anexo podem ser .DOC, .RTF, .PS, ou .PDF.\nFoi encontrado em um ou mais anexos com a extensão inválida. Favor verificar!");
    return;
  }
  var f = document.forms[0];
  
  f.metodo.value = "enviar";
  f.encoding  ="multipart/form-data";
  marcaSelect(f.idInstituicao);  
  mostraImagemCarregando();   
  desbloqueiaTodosCampos();  
  
  var ac = f.action;
  var valor = ac.lastIndexOf('?');
  if (valor == -1) {
     f.action = ac +"?metodo="+f.metodo.value;
  }
  
  f.submit();
  
  desabilitarBotao('btSalvar');
  desabilitarBotao('btEnviar');
  desabilitarBotao('btImprimir');
  desabilitarBotao('btVoltar');
  desabilitarBotao('btExcluir');
  
} 


 function bloqueiaTodosCampos(){
   var formulario = document.forms[0];
   var campo = "";
   var tipos = ["input","textarea","select"];
   var objeto = "";
   
   for (var i = 0; i < tipos.length; i++){
    campo = document.getElementsByTagName(tipos[i]);
    for (var j = 0; j < campo.length; j++){
     objeto = formulario.elements[campo[j].id];
     if (objeto != null && objeto.type != "button" && objeto.type != "file" && objeto.type != "hidden") {
      objeto.disabled = true;
     }
    }
   }
  }
  
  function desbloqueiaTodosCampos(){
   var formulario = document.forms[0];
   var campo = "";
   var tipos = ["input","textarea","select"];
   var objeto = "";
   
   for (var i = 0; i < tipos.length; i++){
    campo = document.getElementsByTagName(tipos[i]);
    for (var j = 0; j < campo.length; j++){
     objeto = formulario.elements[campo[j].id];
     
     if (objeto != null && objeto.type != "button" && objeto.type != "file" && objeto.type != "hidden") {
        objeto.disabled = false;
     }
    }
   }
  }
  
  function selecionaCheckBox(idCampo) {
    var campo = document.getElementById(idCampo);
    
    if (campo != null) {
        campo.checked = true;
    }
  }
        
 //Tela de beneficios
 function selecionaAuxilio() {
    var f = document.forms[0]; 
    
    var divPassagemLeitura = document.getElementById("valorPassagemLeitura");
    var divPassagem = document.getElementById("valorPassagem");
    var divAuxilioLeitura = document.getElementById("valorAuxilioLeitura");
    var divAuxilio = document.getElementById("valorAuxilio");    
    
    var qtde = null;
    var tipoBeneficio = null;
    //Recuperar quantidade de mensalidade
    for (ind = 0; ind < f.contador.value; ind++) { 
      var idCampo = 'valorSolicitado' + ind;
      var idDiv = 'valorTotal' + ind;
      
      qtde = document.getElementById('qtdeBeneficio' + ind);
      tipoBeneficio = document.getElementById('tipoBeneficio' + ind);
      
      if (tipoBeneficio.value == 1) {
        break;
      }
    }
    
    if (divPassagem != null) {    
        var idxValorPasagem = f.idxPassagem.value;
        var campoPassagem =  document.getElementById("valorUnitario" + idxValorPasagem);
        
        if (f.deslocamento[0].checked) {
        
            divPassagem.style.display = 'block';
            divPassagemLeitura.style.display = 'none'; 
            campoPassagem.readOnly = false;            
            
            
            if (divAuxilio != null) {
                
                /* Para PV e PVe, tem uma peculiaridade onde a taxa de auxilio só estará disponível
                   se houver deslocamento acima de 350km e quantidade de mensalidade acima de 6 */
                if ((f.seqChamada.value == '21' || f.seqChamada.value == '2') 
                    && f.linhaFomento.value == '58') { 
                    
                    if (qtde.value > 6) {
                        var idxValorAuxilio = f.idxAuxilio.value;
                        var campoAuxilio = document.getElementById("valorUnitario" + idxValorAuxilio);
                        var idxDuracao = f.idxDuracao.value;
                        var campoDuracao = document.getElementById("valorUnitario" + idxDuracao);
                        campoAuxilio.value = campoDuracao.value;      
                        divAuxilio.innerHTML = '<strong>'+campoDuracao.value + '</strong>'; 
                        divAuxilio.style.display = 'block';
                        divAuxilioLeitura.style.display = 'none'; 
                    } else {
                        var idxValorAuxilio = f.idxAuxilio.value;
                        var campoAuxilio = document.getElementById("valorUnitario" + idxValorAuxilio);
                        campoAuxilio.value = '0,00';                
                        divAuxilio.style.display = 'none';
                        divAuxilioLeitura.style.display = 'block'; 
                    }
                    
                } else {
                    /* Comportamento padrão para taxa de auxílio com deslocamento 350 km */
                    var idxValorAuxilio = f.idxAuxilio.value;
                    var campoAuxilio = document.getElementById("valorUnitario" + idxValorAuxilio);
                    var idxDuracao = f.idxDuracao.value;
                    var campoDuracao = document.getElementById("valorUnitario" + idxDuracao);
                    campoAuxilio.value = campoDuracao.value;      
                    divAuxilio.innerHTML = '<strong>'+campoDuracao.value + '</strong>'; 
                    divAuxilio.style.display = 'block';
                    divAuxilioLeitura.style.display = 'none'; 
                }
                
                
            }            
        } else {
            divPassagem.style.display = 'none';
            divPassagemLeitura.style.display = 'block';
            campoPassagem.readOnly = true;
            
            if (divAuxilio != null) {
                var idxValorAuxilio = f.idxAuxilio.value;
                var campoAuxilio = document.getElementById("valorUnitario" + idxValorAuxilio);
                campoAuxilio.value = '0,00';                
                divAuxilio.style.display = 'none';
                divAuxilioLeitura.style.display = 'block'; 
            }            
        }
    }
 }
        
 // Tela de benefícios   
 function atualizaValoresBen() {
    var f = document.forms[0]; 
    var d = document;
    var valores = new Array();  
        
    var idxDuracao = f.idxDuracao;
    var mesesDuracao = 1;
    
    for (var ind = 0; ind < f.contador.value; ind++) { 
      var idCampo = 'valorSolicitado' + ind;
      var idDiv = 'valorTotal' + ind;
      
      var qtde = d.getElementById('qtdeBeneficio' + ind);
      var tipoBeneficio = d.getElementById('tipoBeneficio' + ind);
      var flagAuxilio =  ((f.idxAuxilio != null) && (f.idxAuxilio.value == ind && !f.deslocamento[0].checked));
      var flagPassagem = ((f.idxPassagem != null) && (f.idxPassagem.value == ind && !f.deslocamento[0].checked));
      
      // Pego os meses de duração da mensalidade, caso exista o tipo Mensalidade
      if(tipoBeneficio.value == 1) {
        mesesDuracao = qtde.value;
      }
      
      if (!flagAuxilio && !flagPassagem) {
          if (qtde == null || qtde == "undefined") {
            valores[0] = "1";
          } else {
            valores[0] = qtde.value;
          }
          
          var idxTaxaBancada = f.idxTaxaBancada;
          if (idxTaxaBancada != null && idxDuracao != null && idxTaxaBancada.value == ind) {
              var qtdeTaxaBancada = document.getElementById('qtdeBeneficio'+idxTaxaBancada.value);
              var qtdeMensalidade = document.getElementById('qtdeBeneficio'+idxDuracao.value);
            
              qtdeTaxaBancada.value = qtdeMensalidade.value;
              valores[0] = qtdeTaxaBancada.value;
           }
        
         if(tipoBeneficio.value == 9 || tipoBeneficio.value == 8) {
           valores[0] = mesesDuracao;
         }
          
         if (d.getElementById(idDiv) == null || d.getElementById(idDiv) == "undefined") {
            idDiv = null;
         }

         if((mesesDuracao == '' || mesesDuracao == 0 )){
        	 mesesDuracao = 1;
         }
         
         if(tipoBeneficio.value == 16 && (mesesDuracao != '' && mesesDuracao > 0 ) && ind == 2 && d.getElementById('valorUnitario' + ind).value != ''){
        	 var anos = 1;
        	 if(mesesDuracao >= 1){
        		 anos = mesesDuracao/12;        		 
        	 }
        	 var valTemp = d.getElementById('valorUnitario' + ind).value;
        	 var aux = StrToFloat(valTemp);
        	 aux *= anos;
        	 valores[1] = aux.toFixed(2);
        	 
        	 calculaTotalTaxaBancada(valTemp, anos);
        	 
         } else {
        	 if(tipoBeneficio.value == 5 && (ind == 3 || ind == 4) && (mesesDuracao != '' && mesesDuracao > 0 ) && d.getElementById('valorUnitario' + ind).value != ''){
        		 var anos2 = 1;
        		 if(mesesDuracao >= 1){
        			 anos2 = mesesDuracao/12;
            	 }
            	 var valTemp2 = d.getElementById('valorUnitario' + ind).value;
            	 var aux2 = StrToFloat(valTemp2);
            	 aux2 *= anos2;
            	 valores[1] = aux2.toFixed(2);
        	 } else {        		 
        		 valores[1] = d.getElementById('valorUnitario' + ind).value;
        	 }
         }
         
         multiplicaValoresFormatados(valores,idCampo,idDiv,'');     
      }
      
    }
    calculaTotalTaxaEscolarMeses();
    atualizaSeguroSaude();
    atualizaValorTotalBen();
  }
  
  function atualizaSeguroSaude() {
    var divDesc = document.getElementById('divExibeDescricao');
    // Recupera a duração
    var duracao = recuperaDuracaoBen('divApoio');
            
    if (duracao != "" && divDesc != null) {
        var campoSegSaude = divDesc.getElementsByTagName("input");
        
        if (campoSegSaude != null && campoSegSaude.length > 0) {
            var vlrSeg = campoSegSaude[0];
            // Cria o array com os valores
            var valores = new Array(); 
            valores[0] = duracao;
            valores[1] = vlrSeg.value;                
            
            // Recupera o índice do campo valorSolicitado com base no índice bo vlrUnitário
            var indice = vlrSeg.id.substring(vlrSeg.id.length - 1);  
            var idCampo = 'valorSolicitado' + indice;   
            // Atribui a mesma quantidade
            document.getElementById('qtdeBeneficio' + indice).value = duracao;                        
            
            // multiplica e obtêm o valor
            multiplicaValoresFormatados(valores,idCampo,'divValorTotalDesc',''); 
        } 
    }
  }
  // Tela de benefícios
  function atualizaValorTotalBen() {
    var f = document.forms[0];  
    var valores = new Array();    
    for (ind = 0; ind < f.contador.value; ind++) {  
    
            // alert(f.idxAuxilio);
                
             var flagAuxilio =  ((f.idxAuxilio != null) && (f.idxAuxilio.value == ind && !f.deslocamento[0].checked));
             var flagPassagem = f.idxPassagem != null && f.idxPassagem.value == ind && !f.deslocamento[0].checked;
             
             //alert(!flagAuxilio && !flagPassagem);
             
             if (!flagAuxilio && !flagPassagem) {    
                valores[ind] = document.getElementById('valorSolicitado' + ind).value;                
             } else {
                valores[ind] = '0,00';
             }             
    }

    somaValoresFormatados(valores,'valorTotal','valorTotalGeral','');   
  } 
  
  // Tela de benefícios
  function validaSelectBen() {
    var index = 0;
    var f = document.forms[0];    
    while (true){          
        var tipoBen = f.elements['beneficio['+index+'].tipoBeneficio'];  
        var qtde = f.elements['beneficio['+index+'].qtdeBeneficio'];
        var nomeBen = f.elements['beneficio['+index+'].nomeBeneficio'];  
        index++;
        
        if (tipoBen == null || tipoBen == "undefined") {
          break;
        }          
        if (qtde == null || qtde == "undefined") {
            continue;
        }
        
        if (qtde.value == "") {
            alert("Informe a dura��o do(a): " + nomeBen.value);
            return false;
        }
    }
    
    return true;
  }
  // Tela de beneficios
  function multiplicaValorMoedaEstrangeiraBen() {
    var f = document.forms[0];  
    var d = document;    
    var vlrMoedaEst = 1;//f.valorMoedaEst.value;
    
    if (vlrMoedaEst != "" && vlrMoedaEst > 0) {
        var valorAcum = 1;    
        valorAcum *= StrToFloat(d.getElementById('valorTotalGeral').innerHTML);
        valorAcum *= vlrMoedaEst;
        
        return FloatToStr(valorAcum);
    }
    
    return d.getElementById('valorTotalGeral').innerHTML;
  }  

  function selecionaBen(duracaoVisivel) {
    if (!validaSelectBen()) {
        return false;
    }
    var f = document.forms[0];
    var w = opener.document;
    var d = document;
    var ind = f.index.value;
    var vlrUnit = w.getElementById('valorUnitario' + ind);
    var divVlrUnit = w.getElementById('divValorUnitario' + ind);
    var divDur = w.getElementById('divDuracao' + ind);
    var duracaoOpener = w.getElementById('duracao' + ind);
    var quantidadeMaximaOpener = w.getElementById('quantidadeMaxima' + ind);
    var quantidadeMinimaOpener = w.getElementById('quantidadeMinima' + ind);
    if(!(quantidadeMaximaOpener == null || quantidadeMinimaOpener == null)){
    	quantidadeMaximaOpener.value = document.getElementById('quantidadeMaxima').value;
        quantidadeMinimaOpener.value = document.getElementById('quantidadeMinima').value;
    }
    
    var duracaoOpenerInd = w.getElementById('duracao');
    
    var auxDeslocSelecionado = w.getElementById('auxDeslocSelecionado' + ind);
    var auxDeslocamento = '';
    
    if (f.deslocamento != null) {
        if (f.deslocamento[0].checked) {
            auxDeslocamento = 'S';
        } else if (f.deslocamento != null && f.deslocamento[1].checked) {
            auxDeslocamento = 'N';
        }        
        auxDeslocSelecionado.value = auxDeslocamento;
    }
    
    var unidadeOpener = w.getElementById('unidade' + ind);
    var unidadeDiaria = d.getElementById('uniddivDiaria');
    var unidadeApoio = d.getElementById('uniddivApoio');
    
    if (unidadeDiaria != null) {
        unidadeOpener.value = unidadeDiaria.innerHTML;
    } else if (unidadeApoio != null) {
        unidadeOpener.value = unidadeApoio.innerHTML;
    }
    
    var idxMensalidade = f.idxDuracao;
    if (idxMensalidade != null) {
        var qtdeMensalidade = d.getElementById('qtdeBeneficio' + idxMensalidade.value);
        var qtdeMensOpener = w.getElementById('qtdeMensalidade' + ind);
        if(qtdeMensOpener!=null){
            qtdeMensOpener.value = qtdeMensalidade.value;
        }
    }
    
    // Indica se é bolsa no exterior
    var extOpener = w.getElementById('exterior' + ind);
    var ext = d.getElementById('exterior');    
    extOpener.value = ext.value;
    
    // Associa o símbolo da moeda
    var moeda = d.getElementById('moedaBen');
    var moedaUnit = w.getElementById('moedaUnit' + ind);
    var moedaTot = w.getElementById('moedaTotal' + ind);    
    var moedaIndividual = w.getElementById('moeda' + ind);    
    
    if (moedaUnit != null && moedaTot != null) {
       moedaUnit.innerHTML = moeda.innerHTML;
       moedaTot.innerHTML = moeda.innerHTML;     
       moedaIndividual.value = moeda.innerHTML;   
    }
    
    var dur = recuperaDuracaoBen();
    vlrUnit.value = multiplicaValorMoedaEstrangeiraBen();
    
    //Multiplica pelo valor da moeda estrangeira,caso exista     
    var individual = w.getElementById("bolsaIndividual");
    if ( individual ) {
        var vlrTotGeral = d.getElementById("valorTotalGeral");
        var vlrRecBolsa = w.getElementById("valorRecursoBolsa");    
        vlrRecBolsa.innerHTML = vlrTotGeral.innerHTML;
    }
    
    if ( divVlrUnit != null ) {
      divVlrUnit.innerHTML = vlrUnit.value;    
    }
    
    // Monta o texto da duração
    divDur.innerHTML = dur + recuperaUnidadeDur();
    duracaoOpener.value = dur;                   
    
    //Somente se a duração não estiver visivel    
    if (!duracaoVisivel && duracaoOpenerInd != null) {        
        duracaoOpenerInd.value = parseInt(dur);   
    }
    
    opener.atualizaValoresBolsa();
    f.metodo.value = "selecionar";          
    f.submit();   
  }  
  
  
  function selecionaBenPlanilha() {
    if (!validaSelectBen()) {
        return false;
    }
    var f = document.forms[0];
    var w = opener.document;
    var d = document;
    
	var vlrUnit = w.getElementById('valorUnitario');
    var vlrTotal = w.getElementById('valorTotal');
    var valorTotalOrcamentarioBolsa = w.getElementById('valorTotalOrcamentarioBolsa');
    var duracao = w.getElementById('duracao');
	var idxDuracao = f.idxDuracao.value;
	var vlrUnitarioDuracao = f.elements['beneficio['+idxDuracao+'].valorUnitario'].value;
	
	if (vlrUnit == null || vlrUnit == "undefined") {
		var index = f.index.value;
		duracao = w.forms[0].elements['listaBeneficios['+index+'].duracao'];
		vlrUnit = w.forms[0].elements['listaBeneficios['+index+'].valorMensalidade'];
		duracao.value = recuperaDuracaoBen();
		vlrUnit.value = vlrUnitarioDuracao;
		opener.totalizador();
		
	}else{
		
		//Multiplica pelo valor da moeda estrangeira,caso exista     
		var vlrTotGeral = d.getElementById("valorTotalGeral");
		
		duracao.value = recuperaDuracaoBen();
		vlrUnit.value = vlrUnitarioDuracao;
                
                if ( vlrTotGeral && vlrTotal ) vlrTotal.value = vlrTotGeral.innerHTML;
		if ( vlrTotGeral && valorTotalOrcamentarioBolsa ) valorTotalOrcamentarioBolsa.value = vlrTotGeral.innerHTML;
		
	}

    f.metodo.value = "selecionar";          
    f.submit(); 
  }  
  
  function recuperaDuracaoBen() {
    var divDur = document.getElementById('divDiaria');
    
    if (divDur == null) {
        divDur = document.getElementById('divApoio');   
    }
    
    if (divDur != null) {
        var selMens = divDur.getElementsByTagName("select");
        
        if (selMens != null && selMens.length > 0) {
            return selMens[0].value;
        }
    }
    
    return "";
  }
  
  function recuperaUnidadeDur() {
    var divDur = document.getElementById('divDiaria');
    
    if (divDur == null) {
        divDur = document.getElementById('divApoio');   
    }
    
    if (divDur != null) {
        return " " + document.getElementById('unid' + divDur.id).innerHTML;
    }
    
    return "";  
  }
  
  function salvar(){
      var f = document.forms[0];
      marcaSelect(f.idInstituicao);
      f.metodo.value = "salvar";
      
      if (!validaCampos()) {
        return false;
      }   
      
      var nArq = arquivoPreenchido();
      if (nArq > 0) {
          var msgNArq = "o arquivo ";
          
          if (nArq > 1) {           
            msgNArq = "os arquivos ";
          }
          var msg = "Atenção! Esta solicitação só será aceita quando enviada ao CNPq em " +
                    "definitivo (clicando no botão Enviar para o CNPq).\n\n" +                
                    "Por restrições de segurança do navegador, no momento do envio do formulário " +
                    "em definitivo ao CNPq, será necessário selecionar novamente " +
                    msgNArq + "contendo as informações solicitadas no Edital.";
          alert(msg);
      }
      desbloqueiaTodosCampos();     
      mostraImagemCarregando();
      var ac = f.action;
      var valor = ac.lastIndexOf('?');
      if (valor == -1) {
         f.action = ac +"?metodo="+f.metodo.value;
      }
      desabilitaEnvioArquivos();      
      f.submit();
      desabilitarBotao('btSalvar');
      desabilitarBotao('btEnviar');
      desabilitarBotao('btImprimir');
      desabilitarBotao('btVoltar');
      desabilitarBotao('btExcluir');
  }
  
  function excluir(){
      
      if(confirm("Deseja realmente excluir essa solicitação?")){
          var f = document.forms[0];
          f.metodo.value = "excluir";
          marcaSelect(f.idInstituicao);
          f.action = contextoAplicacao+"/caixadeentrada/caixaSolicitante.do?metodo=cancelarSolicitacao&idObj="+f.numeroSolicitacao.value;
          desabilitaEnvioArquivos();      
    
          //Validar com pergunta de certeza para apagar o ou não      
          
          desbloqueiaTodosCampos();     
          mostraImagemCarregando();
          f.submit();
          
          desabilitarBotao('btSalvar');
          desabilitarBotao('btEnviar');
          desabilitarBotao('btImprimir');
          desabilitarBotao('btVoltar');
          desabilitarBotao('btExcluir');
          
      }
  }  
  
  function imprimir(){

      /*
      var f = document.forms[0];
      f.metodo.value = "imprimir";
      desbloqueiaTodosCampos();
      desabilitaEnvioArquivos();
      f.submit();
      
      comentado por Ivan Mecenas em 30/05/2006
      */
      
      var elemento = document.getElementById('impressaoPortlet');
      if (elemento != null && elemento != ''){
        elemento.style.display='block';
      }

      if (window.print){
        window.print();
      }else{
        alert("Selecione no menu do seu browser Arquivo (File) - Imprimir (Print) para imprimir esta página.");
      }
      
      alert("Clique em Ok para voltar ao formulário.");
      if (elemento != null && elemento != ''){
        elemento.style.display='none';
      }
}   
 
 function arquivoPreenchido() {
      var f = document.forms[0];
      var cont = 0;
      if (f.arq != null && f.arq.value != "") { 
        cont++;
      }
      
      if (f.arqTrabalhoApresentado != null && f.arqTrabalhoApresentado.value != "") { 
        cont++;
      }
      
      if (f.arqPlanoTrabalho != null && f.arqPlanoTrabalho.value != "") { 
        cont++;
      }      
      
      if (f.arqCurriculo != null && f.arqCurriculo.value != "") { 
        cont++;
      }      
      
      return cont;
  }
  
  function desabilitaEnvioArquivos() {
    var f = document.forms[0];
    var met = f.metodo.value;
    if (met == "enviar") {
        return;
    }
    
    var camposFile = document.getElementsByTagName("input");
    var objeto = null;
    
    for (var i = 0; i < camposFile.length; i++){
     objeto = camposFile[i];
     if (objeto.type == "file") {
      objeto.disabled = true;
     }    
    }
  }
  
  
function verificaExtensaoArquivos() {
  var f = document.forms[0];
  var met = f.metodo.value;
  var camposFile = document.getElementsByTagName("input");
  var objeto = null;
  var valor = 0;
  var valido = false;
  var extensao = "";
  
  for (var i = 0; i < camposFile.length; i++){
    objeto = camposFile[i];
    
    if (objeto.type == "file") {
      if (objeto.value != null && objeto.value != ''){
        valor = objeto.value.lastIndexOf('.');
        if (valor != -1) {
          extensao = objeto.value.substr(valor);
          extensao = extensao.toLowerCase();
          if (extensao == ".doc" || extensao == ".ps" || extensao == ".rtf" || extensao == ".pdf"){
            valido = true;
          }else{
            return false;
            break;
          }
        }
      }else{
        valido = true;
      }
    }
  }
  return valido;
}
var janela;
function abrirJanela(url) {
  if(janela != null){ 
    janela.close(); 
  }
  janela = open(url,"winLOV", "height=450,width=700,top=250,left=250,status=yes,toolbar=no,menubar=no,location=no,scrollbars=1");
  if (janela.opener == null) {
    janela.opener = self;
  }
}

function mudaDivEmail(indice, cond) {
  
  var f = document.forms[0]; 
  var index = 0;   
  
    if (document.getElementById('divEmail'+indice) == null) {
        return false;
    }
	
	if (indice.toString() != "") {
		index = indice;
	}
	
	if(cond){
		document.getElementById('divEmail'+index).style.display = 'block';
	}else{
		document.getElementById('divEmail'+index).style.display = 'none';
	}
     
}


function limpaArea() {
    var f = document.forms[0];
    var idArea = f.idAreaConhecimento.value; 
    var descArea = f.descAreaConhecimento.value; 
    
    if (descArea != '' && idArea == 'null') {
        f.descAreaConhecimento.value = '';
    }
}

function habilitaDivSigilo(valor) {
    var div = document.getElementById("textoEspecificacaoSigilo");
    if (valor == "S") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

function atualizaRepresentante() {
    var f = document.forms[0];
    var nomeRep = document.getElementById("nomeRep");
    var sitInstRep = document.getElementById("sitInstRep");
    var iconeCurriculo = document.getElementById("iconeCurriculoRepresentante");
    
    nomeRep.innerHTML = f.nomeRepresentanteLegal.value;
    sitInstRep.innerHTML = f.descricaoSituacaoInstRepresentanteLegal.value;        
    
    if (f.nomeRepresentanteLegal.value == ' ' || f.nomeRepresentanteLegal.value == '') {
        iconeCurriculo.style.display = 'none';
    } else {
        iconeCurriculo.style.display = 'block';
    }
}

function abrirCurriculoRepresentante(){
  var f = document.forms[0];
  var idProponente = f.codigoRhCriptRepresentanteLegal;

  if (idProponente != null && idProponente.value != "") {
    url = "http://buscatextual.cnpq.br/buscatextual/visualizacv.jsp?id="+idProponente.value;
    var winref = window.open(url, "Currículo", "height=380,width=680,top=200,left=300,status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");    
  
    if (!winref) {
      alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');
    }
      
    winref.focus(); 
  }      
}

function atualizaContadorCaracteres(num,idTextArea,idContador){
    var textArea = document.getElementById(idTextArea);
    contadorCaracteres(idTextArea,idContador,num);
}    
               
function contadorCaracteres(idCampo,idContador,caracteres){
    if (idCampo == "" || idCampo == null) return false;
    if (idContador == "" || idContador == null) return false;
      
    var campo = $(idCampo);
    var contador = $(idContador);
    
    if(campo.value.length > caracteres){
        mensagem = campo.value;
        campo.value = mensagem.substring(0,caracteres);
    }
          
    if (contador)
        contador.value = caracteres - campo.value.length;
}   

function desabilitarBotao(id) {
	  var btn = document.getElementById(id);
	  if (btn != null) btn.disabled = true;
}

function buscarAncora (){
	var f = document.forms[0];
	var anc = f.ancora.value;
	if(anc != ''){
		f.ancora.value = '';
		location.hash=anc;
	}
}

function calculaTotalTaxaBancada(valor, meses){
	var f = document.forms[0];
	var d = document;
	var valores = new Array();
	for (ind = 0; ind < f.contador.value; ind++) { 
      
      var qtde = d.getElementById('qtdeBeneficio' + ind);
      var tipoBeneficio = d.getElementById('tipoBeneficio' + ind);
      
      // Pego os meses de duração da mensalidade, caso exista o tipo Mensalidade
      if(tipoBeneficio.value == 16) {
    	        
	      if (qtde == null || qtde == "undefined") {
	        valores[0] = "1";
	      } else {
	    	valores[0] = qtde.value;
	      }
	      
	     if((meses != '' && meses > 0 ) && valor != ''){
	    	 var aux = StrToFloat(valor);
	    	 aux = aux * meses;
	    	 valores[1] = aux.toFixed(2);
	    	 
	    	 multiplicaValoresFormatados(valores, 'totalTaxaBancada', 'valorTotalBancadaInterna', '');	    	 
	     }	           
      }
    }
}

function calculaTotalTaxaEscolar(){
	var f = document.forms[0]; 
    var d = document;
    var valores = new Array();  
        
    var mesesDuracao = 1;
    var qtde = 0;
    for (ind = 0; ind < f.contador.value; ind++) { 
      var idDiv = 'valorTotal' + ind;
      
      if(qtde <= 0){
    	  qtde = d.getElementById('qtdeBeneficio' + ind);
      }
      
      var tipoBeneficio = d.getElementById('tipoBeneficio' + ind);
      
      // Pego os meses de duração da mensalidade, caso exista o tipo Mensalidade
      if(tipoBeneficio.value == 5) {
              
	  	  if (qtde == null || qtde == "undefined") {
            valores[0] = "1";
          } else {
        	mesesDuracao = qtde.value/12;
            valores[0] = "1";
          }
          
         if (d.getElementById(idDiv) == null || d.getElementById(idDiv) == "undefined") {
            idDiv = null;
         }

//         if(mesesDuracao < 1){
//    		 mesesDuracao = 1;
//    	 }
    	 
    	 var valTemp = d.getElementById('valorUnitario' + ind).value;
    	 var aux = StrToFloat(valTemp);        	 
    	 aux = aux * mesesDuracao;
    	 valores[1] = aux.toFixed(2);        	 
    	 	        
		 multiplicaValoresFormatados(valores, 'totalTaxaEscolar', 'valorTotalTaxaEscolarInterna', '');
		 atualizaValorTotalBenForce(valores[1]);
      }
    }
}

function atualizaValorTotalBenForce(valor) {
	var f = document.forms[0];  
    var valores = new Array();
    
    var d = document;
            
    for (ind = 0; ind < f.contador.value; ind++) {
    	var tipoBeneficio = d.getElementById('tipoBeneficio' + ind);
    	
	     var flagAuxilio =  ((f.idxAuxilio != null) && (f.idxAuxilio.value == ind && !f.deslocamento[0].checked));
	     var flagPassagem = f.idxPassagem != null && f.idxPassagem.value == ind && !f.deslocamento[0].checked;
	     
	     if (!flagAuxilio && !flagPassagem) {
	    	 if(((ind == 3 || ind == 4) && tipoBeneficio.value == 5) && document.getElementById('valorSolicitado' + ind).value == '0,00'){
	    		valores[ind] = valor;
	    	} else {	    		
	    		valores[ind] = document.getElementById('valorSolicitado' + ind).value;                
	    	}
	     } else {
	        valores[ind] = '0,00';
	     }             
    }
    
    somaValoresFormatados(valores,'valorTotal','valorTotalGeral','');
  }

function calculaTotalTaxaEscolarMeses(){
	var f = document.forms[0]; 
    var d = document;
    var valores = new Array();  
        
    var mesesDuracao = 1;
    var qtde = 0;
    for (ind = 0; ind < f.contador.value; ind++) { 
      
      if(qtde <= 0){
    	  qtde = d.getElementById('qtdeBeneficio' + ind);
      }
      
      var tipoBeneficio = d.getElementById('tipoBeneficio' + ind);
      
      if(tipoBeneficio.value == 5 && (ind == 4 || ind == 3)) {
	  	  if (qtde == null || qtde == "undefined") {
            valores[0] = "1";
          } else {
        	mesesDuracao = qtde.value/12;
            valores[0] = "1";
          }
          
//         if(mesesDuracao < 1){
//    		 mesesDuracao = 1;
//    	 }
    	 
    	 var valTemp = d.getElementById('valorUnitario' + ind).value;
    	 var aux = StrToFloat(valTemp);        	 
    	 aux = aux * mesesDuracao;
    	 valores[1] = aux.toFixed(2);        	 
    	 	        
		 multiplicaValoresFormatados(valores, 'totalTaxaEscolar', 'valorTotalTaxaEscolarInterna', '');    		 
      }  
    }
}

function atualizaValoresQuadroGeral() {
	var elValorTotalCusteio = document.getElementById("valorRecursoCusteio");
	var elValorTotalCapital = document.getElementById("valorRecursoCapital");
	var elValorTotalBolsa = document.getElementById("valorRecursoBolsa");
	let elValorRecursoBolsaConvertido = document.getElementById("valorRecursoBolsaConvertido");
	
	var valorTotalCusteio = "0,00";
	var valorTotalCapital = "0,00";
	var valorTotalBolsa = "0,00";
	
	if (elValorTotalCusteio != undefined)
		valorTotalCusteio = elValorTotalCusteio.innerHTML.replace("R$ ", "");
	
	if (elValorTotalCapital != undefined)
		valorTotalCapital = elValorTotalCapital.innerHTML.replace("R$ ", "");
	
	if (elValorTotalBolsa != undefined) {
		valorTotalBolsa = elValorTotalBolsa.innerHTML.replace("R$ ", "");
		
		if (elValorRecursoBolsaConvertido.innerHTML.trim().length > 3)
			valorTotalBolsa = elValorRecursoBolsaConvertido.innerHTML.replace("R$ ", "");
	}
	
	var valorQuadroGeralOrcamentoCusteio = document.getElementById("quadroGeralOrcamentoCusteio");
	var valorQuadroGeralOrcamentoCapital = document.getElementById("quadroGeralOrcamentoCapital");
	var valorQuadroGeralOrcamentoBolsa = document.getElementById("quadroGeralOrcamentoBolsa");
	var valorQuadroGeralOrcamentoTotalGeral = document.getElementById("quadroGeralOrcamentoTotalGeral");
	var valoresTotais = StrToFloat(valorTotalCusteio) + StrToFloat(valorTotalCapital) + StrToFloat(valorTotalBolsa);
	
	if (valorQuadroGeralOrcamentoCusteio != undefined)
		valorQuadroGeralOrcamentoCusteio.innerHTML = "R$ " + valorTotalCusteio;
	
	if (valorQuadroGeralOrcamentoCapital != undefined)
		valorQuadroGeralOrcamentoCapital.innerHTML = "R$ " + valorTotalCapital;
	
	if (valorQuadroGeralOrcamentoBolsa != undefined)
		valorQuadroGeralOrcamentoBolsa.innerHTML = "R$ " + valorTotalBolsa;
	
	if (valorQuadroGeralOrcamentoTotalGeral != undefined)
		valorQuadroGeralOrcamentoTotalGeral.innerHTML = "R$ " + FloatToStr(valoresTotais);
}