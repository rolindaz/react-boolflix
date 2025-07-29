import { useEffect, useState } from "react"

export default function HomePage() {

    const api_key = import.meta.env.VITE_API_KEY
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const [filteredMovies, setFilteredMovies] = useState(movies)
    const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}`


    useEffect(() => {
        fetch(api_url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data.results)
                console.log(movies);
            })
    }, [search])

    function handleFormSubmit(e) {
        console.log(search, api_url);
        e.preventDefault(e);
        const searchedMovie = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
        setFilteredMovies(searchedMovie)
    }

    return (
        <>
            <div className="container">
                <form className="m-4" onSubmit={handleFormSubmit}>
                    <input className="form-control mb-3"
                        type="search"
                        name="search"
                        id="search"
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                        placeholder="Type the movie you want to search" />
                    <button className="btn btn-dark" type="submit">
                        Search
                    </button>
                </form>
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    {
                        filteredMovies.map((movie) => {
                            return (
                                <div key={movie.id} className="col">
                                    <div className="card p-2">
                                        <ul className="list-unstyled">
                                            <li>
                                                <h3>
                                                    Title: {movie.title}
                                                </h3>
                                            </li>
                                            <li>
                                                Original title: {movie.original_title}
                                            </li>
                                            <li>
                                                Original language: {movie.original_language}
                                            </li>
                                            <li>
                                                Vote: {movie.vote_average}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}