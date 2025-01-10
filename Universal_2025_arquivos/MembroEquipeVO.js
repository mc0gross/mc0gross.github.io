//Objeto que representa um Membro de Equipe.
function MembroEquipeVO(){
	
	//Variaveis privadas.
	var msgVisualizarCurriculo = null;
	var msgBaixarCurriculo     = null;
	var msgExcluirMembro       = null;
	var msgVisualizarMembro    = null;
	
	var imgVisualizarCurriculo = null;
	var imgBaixarCurriculo     = null;
	var imgExcluirMembro       = null;
	var imgVisualizarMembro    = null;
	
	var seqChamada             = null;
	var linhaFomento           = null;
	var codigoInstituicao      = null;
	
	//Métodos get e set para as mensagens.
	this.getMsgVisualizarCurriculo = function(){
		return msgVisualizarCurriculo;
	};
	
	this.setMsgVisualizarCurriculo = function(msg){
		msgVisualizarCurriculo = msg;
	};
	
	this.getMsgBaixarCurriculo = function(){
		return msgBaixarCurriculo;
	};
	
	this.setMsgBaixarCurriculo = function(msg){
		msgBaixarCurriculo = msg;
	};
	
	this.getMsgExcluirMembro = function(){
		return msgExcluirMembro;
	};
	
	this.setMsgExcluirMembro = function(msg){
		msgExcluirMembro = msg;
	};
	
	this.getMsgVisualizarMembro = function(){
		return msgVisualizarMembro;
	};
	
	this.setMsgVisualizarMembro = function(msg){
		 msgVisualizarMembro = msg;
	};	
	
	this.getImgVisualizarCurriculo = function(){
		return imgVisualizarCurriculo;
	};
	
	this.setImgVisualizarCurriculo = function(img){
		imgVisualizarCurriculo = img;
	};
	
	this.getImgBaixarCurriculo = function(){
		return imgBaixarCurriculo;
	};
	
	this.setImgBaixarCurriculo = function(img){
		imgBaixarCurriculo = img;
	};
	
	this.getImgExcluirMembro = function(){
		return imgExcluirMembro;
	};
	
	this.setImgExcluirMembro = function(img){
		imgExcluirMembro = img;
	};
	
	this.getImgVisualizarMembro = function(){
		return imgVisualizarMembro;
	};
	
	this.setImgVisualizarMembro = function(img){
		 imgVisualizarMembro = img;
	};
	
	this.getSeqChamada = function(){
		return seqChamada;
	};
	
	this.setSeqChamada = function(seqChamadaParam){
		seqChamada = seqChamadaParam;
	};
	
	this.getLinhaFomento = function(){
		return linhaFomento;
	};
	
	this.setLinhaFomento = function(linhaFomentoParam){
		linhaFomento = linhaFomentoParam;
	};
	
	this.getCodigoInstituicao = function(){
		return codigoInstituicao;
	};
	
	this.setCodigoInstituicao = function(codigoInstituicaoParam){
		codigoInstituicao = codigoInstituicaoParam;
	};
}