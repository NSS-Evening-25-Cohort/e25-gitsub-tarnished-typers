const repoToDom = document.querySelector("#body2")


const repoForm = () => {
  let formString = ""
  repoToDom.innerHTML = formString
  formString += `<div class="mb-3" id="myForm">
    <form class="form-container" id="repo-form">
    <h1>Add a new Repository</h1>

    <label for="titleRepo"><b>Name of Repository</b></label>
    <input type="text" name="Repository" id="titleRepo" required>

    <label for="descRepo"><b>Description</b></label>
    <input type="text" name="description" id="descRepo">
    <button type="submit" class="addRepository btn btn-primary">Submit</button>

    </form>
  </div>`
  repoToDom.innerHTML = formString

const formRepo = document.querySelector('#repo-form')

const addRepo = (event) => {
  event.preventDefault()
  const newRepo = {
    id: repositories.length + 1, 
    title: document.querySelector("#titleRepo").value,
    description: document.querySelector("#descRepo").value,
    tags: ["Html","CSS","Javascript", "Just Starting","Git It"],
    stars: 6,
    forks: 1,
    issues: 1,
    lastUpdate: 5,
    star: false
  }; 
  repositories.push(newRepo)
  renderToDom(repositories)
  formRepo.reset()
}
formRepo.addEventListener('submit', addRepo)
}
