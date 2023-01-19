import React, { useState, useContext } from 'react'
import { SearchContact } from '../Context/GlobalActions'
import GlobalContext from '../Context/GlobalContext'

function SearchBox() {

    const [search, setSearch] = useState("")
    const { dispatch } = useContext(GlobalContext)

    const handleSearch = () => {
        const data = SearchContact(search)

        dispatch({
            type: "SEARCH_CONTACT",
            payload: data
        })
    }

    return (
        <>
            <input className=" mt-5 mb-2 search-input float-end shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="text" type="text" required placeholder="Search Contacts " value={search} onChange={(e) => { setSearch(e.target.value)}} onKeyUp={handleSearch} />
            {/* <button className="  mt-5  float-end btn btn-sm btn-primary" onClick={handleSearch} >search</button> */}
        </>
    )
}

export default SearchBox