/* eslint-disable @typescript-eslint/no-explicit-any */

import SearchbarGlobalState from '../utils/SearchbarGlobalState';

const SearchbarInput = () => {

    const {setSearchbarInput, searchInput} = SearchbarGlobalState();

    const handleOnChange = (e: any) => {
    const {value} = e.target;
    setSearchbarInput(value);
    console.log("INSIDE SEARCHBARINPUT:", searchInput)
    }

  return (

    <div>

<input type="text" onChange={handleOnChange} />


    </div>
  )
}

export default SearchbarInput