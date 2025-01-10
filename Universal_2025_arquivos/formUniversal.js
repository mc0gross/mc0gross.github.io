/**
 * 
 */

/**
 * Variável global setada em algum evento, por exemplo, no 
 * onchange do email do orientador estrangeiro, para que o script
 * saiba de qual index do componente orientador o evendo foi chamado
 * (pra telas que o componente de orientador é exibido mais de uma 
 * vez e não estava funcionando a inclusão de estrangeiro)
 */
var idx = 0;

(function($){

		/**
		 * função ajax que recuperar um recurso utilizando o email 
		 */
	    $.fn.buscarEstrageiroRecursoHumanoByEmail = function(data) {
	    	
	    	$.ajax({
        		url: formulario.baseAction + "?metodo=buscarMembroByEmail",
        		type: 'POST',
        		dataType : "json",
        		data: data,
        		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        		success : handleSuccessBuscarRecursoHumanoByEmail,
        		error : handleErrorBuscarRecursoHumanoByEmail,
        		complete : handleCompleteBuscarRecursoHumanoByEmail
    		})
	    };
	    
	    
	   $.fn.buscarFomentoEstrageiroPorNomePaisDataNascimento = function(data){
	   		$.ajax({
        		url: formulario.baseAction + "?metodo=buscarMembroEstrangeiro",
        		type: 'POST',
        		dataType : "json",
        		data: data,
        		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        		success : handleSuccessBuscarMembroEstrangeiro,
        		error : handleErrorBuscarMembroEstrangeiro,
        		complete : handleCompleteMembroEstrangeiro
    		})
	   };
	    
})(jQuery);

/**
 *  implementação da OS005 - Carga de proposta para a consulta de estrangeiros
 */
$j(document).ready(function(){
		$j(".inpt-dados-part-nome").change( function(event){
			event.preventDefault();
			buscarDadosPartMembronEstrangeiro(event);
		});
		
		$j(".inpt-dados-part-data-nascimento").change(function(event){
			event.preventDefault();
			buscarDadosPartMembronEstrangeiro(event);
		});
		
		$j(".inpt-dados-part-pais").change(function(event){
			event.preventDefault();
			buscarDadosPartMembronEstrangeiro(event);
		});
				
		$j(".inpt-dados-part-email").change(function(event){
			if($j(this).val() != ''){
				$j("#idCNPq"+idx).val('');
				event.preventDefault();
				
				$j("#membrosEstrangeirosTable").find(".rowMembro").remove();
				limparCamposEstrangeiro();
				
				$j(".imagemCarregandoEstrangeiros").show();
				
				$j(this).buscarEstrageiroRecursoHumanoByEmail({ 
			 		"email" : $j(this).val(),
 		  			"validaEmailVinculado" : 'S',
 		  			"tipoMensagem" : 'combo'
	 		  	});
				
				
			}else{
				desabilitarCamposDadosPart();
			}
		});
});
	
function buscarDadosPartMembronEstrangeiro(event){
	event.preventDefault();
	var dados = {
		nomeMembro : $j(".inpt-dados-part-nome").val(),
		dataNascimentoMembro: $j(".inpt-dados-part-data-nascimento").val(),
		paisMembro: $j(".inpt-dados-part-pais").val()
	}
	
	if(dados.nomeMembro != ''
		&& dados.dataNascimentoMembro != ''
		&& dados.paisMembro != '') {
		$j("#membrosEstrangeirosTable").find(".rowMembro").remove();
		$j(".imagemCarregandoEstrangeiros").show();
		$j(event).buscarFomentoEstrageiroPorNomePaisDataNascimento(dados);
	}
}

function exibirOpcaoNovoCadastroEstrangeiro(){
	$j("#dataNascimentoRow"+idx).after(
			"<tr class='rowMembro"+idx+"'>" +
	        	"<td class='label' style='width:177px;'></td>" +
	        	"<td>" +
	             	"<div style='display: flex; align-items: center;'>" +
	             		"<a href='#' name='novoMembro"+idx+"' id='membro1000'>Selecionar</a>" +
	             		"<label for=\'membro1000' style='width:auto; margin-left:10px;'>" +
							"<img style='width:60px' src='' alt=''>" +
						"</label>" +
						"<div style='margin-left: 10px;'>" +
							"<p>Novo cadastro de estrangeiro</p>" +									      		
						"</div>" +
					"</div>" +
	            "</td>" +
	        "</tr>"
	    );
	
	$j('a[name="novoMembro"]').click( function() {
		$j("#idCNPq${idx}").val('');
	 	$j("#membrosEstrangeirosTable").find(".rowMembro").remove();
	});
	$j('a[name="novoMembro'+idx+'"]').click( function() {
		$j("#idCNPq"+idx).val('');
	 	$j("#membrosEstrangeirosTable"+idx).find(".rowMembro"+idx).remove();
	});
	
}

function handleSuccessBuscarMembroEstrangeiro(data) {
	mensagemAlertBuscaRecursoHumano(data);
	
	exibirOpcaoNovoCadastroEstrangeiro();	
	
}

function handleSuccessBuscarMembroEstrangeiro(data) {
	mensagemAlertBuscaRecursoHumano(data);
	
	exibirOpcaoNovoCadastroEstrangeiro();	
	
	jQuery.each(data, function (index, membro) {
		 	var nome = "";
		    var idLattes = "";
		    var instituicao = "";
		    var imgPefil = "";
		    var urlCurriculo = "";
		    var email = "";
		    
		    if(membro.nome !== undefined){
			    nome = membro.nome;
		    }
		    if(membro.idLattes !== undefined){
		    	idLattes = membro.idLattes;
		    }
		    if(membro.instituicao !== undefined){
		    	instituicao = membro.instituicao;
		    }
		    if(membro.imagemPerfil !== undefined){
		    	imgPefil = membro.imagemPerfil;
		    }
		    if(membro.urlCurriculo !== undefined){
		    	urlCurriculo = membro.urlCurriculo;
		    }
		    if(membro.email !== undefined){
		    	email = membro.email;
		    }
		    
		    
		    if (!data["mensagem"]) {  							   
			    $j("#dataNascimentoRow").after(
		    		"<tr class='rowMembro'>" +
                 	"<td class='label' style='width:177px;'></td>" +
                 	"<td>" +
                 		"<div style='display: flex; align-items: center;'>" +
							"<a href='#' name='membro' id=\'membro" + index + "\' data-val=\'"+index+"\'>Selecionar</a>" +
							      "<label for=\'membro" + index + "\' style='width:auto; margin-left:10px;'>" +
							      	  "<img style='width:60px' src=\'"+imgPefil+"\' alt='Imagem do perfil'>" +
							      "</label>" +
							      "<div style='margin-left: 10px;'>" +
							      		"<p>"+nome+"</p>" +
							      		"<p id=\'urlCurriculo" + index + "\' >ID Lattes: <span style='font-weight:bold;'>"+idLattes+"</span></p>" +
							      		"<p>"+instituicao+"</p>" +
							      		"<p>"+email+"</p>" +
							      "</div>" +
							"</div>" +
                 	"</td>" +
                 "</tr>"
			    );							    
			    
			    var url = $j("#urlCurriculo" + index);
			    url.click(function (){
			    	winref = window.open(urlCurriculo, "Currículo", "height=480,width=720,top=200,left=300,status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");    
			        if (!winref)
			            alert('É necessário desabilitar o bloqueador de pop-ups para esta funcionalidade.');     
			        winref.focus();
			    }).css({"cursor":"pointer"});
		    }
		    
		    $j('a[name="membro"]').click(function(){

		    	$j(".inpt-dados-part-nome").attr('value',  data[this.dataset.val].nome);
				$j(".inpt-dados-part-pais").attr('value', data[this.dataset.val].siglaPaisNasc);
				$j(".inpt-dados-part-email").attr('value', data[this.dataset.val].email);
				
				$j("#idCNPq${idx}").attr('value', data[this.dataset.val].idLattes);
			    $j("#membrosEstrangeirosTable").find(".rowMembro").remove();
		    });
	});
	
}

function handleErrorBuscarMembroEstrangeiro(data) {
	mensagemAlertBuscaRecursoHumano(data);
}

function handleCompleteMembroEstrangeiro(data) {
	$j(".imagemCarregandoEstrangeiros").hide();
}

function handleSuccessBuscarRecursoHumanoByEmail(data) {
	mensagemAlertBuscaRecursoHumano(data);
	
	exibirOpcaoNovoCadastroEstrangeiro();

	if (!data["mensagem"]) {
		
		var membro = data[0];

		if(membro){
			debugger
			$j(".inpt-dados-part-nome").attr('value', membro.nome);
			$j(".inpt-dados-part-pais").attr('value', membro.siglaPaisNasc);
			$j(".inpt-dados-part-email").attr('value', membro.email);
			$j("#idCNPq${idx}").attr('value', membro.idLattes);
			
			if(membro.dataNasc !== undefined){
				dataNasc = membro.dataNasc;
		    	var dia = membro.dataNasc.slice(8,10);
		    	var mes = membro.dataNasc.slice(5,7);
		    	var ano = membro.dataNasc.slice(0,4);
		    	dataNascimento = dia + "/" + mes + "/" + ano;
		    	$j(".inpt-dados-part-data-nascimento").attr('value', dataNascimento);
			}
			
			desabilitarCamposDadosPart();
			
			$j(".inpt-dados-part-pais-hidden").attr("disabled",false);
			$j(".inpt-dados-part-pais-hidden").attr("value", membro.siglaPaisNasc);
		} else {
			habilitarCamposDadosPart();
		}

	}
	
	
}
	
function handleErrorBuscarRecursoHumanoByEmail(data) {
    mensagemAlertBuscaRecursoHumano(data);
}

function handleCompleteBuscarRecursoHumanoByEmail(data) {
	$j(".imagemCarregandoEstrangeiros").hide();
}

function mensagemAlertBuscaRecursoHumano(data){
	if (data["mensagem"]) {
        alert(data["mensagem"]);	
    }
}

function desabilitarCamposDadosPart(){
	// readonly
	$j(".inpt-dados-part-nome").attr('readonly', true);
	$j(".inpt-dados-part-data-nascimento").attr('readonly', true);
	$j(".inpt-dados-part-data-nascimento-calendario").hide();
	// pais
	$j(".inpt-dados-part-pais").attr('disabled', true);
	
	// add css
	$j(".inpt-dados-part-nome").addClass('campoDesabilitado');
	$j(".inpt-dados-part-pais").addClass('campoDesabilitado');
	$j(".inpt-dados-part-data-nascimento").addClass('campoDesabilitado');

	// remove class ativo css
	$j(".inpt-dados-part-nome").removeClass('campoHabilitado');
	$j(".inpt-dados-part-pais").removeClass('campoHabilitado');
	$j(".inpt-dados-part-data-nascimento").removeClass('campoHabilitado');
}

function habilitarCamposDadosPart(){
	// readonly
	$j(".inpt-dados-part-nome").attr('readonly', false);
	$j(".inpt-dados-part-data-nascimento").attr('readonly', false);
	$j(".inpt-dados-part-data-nascimento-calendario").show();
	// pais
	$j(".inpt-dados-part-pais").attr('disabled', false);
	
	// add css
	$j(".inpt-dados-part-nome").addClass('campoHabilitado');
	$j(".inpt-dados-part-pais").addClass('campoHabilitado');
	$j(".inpt-dados-part-data-nascimento").addClass('campoHabilitado');

	// remove class ativo css
	$j(".inpt-dados-part-nome").removeClass('campoDesabilitado');
	$j(".inpt-dados-part-pais").removeClass('campoDesabilitado');
	$j(".inpt-dados-part-data-nascimento").removeClass('campoDesabilitado');
}

function limparCamposEstrangeiro() {
	$j(".inpt-dados-part-cpf-"+idx).val('');
	$j(".inpt-dados-part-nome-"+idx).val('');
	$j(".inpt-dados-part-data-nascimento-"+idx).val('');
	$j(".inpt-dados-part-pais-"+idx).val('');
	
}
function limparCampoEmailEstrangeiro() {
	$j(".inpt-dados-part-email").val('');
}

