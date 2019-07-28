import express from 'express';
import morgan from 'morgan';

async function main() {
    const server: express.Application = express();

    // Express Server Middeware
    server.use(morgan('dev'));

    const PORT: number | string = process.env.PORT || 3000;
    server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
}

// Call to the main function
main().then(() => null);