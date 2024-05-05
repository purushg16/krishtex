import { Button, Text, VStack } from "@chakra-ui/react";
import LabelInput from "../../Inputs/LabelInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Register } from "../../../entities/Credentials";

interface Props {
  onSumbit: (credentials: Register) => void;
  isLoading: boolean;
}

const RegisterDetailsHug = ({ onSumbit, isLoading }: Props) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<number>(parseInt(""));
  const [email, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <VStack w="100%" gap={4} my={4}>
        <LabelInput
          label="Username"
          value={name}
          setText={setName}
          smallLabel
        />
        <LabelInput
          label="Phone"
          value={phone}
          setNumber={setPhone}
          number
          smallLabel
        />
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
        isLoading={isLoading}
        colorScheme="secondary"
        w="100%"
        onClick={() =>
          onSumbit({
            email,
            password,
            phone,
            name,
          })
        }
        isDisabled={!email || !password || !name || !phone}
      >
        Register
      </Button>
      <Text my={4}>
        Already an user?
        <Link
          to="/login"
          style={{
            color: "blue",
            padding: "0px 4px 0px 4px",
            textDecoration: "underline",
          }}
        >
          Login
        </Link>
      </Text>
    </>
  );
};

export default RegisterDetailsHug;
