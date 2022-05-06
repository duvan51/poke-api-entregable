import React from 'react'
import {useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'



function HeaderPokedex() {
    
    const name = "name";


      /**button in login */
      const navigate = useNavigate()
      /** service of filter by Type*/



    const logout = ()=>{
      
      Swal.fire({
        title: 'you want to close session?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, close!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(('/'))
        }
      })

    }



//navigate(('/')


 
    return (
    <>
        <div className="homePageLogoutName">
            <h1>{name}</h1>
            <div> </div>
        </div>
        <button className="log-out" onClick={logout}>
            <i className="fi fi-bs-sign-out"></i>
        </button>  
    </>
  )
}

export default HeaderPokedex
