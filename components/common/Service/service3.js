import React, { Fragment } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import {
  svgFastEfficient,
  svgFreeShipping,
  svgoffer,
  svgpayment,
  svgLowCost
} from "../../../services/script";
import MasterServiceContent from "./MasterServiceConternt";
import { useTranslation } from "react-i18next";
const Data = [
  {
    link: svgFreeShipping,
    title: "Express Shipping",
    service: "from Mon-Fri",
  },
  {
    link: svgLowCost,
    title: "Cheapest in",
    service: "Switzerland Prices",
  },
  {
    link: svgoffer,
    title: "Absolutely safe",
    service: "Payment Methods",
  },
  {
    link: svgFastEfficient,
    title: "Direct from the",
    service: "manufacturer einkaufen",
  },
  {
    link: svgpayment,
    title: "free shipping",
    service: "from CHF 100.-",
  },
];
const Service = ({ layoutClass, hrLine }) => {
  const { t } = useTranslation();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Fragment>
      <section className="none-parallax-mobile">
        <Container className="absolute-bg ">
          <div className="service p-0 ">
            <Row>
              {Data.map((data, i) => {
                return (
                  <Col
                    key={i}
                    className={` ${hrLine ? "service-block1" : "service-block"
                      }`}
                  >
                    <MasterServiceContent
                      link={data.link}
                      title={data.title}
                      service={data.service}
                      hrLine={hrLine}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </section>

      <section className="none-parallax-pc">
        <Container className="absolute-bg ">
          <Slider {...settings} className="service-block ">
            <div className="media border-0 m-0">
              <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
              <div className="media-body">
                <h4>{t("Express Shipping")}</h4>
                <p>{t("from Mon-Fri")}</p>
              </div>
            </div>

            <div className="media border-0 m-0">
              <div dangerouslySetInnerHTML={{ __html: svgLowCost }} />
              <div className="media-body">
                <h4>{t("Cheapest in")}</h4>
                <p>{t("Switzerland Prices")}</p>
              </div>
            </div>

            <div className="media border-0 m-0">
              <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
              <div className="media-body">
                <h4>{t("Absolutely safe")}</h4>
                <p>{t("Payment Methods")}</p>
              </div>
            </div>

            <div className="media border-0 m-0">
              <div dangerouslySetInnerHTML={{ __html: svgFastEfficient }} />
              <div className="media-body">
                <h4>{t("Direct from the")}</h4>
                <p>{t("manufacturer einkaufen")}</p>
              </div>
            </div>

            <div className="media border-0 m-0">
              <div dangerouslySetInnerHTML={{ __html: svgpayment }} />
              <div className="media-body">
                <h4>{t("free shipping")}</h4>
                <p>{t("from CHF 100.-")}</p>
              </div>
            </div>
          </Slider>
        </Container>
      </section>

    </Fragment >
  );
};

export default Service;
