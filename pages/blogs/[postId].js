import { useRouter } from "next/router";

const PostDetail = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default PostDetail;

export async function getStaticPaths() {
  const blogs = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = await blogs.json();

  //   const paths = response.map((post) => {
  //     return {
  //       params: { postId: `${post.id}` },
  //     };
  //   });

  return {
    paths: [
      {
        params: { postId: `1` },
      },
      {
        params: { postId: `2` },
      },
      {
        params: { postId: `3` },
      },
    ],
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params } = context;

  const postData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const data = await postData.json()

  if(!data.id){
      return {
          notFound : true
      }
  }

  return {
    props: {
      post: data,
    },
  };
}
