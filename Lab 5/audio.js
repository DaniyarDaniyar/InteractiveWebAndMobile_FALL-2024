const buttons = document.getElementsByClassName('xylo-button')
for (var i = 0; i < buttons.length; i++) {
    const button = buttons[i]
    button.addEventListener('click', soundButtonDidTap)
}

function soundButtonDidTap(event) {
    let button = event.currentTarget // current tapped button
    let soundName = button.getAttribute('data-sound') // get sound name from button attr 'data-sound'
    const audio = new Audio(`Sounds/${soundName}.wav`)
    audio.play()
}

const key_down = {'a':'A', 's':'B', 'd':'C', 'f':'D', 'g':'E', 'h':'F', 'j':'G'}
document.addEventListener('keydown', soundKeyDown)
function soundKeyDown(event){
    let soundName = key_down[event.key];
    if(soundName){
        const audio = new Audio(`Sounds/${soundName}.wav`)
        audio.play()
    }
}