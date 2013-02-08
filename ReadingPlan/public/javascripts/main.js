
$(function() {
	$("#byyear").click(function(){

		var url = "/byYear";
			
		$(location).attr('href', url);

	});

	$("#byfield").click(function(){

		var url = "/byField";
			
		$(location).attr('href', url);

	});

	$("#addYear").click(function(){

		var reply = prompt('Hi, there! Please input new year');

		if (reply)
		{
			var $something = $('<button/>').attr({class:'btn btn-primary category',id:reply,onclick:'viewYearList(this.id)',draggable:true,ondragstart:'dragStart(event)'});

			$something.html(reply);

			$('#left').append($something);
		}
		else
		{
			return false;
		}
	});

	$("#addField").click(function(){

		var reply = prompt('Hi, there! Please input new field');

		if (reply)
		{
			var $something = $('<button/>').attr({class:'btn btn-primary',id:reply,onclick:'viewFieldList(this.id)',draggable:true,ondragstart:'dragStart(event)'});

			$something.html(reply);

			$('#left').append($something);
		}
		else
		{
			return false;
		}

	});

});

function dragStart(ev){
	ev.dataTransfer.setData('text/plain', ev.target.id);
}

function dragOver(ev){
	ev.preventDefault();
}

function dragDrop(ev){
	var parent = document.getElementById('left');
	ev.preventDefault();
	var data = ev.dataTransfer.getData('text/plain');
	parent.removeChild(document.getElementById(data));
}

function viewYearList(category){
	//alert(category);
	var url = "/byYear/"+category;
			
		$(location).attr('href', url);
}

function viewFieldList(category){
	//alert(category);
	var url = "/byField/"+category;
			
		$(location).attr('href', url);
}