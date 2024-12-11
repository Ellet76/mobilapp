import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

let clicks = 0;

export const GET: RequestHandler = async () => {
    return json({clicks});
};

export const POST: RequestHandler = async (request) => {
    clicks += 1
    return json({clicks})
}