import ReadMore from './ReadMore'
import Flag from 'react-world-flags'
import PlaceholderImg from '../assets/placeholder-img.jpg'

export default function MediaCard({ item }) {

    const stars = Array(5).fill(0)
    const fullStar = {
        color: "#EBC346"
    }
    const emptyStar = {
        color: "#CBCBCB"
    }

    return (
        <div key={item.id} className="col">
            <div className="card h-100 p-2">
                <div className="card-top h-100 top-1">
                    {
                        item.poster_path ? (
                            <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={item.title || item.name} />
                        ) : (
                            <img src={PlaceholderImg} alt={item.title || item.name} />
                        )
                    }
                </div>
                <div className="card-top top-2 p-3">
                    <ul className="list-group list-group-flush justify-content-center">
                        <li className="list-group-item">
                            <h3>
                                {item.title || item.name}
                            </h3>
                        </li>
                        <li className="list-group-item">
                            <b>Original title: </b>
                            {item.original_title || item.original_name}
                        </li>
                        <li className="list-group-item language d-flex">
                            <b>Original language: </b>
                            {
                                <Flag code={item.original_language} fallback={<span>{item.original_language}</span>} />
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
                                                style={Math.ceil((item.vote_average * 5) / 10) > index ? fullStar : emptyStar}>
                                            </i>
                                        )
                                    })
                                }
                                {` (${Math.ceil((item.vote_average * 5) / 10)} Stars)`}
                            </span>
                        </li>
                        <li className="list-group-item">
                            <b>Overview: </b>
                            <br />
                            <ReadMore text={item.overview} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}