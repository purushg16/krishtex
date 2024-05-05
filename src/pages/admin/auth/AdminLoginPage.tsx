import { Button, Flex, VStack } from "@chakra-ui/react";
import { Name } from "../../../utilities/Typography";
import LabelInput from "../../../components/Inputs/LabelInput";
import { useState } from "react";
import { AdminLogin } from "../../../entities/Credentials";
import { useAdminLogin } from "../../../hooks/admin/useAdminAuth";
import { Navigate } from "react-router";

const AdminLoginPage = () => {
  const [auth, setAuth] = useState<AdminLogin>({
    userId: "",
    password: "",
  });

  const { mutate, isPending } = useAdminLogin();

  if (localStorage.getItem("token")) return <Navigate to="/admin" />;
  return (
    <Flex
      gap={4}
      flexDir="column"
      h="100vh"
      w="100%"
      align="center"
      justify="center"
    >
      <Name text="Welcome, Admin" small />
      <VStack gap={4} my={4}>
        <LabelInput
          smallLabel
          color="black"
          label="UserId*"
          value={auth.userId}
          setText={(e) => setAuth({ ...auth, userId: e })}
        />
        <LabelInput
          smallLabel
          color="black"
          label="Password*"
          value={auth.password}
          setText={(e) => setAuth({ ...auth, password: e })}
          password
        />
        <Button
          w="100%"
          colorScheme="secondary"
          mt={4}
          isLoading={isPending}
          onClick={() => mutate(auth)}
        >
          Login
        </Button>
      </VStack>
    </Flex>
  );
};

export default AdminLoginPage;
