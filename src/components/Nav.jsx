import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className='d-flex align-items-center justify-content-between p-3' style={{ backgroundColor: "#6a30ff" }}>
            <Link to={"/"}>
                <div className="nav-left d-flex align-items-center ">
                    <span><i className="bi bi-person-rolodex fs-3 text-white"></i></span>
                    <h2 className='ms-3 fs-4 text-white fw-semibold'>Contact App</h2>
                </div>
            </Link>

            <div className="nav-right">
                <ul className='nav-links d-flex align-items-center justify-content-between ms-5 text-light'>
                    <li className='mx-4 fs-6 fw-semibold'><Link to={"/"}> Home</Link></li>
                    <li className='mx-3 fs-6 fw-semibold'><Link to={"/cards"}>Contacts</Link></li>
                    <li className='mx-3 fs-6 fw-semibold nav-link-3'><Link to={"/form"}>New Contact</Link></li>
                </ul>
            </div>
            <div className="mobile-btn">
                <Link to={"/form"}><h1 className='fs-6 fw-semibold text-white'>Create New + </h1> </Link>
            </div>
            {/* <form className="nav-right d-flex align-items-center ">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-light" type="submit">Search</button>
            </form> */}
        </nav>
    )
}

export default Nav