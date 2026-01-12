// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Middleware to parse JSON
// app.use(express.json());

// // Simple route
// app.get('/', (req, res) => {
//   res.send('Hello, Node.js World!');
// });

// // Example API route
// app.post('/data', (req, res) => {
//   const { name } = req.body;
//   res.json({ message: `Hello, ${name}!` });
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('kahaf sameer');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});