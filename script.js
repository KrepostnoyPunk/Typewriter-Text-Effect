const containerEl=document.querySelector('.container')
const CAREERS=["Freelancer", "Web Developer", "Blogger", "Athlete"]

let careerIndex=0

let itemIndex=0

updateText()

function updateText() {
    itemIndex++
    containerEl.innerHTML=`
    <h1>I am ${CAREERS[careerIndex].slice(0,1)==="A"? "an":"a"} ${CAREERS[careerIndex].slice(0, itemIndex)}.</h1>
    `
    if(itemIndex===CAREERS[careerIndex].length) {
        careerIndex++
        itemIndex=0
    }
    if(careerIndex===CAREERS.length) {
        careerIndex=0
    }
    setTimeout(updateText, 400)
}