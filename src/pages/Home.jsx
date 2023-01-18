import Reac,{useContext,useEffect} from 'react'
import Cards from '../components/Cards'
import { Link, useNavigate } from 'react-router-dom'
import GlobalContext from '../Context/GlobalContext'

function Home() {

const {Data} = useContext(GlobalContext)
const navigate = useNavigate()

useEffect(()=>{
if(Data.length===0){
    navigate("/form")
}
},[])

    return (
        <div className='container'>

            <div className="container d-flex align-items-center justify-content-center flex-column mt-5">
                
                <button className='btn btn-lg btn-success mt-3'>  <Link to={"/form"} >Create New Contact</Link></button>
            
            </div>

            <Cards />


        </div>
    )
}

export default Home