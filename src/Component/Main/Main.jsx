import React from "react";
import Productcart from "./Productcart";


// props = {thumbnail:"", name:"", variants:[{originPrice: 123, salePrice: 100 }], isSale: true, review:4  }
const Main = ({products}) => {
    
  return (
    <div className="products-list">
      <div className="container section-container">
        <div className="row">
          <div className="col-3 mb-5">
            <Productcart {...products[0]}/>
          </div>

          <div className="col-3 mb-5">
            <Productcart {...products[1]}/>
          </div>

          <div className="col-3 mb-5">
            <Productcart {...products[2]}/>
          </div>

          <div className="col-3 mb-5">
            <Productcart {...products[3]}/>
          </div>

          <div className="col-3 mb-5">
            <Productcart {...products[4]}/>
          </div>

          <div className="col-3 mb-5">
            <Productcart {...products[5]}/>
          </div>

          <div className="col-3 mb-5">
            <Productcart {...products[6]}/>
          </div>

          <div className="col-3 mb-5">
            <Productcart {...products[7]}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
