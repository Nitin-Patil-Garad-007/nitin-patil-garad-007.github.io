import React from 'react'
import { useNavigate } from 'react-router-dom'
import PNF from '../Images/pnf.jpg'

const Errror = () => {
    const history = useNavigate();

  return (
    <>
            <div className='container'>
            <div className="error d-flex flex-column justify-content-lg-center align-items-center">
                <img style={{height:'35em',width:'82em'}} src={PNF} alt="error" className='errorimg' />
                <h4>404 Error ! Page Not Found 😭</h4>
                <button className='btn btn-primary' onClick={()=>history("/")}>Redirect Login Page</button>
            </div>

        </div>
    </>
  )
}

export default Errror