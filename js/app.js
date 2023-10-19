const spawnButton = document.querySelector('#spawn-button')
const colorsContainer = document.querySelector('.colors-container')

let randomColor = []
for (let i = 0; i < 3; i++) {
    let randomNumber = Math.ceil(Math.random() * 255)
    randomColor.unshift(randomNumber)
}

let colorBlocks = ['a', 'b', 'c', 'd']

function makeColors() {
    console.log('I am making colors right now')

    colorBlocks.forEach(colorBlock => {
        const divElement = document.createElement('div')
        // in order to see what i am doing : textContent
        divElement.textContent = colorBlock
        colorsContainer.append(divElement)
    })
}

spawnButton.addEventListener('click', makeColors)
document.addEventListener('keydown', makeColors)

