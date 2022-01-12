import React from "react";

const MasterProductDetail = ({
  product,
  productDetail,
  currency,
  uniqueTags,
  detailClass,
  des,
  variantChangeByColor,
}) => {
  let RatingStars = [];
  let rating = 5;
  for (var i = 0; i < rating; i++) {
    RatingStars.push(<i className="fa fa-star" key={i}></i>);
  }

  return (
    <div className={`product-detail ${productDetail} ${detailClass}`}>
      <div>
        <div className="rating">{RatingStars}</div>
        <h6>{product.name}</h6>
        <h4>
          {currency.symbol}
          {product.price}
          {/* {(
            (product.price - (product.price * product.discount) / 100) *
            currency.value
          ).toFixed(2)} */}
          {product.discount && (
            <del>
              <span className="money ml-1">
                {currency.symbol}
                {((product.price - (product.price * product.discount) / 100) * currency.value).toFixed(2)}
                {/* {(product.price * currency.value).toFixed(2)} */}
              </span>
            </del>
          )}
        </h4>
        {/* {product.variants.map((vari) => {
          var findItem = uniqueTags.find((x) => x.color === vari.color);
          if (!findItem) uniqueTags.push(vari);
        })} */}
        {/* {product.type === "jewellery" ||
        product.type === "nursery" ||
        product.type === "beauty" ||
        product.type === "electronics" ||
        product.type === "goggles" ||
        product.type === "watch" ||
        product.type === "pets" ? (
          ""
        ) : (
          <>
            {title !== "Product style 4" && uniqueTags[0].color ? (
              <ul className="color-variant">
                {uniqueTags.map((vari, i) => {
                  return (
                    <li
                      className={vari.color}
                      key={i}
                      title={vari.color}
                      onClick={() =>
                        variantChangeByColor(vari.image_id, product?.uri_image)
                      }
                    ></li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
          </>
        )} */}
      </div>
    </div>
  );
};

export default MasterProductDetail;
