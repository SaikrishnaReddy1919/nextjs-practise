const PostDetail = ({ post }) => {
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

  const paths = response.map((post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;

  const postData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  return {
    props: {
      post: await postData.json(),
    },
  };
}
