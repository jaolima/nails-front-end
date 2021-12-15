import React from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Input, Container, Row, Form, Label, Col } from 'reactstrap';
import { useTranslation } from "react-i18next";
const Register = () => {
    const { t } = useTranslation();
    return (
        <CommonLayout parent={t('Home')} title={t('register')}>
            <section className="register-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="12">
                            <h3>{t('create account')}</h3>
                            <div className="theme-card">
                                <Form className="theme-form">
                                    <Row>
                                        <Col md="6">
                                            <Label for="email">{t('First Name')}</Label>
                                            <Input type="text" className="form-control" id="fname" placeholder={t('First Name')}
                                                required="" />
                                        </Col>
                                        <Col md="6">
                                            <Label for="review">{t('Last Name')}</Label>
                                            <Input type="password" className="form-control" id="lname" placeholder={t('Last Name')}
                                                required="" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <Label for="email">{t('email')}</Label>
                                            <Input type="text" className="form-control" id="email" placeholder={t('Email')} required="" />
                                        </Col>
                                        <Col md="6">
                                            <Label for="review">{t('Password')}</Label>
                                            <Input type="password" className="form-control" id="review"
                                                placeholder={t('Enter your password')} required="" />
                                        </Col>
                                        <a href="#" className="btn btn-solid">{t('create Account')}</a>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Register