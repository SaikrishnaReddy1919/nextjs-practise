import { useRouter } from "next/router";

const Docs = () => {
  const router = useRouter();
  // setting params = []. because of pre-rendering feature of next, this params initial value 
  // will be undefined. To avoid this set it []. 
  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <h1>
        You are viewing feature : {params[0]} and Concept : {params[1]}
      </h1>
    );
  }

  if (params.length === 1) {
    return <h1>You are viewing feature : {params[0]}</h1>;
  }

  /**
   * like above it will continue till the params you want.
   * just define the variables for each param and use them however you want.
   *
   * Ex : you can use param values for filters.
   * -> minValue =  param[0], maxValue = param[1].
   */

  return <h1>Docs Home Page</h1>;
};
export default Docs;
