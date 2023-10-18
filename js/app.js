const button = document.querySelector('button')
const colorContainers = document.querySelectorAll('.color-container')

let randomColor = []
function createRgb(e) {
for (let i = 0; i < 3; i++) {
    let randomNumber = Math.ceil(Math.random() * 255)
    randomColor.unshift(randomNumber)
}
return randomColor
}

// function changeNumbers(e) {
//     console.log(e.key)
//     if (e.key === 32) {

//     }
// }

button.addEventListener('click', createRgb)
document.addEventListener('keydown', createRgb)

