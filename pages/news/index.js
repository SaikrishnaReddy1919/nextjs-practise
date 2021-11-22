import Link from 'next/link'

const News = ({ news }) => {
  return (
    <>
      <h1>News:(Server side props demo)</h1>
      {news.map((n) => {
        return (
          <div key={n.id}>
            <Link href={`/news/${n.category}`}>
              <a className="link">Title : {n.title} | {n.category}</a>
            </Link>
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
