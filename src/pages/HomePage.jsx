import { useGlobalContext } from '../contexts/GlobalContext'
import MediaList from '../components/MediaList'

export default function HomePage() {

    /* const api_movies_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}`
        const api_tv_url = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${search}` */


    /* useEffect(() => {
        fetch(api_movies_url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data.results)
                console.log(movies);
            })
    }, [search]) */

    const { filteredMedia } = useGlobalContext()

    return (
        <>
            <main>
                <div className="container">
                    <MediaList filteredMedia={filteredMedia} />
                </div >
            </main>
        </>
    )
}