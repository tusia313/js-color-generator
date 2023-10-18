const button = document.querySelector('button')
const colorContainers = document.querySelectorAll('.color-container')

for (const i = 0; i < 4; i++) {
    for (let i = 0; i < 3; i++) {
        let randomColor = []
        let randomNumber = Math.ceil(Math.random() * 255)
        randomColor.unshift(randomNumber)
        console.log(randomColor)
    }
}



function changeNumbers(e) {
    console.log(e.key)
    if (e.key === 32) {

    }

}

button.addEventListener('click', changeNumbers)
document.addEventListener('keydown', changeNumbers)

