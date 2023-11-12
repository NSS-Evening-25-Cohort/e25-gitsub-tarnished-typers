document.addEventListener('DOMContentLoaded', function () {

  function createCard(title, tags, stars, forks, issues) {
    const card = document.createElement('div');
    card.classList.add('col-md-6', 'mb-4');
  
    const defaultTitle = 'Untitled Repo'; // Default title when not provided
  
    const cardTitle = title ? title : defaultTitle;
  
    const tagsString = Array.isArray(tags) ? tags.join(', ') : 'No tags';
  
    card.innerHTML = `
      <div class="card" id="pin">
        <div class="card-body">
          <h5 class="card-title">${cardTitle}</h5>
          <p class="card-text">Tags: ${tagsString}</p>
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

  // Render form in "Output section 2"
  const formDiv = document.getElementById('body2');
  const formHTML = `
    <div class="mb-3">
      <legend>Pin a new repo</legend>
      <div id="emailHelp" class="form-text">Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.</div>
      <label for="exampleFormControlInput1" class="form-label">Pinned Repo Name</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Example 1">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Description</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-success" id="form-submit">Pin Repo</button>
    </div>
  `;
  formDiv.innerHTML = formHTML;

  const formSubmitBtn = document.getElementById('form-submit');
  formSubmitBtn.addEventListener('click', addNewCard);

  function addNewCard() {
    const repoNameInput = document.getElementById('exampleFormControlInput1');
    const descriptionInput = document.getElementById('exampleFormControlTextarea1');

    const repoName = repoNameInput.value.trim();
    const description = descriptionInput.value.trim();

    if (repoName && description) {
      const newCard = createCard(repoName, [], 0, 0, 0); 
      renderCardsToDOM([newCard]);

      repositories.push({
        id: repositories.length + 1,
        title: repoName,
        tags: [],
        stars: 0,
        forks: 0,
        issues: 0,
        lastUpdate: 0,
        star: false
      });

      repoNameInput.value = '';
      descriptionInput.value = '';
    } else {
      console.error('Please enter both the Repo Name and Description.');
    }
  }
});
