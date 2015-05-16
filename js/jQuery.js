$( document ).on("click", "#subBut", function() {
    var phone = $("input.phoneInp").val();
	var result = true;
	$('#textF').each(function() {
        if($(this).val() == ''){
            alert('**There are empty fields');
			result = false;
           return false;
        }
		if(!(phone.match(/^\d+$/))) {
			alert('Phone number contains letters');
			result = false;
           return false;
		}
		if(result){
			alert('FORM SENT');
		}
    });
});

$(document).ready(function(){
		$("#modalDiv").modal('show');
});
