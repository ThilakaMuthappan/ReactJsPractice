import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../App";

const ProductItem = ({
  productName = "Samsung",
  productPrice,
  productDesc,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Displaying Product Items</h1>
      <section>
        <h3>{user.name}</h3>
        <p> {user.age}</p>
        <p>{user.qualification}</p>
        <h3>{productName}</h3>
        <p> {productPrice}</p>
        <p>{productDesc}</p>
      </section>
    </div>
  );
};

export default ProductItem;
// Default props and Proptypes are removed from react 19
// ProductItem.defaultProps = {
//   productName: "Samsung",
//   productPrice: "10,0000",
//   productDesc: "default"
// }

// ProductItem.propTypes = {
//   productName: PropTypes.string.isRequired,
//   productPrice: PropTypes.number.isRequired,
//   productDesc: PropTypes.string.isRequired
// }
