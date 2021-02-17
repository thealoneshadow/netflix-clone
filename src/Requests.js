// Typically we would store in {process.env.API_KEY}
const API_KEY = "b6473c904923435b170c6b5c596d8f59";
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrignals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_henres=28`,
   fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests;


