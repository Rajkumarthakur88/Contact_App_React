import Reac, { useContext, useEffect } from 'react'
import Cards from '../components/Cards'
import { Link, useNavigate } from 'react-router-dom'
import GlobalContext from '../Context/GlobalContext'
import SearchBox from '../components/SearchBox'

function Home() {

    const { Data } = useContext(GlobalContext)
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem("Data", JSON.stringify(Data))
        if (Data.length === 0) {
            navigate("/form")
        }
    }, [Data])

    return (
        <div className='container'>
            <SearchBox />
            <div className="container d-flex align-items-center justify-content-center flex-column mt-5">

                <button className='btn btn-lg btn-success mt-3'>  <Link to={"/form"} >Create New Contact</Link></button>

            </div>

            <Cards />


        </div>
    )
}

export default Home