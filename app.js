const mouth = document.querySelector('#mouth')
const emotionElements = document.querySelectorAll('.rating-container div')

console.log(emotionElements)
// 'e' means event!
function selectEmotion(e) {
    const choseEmotion = e.target.id
    mouth.classList.remove('sad-mouth', 'indiffrent-mouth', 'good-mouth')
    if (choseEmotion === 'bad') {
        mouth.classList.add('sad-mouth')
    }

    if (choseEmotion === 'okey') {
        mouth.classList.add('indiffrent-mouth')
    }

    if (choseEmotion === 'good') {
        mouth.classList.add('good-mouth')
    }
}

emotionElements.forEach(emotionElement => 
    emotionElement.addEventListener('click', selectEmotion)
)
//  hurrrra!