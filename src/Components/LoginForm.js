import React,{ useState } from 'react'
import { Redirect } from 'react-router-dom'
import '../index.css'

const LoginForm = ({ Login , Error }) => {

    const [details,setDetails] = useState({name:"",email:"",password:""})

    const handleSubmit = e => {
        e.preventDefault()
        

        Login(details)
        return(
         <Redirect to="/home" />
        )
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-header">
                <h2>Login</h2>
                {( Error != "") ? (<div className="error">{Error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" id="name" placeholder="inserisci il nome..." onChange={ e => setDetails({...details, name:e.target.value,  })} value={details.name} required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="inserisci l'email..." onChange={ e => setDetails({...details, email:e.target.value,  })} value={details.email} required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder="inserisci la password..." onChange={ e => setDetails({...details, password:e.target.value,  })} value={details.password} required></input>
                </div>
                <input type="submit" value="LOGIN"></input>

            </div>
        </form>
    )
}

export default LoginForm
