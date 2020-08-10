const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('success')
})

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`);
});
