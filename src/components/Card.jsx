import React, { useContext, useEffect } from 'react'
import { EditContact } from '../Context/GlobalActions'
import GlobalContext from '../Context/GlobalContext'
import { Link } from 'react-router-dom'
import userImg from '../images/User_icon_2.svg.png'

function Card({ Data }) {


    const { name, Mob, isType, id } = Data
    const { dispatch } = useContext(GlobalContext)

    const DeleteContact = (id) => {
        dispatch({
            type: "DELETE_CONTACT",
            payload: id
        })
    }
    const handleEdit = (Data) => {
        const data = EditContact(Data)
        dispatch({
            type: "EDIT_CONTACT",
            payload: data
        })
    }


    return (
        <div className="card card-main m-2 d-flex align-items-center justify-content-between flex-row px-2">
            <span className='d-flex align-items-center'>
                <img className='rounded-5 card-img' src={userImg} alt="" />
            </span>
            <div className="card-body">
                <h5 className="card-text ps-1 fw-semibold shadow-sm py-2">Name: {name}</h5>
                <p className="card-text ps-1 mb-2 fw-semibold shadow-sm py-2">Mob: {Mob}</p>
                <p className="card-text ps-1 mb-2 shadow-sm py-2 ">Type: {isType}</p>
            </div>
            <div className="card-right d-flex align-items-center justify-content-between flex-column">
                <button className="btn btn-sm btn-success m-1" onClick={() => { handleEdit(Data) }}> <Link to={"/form"}> <i class="bi bi-pencil-square"></i></Link></button>
                <button className="btn btn-sm btn-danger m-1" onClick={() => DeleteContact(id)}><i class="bi bi-archive-fill"></i></button>
            </div>
        </div>
    )
}

export default Card