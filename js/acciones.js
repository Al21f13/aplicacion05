// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	$('#btndatos').on('click',function(){
		//alert('Hola')
		$('body').pagecontainer("change", "#datos", 
		{transition:"flip"});
	});//click btndatos
//}); 
});
// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	$('#btnresultado').on('click',function(){
		//alert('Hola')
		$('body').pagecontainer("change", "#resultado", 
		{transition:"flip"});
		var imc;
		var peso = $('#txtpeso').val();
		var talla = $('#txttalla').val();
		alert (peso);
		alert (talla);
	});//click btndatos
//}); 
});

