import React from "react";
import Banner from "./layouts/Fashion/Components/Banner";
import CollectionBanner from "./layouts/Fashion/Components/Collection-Banner";
import TopProduct from "../components/common/Collections/TopProduct";
import TopCollection2 from "../components/common/Collections/Collection2";
import Parallax from "./layouts/Fashion/Components/Parallax";
import TopCategories from "../components/common/Collections/TopCategories";
import ServiceLayout from "../components/common/Service/service3";
import Blog from "../components/common/Blog/blog1";
import Instagram from "../components/common/instagram/instagram1";
import LogoBlock from "../components/common/logo-block";
import HeaderTwo from "../components/headers/header-two";
import { withApollo } from "../helpers/apollo/apollo";
import { Product4, Product5, Product6 } from "../services/script";
import ModalComponent from "../components/common/Modal";
import Helmet from "react-helmet";
import favicon from "../public/assets/images/favicon/1.png";
import MasterFooter from "../components/footers/common/MasterFooter";

const Fashion = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon ? favicon : ""} />
      </Helmet>

      {/* <ModalComponent /> */}

      <HeaderTwo
        logoName={"logo.png"}
        topClass="top-header"
        headerClass="header-2 green-gradient"
      />

      <Banner />

      <ServiceLayout sectionClass="border-section small-section" />

      <TopProduct
        title="special offer"
        subTitle="top collection"
        titleClass="title1 section-t-space"
        designClass="section-b-space ratio_square"
        inner="title-inner1"
        line={true}
        type="beauty"
        productDetail="text-center"
        cartClass="cart-box"
      />


      <Parallax />

      <Instagram type="fashion" />

      {/* <div className="section-b-space">
        <LogoBlock />
      </div> */}

      <MasterFooter
        footerClass={`footer-light`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={"logo.png"}
      />
    </>
  );
};

export default withApollo(Fashion);
