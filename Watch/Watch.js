// liên kết đến element để khởi tạo
const app = document.getElementById('root')

//  tạo app đếm giờ 
function watchClock () {

	setInterval(() => {
		const now = new Date()
		const hour = now.getHours()
		const minute = now.getMinutes()
		const second = now.getSeconds()

		const clockElement = document.createElement("p")
		clockElement.textContent = `Timeer =>> ${hour} ${minute} ${second}`

		while (app.firstChild) {
			app.removeChild(app.firstChild)
		}

		app.appendChild(clockElement)


	},1000)
}

//  khởi chạy
watchClock()