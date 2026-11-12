console.log("Javascript is connected");

const searchContainer = document.getElementById('searchContainer');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

searchButton.addEventListener('click', (e) => {
  e.stopPropagation();
  searchContainer.classList.toggle('active');
  if (searchContainer.classList.contains('active')) {
    searchInput.focus();
  } else {
    searchInput.blur();
  }
});

document.addEventListener('click', (e) => {
  if (!searchContainer.contains(e.target)) {
    searchContainer.classList.remove('active');
  }
});