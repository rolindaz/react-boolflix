import { createContext, useState, useEffect, useContext } from "react";

const GlobalContext = createContext()

function GlobalProvider({ children }) {
    const api_key = import.meta.env.VITE_API_KEY
    const [media, setMedia] = useState([])
    const [search, setSearch] = useState('')
    const [filteredMedia, setFilteredMedia] = useState(media)
    const api_urls = [
        {
            url: `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}`,
            mediaType: 'Movie'
        },
        {
            url: `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${search}`,
            mediaType: 'TV Show'
        }
    ]

    useEffect(() => {
        const fetchedResults = []
        api_urls.map(url => {
            const mediaType = url.mediaType;
            fetch(url.url)
                .then(res => res.json())
                .then(data => {
                    const newData = data.results.map(obj => {
                        return (
                            {
                                ...obj,
                                mediaType: mediaType
                            }
                        )
                    });
                    console.log(newData);
                    fetchedResults.push(...newData);
                });
        });
        console.log(fetchedResults);
        setMedia(fetchedResults)
    }, [search])

    console.log(media);

    function handleFormSubmit(e) {
        console.log(search, api_urls);
        e.preventDefault(e);
        const searchedMedia = media.filter(item => item?.title?.toLowerCase().includes(search.toLowerCase()) || item?.name?.toLowerCase().includes(search.toLowerCase()))
        console.log(searchedMedia);
        setFilteredMedia(searchedMedia)
    }
    console.log(filteredMedia);

    return (
        <GlobalContext.Provider value={{
            media,
            setMedia,
            search,
            setSearch,
            filteredMedia,
            setFilteredMedia,
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