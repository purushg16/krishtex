import { Button, VStack } from "@chakra-ui/react";
import LabelInput from "../../Inputs/LabelInput";
import { useState } from "react";
import { Label } from "../../../utilities/Typography";
import { OTPVerify } from "../../../entities/Credentials";

interface Props {
  onSumbit: (credentials: OTPVerify) => void;
  email: string;
  isLoading: boolean;
}

const RegisterOTPHug = ({ onSumbit, email, isLoading }: Props) => {
  const [otp, setOtp] = useState<number>(parseInt(""));

  return (
    <>
      <VStack w="100%" gap={4} mt={12} mb={4}>
        <Label text="An OTP has been sent to you email address" color="green" />
        <LabelInput
          label="One Time Password(OTP)"
          value={otp}
          setNumber={setOtp}
          number
          smallLabel
        />
      </VStack>
      <Button
        colorScheme="secondary"
        w="100%"
        onClick={() => onSumbit({ email, otp })}
        isLoading={isLoading}
        isDisabled={!otp}
      >
        Verify OTP
      </Button>
    </>
  );
};

export default RegisterOTPHug;
