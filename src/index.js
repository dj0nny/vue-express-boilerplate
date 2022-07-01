const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const PORT = process.env.PORT || 5656;

app.listen(PORT, () => {
  console.log(`Server's up at http://localhost:${PORT} 🚀`);
});