import { Outlet } from 'react-router-dom';
import './body.css';
import Hotel from './hotel';



function Body(props) {

    let list = props.input;

    return (
        <div className='container'>
           
            <div className='wrapper'>
                {
                    list.map((details) => {
                        return (
                            <Hotel key={Math.random()} image={details.image} item={details.item} price={details.price} offer={details.offer} img={details.image} id={details.id}></Hotel>
                        )
                    })
                }
            </div>
            <Outlet></Outlet>
        </div>

    )
}

export default Body;