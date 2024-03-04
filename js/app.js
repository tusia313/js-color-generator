const colorsContainers = document.querySelector(".colors-container")
const spawnButton = document.querySelector("#spawn-button")

let colorBlocks = [ '', '', '', '']

function getRandomNumber(){
    return Math.floor(Math.random() * 255)
}

function spawn(){
    // to nam czysci kontener z poprzednich kolorów, bo bysmy ich mieli nieskoncznie wiele
    colorsContainers.innerHTML = ''

    const commonColor = getRandomNumber()
  

// _ oznacza, że nie będziemy uzywac colorBlocków tylko raczej indexu w nim (itself)
    colorBlocks.forEach((_colorBlock, index) => {
        colorBlocks[index] = 
        'rgb(' + commonColor + ','+ getRandomNumber() + ',' + getRandomNumber() +')'
    })   

colorBlocks.forEach(colorBlock => {
    const divElement = document.createElement('div')
    divElement.style.backgroundColor = colorBlock
    divElement.textContent = colorBlock
    colorsContainers.append(divElement)
 })
}
// wywołuje funckje zeby na wstępie coś było
spawn()
spawnButton.addEventListener('click', spawn)
document.addEventListener('keydown', spawn)

