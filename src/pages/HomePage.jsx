export default function HomePage() {
    return (
        <>
            <form className="m-4">
                <input
                    type="text"
                    name="movie"
                    id="movie"
                    value=""
                    placeholder="Type the movie you want to search" />
                <button type="submit">
                    Search
                </button>
            </form>
            <ul>
                <li>
                    Title:
                </li>
                <li>
                    Original title:
                </li>
                <li>
                    Original language:
                </li>
                <li>
                    Vote:
                </li>
            </ul>
        </>
    )
}