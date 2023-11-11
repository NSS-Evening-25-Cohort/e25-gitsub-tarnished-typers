const app = document.querySelector("#body1")


// const overviewToDom = (array) => {
//   let domString = ""

//   for (let i = 0; i < array.length; i++) {
//     domString += `<div class="card packageStyle" id="body1" style="width: 18rem;">

//     <div class="card-body">
//       <h5 class="card-title">${array[i].name}</h5>
//       <p class="card-text">${array[i].description}</p>
//       <button class="learnMore">Learn More</button>
//     </div>
//   </div>`
//   }
//   app.innerHTML = domString
// }
// overviewToDom(overview)

function pinned(title, tags, stars, forks) {
  const pin = document.createElement('div');
  pin.classList.add('card');
  pin.innerHTML = `
  <div class="card .bg-dark black" style="width: 69rem;">
    <div class="card-body .bg-dark">
      <h5 class="card-title">${object.title}</h5>
      <p class="card-text">Some quick example text to describe the repo card's content.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" class="btn btn-primary flex-row-reverse btn-secondary"><img src="images/starIcon.png" alt="star icon Icon" width="25" height="25">Star</a></p>        
      <div class="tags small ">${tagList(object.tags)}</div>
      <div class="small margin-left: ($spacer * .25)"><span>Project language  &nbsp;&nbsp;&nbsp;   </span><span> <img src="images/starIcon.png" alt="star icon Icon" width="25" height="25"> ${object.stars}     </span><span><img src="images/forkIcon.png" alt="fork icon" width="25" height="25">  ${object.forks}</span><span>, &nbsp;   &  &nbsp;    ${object.issues} issue(s) needs help!  &nbsp;&nbsp; </span><span>  &nbsp;&nbsp;  The repo was last updated ${object.lastUpdate} days ago</span></div>
    </div>
  </div>
  <hr>
  `;
  return pin;
}

function renderPinToDom(cardElement) {
  const appDiv = document.getElementById('app');
  appDiv.appendChild(cardElement);
}
