import { createServer } from 'https';
import { parse } from 'url';
import next from 'next';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

let httpsOptions;
try {
    httpsOptions = {
        key: readFileSync(resolve('/etc/letsencrypt/live/www.udongrang.com/privkey.pem')),
        cert: readFileSync(resolve('/etc/letsencrypt/live/www.udongrang.com/fullchain.pem'))
    };
} catch (err) {
    console.error('Error reading SSL certificate files:', err);
    process.exit(1);
}

app.prepare().then(() => {
    createServer(httpsOptions, (req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on https://localhost:3000');
    });
});
