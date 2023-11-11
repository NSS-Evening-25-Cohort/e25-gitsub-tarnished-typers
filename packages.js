const app = document.querySelector("#body1")
const packForm = document.querySelector("#body2")

const packagesToDom = (array) => {
  let domString = ""

  for (let i = 0; i < array.length; i++) {
    domString += `<div class="card packageStyle" style="width: 18rem;">

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


const formToDom = () => {
  let formString = ""
  packForm.innerHTML = formString
  formString += `<div class="mb-3" id="myForm">
    <form class="form-container">
    <h1>Add a new Package</h1>

    <label for="namePack"><b>Name of Package</b></label>
    <input type="text" name="Package" id="namePack" required>

    <label for="descPack"><b>Description</b></label>
    <input type="text" name="description" id="descPack" required>
    <button type="submit" class="addPackage btn btn-primary">Submit</button>

    </form>
  </div>`
packForm.innerHTML = formString

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
}
