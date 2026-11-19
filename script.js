console.log("Javascript is connected");

const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const isActive = searchContainer.classList.toggle('active');

  if (isActive) {
    searchInput.focus();
  } else {
    searchInput.value = '';
  }
});

document.addEventListener('click', (e) => {
  if (!searchContainer.contains(e.target) && searchContainer.classList.contains('active')) {
    searchContainer.classList.remove('active');
  }
});