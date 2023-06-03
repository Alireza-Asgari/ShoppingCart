import React,{ useContext } from 'react';
//context
import {ProductsContext} from "../context/ProductContextProvider";
//components
import Product from '../shared/Product';
//styles
import styles from "./Store.module.css"
const Store = () => {

    const products = useContext(ProductsContext);
///style={{display:"flex" , flexWrap:"wrap",justifyContent:"space-between"}}
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container} >
            {
                products.map(product => <Product 
                    key={product.id}
                    productsData={product}
                    />)
            }
        </div>
        </div>
    );
};

export default Store;