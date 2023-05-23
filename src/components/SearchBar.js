import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
    return (
        <div className="hero__search__form">
            <form action="">
                <input type="text" placeholder="Nhập Từ khóa (or) Mã code"/>
                <button type="submit" className="site-btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </form>
        </div>
    )
}

export default SearchBar;