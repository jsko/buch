function setIFrameSrc(iFrameId, key, value,rootUrl){
	var iFrame = $("#"+iFrameId);
	var param = rootUrl+"?&"+key +"="+value;
	iFrame.attr("src", param);
}

function resizeHeight(id)
{
    var the_height = document.getElementById(id).contentWindow.document.body.scrollHeight;
    document.getElementById(id).height = the_height;
}

function setHiddenIFrame(iFrameId, change){
	var iFrame = $("#"+iFrameId);
	iFrame.attr("hidden", change);
}