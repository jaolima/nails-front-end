import React from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row, Form, Label, Input, Col } from 'reactstrap';
import { useTranslation } from "react-i18next";
const Login = () => {
    const { t } = useTranslation();
    return (
        <CommonLayout parent={t('Home')} title={t('login')}>
            <section className="login-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="6">
                            <h3>{t('Login')}</h3>
                            <div className="theme-card">
                                <Form className="theme-form">
                                    <div className="form-group">
                                        <Label for="email">{t('Email')}</Label>
                                        <Input type="text" className="form-control" id="email" placeholder={t('Email')} required="" />
                                    </div>
                                    <div className="form-group">
                                        <Label for="review">{t('Password')}</Label>
                                        <Input type="password" className="form-control" id="review"
                                            placeholder={t('Enter your password')} required="" />
                                    </div><a href="#" className="btn btn-solid">{t('Login')}</a>
                                </Form>
                            </div>
                        </Col>
                        <Col lg="6" className="right-login">
                            <h3>{t('New Customer')}</h3>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">{t('Create A Account')}</h6>
                                <p>{t('Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.')}</p><a href="#"
                                        className="btn btn-solid">{t('Create an Account')}</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Login;