import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { Container, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";

import CommonLayout from '../../components/shop/common-layout';
import { withApollo } from '../../helpers/apollo/apollo';
import ProductList from '../shop/common/productList';
import FilterPage from '../shop/common/filter';

const Product = () => {

  const { t } = useTranslation();

  const router = useRouter()
  const { category } = router.query

  const [sidebarView, setSidebarView] = useState(false)

  const openCloseSidebar = () => {
    if (sidebarView) {
      setSidebarView(!sidebarView)
    } else {
      setSidebarView(!sidebarView)
    }
  }
  
  return (
    <CommonLayout title={t('Nail varnishes - color varnishes')} parent={t('Home')} >
      <section className="section-b-space ratio_asos">
        <div className="collection-wrapper">
          <Container>
            <Row>
              <FilterPage sm="3" sidebarView={sidebarView} closeSidebar={() => openCloseSidebar(sidebarView)} />

              <ProductList
                category={category}
                colClass="col-xl-3 col-6 col-grid-box"
                layoutList=''
                openSidebar={() => openCloseSidebar(sidebarView)}
              />
            </Row>
          </Container>
        </div>
      </section>
    </CommonLayout>
  )
}

export default withApollo(Product);