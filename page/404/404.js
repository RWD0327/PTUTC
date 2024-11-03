document.addEventListener('DOMContentLoaded', () => {
    const a = document.querySelector('a');
    a.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '/index.html';
    });
});