const app = require('./lib/app');

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    'press Ctrl-C to terminate.'
));
