import Logo from '../../logo.png'
import SearchBar from './SearchBar'

export default function Header() {
    return (
        <>
            <header>
                <div className="logo">
                    <Logo />
                </div>
                <div className="searchBar">
                    <SearchBar />
                </div>
            </header>
        </>
    )
}