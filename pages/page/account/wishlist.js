import React from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import WishlistPage from './common/wishlist-page';
import { useTranslation } from "react-i18next";

const Wishliat = () => {
        const { t } = useTranslation();
    return (
        <CommonLayout parent={t('Home')} title={t('wishlist')}>
            <WishlistPage />
        </CommonLayout>
    )
}

export default Wishliat;