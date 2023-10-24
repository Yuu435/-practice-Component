import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import Nav from "./Component/Nav/Nav";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Footer from "./Component/Footer/Footer";

function App() {
  const products = [
    {
      thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Sản phẩm 1",
      reviews: 4.2,
      variants: [{ originPrice: 40.0 }, { originPrice: 80.0 }],
      isSale: false,
    },
    {
      thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Sản phẩm 2",
      reviews: 4.5,
      variants: [{ originPrice: 20.0, salePrice: 18.0 }],
      isSale: true,
    },
    {
      thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Sản phẩm 3",
      reviews: 4.4,
      variants: [{ originPrice: 50.0, salePrice: 25.0 }],
      isSale: true,
    },
    {
      thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Sản phẩm 4",
      reviews: 4.6,
      variants: [{ originPrice: 40.0 }],
      isSale: false,
    },
    {
      thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Sản phẩm 5",
      reviews: 4.1,
      variants: [{ originPrice: 50.0, salePrice: 25.0 }],
      isSale: true,
    },
    {
      thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Sản phẩm 6",
      reviews: 3.5,
      variants: [{ originPrice: 120.0 }, { originPrice: 280.0 }],
      isSale: false,
    },
    {
      thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Sản phẩm 7",
      reviews: 4.9,
      variants: [{ originPrice: 20.0, salePrice: 18.0 }],
      isSale: true,
    },
    {
      thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Sản phẩm 8",
      reviews: 5,
      variants: [{ originPrice: 40.0 }],
      isSale: false,
    },
  ];

  return (
    <>
      {/* Navigation./start */}
      <Nav />
      {/* {header./start} */}
      <Header />
      {/* Section */}
      <Main products={products} />
      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
