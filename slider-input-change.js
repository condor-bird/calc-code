  var oldCallback = FIELDS.slider.sliderVariable[22].onMove;
	FIELDS.slider.sliderVariable[22].onMove = function(a, b) {
		oldCallback(a, b);
		$('#input_text-23')[0].value = FIELDS.slider.sliderVariable[22].value.toString();
	};
   
   
   function setVal(id, val) {
		var slider = $('#slider-'+id);
		var field = SAVER.getFieldBy('id', id);
		field.value = val;
		slider.after('<div id="[type]-[id]"></div>'.Signe(field));
		slider.remove(); // сносим старый слайдер
		FIELDS.slider.initial(field); // инициалиируем заново
	}
	
	$('#input_text-23').on('keyup, change', function(){
		setVal(22, $(this).val());
	});
