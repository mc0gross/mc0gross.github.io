(function($){

function customConfirm(s, fn) {
	var t = (new Date()).getTime() + Math.round(Math.random() * 999);
	
	$(document).ready(function(){
		window[t] = $.win({
			title:"Confirma��o",
			width:500,
			visible:true,
			autoRemove:true,
			showCloseBtn:false,
			content:"<ul class='question'>" + s + "</ul>",
			buttons: [
				{label:"Confirmar", callback:function(){
					fn();
					window[t].remove();
				}},
				{label:"Cancelar", callback:function(){window[t].remove()}}
			]
		});	
	});
	
};

window.customConfirm = customConfirm;

function customAlert(s) {
	var t = (new Date()).getTime() + Math.round(Math.random() * 999);
	
	$(document).ready(function(){
		window[t] = $.win({
			title:"Aten��o",
			width:500,
			visible:true,
			autoRemove:true,
			showCloseBtn:false,
			content:"<ul class='alert'>" + s + "</ul>",
			buttons: [
				{label:"OK", callback:function(){window[t].remove()}}
			]
		});	
	});
	
};

window.customAlert = customAlert;

function customError(s) {
	var t = (new Date()).getTime() + Math.round(Math.random() * 999);
	
	$(document).ready(function(){
		window[t] = $.win({
			title:"Erro",
			width:500,
			visible:true,
			autoRemove:true,
			showCloseBtn:false,
			content:"<ul class='error'>" + s + "</ul>",
			buttons: [
				{label:"OK", callback:function(){window[t].remove()}}
			]
		});
	});
	
};

window.customError = customError;

function customSuccess(s) {
	var t = (new Date()).getTime() + Math.round(Math.random() * 999);
	
	$(document).ready(function(){
		window[t] = $.win({
			title:"Sucesso",
			width:500,
			visible:true,
			autoRemove:true,
			showCloseBtn:false,
			content:"<ul class='success'>" + s + "</ul>",
			buttons: [
				{label:"OK", callback:function(){window[t].remove()}}
			]
		});
	});

};

window.customSuccess = customSuccess;

function customCondition(s, yesFn, noFn) {
	var t = (new Date()).getTime() + Math.round(Math.random() * 999);
	
	$(document).ready(function(){
		window[t] = $.win({
			title:"Confirma��o",
			width:500,
			visible:true,
			autoRemove:true,
			showCloseBtn:false,
			content:"<ul class='question'>" + s + "</ul>",
			buttons: [
				{label:"Sim", callback:function(){
					yesFn();
					window[t].remove();
				}},
				{label:"N�o", callback:function(){
					noFn();
					window[t].remove()
				}}
			]
		});
	});

};

window.customCondition = customCondition;

})(jQuery)