import React, { useState, useContext, useEffect } from "react";
import { Col, Row, Media, Button, Spinner } from "reactstrap";
import Menu2 from "../../../public/assets/images/mega-menu/2.jpg";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import FilterContext from "../../../helpers/filter/FilterContext";
import ProductItem from "../../../components/common/product-box/ProductBox1";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import { useRouter } from "next/router";
import PostLoader from "../../../components/common/PostLoader";
import CartContext from "../../../helpers/cart";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import { CompareContext } from "../../../helpers/Compare/CompareContext";
import { useTranslation } from "react-i18next";
import api from "../../../config";

const GET_PRODUCTS = gql`
  query products(
    $type: _CategoryType!
    $indexFrom: Int!
    $limit: Int!
    $color: String!
    $brand: [String!]!
    $sortBy: _SortBy!
    $priceMax: Int!
    $priceMin: Int!
  ) {
    products(
      type: $type
      indexFrom: $indexFrom
      limit: $limit
      color: $color
      brand: $brand
      sortBy: $sortBy
      priceMax: $priceMax
      priceMin: $priceMin
    ) {
      total
      hasMore
      items {
        id
        title
        description
        type
        brand
        category
        price
        new
        sale
        stock
        discount
        variants {
          id
          sku
          size
          color
          image_id
        }
        images {
          image_id
          id
          alt
          src
        }
      }
    }
  }
`;

const ProductList = ({ colClass, layoutList, openSidebar, noSidebar, category }) => {


  const router = useRouter();
  const { t } = useTranslation();
  const cartContext = useContext(CartContext);
  const quantity = cartContext.quantity;
  const wishlistContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const [limit, setLimit] = useState(8);
  const curContext = useContext(CurrencyContext);
  const [grid, setGrid] = useState(colClass);
  const symbol = curContext.state.symbol;
  const filterContext = useContext(FilterContext);
  const selectedBrands = filterContext.selectedBrands;
  const selectedColor = filterContext.selectedColor;
  const selectedPrice = filterContext.selectedPrice;
  const selectedCategory = filterContext.state;
  const selectedSize = filterContext.selectedSize;
  const [sortBy, setSortBy] = useState("AscOrder");
  const [isLoading, setIsLoading] = useState(false);
  const [layout, setLayout] = useState(layoutList);
  const [url, setUrl] = useState();

  useEffect(() => {
    const pathname = window.location.pathname;
    setUrl(pathname);
    // router.push(
    //   `${pathname}?${filterContext.state}&brand=${selectedBrands}&color=${selectedColor}&size=${selectedSize}&minPrice=${selectedPrice.min}&maxPrice=${selectedPrice.max}`
    // );
  }, [selectedBrands, selectedColor, selectedSize, selectedPrice]);

  var { loading, data, fetchMore } = useQuery(GET_PRODUCTS, {
    variables: {
      type: selectedCategory,
      priceMax: selectedPrice.max,
      priceMin: selectedPrice.min,
      color: selectedColor,
      brand: selectedBrands,
      sortBy: sortBy,
      indexFrom: 0,
      limit: limit,
    },
  });

  const handlePagination = () => {
    setIsLoading(true);
    setTimeout(
      () =>
        fetchMore({
          variables: {
            indexFrom: data.products.items.length,
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            setIsLoading(false);
            return {
              products: {
                __typename: prev.products.__typename,
                total: prev.products.total,
                items: [
                  ...prev.products.items,
                  ...fetchMoreResult.products.items,
                ],
                hasMore: fetchMoreResult.products.hasMore,
              },
            };
          },
        }),
      1000
    );
  };

  const removeBrand = (val) => {
    const temp = [...selectedBrands];
    temp.splice(selectedBrands.indexOf(val), 1);
    filterContext.setSelectedBrands(temp);
  };

  const removeSize = (val) => {
    const temp = [...selectedSize];
    temp.splice(selectedSize.indexOf(val), 1);
    filterContext.setSelectedSize(temp);
  };

  const removeColor = () => {
    filterContext.setSelectedColor("");
  };

  const [dataProduct, setDataProduct] = useState(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);

    var axios = require("axios").default;
    var options = {
      method: "GET",
      url: api.BASE_URL + "products",
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


    // setLoading(false);
  }, []);

  return (
    <Col className="collection-content">
      <div className="page-main-content">
        <Row>
          <Col sm="12">
            <div className="top-banner-wrapper">
              <a href={null}>
                <Media
                  src={Menu2}
                  className="img-fluid blur-up lazyload"
                  alt=""
                />
              </a>
              <div className="top-banner-content small-section">
                <h4>{t('Nail varnishes - color varnishes')}</h4>
                <p> {t("Great nail polish color polishes with an exceptionally nourishing formula. The composition works without the 18 harmful chemicals that can normally be found in nail polishes. They dry super fast. You don’t have to wait so long before you can go back to everyday business. This effect is supported by the body’s own warmth. This helps the nail polish to dry very quickly. The wait is finally over!")}</p>
              </div>
            </div>
            <Row>
              <Col xs="12">
                <ul className="product-filter-tags">
                  {selectedBrands.map((brand, i) => (
                    <li key={i}>
                      <a href={null} className="filter_tag">
                        {brand}
                        <i
                          className="fa fa-close"
                          onClick={() => removeBrand(brand)}
                        ></i>
                      </a>
                    </li>
                  ))}
                  {selectedColor ? (
                    <li>
                      <a href={null} className="filter_tag">
                        {selectedColor}
                        <i className="fa fa-close" onClick={removeColor}></i>
                      </a>
                    </li>
                  ) : (
                    ""
                  )}
                  {selectedSize.map((size, i) => (
                    <li key={i}>
                      <a href={null} className="filter_tag">
                        {size}
                        <i
                          className="fa fa-close"
                          onClick={() => removeSize(size)}
                        ></i>
                      </a>
                    </li>
                  ))}
                  {
                    <li>
                      <a href={null} className="filter_tag">
                        {t('price')}: {selectedPrice.min}- {selectedPrice.max}
                      </a>
                    </li>
                  }
                </ul>
              </Col>
            </Row>
            <div className="collection-product-wrapper">
              <div className="product-top-filter">
                {!noSidebar ? (
                  <Row>
                    <Col xl="12">
                      <div
                        className="filter-main-btn"
                        onClick={() => openSidebar()}
                      >
                        <span className="filter-btn btn btn-theme">
                          <i className="fa fa-filter" aria-hidden="true"></i>{" "}
                          {t('Filter')}
                        </span>
                      </div>
                    </Col>
                  </Row>
                ) : (
                  ""
                )}
                <Row>
                  <Col>
                    <div className="product-filter-content">
                      <div className="search-count">
                        <h5>
                          {data
                            ? `Showing Products 1-${data.products.items.length} of ${data.products.total}`
                            : "loading"}{" "}
                          Result
                        </h5>
                      </div>
                      <div className="collection-view">
                        <ul>
                          <li>
                            <i
                              className="fa fa-th grid-layout-view"
                              onClick={() => {
                                setLayout("");
                                setGrid("col-lg-3");
                              }}
                            ></i>
                          </li>
                          <li>
                            <i
                              className="fa fa-list-ul list-layout-view"
                              onClick={() => {
                                setLayout("list-view");
                                setGrid("col-lg-12");
                              }}
                            ></i>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="collection-grid-view"
                        style={
                          layout === "list-view"
                            ? { opacity: 0 }
                            : { opacity: 1 }
                        }
                      >
                        <ul>
                          <li>
                            <Media
                              src={`/assets/images/icon/2.png`}
                              alt=""
                              className="product-2-layout-view"
                              onClick={() => setGrid("col-lg-6")}
                            />
                          </li>
                          <li>
                            <Media
                              src={`/assets/images/icon/3.png`}
                              alt=""
                              className="product-3-layout-view"
                              onClick={() => setGrid("col-lg-4")}
                            />
                          </li>
                          <li>
                            <Media
                              src={`/assets/images/icon/4.png`}
                              alt=""
                              className="product-4-layout-view"
                              onClick={() => setGrid("col-lg-3")}
                            />
                          </li>
                          <li>
                            <Media
                              src={`/assets/images/icon/6.png`}
                              alt=""
                              className="product-6-layout-view"
                              onClick={() => setGrid("col-lg-2")}
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="product-page-per-view">
                        <select
                          onChange={(e) => setLimit(parseInt(e.target.value))}
                        >
                          <option value="10">{t('10 Products Par Page')}</option>
                          <option value="15">{t('15 Products Par Page')}</option>
                          <option value="20">{t('20 Products Par Page')}</option>
                        </select>
                      </div>
                      <div className="product-page-filter">
                        <select onChange={(e) => setSortBy(e.target.value)}>
                          <option value="AscOrder">{t("Sorting items")}</option>
                          <option value="HighToLow">{t("High To Low")}</option>
                          <option value="LowToHigh">{t("Low To High")}</option>
                          <option value="Newest">{t("Newest")}</option>
                          <option value="AscOrder">{t("Asc Order")}</option>
                          <option value="DescOrder">{t("Desc Order")}</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={`product-wrapper-grid ${layout}`}>
                <Row>
                  {/* Product Box */}
                  {!dataProduct ||
                    dataProduct.length === 0 ||
                    loading ? (
                      dataProduct &&
                      dataProduct.length === 0 ? (
                      <Col xs="12">
                        <div>
                          <div className="col-sm-12 empty-cart-cls text-center">
                            <img
                              src={`/assets/images/empty-search.jpg`}
                              className="img-fluid mb-4 mx-auto"
                              alt=""
                            />
                            <h3>
                              <strong>{t("Your Cart is Empty")}</strong>
                            </h3>
                            <h4>{t("Explore more shortlist some items.")}</h4>
                          </div>
                        </div>
                      </Col>
                    ) : (
                      <div className="row mx-0 margin-default mt-4">
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
                    )
                  ) : (
                    dataProduct &&
                    dataProduct.map((product, i) => (
                      <div className={grid} key={i}>
                        <div className="product">
                          <div>
                            <ProductItem
                              des={true}
                              product={product}
                              symbol={symbol}
                              cartClass="cart-info cart-wrap"
                              addCompare={() =>
                                compareContext.addToCompare(product)
                              }
                              addWishlist={() =>
                                wishlistContext.addToWish(product)
                              }
                              addCart={() =>
                                cartContext.addToCart(product, quantity)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </Row>
              </div>
              <div className="section-t-space">
                <div className="text-center">
                  <Row>
                    <Col xl="12" md="12" sm="12">
                      {data && data.products && data.products.hasMore && (
                        <Button onClick={() => handlePagination()}>
                          {isLoading && (
                            <Spinner animation="border" variant="light" />
                          )}
                          {t('Load More')}
                        </Button>
                      )}
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default ProductList;