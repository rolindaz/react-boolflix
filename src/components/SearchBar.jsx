import { useGlobalContext } from "../contexts/GlobalContext"

export default function SearchBar() {

    const { handleFormSubmit, search, setSearch } = useGlobalContext()

    return (
        <form className="m-4 d-flex align-items-center column-gap-4" onSubmit={handleFormSubmit}>
            <button className="btn btn-outline-danger" type="submit">
                Search
            </button>
            <input className="form-control"
                type="search"
                name="search"
                id="search"
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
                placeholder="Search a movie or a TV show" />
        </form>
    )
}