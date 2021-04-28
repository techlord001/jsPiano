// Play audio file linked to key stroke
function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	// stop audio from running
	if(!audio) return;
	// rewind to start
	audio.currentTime = 0;
	audio.play();
	// add CSS highlight animation to key
	key.classList.add('playing');
}

// Remove CSS highlight from key
function removeTransition(e) {    
	if (e.propertyName !== 'transform') {
			// skip it if it's not a transform
			return;
	}
	this.classList.remove('playing');
};

// Listen for transtion end of key highlight animation
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
	key.addEventListener('transitionend', removeTransition);
});

// Listen for keystroke
window.addEventListener('keydown', playSound);