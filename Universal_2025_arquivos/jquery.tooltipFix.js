//#j é utilizado pois no arquivo form_Universal.jsp
//este é criado na linha 74 pelo código:
//var $j = jQuery.noConflict();

function tooltipFix(){
	$j("select").each(function() {
		var title = $j(this).attr('title');
		$j(this).wrap("<spam title='" + title + "' ></div>");
		$j(this).removeAttr('title');
	});
}