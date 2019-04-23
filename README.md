Validate Formulaire Authentification avec jQuery
===

Ce projet montre comment faire la validation de formulaire avec jQuery on mettant une fonction Javascript qui fait la validation

How to Use
---

Mettez votre code html dans une page HTML:
    
```html

<form>
	<div class="col-md-4"><label>Login:</label><input type="text" id="login"></div>
	<div class="col-md-4"><label>Email</label><input type="email" id="email"></div>
	<div class="col-md-4"><label>Mot de Passe</label><input type="password" id="password"></div>
</form>
```

Créer un fonction javascript qui fait la validation :

```javascript

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

```
