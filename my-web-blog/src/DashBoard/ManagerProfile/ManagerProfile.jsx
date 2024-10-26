import React,{useContext} from 'react';
//import { useNavigate } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser'
//import { DataContext } from '../../Context/DataContext';
import './ManagerProfile.css'

function ManagerProfile(){
    //const navigate = useNavigate();
    //const contextData = useContext(DataContext);
   // const newNameContext = contextData.newValueContent;
    //console.log(newNameContext);
   // let ObjectContext = Object.fromEntries(newNameContext.entries());
    // for (const value of newNameContext.values()) {
    //     console.log(value);
    //   }
  //  console.log(ObjectContext);
    return(
        <>
        <div className='display-content'>ManagerProfile</div>
        {/* <div className='display-content'>
            <div className='title-name'>
                <p>{ObjectContext.nameTitle}</p>
            </div>
            <div className='image-main'>
                <img src={URL.createObjectURL(ObjectContext.mainImage)} alt="" />
            </div>
            <div className='data-content'>
            {HTMLReactParser(ObjectContext.newBlogContent)}
            </div>
        </div> */}
        </>
      
    );
}
export default ManagerProfile