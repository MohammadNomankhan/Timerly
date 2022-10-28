const datePicker = document.getElementById('date-picker');
const dateLabel = document.getElementById('date-label');

function visiblePh() {
	dateLabel.style.opacity = "1";
	dateLabel.style.transform = "translateX(-3rem)";
	dateLabel.style.visibility = "visible";
	dateLabel.style.marginLeft = "4rem";
}
datePicker.addEventListener('click', visiblePh);