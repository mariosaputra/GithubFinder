//Init Github Client
const github = new Github;

let searchUsername = '';

//Search Input

const searchField = document.getElementById('search-field');
const searchButton = document.getElementById('search-button');

searchField.addEventListener('keyup', (e) => {
  searchUsername = e.target.value;

})

searchButton.addEventListener('click', (e) => {

  e.preventDefault();

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
            console.log(res.profileData.name);
        }
      });
  }
  else {
    //Clear Profile
  }

})