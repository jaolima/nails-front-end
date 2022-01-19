import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import Link from "next/link";
import firebase from "../../../config/base";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import language from "../../../public/assets/images/icon/language_translator.png";
import Currency from "./currency";
import CartContainer from "../../containers/CartContainer";
import Cart from "../../containers/Cart";
import cart from "../../../public/assets/images/icon/cart.png";
import langConfig from "../../constant/langConfig.json";
import i18next from "../../constant/i18n";

const TopBarDark = ({ topClass, fluid, direction }) => {
  const router = useRouter();
  const { t } = useTranslation();

  const firebaseLogout = () => {
    firebase.auth().signOut();
    router.push("/page/account/login-auth");
  };
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  return (
    <div className={topClass}>
      <Container fluid={fluid}>
        <Row>
          <Col lg="3">
            <div className="header-contact">
              <ul>
                <li>{t("Beauty is in your hands")}</li>
              </ul>
            </div>
          </Col>
          <Col lg="9" className="text-right">
            <ul className="header-dropdown">
              <li className="mobile-wishlist">
                <Link href="/page/account/wishlist">
                  <a>
                    <i className="fa fa-heart" aria-hidden="true"></i>{" "}
                    {t("wishlist")}
                  </a>
                </Link>
              </li>
              <li className="onhover-dropdown mobile-account">
                <i className="fa fa-user" aria-hidden="true"></i>{" "}
                {t("My Account")}
                <ul className="onhover-show-div">
                  <li>
                    <Link href={`/page/account/login`}>
                      <a>{t("Login")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/page/account/register`}>
                      <a>{t("Register")}</a>
                    </Link>
                  </li>
                  <li onClick={() => firebaseLogout()}>
                    <a>{t("Logout")}</a>
                  </li>
                </ul>
              </li>
              {/* <li className="onhover-dropdown mobile-account">
                <i className="fa fa-language" aria-hidden="true"></i>{" "}
                {t("language")}
                <ul className="onhover-show-div">
                  {langConfig.map((item, i) => (
                    <li key={i}>
                      <a
                        href={null}
                        onClick={() => {
                          changeLanguage(item.val);
                        }}
                      >
                        {item.lang}
                      </a>
                    </li>
                  ))}
                </ul>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBarDark;
