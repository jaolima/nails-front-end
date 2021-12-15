import React from 'react';
import { useRouter } from 'next/router'
import CommonLayout from '../../components/shop/common-layout';
import ProductSection from './common/product_section';
import { withApollo } from '../../helpers/apollo/apollo';
import LeftSidebarPage from './product/leftSidebarPage';
import { useTranslation } from "react-i18next";
const LeftSidebar = () => {
        const { t } = useTranslation();
  const router = useRouter();
  const id = router.query.id;

  return (
    <CommonLayout parent={t('Home')} title={t('Product')}>
      <LeftSidebarPage pathId={id} />
      {/* <ProductSection /> */}
    </CommonLayout>
  );
}


export default withApollo(LeftSidebar);