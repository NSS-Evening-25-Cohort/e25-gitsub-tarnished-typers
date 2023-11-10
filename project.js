const projectsForm = document.querySelector("#body2");

const projectsToDom = (array) => {
  let domString = "";
  array.forEach((project, i) => {
    domString += ` <div class="">
        <div class="title">
            ${project.title}
        </div>
        <div class="updated">
            ${project.updated}
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

      <button type="submit">submit</button>
    </form>
</div>
`;
  projectsForm.innerHTML = formString;

  const formForProject = document.querySelector("#project-form");

  const addNewProject = (event) => {
    event.preventDefault();
    let projectTitle = document.querySelector(".project-title").value;
    let projectUpdated = new Date();
    let newProject = {
      id: Math.floor(Math.random() * 100000),
      title: projectTitle,
      updated: projectUpdated,
    };
    projects.push(newProject);
    projectsToDom(projects);
    formForProject.reset();
  };
  formForProject.addEventListener("submit", addNewProject);
};
