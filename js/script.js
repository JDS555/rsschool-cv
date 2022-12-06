
//! script for switching theme and photos on hovering

const switcherButton = document.getElementById("theme-button");
console.log( switcherButton );
const personalImage = document.getElementById("image");
console.log( personalImage );
const themePage = document.getElementById("theme-page");
console.log( themePage );

function switchThemeAndPhoto() {
	switchButton();
	switchPhotos();
	switchTheme();
}

function switchButton() {
	switcherButton.addEventListener('click', function() {
		switcherButton.classList.toggle("theme-button-light");
	});
}

function switchPhotos() {
	switcherButton.addEventListener('click', function() {
		personalImage.src = "img/img-photo-2.jpg";
	});
}

function switchTheme() {
	switcherButton.addEventListener('click', function() {
		themePage.classList.toggle("theme-night");
	});	
}

switchThemeAndPhoto();
// ~~~~~ 

//? Output to the console for self-checking and evaluating work
let selfChecking;
selfChecking = `Итоговая оценка: 120 баллов
	Критерии оценки:
	+ студент засабмитил в rs app ссылку на своё CV, задеплоенное на gh-pages +10
	+ вёрстка валидная +10
	+ вёрстка семантическая +20
		(В коде странице присутствуют и используются по назначению следующие элементы:
		header, main, footer +5
		элемент nav +5
		только один заголовок h1 +5
		заголовки h2 +5)
	+ в footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс +10
	+ для оформления СV используются css-стили +10
	+ при уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону +10
	+ на странице СV есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут alt +10
	+ навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a +10
	+ Содержание CV +30
		(CV содержит:
		краткую информацию о себе +5
		контакты для связи +5
		перечень навыков +5
		пример кода. Код добавляется при помощи символов и тегов, а не картинкой +5
		перечень выполненных учебных проектов со ссылками на исходный код или страницу приложения +5
	информацию об образовании и уровне английского +5)
	+ CV выполнено на английском языке +10
	
	Невыполненные пункты:
	-Нет блока навигации. Но по замыслу макета тут навигация не предусмотрена.`;
console.log( selfChecking );
// ~~~~~
