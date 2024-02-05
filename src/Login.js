import React , {useState} from 'react';
import './Login.css';
//import { Link } from 'react-router-dom';
import { useHistory} from 'react-router-dom';

import {auth} from './firebase'
// use history is used to listen the value and push into data layer and used to rdirect
function Login() {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState(''); 

    const signIn = (event) =>{   //creating the events
        event.preventDefault(); 

        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth)=>{
           history.push('/') //logged in redirect to home page
        })
        .catch(e => alert(e.message));
    }

    const register = (event) =>{
        event.preventDefault(); //prevent from reloding of page

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{ //created a user and logged in
            if(auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            
            <img
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt="login__logo"
            />
           

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                    
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>

                    <button className="login__signinButton" type="submit" onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By Signing-in you agree to the Amazon of use & Sale
                    . please see our privacy Notice , our Cookies Notice
                    and our Interest-Based Ads Notice.
                </p>

                <button className="login__registerButton" onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login


// import React from 'react';
// import './Login.css';
// //import { useHistory} from 'react-router-dom';
// //import {auth} from './firebase'

// function Login() {

    

//     return (
//         <div className="login">
            
//             <img
//                 className="login__logo"
//                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
//                 alt="login__logo"
//             />
           

//             <div className="login__container">
//                 <h1>Sign-in</h1>
//                 <form>
//                     <h5>E-mail</h5>
//                     <input type="text" />
                    
//                     <h5>Password</h5>
//                     <input type="password" />

//                     <button className="login__signinButton" type="submit">Sign In</button>
//                 </form>
//                 <p>
//                     By Signing-in you agree to the Amazon of use & Sale
//                     . please see our privacy Notice , our Cookies Notice
//                     and our Interest-Based Ads Notice.
//                 </p>

//                 <button className="login__registerButton">Create Your Amazon Account</button>
//             </div>
//         </div>
//     )
// }

// export default Login
