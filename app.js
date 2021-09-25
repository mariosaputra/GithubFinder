//Init Github Client
const github = new Github;

const ui = new UI;

//Search Input

const searchField = document.getElementById('search-field');
const searchButton = document.getElementById('search-button');
const navbar = document.getElementById('navbar');

navbar.addEventListener('click', (e) => {
  document.location.reload();
});

searchButton.addEventListener('click', (e) => {

  e.preventDefault();

  if (searchField.value != "") {

    ui.showProfile(searchField.value);

  }
  else {
    ui.clear();
  }

});