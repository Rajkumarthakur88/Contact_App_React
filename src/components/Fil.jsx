import React, { useContext } from 'react'
import { FilterContact } from '../Context/GlobalActions'
import GlobalContext from '../Context/GlobalContext'

function Fil() {

    const { dispatch } = useContext(GlobalContext)

    const handleFilter = (value) => {
        if(value==="All"){
            dispatch({
                type: "FILTER_CONTACT",
                payload: ""
            })
        }
        const data = FilterContact(value)
        dispatch({
            type: "FILTER_CONTACT",
            payload: data
        })
    }
    // handleFilter("Family")
    return (
        <div className="container text-end mt-3">
            <div className="btn-group bg-dark me-5 ">
                <button className="btn btn-secondary btn-sm dropdown-toggle " type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Filter
                </button>
                <ul className="dropdown-menu ms-1">
                    <button className="btn btn-sm  mt-1 w-100" onClick={()=>handleFilter("All")} >
                        All
                    </button>
                    <br />
                    <button className="btn btn-sm  mt-1 w-100" onClick={()=>handleFilter("Family")} >
                        Family Member
                    </button>
                    <button className="btn btn-sm  mt-1 w-100" onClick={()=>handleFilter("colleague")} >
                        colleague
                    </button>
                    <button className="btn btn-sm  mt-1 w-100" onClick={()=>handleFilter("Work")} >
                        Work
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Fil