document.addEventListener('DOMContentLoaded', () => {
	// Открытие/закрытие "Новинки"
	const openMoreNewsBtn = document.querySelector('.see-more-news')
	const sidebarNewsContainer = document.querySelector('.news-sidebar-inner')

	openMoreNewsBtn.addEventListener('click', () => {
		openMoreNewsBtn.classList.toggle('opened')
		sidebarNewsContainer.classList.toggle('opened')
	})

	// Открытие/закрытие "Новости"
	const openNewsBtn = document.querySelector('.see-more-btn')
	const newsContainer = document.querySelector('.news-section-inner')

	if (openNewsBtn) {
		openNewsBtn.addEventListener('click', () => {
			openNewsBtn.classList.toggle('opened')
			newsContainer.classList.toggle('opened')
		})
	}

	// Запуск видео
	let video = document.querySelector('.video')

	if (video) {
		video.addEventListener('click', () => {
			if (video.classList.contains('ready')) {
				return
			}
			video.classList.add('ready')
			video.insertAdjacentHTML(
				'afterbegin',
				`<iframe
								style="border-radius: 25px;"
                src="https://www.youtube.com/embed/NSLN7nxVv2E?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>`
			)
			video.style.background = 'none'
		})
	}
})
