import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Product4 } from "../../../services/script";
import ProductItem from "../product-box/ProductBox1";
import PostLoader from "../PostLoader";
import { Row, Col, Container } from "reactstrap";
import CartContext from "../../../helpers/cart";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import { CompareContext } from "../../../helpers/Compare/CompareContext";
import { useTranslation } from "react-i18next";
import api from "../../../config";


const TopProduct = (props) => {
  const {
    titleClass,
    title,
    inner,
    subTitle,
    text,

    designClass,
    type,
    cartClass,
    productDetail,
  } = props;
  const { t } = useTranslation();
  const context = useContext(CartContext);
  const contextWishlist = useContext(WishlistContext);
  const contextCompare = useContext(CompareContext);
  const quantity = context.quantity;

  const [dataProduct, setDataProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };


  useEffect(() => {
    setLoading(true);

    var axios = require("axios").default;
    var options = {
      method: "GET",
      url: api.BASE_URL + "topproducts",
      headers: {
        "content-type": "application/json",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setDataProduct(response.data);
      })
      .catch(function (error) {
        console.log("error", error);
      });


    setLoading(false);
  }, []);

  return (
    <>
      <div className={titleClass}>
        <h4>{t(title)}</h4>
        <h2 className={inner}>{t(subTitle)}</h2>
      </div>

      <section className={designClass}>
        <Container>
          <Row>
            <Col>
              {!dataProduct || !dataProduct.length === 0 || loading ? (
                <div className="row mx-0 margin-default">
                  <div className="col-xl-3 col-lg-4 col-6">
                    <PostLoader />
                  </div>
                  <div className="col-xl-3 col-lg-4 col-6">
                    <PostLoader />
                  </div>
                  <div className="col-xl-3 col-lg-4 col-6">
                    <PostLoader />
                  </div>
                  <div className="col-xl-3 col-lg-4 col-6">
                    <PostLoader />
                  </div>
                </div>
              ) : (
                <Slider {...settings} className="product-4 product-m no-arrow">
                  {dataProduct &&
                    dataProduct.map((product, index) => (
                      <>
                        <div key={index}>
                          <ProductItem
                            product={product}
                            productDetail={productDetail}
                            // addCompare={() => contextCompare.addToCompare(product)}
                            addWishlist={() => contextWishlist.addToWish(product)}
                            addCart={() => context.addToCart(product, quantity)}
                            cartClass={cartClass}
                          />
                        </div>
                      </>
                    ))}
                </Slider>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TopProduct;
