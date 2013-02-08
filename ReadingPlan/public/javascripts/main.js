
$(function() {
	$("#byyear").click(function(){

		var url = "/byYear";
			
		$(location).attr('href', url);

	});

	$("#byfield").click(function(){

		var url = "/byField";
			
		$(location).attr('href', url);

	});
});