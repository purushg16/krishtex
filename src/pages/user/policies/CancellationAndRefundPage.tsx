import { Divider } from "@chakra-ui/react";
import PolicyLayout from "../../../layouts/PolicyLayout";
import { RHeading, RText } from "../../../utilities/Typography";

const CancellationAndRefundPage = () => {
  return (
    <PolicyLayout>
      <RHeading text="Cancellation & Refund Policy" />
      <Divider border="2px" borderColor="primary.400" mb={8} />
      <RText
        text={`KRISHTEX believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:`}
      />
      <RText
        text={`Cancellations will be considered only if the request is made within same day of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.`}
      />
      <RText
        text={`KRISHTEX does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
        `}
      />
      <RText
        text={`In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within same day of receipt of the products.
       `}
      />
      <RText
        text={`In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within same day of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
       `}
      />
      <RText
        text={`In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.
       `}
      />
      <RText
        text={`In case of any Refunds approved by the KRISHTEX, it’ll take 1-2 days for the refund to be processed to the end customer.`}
      />
    </PolicyLayout>
  );
};

export default CancellationAndRefundPage;
