const filterGenres = async function () {
    
    const data = await getMovieGenres();
    data.genres.map(value => { console.log(value.name, value.id) 
    document.getElementById("filtered-list");
    let li = document.createElement("li");
    li.innerHTML=`Genre name: ${ value.name}, Id: ${value.id}`;
    document.getElementById("filtered-list").appendChild(li);
    // console.log("Here are your movie genres", data);
})
    };


filterGenres();


const filterTopRated = async function () {
   
    const data = await getTopRatedMovies();
    console.log("Here are your top rated movies", data);

    
};

filterTopRated();


//vraag: filteren op action movies (id = 28)
const filterTopRatedActionMovies = async function () {
   
    const data = await getTopRatedActionMovies();
    console.log(data.results);
    const x = data.results.filter (value => {
        // console.log(value.genre_ids);
        const films = value.genre_ids.filter(movie => 
          movie == 18 
        )
        console.log(films)
    })
    
    console.log(x)
    console.log("Here are your top rated action movies", data);
};

filterTopRatedActionMovies();