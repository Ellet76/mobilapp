import type { PageLoad } from './$types';

export const load = (async ({fetch}) => {
    const data = await fetch("/")
    const { clicks } = await data.json();
    return {clicks};
}) satisfies PageLoad;