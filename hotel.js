import './hotel.css';
import { useNavigate } from 'react-router-dom';

function Hotel(props){
    const navigart=useNavigate();
    function discriptionfunc(){
        navigart('/discription/'+props.id);
    }
    return(
        <div className='con'>
        <div className='container-name' onClick={discriptionfunc}>
            <div className='image'>
                <img src={props.image} className='ïmage'/>
            </div>
            <div className='box'>
                <h3>{props.item}</h3>
                {/* <p>{Props.price}</p> */}
                {/* <p>{Props.offer}</p> */}
                {/* <p>{Props.rest}</p> */}
            </div>
        </div></div>
    )
}

export default Hotel;