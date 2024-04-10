
import SearchbarGlobalState from '../utils/SearchbarGlobalState'
import { useNavigate } from 'react-router-dom';

const SearchbarButton = () => {

    const {fetchDrinkByName, searchInput} = SearchbarGlobalState();
    const navigate = useNavigate();

    const handleOnClick = () => {
        console.log("INSIDE SEARCHBARBUTTON")
        fetchDrinkByName(searchInput);
        navigate('/search-result')
    }
  return (
    <div>

<button onClick={handleOnClick}>Search</button>

    </div>
  )
}

export default SearchbarButton