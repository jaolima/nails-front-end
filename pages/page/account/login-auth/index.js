import React, { useState, useEffect } from "react";
import CommonLayout from "../../../../components/shop/common-layout";
import { Container, Row, Form, Label, Input, Col } from "reactstrap";
import firebase, {
  googleProvider,
  facebookProvider,
} from "../../../../config/base";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Link from 'next/link';

const Login = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test@123");
  const [name, setName] = useState(localStorage.getItem("Name"));

  useEffect(() => {
    localStorage.setItem("Name", name);
  }, [name]);

  const loginAuth = async (email, password) => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function () {
          setName("Emay Walter");
          setTimeout(() => {
            router.push(`/page/account/checkout`);
          }, 200);
        });
    } catch (error) {
      setTimeout(() => {
        toast.error("error", error);
      }, 200);
    }
  };

  const googleAuth = async () => {
    try {
      firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then(function (result) {
          setName(result.user.displayName);
          setTimeout(() => {
            router.push(`/page/account/checkout`);
          }, 200);
        });
    } catch (error) {
      setTimeout(() => {
        toast.error(
          t(
            "Oppss.. The password is invalid or the user does not have a password."
          )
        );
      }, 200);
    }
  };

  const facebookAuth = async () => {
    try {
      firebase
        .auth()
        .signInWithPopup(facebookProvider)
        .then(function (result) {
          setName(result.user.displayName);
          setTimeout(() => {
            router.push(`/page/account/checkout`);
          }, 200);
        });
    } catch (error) {
      setTimeout(() => {
        toast.error(
          t(
            "Oppss.. The password is invalid or the user does not have a password."
          )
        );
      }, 200);
    }
  };

  return (
    <CommonLayout parent={t("Home")} title={t("login")}>
      <section className="login-page section-b-space">
        <Container>
          <Row>
            <Col lg="6">
              <h3>{t("Login")}</h3>
              <div className="theme-card">
                <Form className="theme-form">
                  <div className="form-group">
                    <Label for="email">{t("Email")}</Label>
                    <Input
                      type="text"
                      defaultValue={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <Label for="review">{t("Password")}</Label>
                    <Input
                      type="password"
                      defaultValue={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      id="review"
                      placeholder="Enter your password"
                      required=""
                    />
                  </div>
                  <a
                    href="#"
                    className="btn btn-solid"
                    onClick={() => loginAuth(email, password)}
                  >
                    {t("Login")}
                  </a>
                  <div className="footer-social">
                    <ul>
                      <li onClick={facebookAuth}>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </li>
                      <li onClick={googleAuth}>
                        <a>
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Form>
              </div>
            </Col>
            <Col lg="6" className="right-login">
              <h3>{t("New Customer")}</h3>
              <div className="theme-card authentication-right">
                <h6 className="title-font">{t("Create A Account")}</h6>
                <p>
                  {t(
                    "Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register."
                  )}
                </p>
                <Link href={`/page/account/register`}>
                  <a href="#" className="btn btn-solid">
                    {t("Create an Account")}
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default Login;
