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

        if (!response.ok) {
            const errorMessage = await response.text();
            console.error(`Response Error (${response.status}):`, errorMessage);
            return res.status(response.status).json({ 
                error: `Failed to fetch data: ${response.statusText}`,
                details: errorMessage
            });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};