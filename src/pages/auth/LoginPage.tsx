import { Button, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import LabelInput from "../../components/Inputs/LabelInput";
import { useUserLogin } from "../../hooks/useUserAuth";
import { Name } from "../../utilities/Typography";

const LoginPage = () => {
  const [email, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { mutate, isPending } = useUserLogin();

  if (localStorage.getItem("token")) return <Navigate to="/" />;
  return (
    <VStack w="max-content" mx="auto" h="100%" justify="center" my={12}>
      <Name text="Krishtex" />

      <VStack w="100%" gap={4} my={4}>
        <LabelInput label="Email" value={email} setText={setMail} smallLabel />
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
  );
};

export default LoginPage;
