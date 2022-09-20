import './fooditem.css';
import {useState} from 'react';
// import image from '../images/piza.jpg';


function Fooditem(props) {

    const [price, setPrice] = useState(props.price)

    const button = () => {
        let newprice = props.price - (props.offer/100)*props.price
        setPrice(newprice);
    }
    return (
        <div>
            <div className='fooditems'>
                <div className='dish'>
                    <div className='container1'>
                        <div className='tot'>
                            <div className='imgn'>
                                {/* <img src={image} width={150} height={150}></img> */}
                                <img src={props.img}></img>
                                </div>
                            <div className='details'>
                                <div className='f1'><p>{props.item}</p></div>
                                {/* <div className='f2'><p>{"Deliver in "}{props.deliverytime}{" Mins"}</p></div> */}
                                <div className='f3'><p>{"Rs."}{price}{" for one"}</p></div>
                                <div className='f5'><p>{props.offer}{"% Off"}</p></div>
                                {/* <div className='f4'><p>{props.distance}{"Km"}</p></div> */}
                               <button className='btn' onClick={button}>Apply offer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Fooditem;