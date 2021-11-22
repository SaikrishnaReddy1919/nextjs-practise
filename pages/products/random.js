const Random = () => {
  return (
    <>
      <h1>Random Page.</h1>
      <p>
        If dynamic route has query as filename then next first looks for file
        matched with the route. If it founds any file then that file will be
        rendered(random.js) otherwise dynamic route file will be
        rendered([productId].js)
      </p>
      <p>
        Try changing the route after
        (http://localhost:3000/products/write_something_here). There will be
        no file matched with your choose route, so [productId].js file will be
        rendered.
      </p>
    </>
  );
};
export default Random;
