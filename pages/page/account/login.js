import React, { useEffect, useState } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row, Form, Label, Input, Col, Button } from 'reactstrap';
import { useTranslation } from "react-i18next";
import api from "../../../config";
import { toast } from "react-toastify";

const Login = () => {

    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);

    const [dataForm, setDataForm] = useState({
        email: "",
        password: "",
    });

    const [info, setInfo] = useState({
        email: false,
        password: false,
    });

    function handleInput(values, id) {
        dataForm[id] = values;
        setDataForm(dataForm);
    }

    function validation(email, password) {

        if (password === "") {
            toast.error(t("The password field is required."));
            info.password = true;
        } else {
            info.password = false;
        }

        if (email === "") {
            toast.error(t("The email field is required."));
            info.email = true;
        } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
            toast.error(t("The email is not valid."));
            info.email = true;
        } else {
            info.email = false;
        }

        setInfo(info);

        if (!info.name && !info.password && !info.email) {
            return true;
        } else {
            return false;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let respValidation = validation(
            dataForm.email,
            dataForm.password
        );

        if (respValidation) {
            var axios = require("axios").default;
            var options = {
                method: "POST",
                url: api.BASE_URL + "sessions",
                headers: {
                    "content-type": "application/json",
                },
                data: {
                    email: dataForm.email,
                    password: dataForm.password,
                },
            };
            axios
                .request(options)
                .then(function (response) {
                    // setDataProduct(response.data);
                    toast.success(t("Access successful"));
                })
                .catch(function (error) {
                    toast.error(t("Erro. Could not login"));
                });
        }


    };

    return (
        <CommonLayout parent={t('Home')} title={t('login')}>
            <section className="login-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="6">
                            <Form onSubmit={handleSubmit}
                                requiredMark={false}
                            >
                                <h3>{t('Login')}</h3>
                                <div className="theme-card">
                                    <Form className="theme-form">
                                        <div className="form-group">
                                            <Label for="email">{t('Email')}</Label>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                id="email"
                                                placeholder={t("Email")}
                                                required=""
                                                onChange={(e) =>
                                                    handleInput(e.target.value, e.target.id)
                                                }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <Label for="review">{t('Password')}</Label>
                                            <Input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder={t("Enter your password")}
                                                required=""
                                                onChange={(e) =>
                                                    handleInput(e.target.value, e.target.id)
                                                }
                                            />
                                        </div>
                                        <Button type="submit" className="btn btn-solid">{t('Login')}</Button>
                                    </Form>
                                </div>
                            </Form>
                        </Col>
                        <Col lg="6" className="right-login">
                            <h3>{t('New Customer')}</h3>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">{t('Create A Account')}</h6>
                                <p>{t('Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.')}</p>
                                <a href="/page/account/register" className="btn btn-solid">{t('Create an Account')}</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Login;