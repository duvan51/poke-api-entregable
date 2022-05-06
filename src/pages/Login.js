/**import hooks */
import { useForm } from "react-hook-form";

import {useNavigate} from "react-router-dom"

import './css/Login.css'


const Login=()=>{

    const { register, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);



    /**button in login */
    const navigate = useNavigate()

    return(
        <div className="login">
            <div className="loginHello">
                <div className="loginHellotitle letter-titles">
                    <h1>
                        hello trainer!
                    </h1>     
                </div>
                <div className="loginHelloImg">
                    <img src="https://www.megaidea.net/wp-content/uploads/2022/01/Pikachu-1-973x1024.png" alt="" /> 
                </div>  


            </div>
            <div className="loginForm">
                <div className="loginFormName letter-titles">
                    Give me your name to start
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="LoginForm ">
                    <input placeholder="you name" type="text" className="letter-titles" {...register("example")} />
                    <input type="submit" className="button" onClick={()=> navigate('/pokedex')}  /> 
                </form>
            </div>
        </div>
       
        
    )



}

export default Login