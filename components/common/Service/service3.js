import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  svgFastEfficient,
  svgFreeShipping,
  svgoffer,
  svgpayment,
  svgLowCost
} from "../../../services/script";
import MasterServiceContent from "./MasterServiceConternt";
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
  return (
    <Fragment>
      <section className={layoutClass}>
        <Container className="absolute-bg">
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
    </Fragment>
  );
};

export default Service;
