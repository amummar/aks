import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT;

if (!PORT) {
  console.error("❌ ERROR: Azure didn't assign a PORT.");
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public'), {
  extensions: ['html']
}));

// API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Node.js 22!' });
});

// Serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Catch-all route (optional)
app.get('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
