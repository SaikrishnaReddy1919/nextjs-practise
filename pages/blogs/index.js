import Link from 'next/link'

const Blogs = ({posts}) => {
  return (
    <>
      <h1>All posts</h1>
      {posts.map(post => {
        return <div key={post.id}>
          <Link href={`/blogs/${post.id}`}><a><h2>{post.id} : {post.title}</h2></a></Link>
        </div>
      })}
    </>
  );
};
export default Blogs;

export async function getStaticProps() {
  const blogs = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = await blogs.json();

  return {
    props: {
      posts: response.slice(0, 3),
    },
  };
}
