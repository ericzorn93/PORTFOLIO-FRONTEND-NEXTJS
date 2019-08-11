import { Router, Request, Response } from 'express';
const router = Router();
import fetch from 'isomorphic-unfetch';

const setupViewRouter = (nextApp: any) => {
    /**
     * @description Home Route
     */
    router.get('/', (req: Request, res: Response) => {
        nextApp.render(req, res, '/index', {});
    });

    /**
     * @description About Route
     */
    router.get('/about', async  (req: Request, res: Response) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
       nextApp.render(req, res, '/about', {
           todos: data,
       });
    });
};

export default setupViewRouter;
