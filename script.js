
const piano = document.querySelector('.piano');
const pianoKey = document.querySelectorAll('.piano-key');
const notes = document.querySelector('.btn-notes');
const letters = document.querySelector('.btn-letters');
const activeClass = 'btn-active';
const keyLetter = 'piano-key-letter';
let type = 'note';

notes.addEventListener('click', () => {
    notes.classList.add(activeClass);
    letters.classList.remove(activeClass);
    pianoKey.forEach(item => {
        item.classList.remove(keyLetter);
    })
    type = 'note';
});

letters.addEventListener('click', () => {
    letters.classList.add(activeClass);
    pianoKey.forEach(item => {
        item.classList.add(keyLetter);
    })
    notes.classList.remove(activeClass);
    type = 'letter';
});

piano.addEventListener('mousedown', (event) => {
    const key = event.target;
    const data = key.dataset[type];
    // трансформация клавиши
    key.classList.add('piano-key-active');
    key.classList.add('piano-key-active-pseudo');
    // проигрывание звука
})

piano.addEventListener('mouseup', (event) => {
    const key = event.target;
    const data = key.dataset[type];
    // трансформация клавиши
    key.classList.remove('piano-key-active');
    key.classList.remove('piano-key-active-pseudo');
    // проигрывание звука
})
