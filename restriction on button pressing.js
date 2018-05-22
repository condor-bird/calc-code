$(document).ready(function(){

	/** класс кнопки **/
	var button = $('.button-5');

	/** доступно нажатий **/
	var available = 3;

	function getCookie(name) {
	  var data = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	  ));
	  return data ? decodeURIComponent(data[1]) : undefined;
	}	
	
	/** текущее кол-во **/
	var currentClick = getCookie('current_click_calc');

	function getAvailable() {
		if (currentClick >= available) {
			button.bind('click',function(event){
				event.preventDefault();
				return false;
			});
			button.css('pointer-events', 'none');	
		}
	}
	
	if (typeof currentClick === 'undefined') {
		var currentClick = 0;
	}

	getAvailable();

	 button.on('click', function() {
		
		if (currentClick < available) {
			currentClick = currentClick + 1;
			document.cookie = 'current_click_calc=' + currentClick;
		}
		
		if (currentClick >= available) {
			getAvailable();
		}
		
	 });
 
});
