import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
const MasterParallaxBanner = ({
  parallaxSectionClass,
  bg,
  parallaxClass,
  title,
  subTitle1,
  subTitle2,
}) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <section className={`p-0 ${parallaxSectionClass}`}>
        <div className={`full-banner ${bg} parallax ${parallaxClass}`}>
          <Container>
            <Row>
              <Col>
                <div className="banner-contain">
                  <h2>{t(title)}</h2>
                  <h3>{t(subTitle1)}</h3>
                  <h4>{t(subTitle2)}</h4>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </Fragment>
  );
};

export default MasterParallaxBanner;
