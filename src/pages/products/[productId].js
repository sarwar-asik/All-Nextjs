import { useRouter } from "next/router";
import React from "react";

const ProductDetail = () => {
  const router = useRouter();

  return (
    <div>
      <h2>This is dynamic page of product {router.query.productId} .</h2>
    </div>
  );
};

export default ProductDetail;
