import { useGlobalContext } from "../contexts/GlobalContext"
import MovieCard from "./MovieCard"

export default function MoviesList() {

    const { filteredMovies } = useGlobalContext()

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                filteredMovies.map((movie) => {
                    return (
                        <MovieCard />
                    )
                })
            }
        </div>
    )
}