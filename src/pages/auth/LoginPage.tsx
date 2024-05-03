import {
  Box,
  Button,
  GridItem,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import LabelInput from "../../components/Inputs/LabelInput";
import AuthLayout from "../../layouts/AuthLayout";
import { RHeading } from "../../utilities/Typography";
import { Link, Navigate } from "react-router-dom";
import { useUserLogin } from "../../hooks/useUserAuth";

const LoginPage = () => {
  const [email, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { mutate, isPending } = useUserLogin();

  if (localStorage.getItem("token")) return <Navigate to="/" />;
  return (
    <AuthLayout>
      <SimpleGrid w="100%" h="100%" columns={{ base: 1, md: 1, lg: 2 }}>
        <Box
          display={{ base: "none", md: "none", lg: "block" }}
          w="100%"
          h="100%"
          bgImg="url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
          bgPos="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        />
        <GridItem bg="gray.50">
          <VStack w="max-content" mx="auto" h="100%" justify="center">
            <RHeading text="Krishtex" />

            <VStack w="100%" gap={4} my={12}>
              <LabelInput
                label="Email"
                value={email}
                setText={setMail}
                smallLabel
              />
              <LabelInput
                password
                label="Password"
                value={password}
                setText={setPassword}
                smallLabel
              />
            </VStack>
            <Button
              colorScheme="secondary"
              w="100%"
              isDisabled={!email || !password}
              isLoading={isPending}
              onClick={() => mutate({ email, password })}
            >
              Login
            </Button>

            <Text my={4}>
              Are you new?
              <Link
                to="/register"
                style={{
                  color: "blue",
                  padding: "0px 4px 0px 4px",
                  textDecoration: "underline",
                }}
              >
                Create an account
              </Link>
            </Text>
          </VStack>
        </GridItem>
      </SimpleGrid>
    </AuthLayout>
  );
};

export default LoginPage;
