import Flag from 'react-world-flags'
import PlaceholderImg from '../assets/placeholder-img.jpg'

export default function MovieCard({ movie }) {

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
                <div className="card-top h-100 top-1">
                    {
                        movie.poster_path ? (
                            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title || movie.name} className="card-img-top" />
                        ) : (
                            <img src={PlaceholderImg} alt={movie.title || movie.name} className="card-img-top" />
                        )
                    }
                </div>
                <div className="card-top top-2 p-3">
                    <ul className="list-group list-group-flush justify-content-center">
                        <li className="list-group-item">
                            <h3>
                                {movie.title || movie.name}
                            </h3>
                        </li>
                        <li className="list-group-item">
                            <b>Original title: </b>
                            {movie.original_title || movie.original_name}
                        </li>
                        <li className="list-group-item language d-flex">
                            <b>Original language: </b>
                            {
                                <Flag code={movie.original_language} fallback={<span>{movie.original_language}</span>} />
                            }
                        </li>
                        <li className="list-group-item">
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
                        <li className="list-group-item">
                            <b>Overview: </b>
                            <br />
                            <span>
                                {movie.overview}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}