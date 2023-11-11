const projectsForm = document.querySelector("#body2");

const projectsToDom = (array) => {
  let domString = "";
  array.forEach((project, i) => {
    domString += ` <div class="card" id="projectcards" >
        
        <div class="project-card-body">
        <div class="title">
        @McColbupalenick's ${project.title}
        </div>
        <div class="description">
        ${project.description}
        </div>
        <div class="updated">
            ${project.updated}
        </div>
      </div>
     </div>
        
        `;
  });

  app.innerHTML = domString;
};

const projectFormToDom = () => {
  let formString = "";
  projectsForm.innerHTML = formString;
  formString += `   <div class="projects-form">
  <form action="#" id="project-form">
      <input
        class="project-title"
        type="text"
        name="title"
        placeholder="New Project Title"
        required
      />

      <input
        class="project-description"
        type="text"
        name="description"
        placeholder="Project description"
        required
      />

      <button class="project-form-button" type="submit">submit</button>
    </form>
</div>
`;
  projectsForm.innerHTML = formString;

  const formForProject = document.querySelector("#project-form");

  const addNewProject = (event) => {
    event.preventDefault();
    let projectTitle = document.querySelector(".project-title").value;
    let projectDescription = document.querySelector(".project-description").value
    let projectUpdated = new Date();
    let newProject = {
      id: Math.floor(Math.random() * 100000),
      title: projectTitle,
      updated: projectUpdated,
      description: projectDescription
    };
    projects.push(newProject);
    projectsToDom(projects);
    formForProject.reset();
  };
  formForProject.addEventListener("submit", addNewProject);
};
