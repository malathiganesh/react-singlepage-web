import { useParams } from "react-router-dom";
 import  {useEffect, useState} from 'react';  
import './description.css';
 function Discription(){
    const params=useParams();
    const[currentfood, setCurrentfood]=useState({});
    useEffect(()=>{
        fetch('https://6315e15733e540a6d386e913.mockapi.io/swiggy/swiggy/'+params.id).then((response)=>{
            if(response.ok){
                // console.log(response.json());
                return response.json();
            }
            return false
        }).then((foodlist)=>{
            setCurrentfood(foodlist)
            console.log(currentfood);
        });
    },[])
    return(
        <div className="whole">
        <div className="paramcontainer">
            <div className="paramimage">
                <img src={currentfood.image}/>
            </div>
            <div className="paramtext">
                <h1>{currentfood.item}</h1>
                <h1>{currentfood.price}</h1>
            </div>
        </div></div>
    );
 }
 export default Discription;