//Init Github Client
github = new Github;

//Search Input

const searchUser = document.getElementById('search-field');

searchUser.addEventListener('keyup', (e) => {
  const searchUsername = e.target.value;

  if(searchUsername != ''){
    //Make Http Call
    github.getUser(searchUsername)
      .then(res => {

        if(res.profileData.message === "Not Found")
        {
            //Show alert
        }
        else
        {
            //Show profile
        }
      });
  }
  else {
    //Clear Profile
  }
})