import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Collapse,
} from "reactstrap";
import LogoImage from "../../headers/common/logo";
import CopyRight from "./copyright";
import { useTranslation } from "react-i18next";

const MasterFooter = ({
  containerFluid,
  logoName,
  layoutClass,
  footerClass,
  footerLayOut,
  footerSection,
  belowSection,
  belowContainerFluid,
  copyRightFluid,
  newLatter,
}) => {
  const [isOpen, setIsOpen] = useState();
  const [collapse, setCollapse] = useState(0);
  const width = window.innerWidth < 750;
  const { t } = useTranslation();
  useEffect(() => {
    const changeCollapse = () => {
      if (window.innerWidth < 750) {
        setCollapse(0);
        setIsOpen(false);
      } else setIsOpen(true);
    };

    window.addEventListener("resize", changeCollapse);

    return () => {
      window.removeEventListener('resize', changeCollapse)
    }

  }, []);
  return (
    <div>
      <footer className={footerClass}>
        {newLatter ? (
          <div className={footerLayOut}>
            <Container fluid={containerFluid ? containerFluid : ""}>
              <section className={footerSection}>
                <Row>
                  <Col lg="6">
                    <div className="subscribe">
                      <div>
                        <h4>{t('SUBSCRIBE TO OUR NEWSLETTER!')}</h4>
                        <p>{t('Never Miss Anything From Swiss Nails Factory By Signing Up To Our Newsletter.')}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6">
                    <Form className="form-inline subscribe-form">
                      <FormGroup className="mx-sm-3">
                        <Input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder={t("Enter your email")}
                        />
                      </FormGroup>
                      <Button type="submit" className="btn btn-solid">
                        {t('subscribe')}
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </section>
            </Container>
          </div>
        ) : (
          ""
        )}

        <section className={belowSection}>
          <Container fluid={belowContainerFluid ? belowContainerFluid : ""}>
            <Row className="footer-theme partition-f">
              <Col lg="4" md="6">
                <div
                  className={`footer-title ${isOpen && collapse == 1 ? "active" : ""
                    } footer-mobile-title`}
                >
                  <h4
                    onClick={() => {
                      setCollapse(1);
                      setIsOpen(!isOpen);
                    }}
                  >
                    {t('about')}
                    <span className="according-menu"></span>
                  </h4>
                </div>
                <Collapse
                  isOpen={width ? (collapse === 1 ? isOpen : false) : true}
                >
                  <div className="footer-contant">
                    <div className="footer-logo">
                      <LogoImage logo={logoName} />
                    </div>
                    <p>{t('NAILS FACTORY is one of the top suppliers to the Swiss nail salons. But our high-quality products are also the perfect choice for private use. A huge selection of nail polishes, nail art products, UV and LED lamps and many other accessories for successful nail modeling await you in our Nails Online Shop.')}</p>
                    <div className="footer-social">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/Nails-Factorych-103119622035783" target="_blank">
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.google.com/maps/place/Nails+Factory/@47.3246674,8.2088617,15z/data=!4m5!3m4!1s0x0:0x6a223ed1dd95e69f!8m2!3d47.3246674!4d8.2088617?sa=X&ved=2ahUKEwjg39TAwI7sAhVyQxUIHb6uA8kQ_BIwDXoECBYQCA&shorturl=1" target="_blank">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/nailsfactory_schweiz/?hl=en" target="_blank">
                            <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Collapse>
              </Col>
              <Col className="offset-xl-1">
                <div className="sub-title">
                  <div
                    className={`footer-title ${isOpen && collapse == 2 ? "active" : ""
                      } `}
                  >
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(2);
                        } else setIsOpen(true);
                      }}
                    >
                      {t('categories')}
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 2 ? isOpen : false) : true}
                  >
                    <div className="footer-contant">
                      <ul>
                        <li>
                          <Link href={`/shop/left_sidebar`}>
                            <a>{t('Starter sets')}</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/shop/left_sidebar`}>
                            <a> {t('Instruments & accessories')} </a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/shop/left_sidebar`}>
                            <a>{t('Milling cutters & accessories')}</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/shop/left_sidebar`}>
                            <a> {t('Coupons')} </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
              <Col>
                <div className="sub-title">
                  <div
                    className={`footer-title ${isOpen && collapse == 3 ? "active" : ""
                      } `}
                  >
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(3);
                        } else setIsOpen(true);
                      }}
                    >
                      {t('information')}
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 3 ? isOpen : false) : true}
                  >
                    <div className="footer-contant">
                      <ul>
                        <li>
                          <a href="#">{t('Locations')}</a>
                        </li>
                        <li>
                          <a href="#">{t('FAQ')}</a>
                        </li>
                        <li>
                          <a href="#">{t('B2B request')}</a>
                        </li>
                        <li>
                          <a href="#">{t('contact')}</a>
                        </li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
              <Col>
                <div className="sub-title">
                  <div
                    className={`footer-title ${isOpen && collapse == 4 ? "active" : ""
                      } `}
                  >
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(4);
                        } else setIsOpen(true);
                      }}
                    >
                      {t('contact')}
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 4 ? isOpen : false) : true}
                  >
                    <div className="footer-contant">
                      <ul className="contact-list">
                        <li>
                          <i className="fa fa-map-marker"></i>{t('Seengen location Guardian Way 6 5707 Seengen')}
                        </li>
                        <li>
                          <i className="fa fa-phone"></i>{t('Phone + 41 62 771 00 21')}
                        </li>
                        <li>
                          <i className="fa fa-envelope-o"></i>{t('Email Us')}:{" "}
                          <a href="#">contact@nails-factory.ch</a>
                        </li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <CopyRight
          layout={layoutClass}
          fluid={copyRightFluid ? copyRightFluid : ""}
        />
      </footer>
    </div>
  );
};
export default MasterFooter;
