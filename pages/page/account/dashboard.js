import React, { useState } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from "react-i18next";

const Dashboard = () => {

    const { t } = useTranslation();

    return (
        <CommonLayout parent={t("Home")} title={t("dashboard")}>
            <section className="section-b-space">
                <Container>
                    <Row>
                        <Col lg="3">
                            <div className="dashboard-left" >
                                <div className="block-content">
                                    <ul>
                                        <li className="active">
                                            <i class="fa fa-user my-1 mr-3"></i>
                                            <a href="#">{t("Account")}</a>
                                        </li>
                                        <li>
                                            <i class="fa fa-money my-1 mr-3"></i>
                                            <a href="#">{t("My Orders")}</a>
                                        </li>
                                        <li>
                                            <i class="fa fa-heart my-1 mr-3"></i>
                                            <a href="/page/account/wishlist">{t("My Wishlist")}</a>
                                        </li>
                                        <li>
                                            <i class="fa fa-shopping-cart my-1 mr-3"></i>
                                            <a href="/page/account/cart">{t("My Cart")}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="responsive-menu-dashboard">
                                <div className="breadcrumb-section mb-4">
                                    <Container>
                                        <Row>
                                            <Col sm="3" className='mb-3'>
                                                <div className="page-title ">
                                                    <h2>{t("Account")}</h2>
                                                </div>
                                            </Col>
                                            <Col sm="9">
                                                <nav aria-label="breadcrumb" className="theme-breadcrumb">
                                                    <ol className="breadcrumb">
                                                        <li className="breadcrumb-item">
                                                            <i class="fa fa-money my-1 mr-3"></i>
                                                            <a href="#">{t("My Orders")}</a>
                                                        </li>
                                                        <li className="breadcrumb-item">
                                                            <i class="fa fa-heart my-1 mr-3"></i>
                                                            <a href="/page/account/wishlist">{t("My Wishlist")}</a>
                                                        </li>
                                                        <li className="breadcrumb-item">
                                                            <i class="fa fa-shopping-cart my-1 mr-3"></i>
                                                            <a href="/page/account/cart">{t("My Cart")}</a>
                                                        </li>
                                                    </ol>
                                                </nav>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </Col>

                        <Col lg="9">
                            <div className="dashboard-right">
                                <div className="dashboard">
                                    <div className="box-account box-info">
                                        <Row>
                                            <Col sm="12">
                                                <div className="box">
                                                    <div className="box-title">
                                                        <h3>{t('Account Information')}</h3>
                                                        <a href="/page/account/profile">{t('Edit')}</a>
                                                    </div>

                                                    <Row>
                                                        <Col sm="6">
                                                            <div className="box-content">
                                                                <h5>{t('Name')}</h5>
                                                                <h6>MARk JECNO</h6>
                                                            </div>
                                                        </Col>
                                                        <Col sm="6">
                                                            <div className="box-content">
                                                                <h5>{t('Email')}</h5>
                                                                <h6>MARk-JECNO@gmail.com</h6>
                                                            </div>
                                                        </Col>
                                                        <Col className="mt-3" sm="12">
                                                            <div className="box-content">
                                                                <h5>{t('Password')}</h5>
                                                                <h6>*********</h6>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Dashboard