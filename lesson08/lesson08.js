const heading = document.querySelectorAll('.h1')

heading.addEventListener('click', () => {
    console.log('clicked');
    heading.classList.toggle('is--active')
})