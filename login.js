import { useState, useEffect } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

// import { Component } from 'react';

// function Login(props) {
//         const [email, setEmail] = useState("");
//         const [password, setPassword] = useState("");
//         const [isValid, setValid] = useState(false);
    
//         const login = (e) => {
//             e.preventDefault();
//             localStorage.setItem('login', true)
//             props.isLoggedin(true);
//         }

//         useEffect(() => {
//             console.log('updated')
    
//             if ((email.includes('@') && password.length > 4)) {
//                 setValid(true);
//             }
    
//         }, [email, password]);
    
//         useEffect(() => {
//             return () => console.log('unmounted');
//         }, []);
    
    
//         const emailHandler = (e) => {
//             setEmail(e.target.value)
//         }
//         const passwordHandler = (e) => {
//             setPassword(e.target.value)
//         }
    
    
//         return (
    
//             <form onSubmit={login} className="swg">
//                 <h1>LOGIN PLEASE...</h1>
//                 <input type="email" className='a1' placeholder="Enter email" onChange={emailHandler} value={email} /><br></br>
//                 <input type="password" className='a2' placeholder="Enter password" onChange={passwordHandler} value={password} /><br></br>
//                 {isValid ? <button type="submit" className='bn' >Submit</button> : <button type="submit" disabled>Submit</button>}
    
//             </form>
    
//         );
//     }
function Login(props) {
    var navi=useNavigate();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [isValid, setValid] = useState(false);
    
        const login = (e) => {
            e.preventDefault();
            localStorage.setItem('login', true)
            props.isLoggedin(true);
            navi('/header/logout1');
        }

        useEffect(() => {
            console.log('updated')
    
            if ((email.includes('@') && password.length > 4)) {
                setValid(true);
            }
    
        }, [email, password]);
    
        useEffect(() => {
            return () => console.log('unmounted');
        }, []);
    
    
        const emailHandler = (e) => {
            setEmail(e.target.value)
        }
        const passwordHandler = (e) => {
            setPassword(e.target.value)
        }
    
    
        return (
              <div className='formcontainer'>
            <form onSubmit={login} className="fo">
                <h1>LOGIN HERE</h1>
                <input type="email" className='fa' placeholder="Enter email" onChange={emailHandler} value={email} /><br></br><br></br>
                <input type="password" className='fb' placeholder="Enter password" onChange={passwordHandler} value={password} /><br></br><br></br>
                {isValid ? <button type="submit" className='submit' >Submit</button> : <button type="submit" className='submit' disabled>Submit</button>}

            </form></div>
    
        );
    }


    export default Login;