var Hapi = require("@hapi/hapi");
var Inert = require('@hapi/inert');

const routes = require('./routes');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register(Inert);

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();
