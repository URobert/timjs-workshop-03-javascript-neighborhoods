//console.log ("It's on");
//user input - citim litere de la tastatura
//array static
//verificare litera corecta
//mesaj de succes cand s-a ghichit

//PROBLEME:
//arata cum arata :)
//nu poate fi testat
//nu e modular
//globale
//totul este public
//manipularer de view si logica in acelas loc

/* FOR LATER */
//cuvinte random diction 
//daca sunt mai multe litere sa se puna peste tot
//preafisare litere din cuvant
//cate greseli permise au mai ramas
//mesaj de succes cand s-a ghichit
//autoreload la final
//sa se ignore literele car s-au apasat deja
//litere afisate in UI?

//const APP = ( function () {
//	var private = 'seceret';
//	return {
//		getPivate() {
//			return private;
//		},
//		setPrivate() {
//			private = value;	
//		}
//	};
//})(); // (IIFE) Imediately Invoked Function Expression
import $ from 'jquery';

let word	=  ''; 
let $wrapper = null;

export { init };

function init(words){
	const randomIndex = getRandom(words.length);
	word = words[randomIndex];
	$wrapper = $('#app');
	
	console.log(word);
	
	$wrapper.append('<ul></ul>');
	
	let ulContent = '';
	for (let i = 0; i < word.length; i++){
		ulContent += '<li>_</li>';
	}
	$wrapper.find('ul').append(ulContent);
	
	$('body').on('keypress', (event) => {
	const key  = event.key || String.fromCharCode(event.keyCode);
	validate(key);
	});		
}

function getRandom(max) {
	 return Math.floor(Math.random() * max );	
}

function validate(key) {
	if (word.indexOf(key) > -1){
		console.log('exista litera');
		let index = word.indexOf(key);
		$wrapper.find('li').eq(index).text(key);
	}else{
		console.warn('NU exista litera');
	}
}

//
//let word, $wrapper;
//
//function init(words){
//	const randomIndex = getRandom(words.length);
//	word = words[randomIndex];
//	$wrapper = $('#app');
//	
//	console.log(word);
//	
//	$wrapper.append('<ul></ul>');
//	
//	let ulContent = '';
//	for (let i = 0; i < word.length; i++){
//		ulContent += '<li>_</li>';
//	}
//	$wrapper.find('ul').append(ulContent);	
//}
//
//
//$('body').on('keypress', (event) => {
//	const key  = event.key || String.fromCharCode(event.keyCode);
//	validate(key);
//});
//
//function validate (key)
//{
//	if (word.indexOf(key) > -1){
//		console.log('exista litera');
//		let index = word.indexOf(key);
//		$wrapper.find('li').eq(index).text(key);
//	}else {
//		console.log('NU exista litera');
//	}
//}
//
//function getRandom(max) {
//  return Math.floor(Math.random() * max );
//}



//let ulContentFunctional = new Array(word.length).fill('<li>_</li>').join('');
//console.log(ulContentFunctional); - metoda functionala de generare a stringului necesar