async function fetchCDNPictureData() {
    try {
        const response = await fetch('script/cdnpicture.json');
        if (!response.ok) {
            throw new Error('Failed to fetch CDN picture data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching CDN picture data:', error);
        return []; 
    }
}

async function nextTheater() {
    try {
        const response = await fetch('https://api.crstlnz.my.id/api/event');
        const data = await response.json();
        const upcomingContainer = document.getElementById('upcoming');
        upcomingContainer.innerHTML = '';

        const cdnpictureResponse = await fetch('script/cdnpicture.json');
        const cdnpictureData = await cdnpictureResponse.json();

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        if (!data.theater || data.theater.upcoming.length === 0) {
            document.getElementById('noTheaterMessage').textContent = 'Tidak ada theater 😭😭';
            document.getElementById('noTheaterMessage').style.display = 'block';
            return;
        }

        for (const upcoming of data.theater.upcoming) {
            const matchingPoster = cdnpictureData.find(cdnpicture => cdnpicture.setlist.trim() === upcoming.title.trim());
            const posterUrl = matchingPoster ? matchingPoster.banner : upcoming.banner;

            const showDate = new Date(upcoming.date);
            const optionsDate = { timeZone: 'Asia/Jakarta', year: 'numeric', month: 'long', day: 'numeric' };
            const optionsTime = { timeZone: 'Asia/Jakarta', hour: 'numeric', minute: 'numeric' };
            const showDateWIB = showDate.toLocaleString('id-ID', optionsDate);
            const showTimeWIB = showDate.toLocaleString('id-ID', optionsTime);
            const seitansaiNames = upcoming.seitansai && upcoming.seitansai.length > 0 ? upcoming.seitansai.map(member => member.name).join(', ') : '';
            const seitansaiHTML = seitansaiNames ? `<h3>🎂 Seintansai: ${seitansaiNames}</h3>` : '';

            const dateText = showDate.toDateString() === today.toDateString() ? 
                (showDate <= new Date() ? 'Sedang Berlangsung' : 'Hari ini') : 
                showDate.toDateString() === tomorrow.toDateString() ? 'Besok' : showDateWIB;

            const timeNow = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
            const isOngoing = showDate.toDateString() === today.toDateString() && showTimeWIB <= timeNow;
            const dateTextFinal = isOngoing ? 'Sedang Berlangsung' : dateText;

            const theaterCard = document.createElement('div');
            theaterCard.classList.add('card-up');

            theaterCard.innerHTML = `
                <a href="dtheater.html?id=${upcoming.id}" class="btnn">
                    <h2>${dateTextFinal}</h2>
                    <img src="${posterUrl}" class="poster-event" loading="lazy"><br>
                    <h3>🎪 Theater: ${upcoming.title}</h3>
                    <h3>🗓️ Tanggal Show: ${showDateWIB}</h3>
                    <h3>⏰ Start Show: ${showTimeWIB} WIB</h3>
                    <h3>⭐ Total Member : ${upcoming.member_count} member yang tampil</h3>
                    ${seitansaiHTML}
                    <br><h1>Cek Info</h1>
                </a>
            `;
            upcomingContainer.appendChild(theaterCard);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function getTheaterId(url) {
    if (!url) return null;
    return url;
}

document.addEventListener("DOMContentLoaded", function () {
    nextTheater();
});
