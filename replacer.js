import replace from 'replace-in-file'

const options = {
	// Рекурсивно обробляти піддиректорії
	recursive: true,
	// Паттерн, який потрібно замінити
	files: 'dist/**/*.*',
	// Рядок, на який потрібно замінити
	from: /module\.scss/g,
	to: 'module.css',
}

try {
	const results = replace.sync(options)
	console.log('Заміна виконана:', results)
}
catch (error) {
	console.error('Помилка заміни:', error)
}
