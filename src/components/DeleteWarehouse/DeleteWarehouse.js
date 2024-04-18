import './DeleteWarehouse.scss'
import backImage from '../../assets/Icons/close-24px.svg';
import { useState,useEffect } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function DeleteWarehouse(props){
    const navigate = useNavigate()

    const [triggerNav, setNav] = useState(0)

    useEffect(() =>{
        if(triggerNav === 1){
                navigate(-1)
                window.location.reload();

            }
    },[triggerNav]);
        
    const baseURL = "http://localhost:8082/api"
    const deleteOnClick = async () => {
        try {
            goBack()

            await axios.delete(`${baseURL}/warehouses/${props.warehouseItem.id}`)

        } catch (error) {
            console.error(error)
        }
    }
    const goBack = () => {
        setNav(1)
    }





    
    return (

        <section className='modal'>
            <section className='modal__background'>
            <section className='modal__back-button-area'>
                <img onClick ={goBack} className='modal__back-button' alt="back-button" src={backImage}></img>
                </section>
            <section className='modal__content-area'>
         
       
                <h1 className='modal__title'>Delete {props.warehouseItem.warehouse_name} warehouse?</h1>
                <p className='modal__content'> Please confirm that you'd like to delete the {props.warehouseItem.warehouse_name} from the list. You won't be able to undo this action.</p>
            </section>

            <section className='modal__buttons'>
                <button onClick ={goBack} className='modal__cancel-button'>Cancel</button>
                <button className='modal__delete-button' type='submit' onClick={deleteOnClick}>Delete</button>
            </section>
        </section>
        </section>

    )
}
export default DeleteWarehouse