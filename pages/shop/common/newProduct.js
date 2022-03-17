import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Media } from "reactstrap";
import Slider from "react-slick";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import { useTranslation } from "react-i18next";
import api from "../../../config";


// const GET_PRODUCTS = gql`
//   query newProducts($type: String!) {
//     newProducts(type: $type) {
//       title
//       price
//       images {
//         alt
//         src
//       }
//     }
//   }
// `;

const NewProduct = () => {

  const { t } = useTranslation();
  const CurContect = useContext(CurrencyContext);
  const symbol = CurContect.state.symbol;
  // var { loading, data } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     type: "fashion",
  //   },
  // });

  const [dataProduct, setDataProduct] = useState(null);
  const [loading, setLoading] = useState(false);

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
    // <!-- side-bar single product slider start -->
    <div className="theme-card">
      <h5 className="title-border">{t('new product')}</h5>
      <Slider className="offer-slider slide-1">
        <div>
          {!dataProduct ||
            dataProduct.length === 0 ||
            loading ? (
            "loading"
          ) : (
            <>
              {dataProduct &&
                dataProduct.slice(0, 3).map((product, index) => (
                  <div className="media" key={index}>
                    <a href="">
                      <Media
                        className="img-fluid blur-up lazyload"
                        src={product.uri_image}
                        alt={product.name}
                      />
                    </a>
                    <div className="media-body align-self-center">
                      <div className="rating">
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>
                      </div>
                      <a href={null}>
                        <h6>{product.name}</h6>
                      </a>
                      <h4>
                        {symbol + product.price}
                      </h4>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
        <div>
          {!dataProduct ||
            dataProduct.length === 0 ||
            loading ? (
            "loading"
          ) : (
            <>
              {dataProduct &&
                dataProduct.slice(4, 7).map((product, index) => (
                  <div className="media" key={index}>
                    <a href="">
                      <Media
                        className="img-fluid blur-up lazyload"
                        src={product.uri_image}
                        alt={product.name}
                      />
                    </a>
                    <div className="media-body align-self-center">
                      <div className="rating">
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>
                      </div>
                      <a href={null}>
                        <h6>{product.name}</h6>
                      </a>
                      <h4>
                        {symbol + product.price}
                      </h4>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </Slider>
    </div>
    //  <!-- side-bar single product slider end -->
  );
};

export default NewProduct;
