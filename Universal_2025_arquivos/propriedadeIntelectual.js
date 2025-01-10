$j(function(){
	
	
	
	//Ajuste de layout para o Internet Explorer.
	if($j.browser.msie || navigator.userAgent.indexOf(".NET") != -1){ //IE -JQUERY N�O IDENTIFICA O INTERNET EXPLORER 11 CORRETAMENTE, POR ISSO O USO DO OBJETO NAVIGATOR.	
	   $j("#divLabelJustificativaPortugues").css("margin-left", "17px"); // <-------- Esta linha serve de ajuste apenas para o fomul�rio DT.
	   $j("#divJustificativaPortugues").css({"margin-top" : "-5px","margin-right" : "40px"});
	   $j("#divJustificativaIngles").css("margin-right", "40px");
	}
	

	
});

function esconderJustificativa(arg){
		var list = document.getElementsByName('propriedadeIntectualVisivel');
		
		//default - sem nenhum marcado
		if(arg === ""){
			var esconder =  document.getElementsByClassName("divJustificativa");
			for(var j=0;j<esconder.length;j++){
				   $j(esconder[j]).hide();
				   $j("#justificativaPropriedadeIntelectualPt").empty();
				   $j("#justificativaPropriedadeIntelectualEn").empty();
			}
		}else{
			for(var i=0;i<list.length;i++){
			   if(list[i].type=='radio' && list[i].checked){
				   var esconder =  document.getElementsByClassName("divJustificativa");
				   if (list[i].value === "N" || arg === "N"){
					   for(var j=0;j<esconder.length;j++){					   
						   $j(esconder[j]).hide();
						   $j("#justificativaPropriedadeIntelectualPt").empty();
						   $j("#justificativaPropriedadeIntelectualEn").empty();
					   }
				   }else{
					   for(var j=0;j<esconder.length;j++){                    					   
						   $j(esconder[j]).show();
					   }
				   }                    			  
			      break;
			   }
			}
		}
	}