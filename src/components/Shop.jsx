import React, { useState } from "react"
import ProductItem from "./ProductItem"
import PropTypes from "prop-types"

const Shop = () => {
  let [product, setProduct] = useState({
    name: "iphone6",
    price: "1000000",
    desc: "8GB RAM Rosegold with 256GB"
  })
  return (
    <div>
      <h1>Welcome to my shop</h1>
      <ProductItem productPrice={product.price} productDesc={product.desc} />
    </div>
  )
}

export default Shop
