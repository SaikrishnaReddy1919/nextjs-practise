import { useRouter } from "next/router";

const CEODetails = ({ ceo }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div>
        <h1>{ceo.name}</h1>
        <h3>{ceo.companies}</h3>
        <h3>{ceo.networth}</h3>
      </div>
    </>
  );
};

export default CEODetails;

export async function getStaticPaths() {
  return {
    paths: [{ params: { ceoId: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(`Regenerating CEO : ${params.ceoId}`);

  let ceo = await fetch(`http://localhost:4000/ceos/${params.ceoId}`);
  ceo = await ceo.json();

  if (!ceo.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ceo: ceo,
    },
    revalidate: 10,
  };
}
