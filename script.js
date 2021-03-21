
const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');
const notes = document.querySelector('.btn-notes');
const letters = document.querySelector('.btn-letters');
const activeClass = 'btn-active';
const keyLetter = 'piano-key-letter';
const audio = {};
let type = 'note';

pianoKeys.forEach(item => {
    if (!item.classList.contains('none')) {
        const note = item.dataset.note;
        audio[note] = new Audio(`./assets/audio/${note}.mp3`);
    }
})

function playAudio(item) {
    const key = item.dataset.note;
    audio[key].currentTime = 0;
    audio[key].play();
}

// Переключение видов отображения
notes.addEventListener('click', () => {
    notes.classList.add(activeClass);
    letters.classList.remove(activeClass);
    pianoKeys.forEach(item => {
        item.classList.remove(keyLetter);
    })
    type = 'note';
});

letters.addEventListener('click', () => {
    letters.classList.add(activeClass);
    pianoKeys.forEach(item => {
        item.classList.add(keyLetter);
    })
    notes.classList.remove(activeClass);
    type = 'letter';
});

// Обработчики
const checkPianoKeys = (key) => {
    pianoKeys.forEach((item) => {
        if (item.dataset.letter === key) {
            keyActive(item);
            playAudio(item);
        } else {
            keyDisActive(item);
        }
    })
}

const keyActive = (key) => {
    key.classList.add('piano-key-active');
    key.classList.add('piano-key-active-pseudo');
}

const keyDisActive = (key) => {
    key.classList.remove('piano-key-active');
    key.classList.remove('piano-key-active-pseudo');
}

// Обработка нажатий
document.addEventListener('keydown', (event) => {
    event.preventDefault();
    const key = event.key.toUpperCase();
    checkPianoKeys(key);
})

piano.addEventListener('mousedown', (event) => {
    event.preventDefault();
    const key = event.target.dataset.letter.toUpperCase();
    checkPianoKeys(key);
})

piano.addEventListener('mouseover', (event) => {
    event.preventDefault();
    const key = event.target.dataset.letter.toUpperCase();
    checkPianoKeys(key);
})

piano.addEventListener('mouseleave', (event) => {
    event.preventDefault();
    pianoKeys.forEach((item) => {
        keyDisActive(item);
    })
})

document.addEventListener('keyup', (event) => {
    event.preventDefault();
    pianoKeys.forEach((item) => {
        keyDisActive(item);
    })
})

document.addEventListener('mouseup', (event) => {
    event.preventDefault();
    pianoKeys.forEach((item) => {
        keyDisActive(item);
    })
})

