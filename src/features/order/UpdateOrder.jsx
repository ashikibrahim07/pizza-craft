import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  const isLoading = fetcher.state === "submitting";
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">
        {isLoading ? "Making Priority..." : "Make Priority"}
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
