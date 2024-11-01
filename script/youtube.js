const API_URL = 'https://api.crstlnz.my.id/api/jkt48_youtube';
let isLoading = false;

function formatViews(viewCount) {
  if (viewCount >= 1000000) {
    return (viewCount / 1000000).toFixed(1) + 'M views';
  } else if (viewCount >= 1000) {
    return (viewCount / 1000).toFixed(1) + 'K views';
  }
  return viewCount + ' views';
}

function formatDate(isoDate) {
  const date = new Date(isoDate);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

function createVideoCard(video) {
  const card = document.createElement('div');
  card.className = 'youtube-card';
  card.onclick = () => {
    window.open(video.url, '_blank');
  };

  card.innerHTML = `
      <div class="thumbnail-container">
          <img src="${video.thumbnails.high.url}" alt="${video.title}">
      </div>
      <div class="profile-container">
          <img src="${video.profilePict.medium.url}" alt="${video.channelTitle}">
          <h3 class="video-title">${video.title}</h3>
      </div>
      <div class="video-content">
          <h3 class="channel-title">${video.channelTitle}</h3>
          <div class="video-info">
              <span class="video-views">${video.statistics.viewCount} Views</span> 
          </div>
      </div>
  `;

  return card;
}

async function fetchVideos() {
  if (isLoading) return;
  isLoading = true;

  const loadingDiv = document.getElementById('loading');
  loadingDiv.style.display = 'block';

  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    const container = document.getElementById('ytupcoming');

    const limitedData = data.slice(0, 4);

    limitedData.forEach(video => {
      const card = createVideoCard(video);
      container.appendChild(card);
    });

  } catch (error) {
    console.error('Error fetching videos:', error);
    const container = document.getElementById('ytupcoming');
    container.innerHTML += `<div class="error">Sorry error loading youtube 😭</div>`;
  } finally {
    isLoading = false;
    loadingDiv.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchVideos();
});
