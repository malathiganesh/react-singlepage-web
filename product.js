import './product.css';
import { useEffect, useState } from 'react';
// import Fooditem from './fooditem';
import Form from '../form/form';
// import Form from '../form/form';
// import imga from '../images/briyani.jpg';
// import imgb from '../images/friedrice.jpg';
// import imgc from '../images/piza.jpg';
// import imgd from '../images/grill.jpg';
import ProductList from '../productlist/productlist';
import {useNavigate} from 'react-router-dom';

function Products(props) {
  // const order = [
  //   {
  //     img:imga,
  //     item: "briyani",
  //     offer: 20,
  //     // restaurant: "Taj Hotel",
  //     price: 210
  //   },
  //   {
  //     img:imgb,
  //     item: "friedrice",
  //     offer: 10,
  //     // restaurant: "Cafe Bar",
  //     price: 110
  //   },
  //   {
  //     img:imgc,
  //     item: "pizza",
  //     offer: 10,
  //     // restaurant: "Arun Ice-Creams",
  //     price: 150
  //   },
  //   {
  //     img:imgd,
  //     item: "Biriyani",
  //     offer: 25,
  //     // restaurant: "Hotel Azad",
  //     price: 250
  //   }
  // ]
  // const [newcomp, setComp] = useState([]);
  // const [isLoggedin, setIsLoggedIn]=useState('')
  // var navi=useNavigate();
  // const newcomphandle = (comp) => {
  //   setComp((prevnewcomp) => { return [...[comp], ...prevnewcomp] });
  //   console.log(comp)
  // }
  // useEffect(()=>{
  //   setIsLoggedIn(localStorage.getItem('login'))
  // },[])
 
  // useEffect (()=>{
  //   fetch('https://6315e15733e540a6d386e913.mockapi.io/swiggy/swiggy').then((response)=>{
  //     if(response.ok){
  //       return response.json()
  //     }else {
  //       return false
  //     }
  //   }).then ((data)=>{
  //     setComp(data)
  //   })
  // },[])

  // return (
  //   <div>
  //     <div className='form-container'>
  //       <Form newcomponents={newcomphandle}></Form>
  //     </div>
  //       <div className='fooditem-container'>
  //         {/* <Fooditem item={order[0].item} price={order[0].price} offer={order[0].offer} restaurant={order[0].restaurant}></Fooditem> */}
  //         {
  //           newcomp.map((comp)=>{
  //             return <Fooditem key={Math.random()} item={comp.item} price={comp.price} offer={comp.offer} restaurant={comp.restaurant}></Fooditem>
  //           })
  //         }
  //         </div>

  //   </div>
  // );
// }
// const [foods, setfoods] = useState([]);

//     var navi=useNavigate();
//     const addNewFoods = (food) => {
//         setfoods((prevfoods) => { return [food, ...prevfoods] });
//         // console.log(order);
//     }
const [foods, setfoods] = useState([]);

    var navi=useNavigate();
    const addNewFoods = (food) => {
        setfoods((prevfoods) => { return [food, ...prevfoods] });
        // console.log(order);
    }

    const logout = () => {
      localStorage.setItem('login','false');
        props.logout('false');
        navi('/logout')
    }


    return (
        <div className="body">
            {/* <button onClick={logout} className='logout'>Log out</button> */}
            <Form add={addNewFoods} />
            <div className="myorder">
                <div>
                    <h1>My Foods</h1>
                    <ProductList foods={foods}></ProductList>
                </div>
            </div>
        </div>
    )
}

export default Products;