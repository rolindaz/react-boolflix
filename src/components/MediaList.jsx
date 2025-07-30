import { useGlobalContext } from "../contexts/GlobalContext"
import MediaCard from "./MediaCard"

export default function MediaList() {

    const { filteredMedia } = useGlobalContext()



    return (
        <>
            <section className="movies">
                <h2 className="text-white">
                    Movies
                </h2>
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    {
                        filteredMedia.map((item) => {
                            if (item.mediaType === 'Movie') {
                                return (
                                    <MediaCard key={item.id} item={item} />
                                )
                            }
                        })
                    }
                </div>
            </section>
            <section className="tv_shows">
                <h2 className="text-white">
                    TV Shows
                </h2>
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    {
                        filteredMedia.map((item) => {
                            if (item.mediaType === 'TV Show') {
                                return (
                                    <MediaCard key={item.id} item={item} />
                                )
                            }
                        })
                    }
                </div>
            </section>
        </>
    )
}