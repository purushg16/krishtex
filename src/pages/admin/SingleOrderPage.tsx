import { Divider, HStack, VStack } from "@chakra-ui/react";
import { useParams } from "react-router";
import orders from "../../data/orders";
import { Name } from "../../utilities/Typography";
import CustomerDetailsCard from "./SingleOrder/CustomerDetailsCard";
import OrderHeader from "./SingleOrder/OrderHeader";
import ProductsTable from "./SingleOrder/ProductsTable";
import CustomerAddressDetailsCard from "./SingleOrder/CustomerAddressDetailsCard";

const SingleOrderPage = () => {
  const orderId = useParams().orderId;
  const order = orders.find((ord) => ord.orderId === orderId);

  if (!orderId || !order) return null;
  return (
    <VStack p={4} w="100%" align="start" maxH="100%" overflowY="auto">
      <VStack w="100%" align="start">
        <Name text={"Order: " + order.orderId} />
        <Divider my={4} />
      </VStack>
      <HStack w="100%" gap={8} align="start">
        <VStack flex={1} align="start">
          <VStack w="100%" p={4} bg="gray.50" align="start" gap={8}>
            <OrderHeader order={order} />
            <ProductsTable order={order} />
          </VStack>
        </VStack>

        <VStack w={300} gap={8} align="start">
          <CustomerDetailsCard />
          <CustomerAddressDetailsCard title="Shipping Address" />
          <CustomerAddressDetailsCard title="Billing Address" />
        </VStack>
      </HStack>
    </VStack>
  );
};

export default SingleOrderPage;
