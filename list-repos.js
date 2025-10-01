const username = 'Wonder-Misheck-Mangwendeza';
const container = document.getElementById('project-list');

// Configuration for repository filtering and display
const config = {
  maxRepos: 6,
  excludeForked: true,
  sortBy: 'updated', // options: 'updated', 'created', 'pushed', 'full_name'
  direction: 'desc' // options: 'asc', 'desc'
};

// Function to format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// Function to get language color (GitHub language colors)
function getLanguageColor(language) {
  const colors = {
    'JavaScript': '#f1e05a',
    'TypeScript': '#2b7489',
    'Python': '#3572A5',
    'Java': '#b07219',
    'C#': '#239120',
    'C++': '#f34b7d',
    'PHP': '#4F5D95',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Vue': '#4FC08D',
    'React': '#61DAFB',
    'Angular': '#DD0031',
    'Flutter': '#02569B',
    'Dart': '#00B4AB'
  };
  return colors[language] || '#586069';
}

// Function to create repository card
function createRepoCard(repo) {
  const lastUpdated = formatDate(repo.updated_at);
  const languageColor = getLanguageColor(repo.language);
  
  return `
    <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div class="flex justify-between items-start mb-3">
        <h3 class="text-xl font-semibold text-gray-800 truncate">
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" 
             class="hover:text-blue-600 transition-colors duration-200">
            ${repo.name}
          </a>
        </h3>
        ${repo.private ? '<span class="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">Private</span>' : ''}
      </div>
      
      <p class="text-gray-600 text-sm mb-4 line-clamp-2">
        ${repo.description || 'No description available'}
      </p>
      
      <div class="flex items-center justify-between text-sm text-gray-500">
        <div class="flex items-center space-x-4">
          ${repo.language ? `
            <span class="flex items-center">
              <span class="w-3 h-3 rounded-full mr-1" style="background-color: ${languageColor}"></span>
              ${repo.language}
            </span>
          ` : ''}
          
          ${repo.stargazers_count > 0 ? `
            <span class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              ${repo.stargazers_count}
            </span>
          ` : ''}
          
          ${repo.forks_count > 0 ? `
            <span class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 7l3.707-3.707a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              ${repo.forks_count}
            </span>
          ` : ''}
        </div>
        
        <span class="text-xs">Updated ${lastUpdated}</span>
      </div>
      
      <div class="mt-4 flex space-x-2">
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition-colors duration-200">
          <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z" clip-rule="evenodd"/>
          </svg>
          View Code
        </a>
        ${repo.homepage ? `
          <a href="https://github.com/Wonder-Misheck-Mangwendeza?tab=repositories" 
          target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center px-3 py-1 bg-green-600 text-white text-xs rounded-md hover:bg-green-700 transition-colors duration-200">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd"/>
              <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd"/>
            </svg>
            Live Demo
          </a>
        ` : ''}
      </div>
    </div>
  `;
}

// Function to show loading state
function showLoading() {
  container.innerHTML = `
    <div class="col-span-full flex items-center justify-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      <span class="ml-3 text-gray-600">Loading projects...</span>
    </div>
  `;
}

// Function to show error state
function showError(message) {
  container.innerHTML = `
    <div class="col-span-full text-center py-12">
      <div class="text-red-500 mb-2">
        <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>
      </div>
      <p class="text-gray-600">${message}</p>
      <button onclick="loadRepositories()" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
        Try Again
      </button>
    </div>
  `;
}

// Main function to load repositories
async function loadRepositories() {
  try {
    showLoading();
    
    // Fetch repositories
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=${config.sortBy}&direction=${config.direction}&per_page=100`
    );
    
    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }
    
    const repos = await response.json();
    
    // Filter repositories
    let filteredRepos = repos;
    
    if (config.excludeForked) {
      filteredRepos = filteredRepos.filter(repo => !repo.fork);
    }
    
    // Limit the number of repositories
    filteredRepos = filteredRepos.slice(0, config.maxRepos);
    
    if (filteredRepos.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12">
          <p class="text-gray-600">No repositories found.</p>
        </div>
      `;
      return;
    }
    
    // Render repositories
    container.innerHTML = filteredRepos.map(createRepoCard).join('');
    
  } catch (error) {
    console.error('Error loading repositories:', error);
    showError('Could not load projects. Please try again later.');
  }
}

// Initialize the repository loading when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadRepositories);
} else {
  loadRepositories();
}
