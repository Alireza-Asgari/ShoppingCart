import React,{useContext} from 'react';
import { shorten , isInCart , quantityCount } from '../helper/shorten';
import { Link } from 'react-router-dom';
//context 
import { CartContext } from '../context/CartContextProvider';
//icons
import trashIcon from "../assests/icons/trash.svg";
//styles
import styles from "./Product.module.css";

const Product = ({productsData}) => {
    const {state,dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productsData.image} alt='product' style={{width:"200px"}} />
            <h3>{shorten(productsData.title)}</h3>
            <p>{productsData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productsData.id}`}>Detailes</Link>
                <div className={styles.buttonContainer}>
                        {quantityCount(state,productsData.id) === 1 && <button className={styles.smallButton} onClick={()=>dispatch({type:"REMOVE_ITEM",payload:productsData})}><img src={trashIcon} alt="trash" style={{width:"20px"}} /></button>}
                        {quantityCount(state,productsData.id) > 1 && <button className={styles.smallButton} onClick={()=>dispatch({type:"DECRISE",payload:productsData})}>-</button>}
                        {quantityCount(state,productsData.id) > 0 && <span className={styles.counter}>{quantityCount(state,productsData.id)}</span>}
                        
                    {
                        isInCart(state,productsData.id) ?
                        <button className={styles.smallButton} onClick={()=>dispatch({type:"INCRESE",payload:productsData})}>+</button>:
                        <button onClick={()=>dispatch({type:"ADD_ITEM",payload:productsData})}>Add to cart</button>
                    }

                </div>
            </div>
        </div>
    );
};

export default Product;