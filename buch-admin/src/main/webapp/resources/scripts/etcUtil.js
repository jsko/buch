function deleteOneKey(Url, keyValue, successMethod, failMethod){
	$.ajax({
		type : "POST",
		async : false,
		url : Url,
		dataType : "JSON", 
		data:{'key': keyValue},
		success : function(data) {
			successMethod();
		},
		complete : function(data) {
		},
		error : function(xhr, status, error) {
			failMethod();
		}
	});
}

function update(Url, dataObject, successMethod, failMethod){
	$.ajax({
		type : "POST",
		url : Url,
		dataType : "JSON", 
		data : dataObject,
		success : function(data) {
			successMethod();
		},
		complete : function(data) {
		},
		error : function(xhr, status, error) {
			failMethod();
		}
	});

}