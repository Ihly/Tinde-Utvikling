//KANPPER TOMTEFINNER NESTE START ETC
//START___FJERN FØRSTE VIS ANDRE DEL
$('input').click(function(){
	if($(this).hasClass('selected')){
		$(this).removeClass('selected');
	}else{
		$(this).addClass('selected');
	}
});

$('#ngbdal').click(function(){
	//$('#ngbdal').addClass('selected');
});

//FJERN ANDRE VIS TREDJE ETC...
$('#secondTFbutton').click(function(){
	$('#tfFrame2').hide();
	$('#tfFrame3').show();
});

$('#thirdTFbutton').click(function(){
	$('#tfFrame3').hide();
	$('#tfFrame4').show();
});

$('#fourthTFbutton').click(function(){
	$('#tfFrame4').hide();
	$('#tfFrame5').show();
});

//START PÅ NYTT___starter hele tomtefinneren fra starten igjen
$('#lastTFbutton').click(function(){
	$('#tfFrame5').hide();
	$('#tfFrame1').show();
	$('.omrValg').removeClass('liKlikk');
});


//VELG OMRÅDE
$('.content div').click(function(){
	//Sjekker om det man klikker på alt har classen, om den har fjerner den classen hvis ikke legger den classen til
	if($(this).hasClass('liKlikk')){
		$(this).removeClass('liKlikk');
	}else{
		$(this).addClass('memes');
	}

});