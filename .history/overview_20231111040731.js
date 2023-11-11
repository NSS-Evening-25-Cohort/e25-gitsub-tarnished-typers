const app = document.querySelector("#body1")


const overviewToDom = (array) => {
  let domString = ""

  for (let i = 0; i < array.length; i++) {
    domString += `<div class="card packageStyle" id="body1" style="width: 18rem;">

    <div class="card-body">
      <h5 class="card-title">${array[i].name}</h5>
      <p class="card-text">${array[i].description}</p>
      <button class="learnMore">Learn More</button>
    </div>
  </div>`
  }
  app.innerHTML = domString
}
overviewToDom(overview)
