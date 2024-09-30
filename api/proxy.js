export default async (req, res) => {
    const fetch = (await import('node-fetch')).default;
    const apiUrl = await fetch('https://backend.saweria.co/widgets/leaderboard/all', {
        headers: {
            'Stream-Key': 'b0fc98333cc6becdd18dceef7687ff82', 
        }
    });
    try {
        const response = await fetch(apiUrl);
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
