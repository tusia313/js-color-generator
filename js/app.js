const colorsContainers = document.querySelector(".colors-container")
const spawnButton = document.querySelector("#spawn-button")

let colorBlocks = [ 'a', 'b', 'c', 'd']

colorBlocks.forEach(colorBlock => {
   const divElement = document.createElement('div')
   divElement.textContent = colorBlock
   colorsContainers.append(divElement)
})


function spawn(){
    console.log('spawn')
}
spawnButton.addEventListener('click', spawn)
document.addEventListener('keydown', spawn)

