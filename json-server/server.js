const path = require('path')
const shortid = require('shortid');
const jsonServer = require('json-server');
const server = jsonServer.create();
const routerPath = path.join(__dirname, 'db.json');
const router = jsonServer.router(routerPath, { foreignKeySuffix: '_id' });
const middlewares = jsonServer.defaults();
const port = 8080;

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {

    // just a hack 
    // json-parser generates number id for first element in column
    if (req.method === 'POST') {
        req.body.id = shortid.generate();
    }
    next();
})

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log('JSON Server is running on port:', port)
})