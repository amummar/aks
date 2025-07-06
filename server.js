import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Initialize Express app
const app = express();

// Use Azure-assigned port or default to 3000
const PORT = process.env.PORT || 3000;

// Resolve current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for root requests
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Example API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Node.js 22!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
