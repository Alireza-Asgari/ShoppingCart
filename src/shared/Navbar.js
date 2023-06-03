import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//context
import { CartContext } from '../context/CartContextProvider';
//icons 
import shopIcon from "../assests/icons/shop.svg";
//styles
import styles from './Navbar.module.css';

const Navbar = () => {
    const {state} = useContext(CartContext);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}> 
                <Link className={styles.productLink} to="/products" >Products</Link>
                <div className={styles.iconContaine}>
                    <Link to="/cart" ><img src={shopIcon} alt="shop" style={{width:"30px"}} /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;