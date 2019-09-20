const Path = require('path');

let routes = [
    {
        method: 'GET',
        path: '/scripts/{path*}',
        handler: {
            directory: {
                path: Path.join(__dirname, '/app/scripts')
              }
        }
    },
    {
        method: 'GET',
        path: '/styles/{path*}',
        handler: {
            directory: {
                path: Path.join(__dirname, '/app/styles')
              }
        }
    },
    {
        method: 'GET',
        path: '/assets/{path*}',
        handler: {
            directory: {
                path: Path.join(__dirname, '/app/assets')
              }
        }
    },
    {
        method: 'GET',
        path: '/templates/{path*}',
        handler: {
            directory: {
                path: Path.join(__dirname, '/app/templates')
              }
        }
    },
    {
        method: 'GET',
        path: '/{path*}',
        handler: {
            file: Path.join(__dirname, '/app/index.html')
        }
    }
];

module.exports = routes;