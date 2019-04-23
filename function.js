function valider(){
	
	var login = $('#login').val();
	var email = $('#email').val();
	var password = $('#password').val();
	

	if(login==''){
		alert('Veuillez saisir votre login');
		$('#login').focus();
		return false;
	}

	if(email==''){
		alert('Veuillez saisir votre login');
		$('#email').focus();
		return false;
	}

	if(password==''){
		alert('Veuillez saisir votre login');
		$('#password').focus();
		return false;
	}


	alert('votre formulaire est valide')


}