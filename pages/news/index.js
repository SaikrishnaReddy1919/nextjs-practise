
const News = ({ news }) => {
  return (
    <>
      <h1>News:(Server side props demo)</h1>
      {news.map((n) => {
        return (
          <div key={n.id}>
            <h1>Title : {n.title}</h1>
            <p> {n.body}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default News;

export async function getServerSideProps() {
  let news = await fetch("http://localhost:4000/news");
  news = await news.json();

  return {
    props: {
      news: news,
    },
  };
}
