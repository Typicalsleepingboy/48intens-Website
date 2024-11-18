// SHOWROOM LIVE LIMIT

document.addEventListener("DOMContentLoaded", function () {
  const sumber = 'https://api.crstlnz.my.id/api/now_live?group=jkt48';

  fetch(sumber)
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector('.card-nowlive-container');
      const liveMembers = data.filter(member => member.started_at);
      const liveCount = liveMembers.length;
      const liveCountText = liveCount === 0 ? '0 member' : `${liveCount} member`;
      document.getElementById('liveCount').textContent = `⭐ Sedang live: ${liveCountText}`;

      if (liveCount === 0) {
        document.getElementById('noLiveMessage').textContent = 'Tidak ada yang live 😭😭';
      } else {
        document.getElementById('noLiveMessage').textContent = '';
        container.innerHTML = ''; // Clear existing content

        const idnurl = 'https://www.idn.app/';
        liveMembers.forEach(nlive => {


          const card = document.createElement('div');
          card.classList.add('card-nowlive');

          const img = document.createElement('img');
          img.src = nlive.img;
          img.classList.add('card-img-top');
          card.appendChild(img);

          const cardBody = document.createElement('div');
          cardBody.classList.add('card-body');

          const title = document.createElement('h5');
          title.classList.add('card-title');
          title.textContent = `Name: ${nlive.name}`;
          cardBody.appendChild(title);

          const liveType = document.createElement('p');
          liveType.classList.add('card-text');
          liveType.textContent = `Live: ${nlive.type}`;
          cardBody.appendChild(liveType);

          if (nlive.type === 'showroom') {
            const showroomUrl = 'https://www.showroom-live.com/r/';
            const showroomLink = document.createElement('a');
            showroomLink.classList.add('btn-live-up', 'btn-primary', 'mx-2');
            showroomLink.textContent = '⭐ Open in Sr';
            showroomLink.href = showroomUrl + nlive.url_key;
            cardBody.appendChild(showroomLink);

            nlive.streaming_url_list.forEach(urlObj => {
              if (urlObj.label === 'original quality') {
                const fullscreenBtn = document.createElement('a');
                fullscreenBtn.classList.add('btn-live', 'btn-primary', 'mx-2');
                fullscreenBtn.textContent = '⭐ Fullscreen';
                fullscreenBtn.href = `showroom.html#${urlObj.url}`;
                cardBody.appendChild(fullscreenBtn);
              }
            });
          } else if (nlive.type === 'idn') {
            const idnLink = document.createElement('a');
            idnLink.classList.add('btn-live', 'btn-primary', 'mx-2');
            idnLink.textContent = '⭐ Open in IDN';
            idnLink.href = `${idnurl}${nlive.url_key}/live/${nlive.slug}`;
            cardBody.appendChild(idnLink);

            nlive.streaming_url_list.forEach(urlObj => {
              const fullscreenBtn = document.createElement('a');
              const ProxyUrl = 'https://jkt48showroom-api.my.id/proxy?url=';
              fullscreenBtn.classList.add('btn-live', 'btn-primary', 'mx-2');
              fullscreenBtn.textContent = '⭐ Fullscreen';
              fullscreenBtn.href = `showroom.html#${ProxyUrl}${urlObj.url}`;
              cardBody.appendChild(fullscreenBtn);
            });

          }

          card.appendChild(cardBody);
          container.appendChild(card);
        });
      }
      console.log("Halaman Now Live berhasil di-refresh: " + new Date().toLocaleString());
    })
    .catch(error => console.error('Error fetching NOW LIVE:', error));
});


// SHOWROOM LIVE NO LIMIT

document.addEventListener("DOMContentLoaded", function () {
  const sumber = 'https://api.crstlnz.my.id/api/now_live?group=jkt48';

  fetch(sumber)
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector('.card-nowlive-container-up');
      const liveMemberNameElement = document.getElementById('liveMemberName');
      const liveMembers = data.filter(member => member.started_at);
      const liveCount = liveMembers.length;

      if (liveCount === 0) {
        document.getElementById('noLiveMessage').textContent = 'Tidak ada yang live 😭😭';
      } else {
        document.getElementById('noLiveMessage').textContent = '';
        container.innerHTML = ''; // Clear existing content

        const idnurl = 'https://www.idn.app/';
        liveMembers.forEach(nlive => {
          const card = document.createElement('div');
          card.classList.add('card-nowlive-up');

          const img = document.createElement('img');
          img.src = nlive.img;
          img.classList.add('card-img-top');
          card.appendChild(img);

          const cardBody = document.createElement('div');
          cardBody.classList.add('card-body-nowlive');

          // Update Nama Member sesuai
          if (liveMemberNameElement) {
            liveMemberNameElement.textContent = `⭐ ${nlive.name}`;
          }

          const title = document.createElement('h5');
          title.classList.add('card-title');
          title.textContent = `⭐ Name: ${nlive.name}`;
          cardBody.appendChild(title);

          const liveType = document.createElement('p');
          liveType.classList.add('card-text');
          liveType.textContent = `Live: ${nlive.type}`;
          cardBody.appendChild(liveType);

          if (nlive.type === 'showroom') {
            const showroomUrl = 'https://www.showroom-live.com/r/';
            const showroomLink = document.createElement('a');
            showroomLink.classList.add('btn-live', 'btn-primary', 'x-2');
            showroomLink.textContent = '⭐ Open in Sr';
            showroomLink.href = showroomUrl + nlive.url_key;
            showroomLink.target = '_blank';  // Open in new tab
            cardBody.appendChild(showroomLink);

            nlive.streaming_url_list.forEach(urlObj => {
              if (urlObj.label === 'original quality') {
                const fullscreenBtn = document.createElement('a');
                fullscreenBtn.classList.add('btn-live', 'btn-primary', 'x-2');
                fullscreenBtn.textContent = '⭐ Fullscreen';
                fullscreenBtn.href = `showroom.html#${urlObj.url}`;
                fullscreenBtn.target = '_blank';  
                cardBody.appendChild(fullscreenBtn);
              }
            });
          } else if (nlive.type === 'idn') {
            const idnLink = document.createElement('a');
            idnLink.classList.add('btn-live', 'btn-primary', 'x-2');
            idnLink.textContent = '⭐ Open in IDN';
            idnLink.href = `${idnurl}${nlive.url_key}/live/${nlive.slug}`;
            idnLink.target = '_blank';  
            cardBody.appendChild(idnLink);

            nlive.streaming_url_list.forEach(urlObj => {
              const fullscreenBtn = document.createElement('a');
              const ProxyUrl = 'https://jkt48showroom-api.my.id/proxy?url=';
              fullscreenBtn.classList.add('btn-live', 'btn-primary', 'x-2');
              fullscreenBtn.textContent = '⭐ Fullscreen';
              fullscreenBtn.href = `showroom.html#${ProxyUrl}${urlObj.url}`;
              fullscreenBtn.target = '_blank';  
              cardBody.appendChild(fullscreenBtn);
            });
          }

          card.appendChild(cardBody);
          container.appendChild(card);
        });
      }
      console.log("Halaman Now Live berhasil di-refresh: " + new Date().toLocaleString());
    })
    .catch(error => console.error('Error fetching NOW LIVE:', error));
});
