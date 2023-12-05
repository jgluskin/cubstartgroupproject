//select the input element with the id "cat-fact"
const catFact = document.getElementById("cat-fact")

async function setup() {
    const response = await fetch("https://cat-fact.herokuapp.com/facts")
    const data = await response.json()
    
    const fact = Object.keys(data)

     // Display the fact in the <p> element
     catFact.textContent = fact.text;
}

async function loadFact() {
    const response = await fetch('https://cat-fact.herokuapp.com/facts/random')
    const data = await response.json()
    
    const text = data.text

    console.log(text)

    // Display the fact in the <p> element
    catFact.textContent = text;

    //catFact.src = data.text;
}

const buttonEl = document.getElementById("load")
buttonEl.addEventListener("click", loadFact)

setup()