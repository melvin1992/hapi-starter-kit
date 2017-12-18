module.exports = {
    get: {
        tags: ['api'],
        validate: { },
        handler: (request, response) => {
            response('Hello World!');
        }
    },
    getById: {
        tags: ['api'],
        validate: { },
        handler: (request, response) => {
            response(`Hello, ${request.params['id']}`);
        }
    }
}