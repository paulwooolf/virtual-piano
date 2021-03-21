
const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');
const notes = document.querySelector('.btn-notes');
const letters = document.querySelector('.btn-letters');
const activeClass = 'btn-active';
const keyLetter = 'piano-key-letter';
const audio = {};
let type = 'note';
let keyPressed = false;

pianoKeys.forEach(item => {
    if (!item.classList.contains('none')) {
        const note = item.dataset.note;
        audio[note] = new Audio(`./assets/audio/${note}.mp3`);
    }
})

function playAudio(item) {
    if (!item.classList.contains('pressed')) {
        const key = item.dataset.note;
        if (key !== undefined) {
            audio[key].currentTime = 0;
            audio[key].play();
        }
    }
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
const checkPianoKeys = (key, type) => {
    pianoKeys.forEach((item) => {
        if (item.dataset.letter === key) {
            playAudio(item);
            keyActive(item);
            if (type === 'mouse') {
                keyPressed = true;
            }
        } else {
            keyDisActive(item);
        }
    })
}

const keyActive = (key) => {
    key.classList.add('pressed');
    key.classList.add('piano-key-active');
    key.classList.add('piano-key-active-pseudo');
}

const keyDisActive = (key) => {
    key.classList.remove('pressed');
    key.classList.remove('piano-key-active');
    key.classList.remove('piano-key-active-pseudo');
}

// Обработка нажатий
document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    checkPianoKeys(key, 'key');
})

piano.addEventListener('mousedown', (event) => {
    event.preventDefault();
    const key = event.target.dataset.letter.toUpperCase();
    checkPianoKeys(key, 'mouse');
})

piano.addEventListener('mouseover', (event) => {
    console.log('over');
    const item = event.target;
    if (!item.classList.contains('pressed') && keyPressed) {
        const key = item.dataset.letter;
        checkPianoKeys(key, 'mouse');
    }
})

piano.addEventListener('mouseleave', (event) => {
    pianoKeys.forEach((item) => {
        keyDisActive(item);
    })
})

document.addEventListener('keyup', (event) => {
    pianoKeys.forEach((item) => {
        keyDisActive(item);
    })
})

document.addEventListener('mouseup', (event) => {
    pianoKeys.forEach((item) => {
        keyDisActive(item);
    })
    keyPressed = false;
})

