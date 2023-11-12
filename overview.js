
//moved renderOverview to main.js 
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
