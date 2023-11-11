//dynamic buttons

const navBar = document.querySelector("#navBar");
const btnOverView = document.createElement("BUTTON");
const btnRepostories = document.createElement("BUTTON");
const btnProjects = document.createElement("BUTTON");
const btnPackages = document.createElement("BUTTON");
const outputTop = document.querySelector("#body1");
const outputForm = document.querySelector("#body2");


btnOverView.innerHTML = `<img src="images/OverviewIcon.png" alt="overview Icon" width="25" height="25">Overview`;
btnOverView.id = "overview";
btnOverView.className = "btn btn-outline-light";
btnOverView.type = "button";
// btnOverView.onclick = function(){alert("Dynamic Overview button Clicked")};

btnRepostories.innerHTML=`<img src="images/RepositoriesIcon.png" alt="repositories Icon" width="25" height="25">Repositories`;
btnRepostories.id = "repositories";
btnRepostories.className = "btn btn-outline-light";
btnRepostories.type = "button";
// btnRepostories.onclick = function(){alert("Dynamic Repositories button Clicked")};

btnProjects.innerHTML=`<img src="images/ProjectsIcon.png" alt="projects Icon" width="25" height="25">Projects`;
btnProjects.id = "projects";
btnProjects.className = "btn btn-outline-light";
btnProjects.type = "button";
// btnProjects.onclick = function(){alert("Dynamic Projects button Clicked")};

btnPackages.innerHTML=`<img src="images/PackagesIcon.png" alt="packages Icon" width="25" height="25">Packages`;
btnPackages.id = "packages";
btnPackages.className = "btn btn-outline-light";
btnPackages.type = "button";
// btnPackages.onclick = function(){alert("Dynamic Packages button Clicked")};

navbuttons = [btnOverView, btnRepostories, btnProjects, btnPackages]

navbuttons.forEach(element => {
  navBar.appendChild(element);
});

const tagList = (array) => {
  tempArray = [];
  tagString = "";
  array.forEach(element => {
    tagString = `<button>${element}</button>`
    tempArray.unshift(tagString)
  });
  return tempArray;
}

const renderToDom = (array) => {
  let topOutput = "";
  outputTop.innerHTML = topOutput;
  for(object of array){
    topOutput += `
    <div class="card .bg-dark black" style="width: 69rem;">
      <div class="card-body .bg-dark">
        <h5 class="card-title">${object.title}</h5>
        <p class="card-text">Some quick example text to describe the repo card's content.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" class="btn btn-primary flex-row-reverse btn-secondary"><img src="images/starIcon.png" alt="star icon Icon" width="25" height="25">Star</a></p>        
        <div class="tags small ">${tagList(object.tags)}</div>
        <div class="small margin-left: ($spacer * .25)"><span>Project language  &nbsp;&nbsp;&nbsp;   </span><span> <img src="images/starIcon.png" alt="star icon Icon" width="25" height="25"> ${object.stars}     </span><span><img src="images/forkIcon.png" alt="fork icon" width="25" height="25">  ${object.forks}</span><span>, &nbsp;   &  &nbsp;    ${object.issues} issue(s) needs help!  &nbsp;&nbsp; </span><span>  &nbsp;&nbsp;  The repo was last updated ${object.lastUpdate} days ago</span></div>
      </div>
    </div>
    <hr>
    `
  }
  outputTop.innerHTML = topOutput;
  console.log(outputTop);
}

const renderOverview = () => {
  console.log("did i render the correct thing?")
  let topOutput = "";
  outputTop.innerHTML = topOutput;
  
    topOutput = `
    <div class="rcorners">
      <h4>Ranni McColbupalenick</h4>
      <h2>Hi, I'm Ranni McColbupalenick &#128075; &#128187;</h2>
        <div id="overviewDiv">
          <div class="inline">
            <h1>Ranni McColbupalenick</h1>
            <h4 >slayer of gods, software and spells, parry =()=> reposte</h4>          
          </div>
          <div class="inline">
            <img src="images/https_zoo_replicate_dev head shot of a professional female computer scientist SDXL.png" alt="Ranni Pic" width="250" height="250">
          </div>          
        </div>
      </div>
    <hr>
    `

  outputTop.innerHTML = topOutput;
  console.log(topOutput);
}


navBar.addEventListener("click", (event) => {

  if(event.target.id.includes("repositories")){
      outputForm.innerHTML = "";
      renderToDom(repositories);
  }  else   if(event.target.id.includes("packages")){
    console.log(packages);
    packagesToDom(packages);
    formToDom()
} else if (event.target.id.includes("projects")){
  projectsToDom(projects)
  projectFormToDom()
} else if (event.target.id.includes("overview")){
  console.log("Overview?")
  renderOverview();
  
} 

});
