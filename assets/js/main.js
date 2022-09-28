// TIMER

document.addEventListener('DOMContentLoaded', () => {
	let currentTime = new Date();
	currentTime.setHours(23, 59, 59, 999);

	const hoursVal = document.querySelector('.time-count__hours .time-count__val');
	const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
	const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

	const hoursValModal = document.querySelector('.modal-count__hours .modal-count__val');
	const minutesValModal = document.querySelector('.modal-count__minutes .modal-count__val');
	const secondsValModal = document.querySelector('.modal-count__seconds .modal-count__val');

	const timeCount = () => {
		let now = new Date();
		let leftUntil = currentTime - now;

		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
		let seconds = Math.floor(leftUntil / 1000) % 60;

		hoursVal.textContent = hours;
		minutesVal.textContent = minutes;
		secondsVal.textContent = seconds;

		hoursValModal.textContent = hours;
		minutesValModal.textContent = minutes;
		secondsValModal.textContent = seconds;

	};

	timeCount();
	setInterval(timeCount, 1000);
});

//RANDOM WINDOW

(function randomFadeWindow() {
	let randomWindow = $('.window'),
		el = randomWindow.eq(Math.floor(Math.random() * randomWindow.length));
		el.delay(10000).fadeIn(500).delay(10000).fadeOut(500, randomFadeWindow);
})();

// Close random window
$('.window__btn').click(function(){
	$('.window').hide();
  });


