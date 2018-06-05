/*Pour afficher et cacher le panneau des règles du jeu*/


document.getElementById('rules').onclick = function () {
	if (document.getElementById('rules2').style.display == 'inherit') { 
		document.getElementById('rules2').style.display = 'none';
	}
	else {document.getElementById('rules2').style.display = 'inherit'}


/*Pour changer le contenu du texte du bouton*/

	if (document.getElementById('rules').innerHTML == "Fermer") { /*un double == permet de comparer le color*/
		document.getElementById('rules').innerHTML = "Règles";/*un simple = permet de changer l'attribut du color*/
	}
	else {document.getElementById('rules').innerHTML = "Fermer"}
	
} /*contourne le bug du 2e click nécessaire en inversant l'ordre de ce qui est déclaré dans le style.css*/
/*Ici c'est l'accolade qui ferme la fonction dans laquelle on affiche et cache le texte et dans laquelle on change la couleur du bouton*/


