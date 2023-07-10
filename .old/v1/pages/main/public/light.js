if (window.light) {
    document.querySelectorAll('*').forEach(each => each.classList.add('light'))
}
else {
    window.light = false
    document.querySelectorAll('*').forEach(each => each.classList.remove('light'))
}
document.querySelector('.light-button').addEventListener('click', () => {

    window.light = !light??true

    if (window.light) {
        document.querySelectorAll('*').forEach(each => each.classList.add('light'))
    }
    else {
        document.querySelectorAll('*').forEach(each => each.classList.remove('light'))
    }
})