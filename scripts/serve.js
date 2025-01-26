import sirv from 'sirv';
import http from 'http';

const serve = sirv('dist', {
    single: true,
    dev: true,
    prefix: '/get_lit_test'
});

const server = http.createServer((req, res) => {
    // Remove the prefix from the URL for local serving
    if (req.url.startsWith('/get_lit_test')) {
        req.url = req.url.replace('/get_lit_test', '');
    }
    serve(req, res);
});

server.listen(8080, () => {
    console.log('Preview server running at http://localhost:8080/get_lit_test/');
});