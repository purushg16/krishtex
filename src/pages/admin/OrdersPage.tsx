import {
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Box,
  VStack,
  Tag,
} from "@chakra-ui/react";
import { Name } from "../../utilities/Typography";
import orders from "../../data/orders";
import currencyFormatter from "../../functions/currencyFormatter";
import { Link } from "react-router-dom";
import ColorSchemeDetector from "../../functions/colorSchemeDetector";

const tableHeadings = [
  "order id",
  "customer",
  "order status",
  "payment status",
  "dispatch status",
  "amount",
];

const OrdersPage = () => {
  return (
    <Stack p={4} h="100%">
      <VStack align="start" gap={4}>
        <Name text="All Orders" color="black" />
        {/* <Button size="xs" colorScheme="primary">
          Add New Category
        </Button> */}
      </VStack>
      <Box
        w="100%"
        maxH="100%"
        overflowY="scroll"
        my={4}
        borderTop="1px solid"
        borderColor="blackAlpha.300"
        pt={4}
        pb={28}
      >
        <TableContainer>
          <Table>
            <Thead bg="gray.50">
              <Tr>
                {tableHeadings.map((th) => (
                  <Th key={th} isNumeric={th === "amount"}>
                    {th}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {orders.map((order) => (
                <Tr
                  key={order.orderId}
                  _hover={{ bg: "yellow.50" }}
                  transition="all 0.7s"
                >
                  <Td color="blue.400">
                    <Link to={order.orderId}>{order.orderId}</Link>
                  </Td>
                  <Td> {order.customerId} </Td>
                  <Td>
                    <Tag
                      colorScheme={ColorSchemeDetector(order.orderStatus)}
                      textTransform="capitalize"
                    >
                      {order.orderStatus}
                    </Tag>
                  </Td>
                  <Td>
                    <Tag
                      colorScheme={ColorSchemeDetector(order.paymentStatus)}
                      textTransform="capitalize"
                    >
                      {order.paymentStatus}
                    </Tag>
                  </Td>
                  <Td>
                    <Tag
                      colorScheme={
                        order.shippingStatus === "shipped" ? "green" : "yellow"
                      }
                      textTransform="capitalize"
                    >
                      {order.shippingStatus}
                    </Tag>
                  </Td>
                  <Td isNumeric>
                    {currencyFormatter(parseFloat(order.totalBill.toFixed(2)))}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  );
};

export default OrdersPage;
