'use strict'

document.addEventListener('DOMContentLoaded', () => {
	// Закрытие/открытие поиска (телефон)
	const searchLine = document.querySelector('.search-line')
	const searchLineInput = document.querySelector('.search-line-input')
	const openSearchBtn = document.querySelector('.search-btn-mobile-top')

	openSearchBtn.addEventListener('click', () => {
		searchLine.classList.toggle('opened')
		searchLineInput.focus()
	})

	window.addEventListener('click', event => {
		if (
			!searchLine.contains(event.target) &&
			!openSearchBtn.contains(event.target) &&
			!openSearchBtnTablet.contains(event.target)
		) {
			searchLine.classList.remove('opened')
		}
	})

	// Закрытие/открытие поиска (планшет)
	const openSearchBtnTablet = document.querySelector('.search-image')

	openSearchBtnTablet.addEventListener('click', () => {
		searchLine.classList.toggle('opened')
		searchLineInput.focus()
		console.log('click')
	})

	// Открытие/закрытие "дроп даун меню с телефоном"
	const dropDownOpenBtn = document.querySelector('.additional-info')
	const phonesDropDownMenu = document.querySelector('.phone-drop-down-menu')

	dropDownOpenBtn.addEventListener('click', () => {
		dropDownOpenBtn.classList.toggle('opened')
		phonesDropDownMenu.classList.toggle('opened')
	})
})
