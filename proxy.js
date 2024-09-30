const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(cors());

app.get('/top-donors', async (req, res) => {
    try {
      const fetch = (await import('node-fetch')).default;
        const response = await fetch('https://backend.saweria.co/widgets/leaderboard/all', {
            headers: {
                'Stream-Key': 'b0fc98333cc6becdd18dceef7687ff82', 
            }
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: 'Failed to fetch data from Saweria' });
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data from Saweria:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});
