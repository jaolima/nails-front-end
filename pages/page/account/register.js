import React, { useState } from "react";
import CommonLayout from "../../../components/shop/common-layout";
import {
  Input,
  Container,
  Row,
  Form,
  Label,
  Col,
  Button,
  FormFeedback,
} from "reactstrap";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const Register = () => {
  const { t } = useTranslation();

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [info, setInfo] = useState({
    name: false,
    email: false,
    password: false,
  });
  function handleInput(values, id) {
    dataForm[id] = values;
    setDataForm(dataForm);
  }

  function validation(name, email, password) {
    console.log("name.length <= 3 ", name.length <= 3);
    console.log("name.length ", name.length);
    console.log("name ", name);
    console.log("email ", email);
    console.log("password ", password);

    if (name === "") {
      toast.error(t("The name field is required."));
    } else if (name.length <= 3) {
      toast.error(t("The name must be longer than 3 characters."));
    } else {
      info.name = false;
    }

    if (password === "") {
      toast.error(t("The password field is required."));
    } else if (name.length < 6) {
      toast.error(t("The password must be longer than 6 characters."));
    } else {
      info.password = false;
    }

    if (email === "") {
      toast.error(t("The email field is required."));
    } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      toast.error(t("The email is not valid."));
    } else {
      info.email = false;
    }

    setInfo(info);

    if (!info.name || !info.password || !info.email) {
      return true;
    } else {
      return false;
    }
  }

  function handleSubmit(values) {
    values.preventDefault();
    console.log("dataForm ", dataForm);
    let respValidation = validation(
      dataForm.name,
      dataForm.email,
      dataForm.password
    );

    if (respValidation) {
      var axios = require("axios").default;
      var options = {
        method: "POST",
        url: "http://localhost:3333/users",
        headers: {
          "user-agent": "vscode-restclient",
          "content-type": "application/json",
        },
        data: {
          name: dataForm.name,
          email: dataForm.email,
          password: dataForm.password,
          uriImage: "teste.com",
        },
      };
      axios
        .request(options)
        .then(function (response) {
          toast.success(t("Successfully registered !"));
          router.push("/page/account/login");
        })
        .catch(function (error) {
            console.log("error", error)
          toast.error(t("Unable to register, please try again later !"));
        });
    }
  }

  return (
    <CommonLayout parent={t("Home")} title={t("register")}>
      <section className="register-page section-b-space">
        <Container>
          <Row>
            <Col lg="12">
              <h3>{t("create account")}</h3>
              <div className="theme-card">
                <Form
                  className="theme-form"
                  requiredMark={false}
                  onSubmit={handleSubmit}
                >
                  <Row>
                    <Col md="6">
                      <Label for="email">{t("First Name")}</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder={t("First Name")}
                        required=""
                        onChange={(e) =>
                          handleInput(e.target.value, e.target.id)
                        }
                      />
                    </Col>
                    <Col md="6">
                      <Label for="email">{t("email")}</Label>
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
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Label for="review">{t("Password")}</Label>
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
                    </Col>
                  </Row>

                  <Button type="submit" className="btn btn-solid">
                    {t("create Account")}
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default Register;
