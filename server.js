const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const api = require('./Develop/routes/apiRoutes');
const html = require('./Develop/routes/htmlRoutes');

app.use(express.static('public'));
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api', api);
app.use('/', html);

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT} 🚀`)
    );
