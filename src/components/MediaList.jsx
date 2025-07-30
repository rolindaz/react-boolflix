import { useState } from "react"
import { useGlobalContext } from "../contexts/GlobalContext"
import MediaCard from "./MediaCard"

export default function MediaList() {

    const { filteredMedia } = useGlobalContext()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const movies = filteredMedia.filter((item) => {
        return item.mediaType === 'Movie'
    })
    const tvShows = filteredMedia.filter((item) => {
        return item.mediaType === 'TV Show'
    })

    function handleNext() {
        const maxIndex = filteredMedia.length - 5;
        if (currentIndex < maxIndex) {
            setCurrentIndex((prev) => prev + 1)
        }
    }

    function handlePrevious() {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    }

    return (
        <>
            <section className="movies mt-4">
                <h2 className="text-white">
                    Movies
                </h2>
                <div className="carousel-container position-relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                    {
                        isHovered && currentIndex > 0 && <button className="nav-button prev position-absolute border-0 text-white p-4 h-100" onClick={handlePrevious}>
                            <i className="bi bi-chevron-left"></i>
                        </button>
                    }
                    {
                        isHovered && currentIndex < movies.length - 5 && <button className="nav-button next position-absolute border-0 text-white p-4 h-100" onClick={handleNext}>
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    }
                    <div className="wrapper">
                        <div className="carousel d-flex" style={{
                            transform: `translateX(-${currentIndex * 20}%)`,
                            transition: "transform 0.5s ease-in-out"
                        }}>
                            {
                                movies.map((item) => {
                                    return (
                                        <MediaCard key={item.id} item={item} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section >
            <section className="tv_shows mt-4">
                <h2 className="text-white">
                    TV Shows
                </h2>
                <div className="carousel-container position-relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                    {
                        isHovered && currentIndex > 0 && <button className="nav-button prev position-absolute border-0 text-white p-4 h-100" onClick={handlePrevious}>
                            <i className="bi bi-chevron-left"></i>
                        </button>
                    }
                    {
                        isHovered && currentIndex < tvShows.length - 5 && <button className="nav-button next position-absolute border-0 text-white p-4 h-100" onClick={handleNext}>
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    }
                    <div className="wrapper">
                        <div className="carousel d-flex" style={{
                            transform: `translateX(-${currentIndex * 20}%)`,
                            transition: "transform 0.5s ease-in-out"
                        }}>
                            {
                                tvShows.map((item) => {
                                    return (
                                        <MediaCard key={item.id} item={item} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}