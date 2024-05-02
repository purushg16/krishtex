import {
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Box,
  VStack,
  Tag,
} from "@chakra-ui/react";
import { Name } from "../../utilities/Typography";

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
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th> Order No </Th>
                <Th> Customer </Th>
                <Th> status </Th>
                <Th isNumeric> Total </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td> 12345 </Td>
                <Td> lorem impsum </Td>
                <Td>
                  <Tag colorScheme="green"> Delivered </Tag>
                </Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td> 12345 </Td>
                <Td> lorem impsum </Td>
                <Td>
                  <Tag colorScheme="orange"> Not Delivered </Tag>
                </Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td> 12345 </Td>
                <Td> lorem impsum </Td>
                <Td>
                  <Tag colorScheme="green"> Delivered </Tag>
                </Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td> 12345 </Td>
                <Td> lorem impsum </Td>
                <Td>
                  <Tag colorScheme="orange"> Not Delivered </Tag>
                </Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td> 12345 </Td>
                <Td> lorem impsum </Td>
                <Td>
                  <Tag colorScheme="green"> Delivered </Tag>
                </Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td> 12345 </Td>
                <Td> lorem impsum </Td>
                <Td>
                  <Tag colorScheme="orange"> Not Delivered </Tag>
                </Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td> 12345 </Td>
                <Td> lorem impsum </Td>
                <Td>
                  <Tag colorScheme="green"> Delivered </Tag>
                </Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td> 12345 </Td>
                <Td> lorem impsum </Td>
                <Td>
                  <Tag colorScheme="orange"> Not Delivered </Tag>
                </Td>
                <Td isNumeric>30.48</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  );
};

export default OrdersPage;
