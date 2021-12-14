import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import MasterParallaxBanner from "./MasterParallaxBanner";

const Parallax = () => {
  return (
    <MasterParallaxBanner
      bg="parallax-banner1"
      parallaxClass="text-center p-left"
      title="2021"
      subTitle1="fashion trends"
      subTitle2="special offer"
    />
  );
};

export default Parallax;
