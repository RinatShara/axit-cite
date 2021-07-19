let burgerItem = document.querySelector('.burger-item')
let burger = document.querySelector('.burger')
let mainNav = document.querySelector('.main-nav')
let body = document.querySelector('body')
let navLinks = document.querySelectorAll('.nav-link')

burgerItem.onclick = function () {
	burger.classList.toggle('active')
	mainNav.classList.toggle('active')
	body.classList.toggle('lock')
}

for (let navLink of navLinks) {
	navLink.onclick = function () {
		body.classList.remove('lock')
		mainNav.classList.remove('active')
		burger.classList.remove('active')
	}
}