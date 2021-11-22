import { useRouter } from "next/router";

const NewsDetail = ({ news, category }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h2>Showing data for category : {category}</h2>
      <div>
        {news.map((n) => {
          return (
            <div key={n.id}>
              <h3>{n.title}</h3>
              <p>{n.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewsDetail;


export async function getServerSideProps(context) {
  const { params } = context;

  const { category } = params;

  let news = await fetch(`http://localhost:4000/news?category=${category}`);
  news = await news.json();


  if (news.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      news: news,
      category,
    },
  };
}
