document.addEventListener('DOMContentLoaded', function () {

  function createCard(title, tags, stars, forks, issues) {
    const card = document.createElement('div');
    card.classList.add('col-md-6', 'mb-4');

    card.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">Tags: ${tags.join(', ')}</p>
          <p class="card-text">Stars: ${stars}, Forks: ${forks}, Issues: ${issues}</p>
        </div>
      </div>
    `;
    return card;
  }

  function renderCardsToDOM(dataArray) {
    const outputSection1 = document.getElementById('body1');

    dataArray.forEach(data => {
      const card = createCard(data.title, data.tags, data.stars, data.forks, data.issues);
      outputSection1.appendChild(card);
    });
  }

  // Render to "Output section 1"
  renderCardsToDOM(repositories);
});

  // Render form in "Output section 2"
  const formDiv = document.getElementById('body2');
  const formHTML = `
    <div class="mb-3">
    <legend>Create a new project</legend>
    <div id="emailHelp" class="form-text">Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.</div>
      <label for="exampleFormControlInput1" class="form-label">Project Board Name</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Example 2">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Description</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-success">Create Project</button>
    </div>
  `;
  formDiv.innerHTML = formHTML;
