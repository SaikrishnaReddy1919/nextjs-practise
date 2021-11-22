import Link from "next/link";

const CEOsList = ({ ceos }) => {
  return (
    <>
      <h1>CEOs:</h1>
      {ceos.map((ceo) => {
        return (
          <div key={ceo.id}>
            <Link href={`ceos/${ceo.id}`}>
              <a className='link'>{ceo.name}</a>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default CEOsList;

export async function getStaticProps() {
  let ceos = await fetch("http://localhost:4000/ceos");
  ceos = await ceos.json();

  return {
    props: {
      ceos: ceos,
    },
  };
}
