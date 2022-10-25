import { initAllSliders } from 'bananaslider'

initAllSliders()

let scrolY = 0;

let isRolling = 'stopped'
let history = []
let baseBottom = document.querySelector('.wallpaper-ground').style.marginBottom??getComputedStyle(document.querySelector('.wallpaper-ground')).marginBottom??0
window.addEventListener('scroll', (e) => {
    document.querySelector('.wallpaper-ground').style.marginBottom = baseBottom -  window.scrollY *  .75+ 'px'
    document.querySelector('.wallpaper-ground').style.position = 'relative'
    
    if (document.querySelector('.wallpaper-ground').style.marginBottom < 100) {
        document.querySelector('.wallpaper-ground').style.marginBottom = '100px'
    }
    history.push(window.scrollY.toFixed(0))
    if (history.length > 10) {
        history = []
    }
    if (history[history.length - 1] > history[history.length - 2]) {
        scrolY -= 100;
        isRolling = 'down'
    }
    if (history[history.length - 1] < history[history.length - 2]) {
        scrolY += 100
        isRolling = 'up'
    }
    if (history[history.length - 1] == history[history.length - 2]) {
        isRolling = 'stopped'
    }
    console.log(isRolling)
})

    `
1000 = 100
333 = x

333 * 100
1000

`