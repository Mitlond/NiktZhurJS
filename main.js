function toggleInformer() 	
    	{ 		
			// ищем нужный нам тег информера
			var elm = document.getElementById("block1");


    		// если тег найден, обрабатываем его
			if(elm)
			{
				// меняем видимость элемента на противоположную
				if(elm.style.visibility == "visible")
				{
					elm.style.visibility = "hidden";
				}
				else
				{
					elm.style.visibility = "visible";
				}
				
		 	} 	
    }
/*function(){
	
	var = document.getElementById('controls')
	style = div.style;
	
	div.classList.add('css-MyClass');
	div.classList.add('css-MyClass1');
	
})();*/