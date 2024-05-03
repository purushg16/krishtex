import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Order from "../../../entities/Order";
import { Label } from "../../../utilities/Typography";
import currencyFormatter from "../../../functions/currencyFormatter";

const ProductsTable = ({ order }: { order: Order }) => {
  return (
    <TableContainer w="100%">
      <Table variant="simple" border="1px solid" borderColor="gray.100">
        <TableCaption fontSize="x-small" fontStyle="italic">
          *All the times shown here are Indian Standard Time
        </TableCaption>
        <Thead bg="white">
          <Tr>
            <Th> PRODUCT </Th>
            <Th> QUANTITY </Th>
            <Th isNumeric> AMOUNT </Th>
          </Tr>
        </Thead>
        <Tbody>
          {order.product.map((ord) => (
            <Tr key={ord.productId}>
              <Td> {ord.productId} </Td>
              <Td> {ord.quantity} </Td>
              <Td isNumeric>25.4</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot bg="white">
          <Tr>
            <Th />
            <Th>Total</Th>
            <Th isNumeric color="black">
              <Label text={currencyFormatter(order.totalBill)} />
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
