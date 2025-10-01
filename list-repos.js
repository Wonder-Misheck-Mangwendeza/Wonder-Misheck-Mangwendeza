const username = 'Wonder-Misheck-Mangwendeza'; // <- replace
const container = document.getElementById('project-list');

fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
  .then(r => r.json())
  .then(repos => {
    container.innerHTML = repos.map(repo => `
      <div class="card">
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <p>${repo.description || ''}</p>
        <p>★ ${repo.stargazers_count} · ${repo.language || '—'}</p>
        ${repo.homepage ? `<p><a href="${repo.homepage}" target="_blank">Live demo</a></p>` : ''}
      </div>
    `).join('');
  })
  .catch(err => {
    console.error(err);
    container.textContent = 'Could not load projects — try again later.';
  });
