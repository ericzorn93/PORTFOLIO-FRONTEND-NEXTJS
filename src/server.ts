import express, {Application as ExpressApplication, Request, Response} from 'express';
import morgan from 'morgan';
import next from 'next';

import isDevelopment from "./utils/is_development.util";

async function main() {
    // Prepare Next Server
    const app = next({dev: isDevelopment});
    const handle = app.getRequestHandler();
    await app.prepare();

    // Initialize Express JS Server
    const server: ExpressApplication = express();

    // Express Server Middleware
    server.use(morgan('dev'));

    // Routing
    server.get('*', (req: Request, res: Response) => {
        handle(req, res);
    });

    const PORT: number | string = process.env.PORT || 3000;
    server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
}

// Call to the main function to begin the program
main().then(() => null);
