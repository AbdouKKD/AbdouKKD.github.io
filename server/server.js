import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

// Proxy route for football data
app.get('/api/matches', async (req, res) => {
  try {
    const apiUrl = 'https://api.football-data.org/v4/matches';
    const apiKey = '6c6899a2af46457dbf6d2932a112ec95';  // Replace with your Football-Data API key

    // Fetch data from football-data.org
    const response = await axios.get(apiUrl, {
      headers: {
        'X-Auth-Token': apiKey,
      },
    });

    // Send the response data to the frontend
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Football-Data API:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});