import Link from "next/link";
const Home = () => {
  return (
    <>
      <div id="main">
        <div className="fzf">
          <h1>Oops. 404!</h1>
          <p>The page you are looking for does not exist.😞</p>
          <Link href="/">
            <a className="btn" data-wipe="Take Me Home">
              Take Me Home
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
