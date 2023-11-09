const app = document.querySelector("#body1")

const packagesToDom = (array) => {
  let domString = ""

  for (let i = 0; i < array.length; i++) {
    domString += `<div class="card packageAlign" style="width: 18rem;">

    <div class="card-body">
      <h5 class="card-title">${array[i].name}</h5>
      <p class="card-text">${array[i].description}</p>
      <button class="learnMore">Learn More</button>
    </div>
  </div>`
  }
  app.innerHTML = domString
}

packagesToDom(packages)

const form = document.querySelector('form')

const addPack = (event) => {
  event.preventDefault()
  const newPackage = {
    id: packages.length + 1, 
    name: document.querySelector("#namePack").value,
    description: document.querySelector("#descPack").value,
  }; 
  packages.push(newPackage)
  packagesToDom(packages)
  form.reset()
}
form.addEventListener('submit', addPack)
