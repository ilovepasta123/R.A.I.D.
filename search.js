const searchBox = document.getElementById('searchBox');
const members = document.querySelectorAll('#memberList li');

searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase();
  members.forEach(member => {
    const name = member.textContent.toLowerCase();
    const id = member.dataset.id.toLowerCase();
    if (name.includes(query) || id.includes(query)) {
      member.style.display = '';
    } else {
      member.style.display = 'none';
    }
  });
});
