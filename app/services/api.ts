export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVE_API_KEY}`
    }
}


export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`:`${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const res = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,

    })

    if (!res.ok) {
        //@ts-ignore
        throw new Error('Failed to fetch movies', res.statusText)
    }

    const data = await res.json()


    return data.results
}

// const url = 'https://api.themoviedb.org/3/discover/movie';
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjAxMWE0YWYzNGZiZTVlNmNhNDY3YWIyY2E2ZjBhZSIsIm5iZiI6MTc3MjI3NTE4My41MTksInN1YiI6IjY5YTJjNWVmMDJkMDM3MmQ0MWUyYWU4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nt_CN1W3MEQpuCnGDil6I6wlSA6HMMF5icqKBqoaf5w'
//     }
// };

// fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
    // .catch(err => console.error(err));