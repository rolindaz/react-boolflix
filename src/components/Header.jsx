import Logo from '../assets/Logo.png'
import SearchBar from './SearchBar'

export default function Header() {
    return (
        <>
            <header className='p-5 d-flex justify-content-between'>
                <div className="logo">
                    <img src={Logo} alt="Boolflix Logo" />
                </div>
                <div className="searchBar">
                    <SearchBar />
                </div>
            </header>
        </>
    )
}