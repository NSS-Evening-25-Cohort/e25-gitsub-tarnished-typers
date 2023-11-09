const packages = [
  {
    id: 1,
    name: "Docker",
    description: "software platform for building apps based on containers",
  },

  {
    id: 1,
    name: "Apache Maven",
    description: "default package manager used for javascript",
  },

  {
    id: 1,
    name: "NuGet",
    description: "open source package manager used for microsoft dev platforms",
  },
]

const app = document.querySelector("#app")

const renderToDom = (array) => {
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

renderToDom(packages)

const form = document.querySelector('form')

const addPack = (event) => {
  event.preventDefault()
  const newPackage = {
    id: packages.length + 1, 
    name: document.querySelector("#namePack").value,
    description: document.querySelector("#descPack").value,
  }; 
  packages.push(newPackage)
  renderToDom(packages)
  form.reset()
}
form.addEventListener('submit', addPack)
