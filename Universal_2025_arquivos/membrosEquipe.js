//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------------ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< VARIAVEIS GLOBAIS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------------ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
habilitaBtnCadastroMembros = null;

function habilitaCadastroMembros(){
	
	var contextoApp  = null;
	var urlAction    = null;
	var urlIconBlack = null;
	var urlIconRed   = null;	
	
	    contextoApp  = window.contextoAplicacao;	    
        urlAction    = contextoApp.concat("/formularios/formularioUniversal.do");
        urlIconBlack = contextoApp.concat("/images/search-black.png");
        urlIconRed   = contextoApp.concat("/images/search-red.png"); 

	    $j.ajax({		
			url      : urlAction,
			type     : "POST",
			dataType : "json",
			data     : {"metodo" : "habilitaCadastroMembrosEquipe",	"tipoObjetoProposta" : $j('#tipoObjetoProposta').val()},
			
			success : function(data){
				      habilitaBtnCadastroMembros = data;
				      if(data){
				         $j("#panelMsg").hide();
				         $j("#imgEditarMembro").removeAttr("src");
				         $j("#imgEditarMembro").attr("src",urlIconBlack);
				      }
				      else{
				         $j("#panelMsg").show();
	 			         $j("#imgEditarMembro").removeAttr("src");
					     $j("#imgEditarMembro").attr("src",urlIconRed);				         
				      }
			},
			error: function(xhr, textStatus, errorThrown){
			 	alert("ERRO NA REQUICAO AJAX BUSCANDO DEPARTAMENTOS.");
			}
	     });
}


function gerenciadorPanelMsg(msgPart1,msgPart2, context){
	if($j("#panelMsg").length === 0){
	   $j("<div id='panelMsg' style='height: auto; color: red; padding: 5px 15px;'>"+msgPart1+" <img src='"+context+"/images/search-red.png'>"+msgPart2+"</div>").insertAfter(".panel-content");
	}
}

function renderizarPainelBotaoAdicionar(membroEquipeVO){
	
	$j("#bioMembros .panel-bottom-bar").not("#panelMsg.panel-bottom-bar").each(function(index,elem){
	    elem.style.cssText +="height : 23px !important;";  
		$j(this).children().css("margin-left","240px");
		
		// REMOVIDO PARA CHAMADA UNIVERSAL 202108
		//$j(this).append(obterLegenda(membroEquipeVO));
	});
}

function obterBotaoAdicionarTelaPrincipal(){
	return $j("#bioMembros .panel-bottom-bar > a").not("#panelMsg.panel-bottom-bar");
}

function obterLegenda(membroEquipeVO){	
	
	var legenda = "<table style='margin-top:28px;margin-left: -310px;width :500px'> "+
				  " <tbody> "+
				  " <tr>    "+
    			  " <td style='width:500px'><img src='"+membroEquipeVO.getImgVisualizarCurriculo()+"'>&nbsp;&nbsp;"+ membroEquipeVO.getMsgVisualizarCurriculo() +"</td> "+
				  " <td style='width:650px'><img src='"+membroEquipeVO.getImgBaixarCurriculo()+"'>&nbsp;&nbsp;"+membroEquipeVO.getMsgBaixarCurriculo()+"</td> "+
				  " </tr> "+
				  " <tr>  "+
				  " <td style='width:500px'><img src='"+membroEquipeVO.getImgExcluirMembro()+"'>&nbsp;&nbsp;"+membroEquipeVO.getMsgExcluirMembro()+"</td> "+
				  " <td style='width:650px'><img src='"+membroEquipeVO.getImgVisualizarMembro()+"'>&nbsp;&nbsp;"+membroEquipeVO.getMsgVisualizarMembro()+"</td> "+
				  " </tr> "+
				  " </tbody> "+
				  " </table> ";	
	return legenda;	
}

function onclickTabBraEstrComCpf(){
	
	//Inicio - PCC-148778 - Valber Carreiro	
	if(winMembros){
	   var largura = screen.width;
	   var altura  = screen.height;
	   
	   dimensionarDialog(altura);
	   winMembros.center();
	}	
	//Fim - PCC-148778 - Valber Carreiro
	$j("#txtTitulacao").attr("disabled", "disabled");
	const titulacaoMaxima = $j("#titulacaoComCPF").val();
	if (titulacaoMaxima != "") {
		$j("#txtTitulacao").val(titulacaoMaxima);
	}
	
	$j("#divCamposComuns").css("margin-top","12px");
}

function onclickTaEstrSemCpf(){
	//Inicio - PCC-148778 - Valber Carreiro	
	if(winMembros){
	   var largura = screen.width;
	   var altura  = screen.height;
	   
	   dimensionarDialog(altura);
	   winMembros.center();
	}	
	//Fim - PCC-148778 - Valber Carreiro
	$j("#divCamposComuns").css("margin-top","-8px");
	
	$j("#txtTitulacao").removeAttr("disabled");
	$j("#txtTitulacao").val("");
}

function dimensionarDialog(altura){
	if($j('#tipoObjetoProposta').val() == 8){
		winMembros.getContent()[0].style.cssText = " height:250px;";
   }else{
	   //Ajustando modal para baixas resolu��es de telas.
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
		   winMembros.getContent()[0].style.cssText = "width:700px; height:680px;";
	   }	 
   }
}

function carregarTabViewMembrosEquipe(){
	
	tabMembros = $j.tab($j("#membroTabHolder"));   
	tabMembros._header.children()[0].children[0].href = "javascript:onclickTabBraEstrComCpf();"; 
	tabMembros._header.children()[1].children[0].href = "javascript:onclickTaEstrSemCpf();";
}