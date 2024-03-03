const colorsContainers = document.querySelector(".colors-container")
const spawnButton = document.querySelector("#spawn-button")

let colorBlocks = [ '', '', '', '']

function getRandomNumber(){
    return Math.floor(Math.random() * 255)
}

function spawn(){
    console.log('spawn')

    const commonColor = getRandomNumber()
    console.log(commonColor)

// _ oznacza, że nie będziemy uzywac colorBlocków tylko raczej indexu w nim (itself)
    colorBlocks.forEach((_colorBlock, index) => {
        colorBlocks[index] = 
        'rgb(' + commonColor + ','+ getRandomNumber() + ',' + getRandomNumber() +')'
    })   

colorBlocks.forEach(colorBlock => {
    const divElement = document.createElement('div')
    divElement.textContent = colorBlock
    colorsContainers.append(divElement)
 })
}


spawnButton.addEventListener('click', spawn)
document.addEventListener('keydown', spawn)

