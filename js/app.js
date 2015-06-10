
$(document).ready(function(){		
	// Get text from form input and display on list
	$(".add").on("click", function(){
		event.preventDefault(); // lets the user hit "enter" instead of having to click the "+" block
		var item = $("input[name=item]").val();
	// If no letters are entered, an alert message will pop up
	if (item <= 0) {
		alert ("Please add an item")
	} else {
		$("#shopping-list").append("<li class=start>" + "<a class=remove>x</a>" + " " + item + "</li>");
		$("input[name=item]").val("");
	}
	})
	// The following changes the item to completed
	$("ul").on('click', '.start', function() {$(this).toggleClass("completed");});
	// The following removes the item from the list after it has been added
	$("ul").on('click', '.remove', function() {$(this).closest("li").remove();});
	// Resets the shopping list
	$(".reset").click(function() {$("#shopping-list").empty();})
}); 