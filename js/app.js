const spawnButton = document.querySelector('#spawn-button')
const colorsContainer = document.querySelector('.colors-container')

// skupiamy się na rgb(liczba1, liczba2, liczba3), gdzie stała ma być tylko liczba1 dla każdego z 4 kolorów, a pozostałe dwie to obojętne

let colorBlocks = ['', '', '', '']
function spawn() {
    console.log('spawning !')

    colorBlocks.forEach( colorBlock => {
       const divElement = document.createElement('div')
    })
}


spawnButton.addEventListener('click', spawn)
document.addEventListener('keydown', spawn)

// function getRandomNumber() {
//     let randomNumber = Math.floor(Math.random() * 255)
//     return randomNumber
// }

// let colorBlocks = ['', '', '', '']

// function makeColors() {
//     // dzięki temu nie dzielą się nam te kolory w nieskończoność !
//     colorsContainer.innerHTML = ''
//     const commonColor = getRandomNumber()
//     console.log('commonColor ' + commonColor)

//     colorBlocks.forEach((_colorBlock, index) => {
//         // uwaga, nie ma nawiasów przed treścią ('rgb')!
//         colorBlocks[index] = 'rgb(' +  commonColor + ',' + getRandomNumber() + ',' + getRandomNumber() + ')'
//     })
//     console.log(colorBlocks)

//     colorBlocks.forEach(colorBlock => {
//         const divElement = document.createElement('div')
//         // in order to see what i am doing : textContent
//         divElement.textContent = colorBlock
//         divElement.style.backgroundColor = colorBlock
//         colorsContainer.append(divElement)
//     })
// }
// makeColors()
// spawnButton.addEventListener('click', makeColors)
// document.addEventListener('keydown', makeColors)

