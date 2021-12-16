import React from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import CartPage from './common/cart-page';


const Wishliat = () => {
    return (
        <CommonLayout parent="Home" title="cart">
            <CartPage />
        </CommonLayout>
    )
}

export default Wishliat;