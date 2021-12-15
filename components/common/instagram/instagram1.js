import React, { useState } from "react";
import Slider from "react-slick";
import {
  Row,
  Col,
  Media,
  Container,
  Modal,
  ModalBody,
  Input,
  Form,
  Button,
} from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Link from "next/link";

const GET_PRODUCTS = gql`
  query instagram($type: String!) {
    instagram(type: $type) {
      img
    }
  }
`;

var settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

const Instagram = ({ type }) => {
  var { data } = useQuery(GET_PRODUCTS, {
    variables: {
      type: type,
    },
  });

  const [modal, setModal] = useState(false);
  const [viewInsta, setViewInsta] = useState('');

  const toggle = () => setModal(!modal);

  return (
    <section className="instagram ratio_square">
      <Container
        className={`${type == "nursery" ||
          type == "bags" ||
          type == "fashion" ||
          type == "christmas" ||
          type == "fashion"
          ? "p-0"
          : ""
          }`}
        fluid={true}
      >
        <Row>
          <Col className="pt-0">
            <h2 className="title-borderless"># instagram</h2>
            <h3 className="title-borderless"><Link href="https://www.instagram.com/nailsfactory_schweiz/">@nailsfactory_schweiz</Link></h3>
            <div className="slide-7 no-arrow slick-instagram">
              <Slider {...settings}>
                {data &&
                  data.instagram.map((data, i) => (
                    <div key={i}>
                      <a onClick={() => { toggle(); setViewInsta(data.img) }}>
                        <div className="instagram-box">
                          <Media
                            alt=""
                            src={data.img}
                            className="bg-img"
                            style={{ width: "100%" }}
                          />
                          <div className="overlay">
                            <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className="modal-lg"
        centered
      >
        <div>
          <ModalBody className="modal1">
            <Row className="compare-modal">
              <Col lg="12">
                <div className="modal-bg">
                  <Button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={toggle}
                  >
                    <span aria-hidden="true">&times;</span>
                  </Button>
                  {viewInsta !== '' && (
                    <div className="offer-content">
                      <Row className="compare-modal">
                        <Col lg="6">
                          <h5><Link href="https://www.instagram.com/nailsfactory_schweiz/">@nailsfactory_schweiz</Link></h5>
                        </Col>
                        <div className="offer-content">
                          <Media
                            src={viewInsta}
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </div>
                      </Row>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </ModalBody>
        </div>
      </Modal>
    </section>
  );
};

export default Instagram;
