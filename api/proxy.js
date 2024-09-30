export default async (req, res) => {
    const fetch = (await import('node-fetch')).default;
    const apiUrl = 'https://backend.saweria.co/widgets/leaderboard/all';

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Stream-Key': 'b0fc98333cc6becdd18dceef7687ff82',
                'Content-Type': 'application/json',
            }
        });

        // Menangani respons tidak ok
        if (!response.ok) {
            const errorMessage = await response.text(); // Ambil pesan kesalahan
            console.error('Response Error:', errorMessage); // Log pesan kesalahan
            return res.status(response.status).json({ error: `Failed to fetch data: ${errorMessage}` });
        }

        const data = await response.json(); // Parsing data JSON
        res.status(200).json(data); // Kirim data ke klien
    } catch (error) {
        console.error('Error fetching data:', error); // Log kesalahan
        res.status(500).json({ error: 'Internal Server Error' }); // Mengembalikan kesalahan server
    }
};
