import React from 'react';
import { Container, Row, Form, Input, Label, Col } from 'reactstrap';
import { useTranslation } from "react-i18next";

const ProfilePage = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className="contact-page register-page">
                <Container>
                    <Row>
                        <Col sm="12">
                            <h3>{t('PERSONAL DETAIL')}</h3>
                            <Form className="theme-form">
                                <Row>
                                    <Col md="6">
                                        <Label for="name">{t('First Name')}</Label>
                                        <Input type="text" className="form-control" id="name" placeholder="Enter Your name" required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="email">{t('Last Name')}</Label>
                                        <Input type="text" className="form-control" id="last-name" placeholder="Email" required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="review">{t('Phone number')}</Label>
                                        <Input type="text" className="form-control" id="review" placeholder="Enter your number"required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="email">{t('Email')}</Label>
                                        <Input type="text" className="form-control" id="email" placeholder="Email" required="" />
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="contact-page register-page section-b-space">
                <Container>
                    <Row>
                        <Col sm="12">
                            <h3>{t('SHIPPING ADDRESS')}</h3>
                            <Form className="theme-form">
                                <Row>
                                    <Col md="6">
                                        <Label for="name">{t('flat / plot')}</Label>
                                        <Input type="text" className="form-control" id="home-ploat" placeholder="company name"
                                            required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="name">{t('Address')} *</Label>
                                        <Input type="text" className="form-control" id="address-two" placeholder="Address"
                                            required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="email">{t('Zip Code')} *</Label>
                                        <Input type="text" className="form-control" id="zip-code" placeholder="zip-code"
                                            required="" />
                                    </Col>
                                    <Col md="6" className="select_input">
                                        <Label for="review">{t('Country')} *</Label>
                                        <select className="form-control" size="1">
                                            <option value="India">India</option>
                                            <option value="UAE">UAE</option>
                                            <option value="U.K">U.K</option>
                                            <option value="US">US</option>
                                        </select>
                                    </Col>
                                    <Col md="6">
                                        <Label for="review">{('City')} *</Label>
                                        <Input type="text" className="form-control" id="city" placeholder="City" required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="review">{('Region/State')} *</Label>
                                        <Input type="text" className="form-control" id="region-state" placeholder="Region/state"
                                            required="" />
                                    </Col>
                                    <div className="col-md-12">
                                        <button className="btn btn-sm btn-solid" type="submit">{t('Save setting')}</button>
                                    </div>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProfilePage;