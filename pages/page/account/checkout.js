import React, { useEffect, useState } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import firebase from '../../../config/base'
import CheckoutPage from './common/checkout-page';
import Login from '../../page/account/login-auth'
import { useTranslation } from "react-i18next";
const Checkout = () => {
    const { t } = useTranslation();
    const [currentUser, setCurrentUser] = useState(false);

    return (
        <>
            {!currentUser ?
                <CommonLayout parent={t('Home')} title={t('checkout')}>
                    <CheckoutPage />
                </CommonLayout>
                :
                <Login />
            }
        </>
    )
}

export default Checkout;