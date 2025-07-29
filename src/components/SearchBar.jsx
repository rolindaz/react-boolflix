import { useGlobalContext } from "../contexts/GlobalContext"

export default function SearchBar() {

    const { handleFormSubmit, setSearch } = useGlobalContext()

    return (
        <form className="m-4" onSubmit={handleFormSubmit}>
            <input className="form-control mb-3"
                type="search"
                name="search"
                id="search"
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
                placeholder="Type the movie you want to search" />
            <button className="btn btn-dark" type="submit">
                Search
            </button>
        </form>
    )
}