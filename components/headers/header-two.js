import React, { useEffect, useState } from "react";
import cart from "../../public/assets/images/icon/cart.png";
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import Cart from "../containers/Cart";
import CartContainer from "../containers/CartContainer";
import TopBar from "./common/topbar-dark";
import { Media, Container, Row, Col, Input } from "reactstrap";
import LogoImage from "./common/logo";
import search from "../../public/assets/images/icon/search.png";
import language from "../../public/assets/images/icon/language_translator.png";
import Currency from "./common/currency";
import SearchOverlay from "./common/search-overlay";
import { useTranslation } from "react-i18next";
import langConfig from "../constant/langConfig.json";

const HeaderTwo = ({ logoName, headerClass, topClass, direction }) => {
  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display:none";
    }, 2000);
  }, []);

  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  };
  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };
  const { t } = useTranslation();
  return (
    <div>
      <header id="sticky" className={`${headerClass}`}>
        <div className="mobile-fix-option"></div>
        {/*Top Header Component*/}
        <TopBar topClass={topClass} />

        <Container>
          <Row>
            <Col >
              <div className="main-menu border-section border-top-0">
                <div className="menu-left">
                  <div className="navbar">
                    <a href={null} onClick={openNav}>
                      <div className="bar-style">
                        {" "}
                        <i
                          className="fa fa-bars sidebar-bar"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </a>
                    {/*SideBar Navigation Component*/}
                    <SideBar />
                  </div>
                </div>
                <div className="brand-logo layout2-logo">
                  <LogoImage logo={logoName} />
                </div>
                <div>
                  <form className="form_search" role="textbox">
                    {/* eslint-disable-next-line */}
                    <Input
                      id="query search-autocomplete"
                      type="search"
                      placeholder={t('Find your product here...')}
                      className="nav-search nav-search-field"
                      aria-expanded="true"
                    />
                    <button
                      type="submit"
                      name="nav-submit-button"
                      className="btn-search"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="menu-right pull-right">
                  <div>
                    <div className="icon-nav">
                      <ul>
                        {direction === undefined ? (
                          <CartContainer icon={cart} />
                        ) : (
                          <Cart icon={cart} layout={direction} />
                        )}
                        <li className="onhover-dropdown mobile-account">
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div className="main-nav-center">
                <NavBar />
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <SearchOverlay />
    </div>
  );
};

export default HeaderTwo;
