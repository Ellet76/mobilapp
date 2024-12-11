import type { PageLoad } from './$types';

export const load = (async ({fetch}) => {
    const data = await fetch("https://mobilapp.onrender.com")
    const { clicks } = await data.json();
    return {clicks};
}) satisfies PageLoad;