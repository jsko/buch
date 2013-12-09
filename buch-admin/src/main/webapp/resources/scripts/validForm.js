function validPwConf() {
	var val_pw = $("#pw").val();
	var val_pwConfirm = $("#pwConf").val();
	if (val_pw == val_pwConfirm) {
		return true;
	} else {
		alert("비밀번호와 확인이 불일치합니다.");
	}
}




function validName() {
	var val_name = $("#name").val();
	if (val_name.indexOf(" ") != -1) {
		alert("이름에 공백을 지워주세요.");
	} else if (val_name == "") {
		alert("이름을 입력해주세요.");
	} else {
		return true;
	}
}

function validEmail() {
	var re_email = /^([\w\.-]+)@([a-z\d\.-]+)\.([a-z\.]{2,6})$/;
	var val_email = $("#email").val();
	console.log(val_email);
	if (!re_email.test(val_email)) {
		alert("올바른 e-mail 형식이 아닙니다.");
	} else {
		return true;
	}
}

function validHp() {
	var re_phone = /^[0-9-]{11,13}$/;
	var val_phone = $("#hp").val();
	if (!re_phone.test(val_phone)) {
		if(val_phone.length<8){
			alert("핸드폰 번호가 짧습니다.");
		}else if(val_phone.length>13){
			alert("핸드폰 번호가 깁니다.");
		}else{
			alert("올바른 핸드폰 번호 형식이 아닙니다.");
		}
	} else {
		if(val_phone.indexOf("-")==-1){
			alert("핸드폰 번호에 구분자 '-' 를 입력해주세요.");
		}else{
			return true;
		}
	}
}

function validTel() {
	var re_phone = /^[0-9-]{11,13}$/;
	var val_tel = $("#tel").val();
	if (!re_phone.test(val_tel)) {
		if(val_tel.length<8){
			alert("집 번호가 짧습니다.");
		}else if(val_tel.length>13){
			alert("집 번호가 깁니다.");
		}else{
			alert("올바른 집 번호 형식이 아닙니다.");
		}
	} else {
		if(val_tel.indexOf("-")==-1){
			alert("집 번호에 구분자 '-' 를 입력해주세요.");
		}else{
			return true;
		}
	}
}

function validAddress() {
	var val_address = $("#address").val();
	if (val_address == "") {
		alert("주소 값을 입력해주세요.");
	} else {
		return true;
	}
}

function validBirth(){
	var val_birthY = $("#dateY").val();
	var val_birthM = $("#dateM").val();
	var val_birthD = $("#dateD").val();
	if(val_birthY==""||val_birthM==""||val_birthD==""){
		alert("생년월일을 선택해주세요.");
	}else{
		return true;
	}

}