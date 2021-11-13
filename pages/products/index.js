import Link from "next/link";

const AllProducts = ({ productId = 100 }) => {
  return (
    <>
      <Link href="/">
        <a className="link">HOME</a>
      </Link>
      <h1>AllProducts page</h1>
      <li>
        <Link href="/products/1">
          <a className="link">Product 1</a>
        </Link>
      </li>
      <li>
        <Link href="/products/2">
          <a className="link">Product 2</a>
        </Link>
      </li>
      {/**
       * replace attribute clears all history and directly takes back to home page.
       * click on the link below in browser in try going back.
       * */}
      <li>
        <Link href={`/products/${productId}`} replace>
          <a className="link">Product {productId}</a>
        </Link>
      </li>
    </>
  );
};
export default AllProducts;
