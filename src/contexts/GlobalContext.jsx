import { createContext, useState, useEffect, useContext } from "react";

const GlobalContext = createContext()

function GlobalProvider({ children }) {
    const api_key = import.meta.env.VITE_API_KEY
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const [filteredMovies, setFilteredMovies] = useState(movies)
    const api_urls = [
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}`,
        `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${search}`
    ]

    useEffect(() => {
        const fetchedResults = []
        api_urls.map(url => fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                fetchedResults.push(...data.results)
            }));
        setMovies(fetchedResults)
    }, [search])

    console.log(movies);

    function handleFormSubmit(e) {
        console.log(search, api_urls);
        e.preventDefault(e);
        const searchedMovie = movies.filter(movie => movie?.title?.toLowerCase().includes(search.toLowerCase()) || movie?.name?.toLowerCase().includes(search.toLowerCase()))
        setFilteredMovies(searchedMovie)
    }

    return (
        <GlobalContext.Provider value={{
            movies,
            setMovies,
            search,
            setSearch,
            filteredMovies,
            setFilteredMovies,
            handleFormSubmit
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }