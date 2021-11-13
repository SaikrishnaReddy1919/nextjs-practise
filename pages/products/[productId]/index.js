import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;

  const handleClick = () => {
    console.log("Order placed.");
    // navigates to the route passed.
    router.push(`/products/${productId}/success`);
  };
  return (
    <>
      <h1>Product Detail Page : {productId}</h1>
      <small>(Programmatic navigation example)</small>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
};
export default ProductDetails;
