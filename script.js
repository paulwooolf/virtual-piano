
const piano = document.querySelector('.piano');
const notes = document.querySelector('.btn-notes');
const letters = document.querySelector('.btn-letters');
const activeClass = 'btn-active';

notes.addEventListener('click', () => {
    notes.classList.toggle(activeClass);
    letters.classList.toggle(activeClass);
});

letters.addEventListener('click', () => {
    letters.classList.toggle(activeClass);
    notes.classList.toggle(activeClass);
    document.querySelectorAll('.piano-key').forEach(item => {
        item.style.display = 'block';
    })
});

piano.addEventListener('click', (event) => {
    const key = event.target;
    console.log(key);
})
