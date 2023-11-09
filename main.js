//dynamic buttons

const navBar = document.querySelector("#navBar");
const btnOverView = document.createElement("BUTTON");
const btnRepostories = document.createElement("BUTTON");
const btnProjects = document.createElement("BUTTON");
const btnPackages = document.createElement("BUTTON");

btnOverView.innerHTML = `<img src="images/OverviewIcon.png" alt="overview Icon" width="25" height="25">Overview`;
btnOverView.id = "overview";
btnOverView.className = "btn btn-outline-light";
btnOverView.type = "button";
btnOverView.onclick = function(){alert("Dynamic Overview button Clicked")};

btnRepostories.innerHTML=`<img src="images/RepositoriesIcon.png" alt="repositories Icon" width="25" height="25">Repositories`;
btnRepostories.id = "repositories";
btnRepostories.className = "btn btn-outline-light";
btnRepostories.type = "button";
btnRepostories.onclick = function(){alert("Dynamic Repositories button Clicked")};

btnProjects.innerHTML=`<img src="images/ProjectsIcon.png" alt="projects Icon" width="25" height="25">Projects`;
btnProjects.id = "projects";
btnProjects.className = "btn btn-outline-light";
btnProjects.type = "button";
btnRepostories.onclick = function(){alert("Dynamic Projects button Clicked")};

btnPackages.innerHTML=`<img src="images/PackagesIcon.png" alt="packages Icon" width="25" height="25">Packages`;
btnPackages.id = "packages";
btnPackages.className = "btn btn-outline-light";
btnPackages.type = "button";
btnRepostories.onclick = function(){alert("Dynamic Packages button Clicked")};

navbuttons = [btnOverView, btnRepostories, btnProjects, btnPackages]

navbuttons.forEach(element => {
  navBar.appendChild(element);
});
