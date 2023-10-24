import React from "react";

// props = {thumbnail:"", name:"", variants:[{originPrice: 123, salePrice: 100 }], isSale: true, review:4  }
const Productcart = ({ thumbnail, name, variants, isSale, reviews }) => {
    console.log(reviews);

  return (
    <div className="cart">
      {/* badge sale */}
      {isSale && <div className="badge-sale">Sale</div>}

      <img src={thumbnail} alt={name} className="img-cart-top" />

      <div className="cart-body">
        <h5 className="cart-body-title">{name}</h5>

        {/* review */}
        {reviews >= 4.5 && (
          <div className="product-review">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        )}

        {/* Price */}
        <div className="wrap_price">
          {variants.map((variant, index) => (
            <div key={index}>
              {isSale && (
                <>
                  <span className="origin-price price">
                    ${variant.originPrice.toFixed(2)}&nbsp;
                  </span>
                  <span className="sale-price">${variant.salePrice.toFixed(2)}</span>
                </>
              )}
              {!isSale && (
                <span className="origin-price">
                  ${variant.originPrice.toFixed(2)}&nbsp;
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="cart-footer">
        {variants.length > 1 ? (
          <a href="#" className="btn-add-to-cart">
            View Options
          </a>
        ) : (
          <a href="#" className="btn-add-to-cart">
            Add to cart
          </a>
        )}
      </div>
    </div>
  );
};

export default Productcart;
