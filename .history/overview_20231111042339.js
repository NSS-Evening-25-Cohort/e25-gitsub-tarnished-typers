document.addEventListener('DOMContentLoaded', function () {
  const repositories = [
    // ... (your repository data here)
  ];

  function createCard(title, tags, stars, forks, issues) {
    const card = document.createElement('div');
    card.classList.add('col-md-6', 'mb-4'); // Bootstrap's grid system and margin-bottom

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

  // Render repository cards inside the "Output section 1"
  renderCardsToDOM(repositories);
});
