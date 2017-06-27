var grid = 16;

$(document).ready(function(){
	
	buildGrid();
	$('#reset_btn').onclick(function() {
		$('.etch').css('background-color', '#FFF');
		var user_input = prompt("Enter a number between 1 and 64", "");
		if(isNaN(user_input)){alert("That's not a number!");}
		else if (user_input < 1){user_input = 1;}
		else if (user_input > 64){user_input = 64;}
	
		var size = (512 / user_input);
	
		resetGrid();

		$('.etch').css({'height':size+'px', 'width':size + 'px'});
	
		$('.etch').hover(function() {
			$(this).css('background-color', '#000');
		});
    });

    $('.etch').hover(function() {
		$(this).css('background-color', '#000');
    });
	
});

function buildGrid(){
	for(var i = 0; i < grid; i++){
		for(var j= 0; j < grid; j++){
			$('.grid').append('<div class="etch"></div>');
		}
	}
}

function resetGrid(){
	$('.etch').remove();
	buildGrid();
}