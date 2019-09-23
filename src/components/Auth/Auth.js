import React, {useState} from 'react'
import './Auth.css'
// import { prependOnceListener } from 'cluster';

const Auth = (props) => {
    let [login, setLogin] = useState(false)
    let [ userName, setUserName] = useState('');
    let [ email, setEmail] = useState('');
    let [ password, setPassword] = useState('');
    let sessionToken





    let handleSubmit= (e) => {
        //console.log("handleSumbit hit")
        e.preventDefault();
        
        // console.log (password.length)
        if (password.length<6) { return alert ('password invalid, password must be at least 6 characters')}

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))


        {fetch('https://speciescatalog.herokuapp.com/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email : email,
                password : password
            })
        }
        ).then(res => res.json())
        .then(data => {
            //console.log(data)
            if (data.error== "failed to authenticate") {
                fetch('https://speciescatalog.herokuapp.com/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        userName: "",
                        email : email,
                        password : password
                    })
                }
                ).then(res => res.json())
                .then(data => {
                    // console.log(data)
                    
                    
                     return props.tokenHandler(data.sessionToken, data.user.id)
                   
                    
                    
                })
                
            }
            else if (data.error== 'bad gateway') { return alert('password is incorrect')}
            
             else {return props.tokenHandler(data.sessionToken, data.user.id)}

        })}else{ return alert("You have entered an invalid email address!")}
        // .catch(
        //     fetch('http://localhost:3001/auth/signup', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body:JSON.stringify({
        //             email : email,
        //             password : password
        //         })
        //     }
        //     ).then(res => res.json())
        //     .then(data => {
        //         console.log(data.user.id)
                
        //          return props.tokenHandler(data.sessionToken, data.user.id)
               
                
                
        //     })
            
        // )
    }
    

    


    return(
        <form className="card-like">
            <h1>
               Log in or Sign Up
            </h1>
            <label className="display-block" htmlFor="email"> Email:</label>
            <input className="display-block" type = "text" name="email" value={email} onChange = {(e) => setEmail(e.target.value.toLowerCase())}/>
            <label className="display-block"  htmlFor="password"> Password:</label>
            <input className="display-block" type = "password" name="password" onChange = {(e) => setPassword(e.target.value)} />

            <br></br>
            <button Id= "overide" type="submit" onClick={(e) => handleSubmit(e)} >submit</button>

        </form>
    )
}

export default Auth;