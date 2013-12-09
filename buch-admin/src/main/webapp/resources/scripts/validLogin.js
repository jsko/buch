function validId() {
	var re_id = /^[a-z0-9]{6,15}$/;
	var val_id = $("#id").val();
	if (re_id.test(val_id)) {
		return true;
	} else {
		if (val_id.length < 6) {
			alert("ID를 6자리 이상 입력해주세요.");
		} else if (val_id.indexOf(" ") != -1) {
			alert("ID에 공백을 제거해주세요.");
		} else {
			alert("올바르지 않은 ID 입니다.");
		}
	}
}

function validPw() {
	var re_pw = /^[a-z0-9]{6,15}$/;
	var val_pw = $("#pw").val();
	if (re_pw.test(val_pw)) {
		return true;
	} else {
		if (val_pw.length < 6) {
			alert("비밀번호를 6자리 이상 입력해주세요.");
		} else if (val_pw.indexOf(" ") != -1) {
			alert("비밀번호에 공백을 제거해주세요.");
		} else {
			alert("올바르지 않은 비밀번호 입니다.");
		}
	}
}