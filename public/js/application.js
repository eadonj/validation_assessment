$(document).ready(function () {

  // send an HTTP DELETE request for the sign-out link
  $('a#sign-out').on("click", function (e) {
    e.preventDefault();
    var request = $.ajax({ url: $(this).attr('href'), type: 'delete' });
    request.done(function () { window.location = "/"; });
  });

  
  $('#new_event').on("submit", function(e) {
    e.preventDefault();
    console.log('hello');
    $.ajax({ 
    	url: '/events/create', 
    	method: "POST", 
    	data: $(this).serialize()
    }).done(checkInputs);
  });

  function checkInputs(response){
  	console.log(response);
  	 $('.errors').remove();
	  if (response == "") {
    	window.location = '/';
      // add successfully made note
    }
  	else {
  		for (var i = 0; i < response.length; i++) {
	   
		    if (response[i] == "Title can't be blank") {
		    	console.log("title is blank");
		    	$('#form_title').append("<p class='errors'>Title can't be blank</p>");
			  }
			  if (response[i] == "Title has already been taken") {
		    	console.log("title is blank");
		    	$('#form_title').append("<p class='errors'>Title has already been taken</p>");
			  }
			  if (response[i] == "Organizer name can't be blank") {
		    	$('#form_name').append("<p class='errors'>Organizer name can't be blank</p>");
			  }
			  if (response[i] == "Organizer email can't be blank") {
		    	$('#form_email').append("<p class='errors'>Organizer email can't be blank</p>");
			  }
			  if (response[i] == "Email not valid email address") {
		    	$('#form_email').append("<p class='errors'>Email not valid email address</p>");
			  }
			  if (response[i] == "Date cannot be in the past") {
			  	console.log("ind date check")
		    	$('#form_date').append("<p class='errors'>Date cannot be in the past</p>");
			  }
		  }
		}
  };

});


// ["Title can't be blank", "Organizer name can't be blank", 
// "Organizer email can't be blank", "Date cannot be in the past", "Email not valid email address"]


