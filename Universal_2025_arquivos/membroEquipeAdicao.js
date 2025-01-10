//<<<<<<<<<<<<<<<<<<<<<<<< ----------------- >>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<< VARIAVEIS GLOBAIS >>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<< ----------------- >>>>>>>>>>>>>>>>>>>>>>>
modalInstMembroEquipe = null;

//OnLoad. 
$j(function(){	
	//Inicio - PCC-148778 - Valber Carreiro		
	if(winMembros){
	   var largura = screen.width;
	   var altura  = screen.height; 
	   
	   //Ajustando modal para baixas resoluções de telas.
	   /*if(largura === 800){
		   winMembros.getContent()[0].style.cssText = "width:600px; height:300px;"; 
	   }else if(largura === 1024 || largura === 1152 || (largura === 1280 && altura === 720)){
		   winMembros.getContent()[0].style.cssText = "width:700px; height:350px;";		   
	   }else if(largura === 1440){
		   winMembros.getContent()[0].style.cssText = "width:700px; height:" +
		   		";";
	   }else{
		   winMembros.getContent()[0].style.cssText = "width:700px; height:600px;";   
	   }*/
	   
	   if(altura < 700){
		  winMembros.getContent()[0].style.cssText = "width:600px; height:300px;";
	   }
	   else if(altura >= 700 && altura < 900){
		   winMembros.getContent()[0].style.cssText = "width:700px; height:350px;";
	   }
	   else if(altura >= 900 && altura < 1000){
		   winMembros.getContent()[0].style.cssText = "width:700px; height:550px;";
	   }
	   else{
		   winMembros.getContent()[0].style.cssText = "width:700px; height:600px;";
	   }
	   
	   winMembros.center();
	}
	
	//Fim - PCC-148778 - Valber Carreiro
	$j("#idResponsabilidadeProjetoPortugues").css({"width": "383px", "height": "100px", "max-height": "100px", "resize": "none", "overflow-y": "scroll"}).attr("maxlength","1000");
	
	$j("#idResponsabilidadeProjetoIngles").css({"width": "383px","height": "100px","max-height": "100px","resize": "none", "overflow-y": "scroll"}).attr("maxlength","1000");
	
	$j("#idResponsabilidadeProjetoPortugues").keyup(function(){
		contadorDeCaracteresTextArea(this,"contatorRespProjPort");
	});
	
	$j("#idResponsabilidadeProjetoIngles").keyup(function(){
		contadorDeCaracteresTextArea(this,"contatorRespProjIngles");
	});	
	
	$j("#botaoPesquisaInstituicao").click(function(){
		modalInstMembroEquipe.dialog("open").css("overflow", "hidden");  
	});
	
	$j("#nomeInstituicaoMembropEquipe").keyup(function(){
		  atualizaAutoComplete();	
	});
	
	$j("#nomeInstituicaoMembropEquipe").keypress(function(e){
   	   var tecla = (e.keyCode?e.keyCode:e.which);   	   
        if(tecla == 13){
           e.preventDefault(e);	
        }
	});
	
	//Campo removido, porém, mantido no código caso resolvam volta-lo.
	$j("#colNomeRhComCpf").hide();	
	
	$j("#idDedicacao").blur(function(){		
		if(isDedicacaoMaiorQue40()){					    
		    alert($j("#msgValidacaoDedicacaoHidden").val());
		    $j("#idDedicacao").val("");
		    $j("#idDedicacao").focus();		    		    
		};
	});
	
	inicializaModalInstMembroEquipe();
	inicializaAutoComplete([]);	
});

function isDedicacaoMaiorQue40() {
	var result = false;
	var cargaHoraria = $j("#idDedicacao").val();

	if ($j("#idDedicacao").val() != "") {
		try {
			if (parseInt(cargaHoraria) > 40 || parseInt(cargaHoraria) < 0) {
				result = true;
			}
		} catch (e) {
			alert($j("#msgValidacaoDedicacaoValorInvalidoHidden").val());
		}
	}
	return result;
}

function contadorDeCaracteresTextArea(arg, result) {
	var limite = 1000;
	var length = arg.value.length;

	var total = limite - length;
	var idResult = "#".concat(result);

	$j(idResult).empty();
	$j(idResult).append(total);
}

function inicializaAutoComplete(arg) {
	$j("#nomeInstituicaoMembropEquipe").autocomplete({
		source : arg
	});
}
  
function atualizaAutoComplete(){
	
	var contexto = null;
        contexto = window.contextoAplicacao.concat("/formularios/instituicao.do");
	
	$j('#nomeInstituicaoMembropEquipe').autocomplete({
	    source: function (request, response) {
	    	
	    	$j.ajax({
		   		 url      : contexto,
		   	  	 type     : "POST",
		   		 dataType : "json",	   		 
		   		 data     : {"linhaFomento" : $j("#linhaFomento").val(), 
		   			 "seqChamada" : $j("#seqChamada").val(), 
		   			 "metodo" : "consultaInstituicaoDI", 
		   			 "siglaPaisInstituicaoIndex" : $j("#paisInstDestino").val(), 
		   			 "instituicao" : $j("#nomeInstituicaoMembropEquipe").val()},
		   		 success : function(data){
		   			 
		             var instituicoes = []; 
		             $j.each(data, function(i, val){                              
		            	 instituicoes.push({label: val.nome,codigoInstituicaoField : val.codigoInstituicao});
		             });
		             response(instituicoes);             
		   	     },
		   	     error : function(xhr, textStatus, errorThrown){
		   	    	alert("ERRO NA REQUISICAO AJAX. FALHA AO BUSCAR INSTITUICOES.");	    	
		   	     }
	    	});
	    	
	    },
	    minLength: 3,	    
        select: function(event, ui) {
        	
        	var nomeInst = null;
        	    nomeInst = ui.item.label;
        	    $j("#instMembro").val(nomeInst);
        	
        	var codigoInst = $j("#idInstituicaoHidden");
        	    codigoInst.val(ui.item.codigoInstituicaoField);   
        	    obterDepartamentosInstituicao(codigoInst.val());
        },
	    delay: 50
	});
}


function obterDepartamentosInstituicao(codInstPai, callback){
	
	var contexto = null;
        contexto = window.contextoAplicacao.concat("/formularios/instituicao.do");
    var cboDepartamento = $j("#cboDepartamento");
	
	$j.ajax({
		
		url      : contexto,
		type     : "GET",
		dataType : "json",
		data     : {"instituicao" : codInstPai, "metodo" : "consultaDepartamentosInstituicao"},
		
	    beforeSend: function(){
	    	cboDepartamento.empty();
	    	cboDepartamento.append("<option id='optVoid' value=''>Carregando...Aguarde</option>");
		},		
		complete: function(){
			cboDepartamento.find("#optVoid").text("");
  	    },  	    
		success : function(data){         
              
          $j.each(data, function(i,val){        	  
        	 cboDepartamento.append("<option value="+val.idInst+">"+val.nome.replace( /\s/g, "&nbsp;" )+"</option>");
          });
          
          if(callback){
        	 callback();  
          }
		},
		error: function(xhr, textStatus, errorThrown){
			alert("ERRO NA REQUICAO AJAX BUSCANDO DEPARTAMENTOS. " + errorThrown.message);
		}
	});
}

function inicializaModalInstMembroEquipe(){
	
   modalInstMembroEquipe = $j("#pnlmodalInstituicaoMembroEquipe").dialog({
           autoOpen: false,
           height: 300,
           width : 350,
           modal : true,
           resizable: false,	          
           buttons: {        	   
               "OK": function(){
            	   modalInstMembroEquipe.dialog("close");
            	},
               "Cancelar": function() {
            	   modalInstMembroEquipe.dialog("close"); 
            	}
          },
	       close: function() {		    	    
	    	  $j("#paisInstDestino").val(-1);
	    	  $j("#nomeInstituicaoMembropEquipe").val("");
	       }
	   });
}


function recuperarNomeETitulacao(elem){
	
	if (elem.value.length < 11) {
		alert("INFROME TODOS OS NUMEROS PARA O CPF!");
		$j("#txtTitulacao").val("");
		$j("#titulacaoComCPF").val("");
		return;
	}
	
	var endereco = formulario.baseAction + "?metodo=recuperarNomeETitulacao";
	$j.ajax({
		url      : endereco,
		type     : "GET",
		dataType : "json",
		data     : {"cpf" : elem.value},
	    beforeSend: function(){
	    	mostraImagemCarregando();
	    },		
		complete: function(){
			ocultaImagemCarregando();
		},  	    
		success : function(data){
			
			if (data.mensagem != undefined) {
				alert("ERRO NA REQUICAO AJAX BUSCANDO TITULACAO MAXIMA (" 
						+ data.mensagem + ")");
				$j("#txtTitulacao").val("");
				$j("#titulacaoComCPF").val("");
				return;
			}
			
			$j("#txtTitulacao").val(data.titulacaoMaxima);
			$j("#titulacaoComCPF").val(data.titulacaoMaxima);
		},
		error: function(xhr, textStatus, errorThrown){
			alert("ERRO NA REQUICAO AJAX BUSCANDO TITULACAO MAXIMA. " + errorThrown.message);
		}
	});
	
}

function recuperarNomeEDataNascimentoPorOrcid(elem){
	
	if (elem.value.length < 19) {
		alert("INFROME TODOS OS DIGITOS PARA O ORCID!");
		$j("#idNomeEstrangeiro").val("");
		$j("#idDtaNascimentoMembro").val("");
		$j("#cboPaisNasc").val("");
		$j("#txtTitulacao").val("");
		$j("#titulacaoComCPF").val("");
		return;
	}
	
	var endereco = formulario.baseAction + "?metodo=recuperarNomeEDataNascimentoPorOrcid";
	$j.ajax({
		url      : endereco,
		type     : "GET",
		dataType : "json",
		data     : {"orcid" : elem.value},
	    beforeSend: function(){
	    	mostraImagemCarregando();
	    },		
		complete: function(){
			ocultaImagemCarregando();
		},  	    
		success : function(data){
			
			if (data.mensagem != undefined) {
				alert("ERRO NA REQUICAO AJAX (" + data.mensagem + ")");
				$j("#orcid").val("");
				$j("#idNomeEstrangeiro").val("");
				$j("#idDtaNascimentoMembro").val("");
				$j("#cboPaisNasc").val("");
				$j("#txtTitulacao").val("");
				$j("#titulacaoComCPF").val("");
				return;
			}
			
			$j("#idNomeEstrangeiro").val(data.nomeEstrageiro).attr("disabled" ,"disabled");
			$j("#idDtaNascimentoMembro").val(data.dataNascimento).attr("disabled" ,"disabled");
			$j("#cboPaisNasc").val(data.siglaPais).attr("disabled" ,"disabled");
			$j("#txtTitulacao").val(data.titulacaoMaxima).attr("disabled" ,"disabled");
			$j("#titulacaoComCPF").val(data.titulacaoMaxima);
		},
		error: function(xhr, textStatus, errorThrown){
			alert("ERRO NA REQUICAO AJAX (" + errorThrown.message + ")");
		}
	});
	
}