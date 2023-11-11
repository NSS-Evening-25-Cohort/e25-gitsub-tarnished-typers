document.addEventListener("DOMContentLoaded", function() {
  const packForm = document.querySelector("#body2");

  const overviewToDom = (array) => {
      let domString = "";

      for (let i = 0; i < array.length; i++) {
          domString += `<div class="card packageStyle" style="width: 18rem;">
              <div class="card-body">
                  <h5 class="card-title">${array[i].name}</h5>
                  <p class="card-text">${array[i].description}</p>
                  <button class="learnMore">Learn More</button>
              </div>
          </div>`;
      }
      packForm.innerHTML = domString; // Update this line
  }

  // Assuming overview is defined elsewhere in your code
  overviewToDom(overview);
});
