import Flag from 'react-world-flags'

export default function MovieCard(movie) {

    const stars = Array(5).fill(0)
    const fullStar = {
        color: "#EBC346"
    }
    const emptyStar = {
        color: "#CBCBCB"
    }

    return (
        <div key={movie.id} className="col">
            <div className="card h-100 p-2">
                <div className="card-top">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title || movie.name} className="card-img-top" />
                </div>
                <div className="card-body">
                    <ul className="list-unstyled">
                        <li>
                            <h3>
                                {movie.title || movie.name}
                            </h3>
                        </li>
                        <li>
                            <b>Original title: </b>
                            {movie.original_title || movie.original_name}
                        </li>
                        <li className="language d-flex">
                            <b>Original language: </b>
                            {
                                <Flag code={movie.original_language} fallback={<span>{movie.original_language}</span>} />
                            }
                        </li>
                        <li>
                            <b>Vote: </b>
                            <span>
                                {
                                    stars.map((star, index) => {
                                        return (
                                            <i className="bi bi-star-fill"
                                                key={index}
                                                size={24}
                                                style={Math.ceil((movie.vote_average * 5) / 10) > index ? fullStar : emptyStar}>
                                            </i>
                                        )
                                    })
                                }
                                {` (${Math.ceil((movie.vote_average * 5) / 10)} Stars)`}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}