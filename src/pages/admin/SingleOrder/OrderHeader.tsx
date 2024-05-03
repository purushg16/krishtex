import { SimpleGrid, VStack } from "@chakra-ui/react";
import { BadgeIndianRupee, ShoppingCart, TruckIcon } from "lucide-react";
import Order from "../../../entities/Order";
import { Label } from "../../../utilities/Typography";
import OrderStatusCard from "./OrderStatusCard";
import ColorSchemeDetector from "../../../functions/colorSchemeDetector";

const OrderHeader = ({ order }: { order: Order }) => {
  return (
    <VStack align="start" w="100%" justify="space-between" gap={12}>
      <VStack gap={0} align="start">
        <Label text={"Order ID: " + order.orderId} color="black" />
        <Label small text={"01/05/2024 10:29 PM"} color="gray" />
      </VStack>
      <SimpleGrid w="100%" columns={{ base: 1, md: 1, lg: 3 }} spacing={4}>
        <OrderStatusCard
          label="Order Status"
          icon={ShoppingCart}
          status={order.orderStatus}
          color={ColorSchemeDetector(order.orderStatus)}
        />
        <OrderStatusCard
          label="Payment Status"
          icon={BadgeIndianRupee}
          status={order.paymentStatus}
          color={ColorSchemeDetector(order.paymentStatus)}
        />
        <OrderStatusCard
          label="Shipping Status"
          icon={TruckIcon}
          status={order.shippingStatus}
          color={ColorSchemeDetector(order.shippingStatus)}
        />
      </SimpleGrid>
    </VStack>
  );
};

export default OrderHeader;
