import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home page</h1>

      <ul>
        <li>
          <Link href="/blogs">
            <a className="link">Blogs</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a className="link">Products</a>
          </Link>
        </li>
        <li>
          <Link href="/ceos">
            <a className="link">CEOs</a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a className="link">NEWS</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a className="link">Dashboard</a>
          </Link>
        </li>
      </ul>
    </>
  );
};
export default Home;
