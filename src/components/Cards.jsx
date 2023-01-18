import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../Context/GlobalContext'
import Card from './Card'
import Fil from './Fil'
import noImg from '../images/no-contact.gif'
import { Link } from 'react-router-dom'

function Cards() {

    const { Data, Filter } = useContext(GlobalContext)

    // if (Data===null) {
    //     return <div className="container d-flex flex-wrap align-items-center justify-content-center flex-column mt-5">
    //         <iframe src="https://giphy.com/embed/cjnD7TtKStjTSXaNP8"  clasName="giphy-embed" ></iframe>
    //         <br />
    //         <button className='btn btn-sm btn-success '>  <Link to={"/form"} >Create New Contact</Link></button>
    //     </div>
    // }
    if (Data.length === 0) {
        return <div className='d-flex align-items-center justify-content-center flex-column p-2'>
    <h1 className='no-contact-h1 mb-5'> No Contacts </h1>
    <img className='no-contact-img' src={noImg} alt="" />
</div >
    }


    return (
        <>
            <div className="container d-flex flex-wrap align-items-center justify-content-center mt-5">
                <h1 className='home-h1 fs-2 px-5 py-2 mt-5 text-white rounded-1' style={{ background: "#6a30ff" }}>Your Contacts</h1>
                <Fil />

                {Filter.length >= 1 ?

                    Filter.map(item => <Card Data={item} key={item.id} />)
                    :
                    Data.map(item => <Card Data={item} key={item.id} />)
                }

            </div>
        </>
    )
}

export default Cards