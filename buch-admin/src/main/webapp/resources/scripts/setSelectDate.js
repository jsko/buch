
function setYear(){
	var select = document.getElementById("dateY");
	var date = new Date();

	for(var i=date.getUTCFullYear(); i>(date.getUTCFullYear()-100) ;i--){
		var option = document.createElement("option");
		option.text = i;
		option.value = i;
		select.appendChild(option);
	}
}

function setMonth(){
	var select = document.getElementById("dateM");

	for(var i = 1; i<=12; i++){
		var option = document.createElement("option");
		option.text = i;
		if(i<10){
			option.value = '0'+i;
		}else{
			option.value = i;
		}
		select.appendChild(option);
	}
}

function setDate(){
	var select = document.getElementById("dateD");

	for(var i = 1; i<=31; i++){
		var option = document.createElement("option");
		option.text = i;
		if(i<10){
			option.value = '0'+i;

		}else{
			option.value = i;
		}		
		select.appendChild(option);
	}
}
