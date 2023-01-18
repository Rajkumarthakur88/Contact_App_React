import React, { useContext, useState, useEffect } from 'react'
import GlobalContext from '../Context/GlobalContext'
import { saveContact, UpdateContact } from '../Context/GlobalActions'
import { useNavigate  } from "react-router-dom";


function Form() {
    const navigate = useNavigate()

    const { Data, dispatch, Edit } = useContext(GlobalContext)
    const [inputData, setInputData] = useState()
    const [inputData2, setInputData2] = useState()
    const [contactType, setContactType] = useState()


    useEffect(() => {
        // localStorage.setItem("Data", JSON.stringify(Data))
        setInputData(Edit.MyContact.name)
        setInputData2(Edit.MyContact.Mob)
    }, [Data, Edit])

    const InputValue = {
        id: crypto.randomUUID(),
        name: inputData,
        Mob: inputData2,
        isType: contactType
    }
    const handleSelect = (e) => {
        setContactType(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Edit.isEdit) {
            const data = UpdateContact(Edit.MyContact.id, inputData, inputData2, contactType)
            dispatch({
                type: "UPDATE_CONTACT",
                payload: data
            })
        }
        else {
            const data = saveContact(InputValue)
            dispatch({
                type: "SAVE_CONTACT",
                payload: data
            })
        }

        navigate("/")

        setInputData("")
        setInputData2("")
        setContactType("")
    }


    return (
        <div className="container flex justify-center mt-5 ">
            <div className="w-100 max-w-xs d-flex justify-content-center">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 form-container" onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="text" type="text" required placeholder="Please Enter Name " value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                            Mobile Number
                        </label>
                        <input
                            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                            id="number" type="number" required placeholder="0123456789" value={inputData2} onChange={(e) => setInputData2(e.target.value)} />
                        <p className="text-blue-500 text-xs italic">Please Enter Mobile Number.</p>
                    </div>

                    <select className='dropdownSelect form-select' required aria-label="Default select example" name="Contact" id="contactType" onChange={handleSelect} value={contactType}>
                        <option value="" >Select Contact Type</option>
                        <option value="Family">Family</option>
                        <option value="colleague">colleague</option>
                        <option value="Work">Work</option>
                    </select>

                    <div className="flex items-center justify-between mt-4">
                        {/* <Link to={"/cards"}>   */}
                         <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Save
                        
                        </button>
                        {/* </Link> */}

                    </div>

                </form>
            </div>
        </div>
    )
}

export default Form