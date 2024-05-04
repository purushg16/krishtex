import { Divider } from "@chakra-ui/react";
import PolicyLayout from "../../../layouts/PolicyLayout";
import { RHeading, RText } from "../../../utilities/Typography";

const ShippingAndDeliveryPage = () => {
  return (
    <PolicyLayout>
      <RHeading text="Shipping & Delivery Policies" />
      <Divider border="2px" borderColor="primary.400" mb={8} />
      <RText
        text={`For International buyers, orders are shipped and delivered through registered 
                        international courier companies and/or International speed post only. 
                        For domestic buyers, orders are shipped through registered domestic courier 
                        companies and /or speed post only. Orders are shipped within 0-7 days or as 
                        per the delivery date agreed at the time of order confirmation and delivering 
                        of the shipment subject to Courier Company / post office norms. KRISHTEX is not 
                        liable for any delay in delivery by the courier company / postal authorities and 
                        only guarantees to hand over the consignment to the courier company or postal 
                        authorities within 0-7 days rom the date of the order and payment or as per the 
                        delivery date agreed at the time of order confirmation. Delivery of all orders 
                        will be to the address provided by the buyer. Delivery of our services will be 
                        confirmed on your mail ID as specified during registration. For any issues in 
                        utilizing our services you may contact our helpdesk on 7373311722 or #########.`}
      />
    </PolicyLayout>
  );
};

export default ShippingAndDeliveryPage;
