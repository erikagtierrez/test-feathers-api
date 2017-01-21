'use strict';

const app = require('./app');
const port = app.get('port');
const server = app.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

server.on('listening', () =>
    console.log(`Feathers application started on ${app.get('host')}:${process.env.PORT}`)
);