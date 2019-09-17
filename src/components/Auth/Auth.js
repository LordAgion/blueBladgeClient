import React, {useState} from 'react'
import './Auth.css'
// import { prependOnceListener } from 'cluster';

const Auth = (props) => {
    let [login, setLogin] = useState(false)
    let [ userName, setUserName] = useState('');
    let [ email, setEmail] = useState('');
    let [ password, setPassword] = useState('');
    let sessionToken



    let changeLogin=(e) =>{
        e.preventDefault();
        setLogin(!login)

        setEmail("")
        setPassword("")
        setUserName("")
       
    }

    let handleSubmit= (e) => {
        //console.log("handleSumbit hit")
        e.preventDefault();
         let url = login ? 'http://localhost:3001/auth/signin' : 'http://localhost:3001/auth/signup'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                userName : userName,
    
                email : email,
                password : password
            })
        }
        ).then(res => res.json())
        .then(data => {
            console.log(data.user.id)
            
             return props.tokenHandler(data.sessionToken, data.user.id)
           
            
            
        })
    }
    

    


    return(
        <form className="card-like">
            <h1>
                {login ? 'Log in': 'Sign Up'}
            </h1>
            <label className="display-block" htmlFor="email"> Email:</label>
            <input className="display-block" type = "text" name="email" value={email} onChange = {(e) => setEmail(e.target.value)}/>
            <label className="display-block"  htmlFor="password"> Password:</label>
            <input className="display-block" type = "password" name="password" onChange = {(e) => setPassword(e.target.value)} />
            { login ? null:
                <React.Fragment>
            <label className="display-block" htmlFor="userName"> User Name:</label>
            <input className="display-block" type = "text" name="userName" value={userName} onChange = {(e) => setUserName(e.target.value)}/>


            </React.Fragment>}
            <br></br>
            <button Id= "overide" onClick={ (e) => changeLogin(e)}>{login ? 'Sign up': 'Log in'}</button>
            <br></br>
            <button Id= "overide" type="submit" onClick={(e) => handleSubmit(e)} >submit</button>

        </form>
    )
}

export default Auth;