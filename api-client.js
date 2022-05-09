const API_KEY = "d06f9d0dd69fb054716e633378297665";

// function getMovieGenres
const getMovieGenres = async function () {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}` 
        try {
            const res = await fetch(apiUrl, { method: "GET" });
            const data = await res.json();
            console.log("The data in getData function ", data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

//    function getTopRatedMovies()
const getTopRatedMovies = async function () {
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}` 
        try {
            const res = await fetch(apiUrl, { method: "GET" });
            const data = await res.json();
            console.log("The data in getData function ", data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

//    function getTopRatedActionMovies()

const getTopRatedActionMovies = async function () {
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
        try {
            const res = await fetch(apiUrl, { method: "GET" });
            const data = await res.json();
            console.log("The data in getData function ", data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };






