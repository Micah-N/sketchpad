var grid = 16;

$(document).ready(function(){
	
	buildGrid(grid);
	$('#reset_btn').click(function() {
		$('.etch').css('background-color', '#FFF');
		var user_input = prompt("Enter a number between 1 and 64", "");
		if(isNaN(user_input)){alert("That's not a number!");}
		else if (user_input < 1){user_input = 1;}
		else if (user_input > 64){user_input = 64;}
	
		var size = user_input;
	
		resetGrid();
		buildGrid(size);
		$('.etch').css({'height':grid+'px', 'width':grid + 'px'});
	
		$('.etch').hover(function() {
			$(this).css('background-color', '#000');
		});
    });

    $('.etch').hover(function() {
		$(this).css('background-color', '#000');
    });
	
});

function buildGrid(size){
	for(var i = 0; i < size; i++){
		for(var j= 0; j < size; j++){
			$('.grid').append('<div class="etch"></div>');
		}
	}
}

function resetGrid(){
	$('.etch').remove();
}