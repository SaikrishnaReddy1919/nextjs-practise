import { useRouter } from "next/router";

const ReviewDetails = () => {
  const router = useRouter();
  const { reviewId, productId } = router.query;
  return (
    <>
      <h1>
        Review : {reviewId} for Product : {productId}
      </h1>
    </>
  );
};
export default ReviewDetails;
