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
import api from "../../../services/api";

// const GET_PRODUCTS = gql`
//   query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {
//     products(type: $type, indexFrom: $indexFrom, limit: $limit) {
//       items {
//         id
//         title
//         description
//         type
//         brand
//         category
//         price
//         new
//         stock
//         sale
//         discount
//         variants {
//           id
//           sku
//           size
//           color
//           image_id
//         }
//         images {
//           image_id
//           id
//           alt
//           src
//         }
//       }
//     }
//   }
// `;

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

  const [dataProduct, setDataProduct] = useState("");
  const [loading, setLoading] = useState(false);

  // var { loading1, data } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     type: type,
  //     indexFrom: 0,
  //     limit: 8,
  //   },
  // });

  useEffect(() => {
    setLoading(true);

    api
      .get("products")
      .then((response) => {
        setDataProduct(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
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
                <Slider {...Product4} className="product-4 product-m no-arrow">
                  {dataProduct &&
                    dataProduct.map((product, index) => (
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
