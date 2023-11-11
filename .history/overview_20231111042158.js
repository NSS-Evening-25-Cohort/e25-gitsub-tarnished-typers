document.addEventListener('DOMContentLoaded', function () {
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
    {
      id: 1,
      name: "RubyGems",
      description: "standard format for distributing Ruby programs and libraries",
    },
    {
      id: 1,
      name: "npm",
      description: "makes it easy for developers to share and reuse code",
    },
    {
      id: 1,
      name: "Containers",
      description: "single place for your team to manage Docker images",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Week 1 Project",
      updated: "5 weeks ago"
    },
    {
      id: 2,
      title: "Week 2 Project",
      updated: "4 weeks ago"
    },
    {
      id: 3,
      title: "Week 3 Project",
      updated: "3 weeks ago"
    },
    {
      id: 4,
      title: "Week 4 Project",
      updated: "2 weeks ago"
    },
    {
      id: 5,
      title: "Week 5 Project",
      updated: "1 week ago"
    },
  ];

  const repositories = [
    {
      id: 1,
      title: "INDIVIDUAL-PROJECT-sorting-hat",
      tags: ["Html","CSS","Javascript", "Harry Potter","Magic"],
      stars: 6,
      forks: 1,
      issues: 1,
      lastUpdate: 5,
      star: false
    },
    {
      id: 2,
      title: "ASSIGNMENT-pet-adoption",
      tags: ["Html","CSS","Javascript", "Pets","Fur Babies"],
      stars: 6,
      forks: 1,
      issues: 1,
      lastUpdate: 5,
      star: false
    },
    {
      id: 3,
      title: "LAB-calculator",
      tags: ["Html","CSS","Javascript", "logic","wut"],
      stars: 6,
      forks: 1,
      issues: 1,
      lastUpdate: 5,
      star: false
    },
    {
      id: 4,
      title: "LAB-HTML-Resume",
      tags: ["Html","CSS","Javascript", "Just Starting","Git It"],
      stars: 6,
      forks: 1,
      issues: 1,
      lastUpdate: 5,
      star: false
    },
    {
      id: 5,
      title: "LAB-word-counter",
      tags: ["Html","CSS","Javascript", "1,2,3,4,5 ... 11, 12","tip-toes"],
      stars: 6,
      forks: 1,
      issues: 1,
      lastUpdate: 5,
      star: false
    },
  ];

  const repoLanguage = ["Javascript", "Python", "Danjgo", "React"];
  const tags = ["awesome", "!", "Saucy", "!?"];

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
    const container = document.createElement('div');
    container.classList.add('row');

    dataArray.forEach(data => {
      const card = createCard(data.title, data.tags, data.stars, data.forks, data.issues);
      container.appendChild(card);
    });

    document.body.appendChild(container);
  }

  // Render repository cards
  renderCardsToDOM(repositories);
});
