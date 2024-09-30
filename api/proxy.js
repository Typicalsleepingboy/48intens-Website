export default async (req, res) => {
    const fetch = (await import('node-fetch')).default;
    const apiUrl = 'https://backend.saweria.co/widgets/leaderboard/all'; // URL API yang benar

    try {
        // Mengambil data dari API dengan header yang diperlukan
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Stream-Key': 'b0fc98333cc6becdd18dceef7687ff82', // Tambahkan header di sini
                'Content-Type': 'application/json' // Optional: tambahkan jika diperlukan
            }
        });

        // Memeriksa apakah respons OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Kirimkan data ke klien
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};
