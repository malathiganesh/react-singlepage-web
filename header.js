import './header.css';
import { Link, Outlet } from 'react-router-dom';
// import log from '../images/logoxx.png';
import pic from '../images/back.jpg';
import { useContext } from 'react';
import { Foodcontext } from '../contex/contex';

function Header() {
    const isLogedin = useContext(Foodcontext).isLoggedin;
    console.log(isLogedin);
    const setLogedin = useContext(Foodcontext).setLoggedin;
    console.log(setLogedin);
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo-area">
                            {/* <img src={log} width={50} /> */}
                            <div className="logo"><i class="fa fa-drumstick-bite"></i>Delicious!</div>
                        </div>
                        <nav className="nav-area">
                            {/* <a className="nav-item" href="#">Investor Relations</a> */}
                            {/* <a className="nav-item" href="#">Add Restaurant</a> */}
                            {/* <a className="nav-item" href="login/login.js">Log in</a> */}
                            {/* <a className="nav-item" href="#">Sign up</a> */}
                            
                            
                            {/* {isLogedin=='true' && <Link className='nav-item' to='/body'>Items</Link>} */}
                            {isLogedin == "true" ? <Link to="/logout" className='nav-item' onClick={() => {
                                setLogedin("false")
                            }}><p className='lgs'>Login </p></Link> : [<Link className='nav-item' to='/logout'><p className='lg'>Logout</p></Link>,<Link className='nav-item' to='/body'>Items</Link>]}
                        </nav>

                    </div>
                </div>
                <div className='hd'>
                    <p className='slogan'>Restaurants in your pocket...</p>
                    <label form='search'>Search here:  </label>
                    <input type='search' className='ser'></input>
                </div>
            </header>
            {/* <div className='about'>Home / Tirunelveli / Collections / Non-veg / Veggie</div> */}
            <div className='imagehead'>
                <div className='images'>
                    {/* <img src={pic} width={1366} height={300} /> */}
                </div>
                {/* <div className='textonimg'><h1>Restaurants in your pocket...</h1><span className='spn'><input type='text'className='search' placeholder='Search here...'></input></span></div> */}
            </div>
            <Outlet></Outlet>
        </div>
    );
}

export default Header;