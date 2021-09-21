class UI {

  showProfile(username) {

    this.clear();

    github.getUser(username)
      .then(res => {

        if (res.profileData.message === "Not Found") {

          //Show alert
          this.showAlert();
          
        }
        else {      

          //replace null text  
          this.replaceNull(res.profileData);

          //remove time
          res.profileData.created_at = res.profileData.created_at.slice(0,10);

          let output =
            `
              <div class="card card-body mb-3">
                <div class="row">   
                  <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${res.profileData.avatar_url}"/>
                    <div class="d-grid col-12 mx-auto">
                      <a class="btn btn-primary mb-4" type="button" href="${res.profileData.html_url}">View Profile</a>
                    </div>
                  </div>
                  <div class="col-md-9">
                    <span class="badge bg-primary">Public Repost : ${res.profileData.public_repos}</span>
                    <span class="badge bg-secondary">Public Gist : ${res.profileData.public_gist}</span>
                    <span class="badge bg-success">Followers : ${res.profileData.followers}</span>
                    <span class="badge bg-info">Following : ${res.profileData.following}</span>
                    <br/>
                    <br/>
                    <ul class="list-group">
                      <li class="list-group-item bg-light text-dark mb-1">Company : ${res.profileData.company}</li>
                      <li class="list-group-item bg-light text-dark mb-1">Blog : ${res.profileData.blog}</li>
                      <li class="list-group-item bg-light text-dark mb-1">Location : ${res.profileData.location}</li>
                      <li class="list-group-item bg-light text-dark mb-1">Member Since : ${res.profileData.created_at}</li>                
                    </ul>
                  </div>           
                </div>
              </div>   
            `;

          document.getElementById('profile').innerHTML = output;
        }
      })
  }

  showAlert() {

    this.clear();

    const searchContainer = document.getElementById('search-container');

    let alert = document.createElement("div");
    alert.className = "alert alert-warning mt-3";
    alert.innerHTML = "User not found!";

    searchContainer.appendChild(alert); 

  }

  clear() {

    document.getElementById('profile').innerText = '';
    
    const alertElement = document.querySelector('.alert'); 
    
    if(alertElement)
    { 
      alertElement.remove();
    }

  }

  replaceNull(obj) {
     Object.keys(obj).forEach(key => {
        if(!obj[key]){
          obj[key] = '-';
        }
    });   
  }

}