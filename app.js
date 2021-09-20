//Init Github Client
const github = new Github;

const ui = new UI;

//Search Input

const searchField = document.getElementById('search-field');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', (e) => {

  e.preventDefault();

  if (searchField.value != "") {

    ui.showProfile(searchField.value);

  }
  else {
    //clear profile
  }

});