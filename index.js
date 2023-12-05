const factEl = document.getElementById("cat-fact")

async function setup() {
    const response = await fetch("https://cat-fact.herokuapp.com/facts")
    const data = await response.json()
    
    const facts = Object.keys(data)
    
    console.log()
}

async function loadFact() {
    const response = await fetch('https://cat-fact.herokuapp.com/facts/random')
    const data = await response.json()
    
    console.log(data.text)
    factEl.src = data.text;
}

const buttonEl = document.getElementById("load")
buttonEl.addEventListener("click", loadFact)

setup()