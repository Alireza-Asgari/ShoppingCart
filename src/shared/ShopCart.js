import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//context
import { CartContext } from '../context/CartContextProvider';
//component
import Cart from './Cart';
//styles
import styles from "./ShopCart.module.css"

const ShopCart = () => {
    const {state,dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} /> )}
            </div>
            
            {
                state.itemsCounter > 0 && <div className={styles.payment}>
                    <p><span>Total Items: </span>{state.itemsCounter}</p>
                    <p><span>Total Payment: </span>{state.total}</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.checkout} onClick={()=> dispatch({type:"CHECKOUT"})}>Check out</button>
                        <button className={styles.clear} onClick={()=> dispatch({type:"CLEAR"})}>Clear</button>
                    </div>
                </div>
            }
            {
                state.checkOut && <div className={styles.complete}>
                    <h3>Check out successfuly.</h3>
                    <Link to="/products">Bye more</Link>
                </div>
            }
            {
                !state.checkOut && state.itemsCounter === 0 && <div className={styles.complete}>
                    <h3>Do you want to bye more?</h3>
                    <Link to="/products">Go back to shop</Link>
                </div>
            }
            
        </div>
    );
};

export default ShopCart;