// JavaScript Document

$(document).ready(function (e){
document.addEventListener ("deviceready",function(){
		
$('#BEEP').tap(function(){
navigator.notification.beep(3);
});//tap beep
		
$('#VIBRAR').tap(function(){
navigator.notification.vibrate(1000);
});//tap vibrar
		
},false);//deviceready
	
});//ready
