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
import HeaderOne from "../components/headers/header-one";
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
      <ModalComponent />
      <HeaderOne logoName={"logo.png"} topClass="top-header" />
      <Banner />
      <ServiceLayout sectionClass="border-section small-section" />
      {/* <CollectionBanner /> */}


      <TopProduct
        titleClass="title1 section-t-space"
        title="special offer"
        designClass="section-b-space ratio_square"
        subTitle="top collection"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        inner="title-inner1"
        line={true}

        backImage={true}
        type="beauty"
        innerClass="title1"
        productSlider={Product5}
        subtitle="special offer"
        productDetail="text-center"
        cartClass="cart-box"
      />


      <Parallax />

      <TopCategories
        type="fashion"
        backImage={true}
        productSlider={Product4}
        line={true}
        title="title1 section-t-space"
        inner="title-inner1"
        designClass="section-b-space p-t-0 ratio_asos"
        noSlider="true"
        cartClass="cart-info cart-wrap"
      />
      {/* <Blog type="fashion" title="title1" inner="title-inner1" /> */}
      <Instagram type="fashion" />
      <div className="section-b-space">
        <LogoBlock />
      </div>
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
