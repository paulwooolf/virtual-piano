
const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');
const notes = document.querySelector('.btn-notes');
const letters = document.querySelector('.btn-letters');
const activeClass = 'btn-active';
const keyLetter = 'piano-key-letter';
let type = 'note';

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

// Нажатие на клавишу клавиатуры
const checkPianoKeys = (key) => {
    pianoKeys.forEach((item) => {
        if (item.dataset.letter === key) {
            keyActive(item);
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

document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    checkPianoKeys(key);
})

piano.addEventListener('mousedown', (event) => {
    const key = event.target.dataset.letter.toUpperCase();
    checkPianoKeys(key);
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
})

