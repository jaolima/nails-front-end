import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Row, Col, Media, Modal, ModalBody } from "reactstrap";
import CartContext from "../../../helpers/cart";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import MasterProductDetail from "./MasterProductDetail";
import { useTranslation } from "react-i18next";
const ProductItem = ({
  product,
  addCart,
  backImage,
  des,
  addWishlist,
  cartClass,
  productDetail,
  addCompare,
}) => {
  // eslint-disable-next-line
  const router = useRouter();
  const cartContext = useContext(CartContext);
  const curContext = useContext(CurrencyContext);
  const currency = curContext.state;
  const plusQty = cartContext.plusQty;
  const minusQty = cartContext.minusQty;
  const quantity = cartContext.quantity;
  const setQuantity = cartContext.setQuantity;
  const { t } = useTranslation();
  const [image, setImage] = useState("");
  const [modal, setModal] = useState(false);
  const [modalCompare, setModalCompare] = useState(false);
  const toggleCompare = () => setModalCompare(!modalCompare);
  const toggle = () => setModal(!modal);
  const uniqueTags = [];

  console.log("product ", product)
  const onClickHandle = (img) => {
    setImage(img);
  };

  const changeQty = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const clickProductDetail = () => {
    // const titleProps = product.title.split(" ").join("");
    // router.push(`/product-details/${product.id}` + "-" + `${titleProps}`);
  };

  const variantChangeByColor = (imgId, product_images) => {
    product_images.map((data) => {
      if (data.image_id == imgId) {
        setImage(data.src);
      }
    });
  };

  return (
    <div className="product-box product-wrap">
      <div className="img-wrapper">
        {/* <div className="lable-block">
          {product.new === true ? (
            <span className="lable3">{t("new")}</span>
          ) : (
            ""
          )}
          {product.sale === true ? (
            <span className="lable4">{t("on sale")}</span>
          ) : (
            ""
          )}
        </div> */}
        <div className="front" onClick={clickProductDetail}>
          <Media
            src={`${image ? image : product?.uri_image}`}
            className="img-fluid"
            alt=""
          />
        </div>
        {/* {backImage ? (
          product.images[1] === "undefined" ? (
            "false"
          ) : (
            <div className="back" onClick={clickProductDetail}>
              <Media
                src={`${image ? image : product.images[1].src}`}
                className="img-fluid m-auto"
                alt=""
              />
            </div>
          )
        ) : (
          ""
        )} */}

        <div className={cartClass}>
          <button title="Add to cart" onClick={addCart}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
          <a href={null} title="Add to Wishlist" onClick={addWishlist}>
            <i className="fa fa-heart" aria-hidden="true"></i>
          </a>
          {/*  <a href={null} title="Quick View" onClick={toggle}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </a> */}
        </div>

        {product?.uri_image ? (
          <ul className="product-thumb-list">
            {/* {product?.uri_image.map((img, i) => ( */}
            <li
              className={`grid_thumb_img  ${product?.uri_image === image ? image : product?.uri_image
                }active`}
            >
              <a href={null} title="Add to Wishlist">
                <Media
                  src={`${product?.uri_image}`}
                  alt="wishlist"
                  onClick={() => onClickHandle(product?.uri_image)}
                />
              </a>
            </li>
            {/* ))} */}
          </ul>
        ) : (
          ""
        )}
      </div>
      <MasterProductDetail
        product={product}
        productDetail={productDetail}
        currency={currency}
        uniqueTags={uniqueTags}
        des={des}
        variantChangeByColor={variantChangeByColor}
      />
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="modal-lg quickview-modal"
        centered
      >
        <ModalBody>
          <Row>
            <Col lg="6" xs="12">
              <div className="quick-view-img">
                <Media
                  src={`${
                    // product.variants && image ? image : product.images[0].src
                    product?.uri_image
                    }`}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg="6" className="rtl-text">
              <div className="product-right">
                <h2> {product.name} </h2>
                <h3>
                  {currency.symbol}
                  {(product.price * currency.value).toFixed(2)}
                  {/* {product.discount && ((product.price - (product.price * product.discount) / 100) * currency.value).toFixed(2)} */}
                </h3>
                {/* {product.color ? (
                  <ul className="color-variant">
                    {uniqueTags ? (
                      <ul className="color-variant">
                        {product.type === "jewellery" ||
                        product.type === "nursery" ||
                        product.type === "beauty" ||
                        product.type === "electronics" ||
                        product.type === "goggles" ||
                        product.type === "watch" ||
                        product.type === "pets" ? (
                          ""
                        ) : (
                          <>
                            {uniqueTags.map((vari, i) => {
                              return (
                                <li
                                  className={vari.color}
                                  key={i}
                                  title={vari.color}
                                  onClick={() =>
                                    variantChangeByColor(
                                      vari.image_id,
                                      product.images
                                    )
                                  }
                                ></li>
                              );
                            })}
                          </>
                        )}
                      </ul>
                    ) : (
                      ""
                    )}
                  </ul>
                ) : (
                  ""
                )} */}
                {/* <div className="border-product">
                  <h6 className="product-title">{t("product details")}</h6>
                  <p>{product.description}</p>
                </div>*/}
                <div className="product-description border-product">
                  <div className="size-box">
                    <ul>
                      <li>
                        <a href={null}>{product?.size}</a>
                      </li>
                    </ul>
                  </div>

                  <h6 className="product-title">{t("quantity")}</h6>
                  <div className="qty-box">
                    <div className="input-group">
                      <span className="input-group-prepend">
                        <button
                          type="button"
                          className="btn quantity-left-minus"
                          onClick={minusQty}
                          data-type="minus"
                          data-field=""
                        >
                          <i className="fa fa-angle-left"></i>
                        </button>
                      </span>
                      <input
                        type="text"
                        name="quantity"
                        value={quantity}
                        onChange={changeQty}
                        className="form-control input-number"
                      />
                      <span className="input-group-prepend">
                        <button
                          type="button"
                          className="btn quantity-right-plus"
                          onClick={() => plusQty(product)}
                          data-type="plus"
                          data-field=""
                        >
                          <i className="fa fa-angle-right"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-buttons">
                  <button
                    className="btn btn-solid"
                    onClick={() => addCart(product)}
                  >
                    {t("add to cart")}
                  </button>
                  <button
                    className="btn btn-solid"
                    onClick={clickProductDetail}
                  >
                    {t("View detail")}
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProductItem;
