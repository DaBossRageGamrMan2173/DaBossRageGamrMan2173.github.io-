touch createRepo.js

const axios = require('axios');

const createRepo = async (repoName) => {
  const token = 'YOUR_GITHUB_ACCESS_TOKEN';
  const url = 'https://api.github.com/user/repos';

  const headers = {
    'Authorization': `token ${token}`,
    'Accept': 'application/vnd.github.v3+json'
  };

  const data = {
    name: repoName,
    private: false,
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log('Repository created:', response.data.html_url);
  } catch (error) {
    console.error('Error creating repository:', error.response.data);
  }
};

const repos = ['card-game-frontend', 'card-game-backend'];

repos.forEach(repo => createRepo(repo));

cd path/to/your/create-repo-script
