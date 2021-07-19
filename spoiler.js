let spoiler = document.querySelector('.spoiler');
let mediaIcons = document.querySelector('.media-icons');

spoiler.onclick = function () {
	mediaIcons.classList.toggle('active');
	spoiler.classList.toggle('active')
}