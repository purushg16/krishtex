import { VStack } from "@chakra-ui/react";
import { Navigate } from "react-router";
import RegisterDetailsHug from "../../components/user/auth/RegisterDetailsHug";
import RegisterOTPHug from "../../components/user/auth/RegisterOTPHug";
import { useUserRegister, useUserVerifyOTP } from "../../hooks/useUserAuth";
import { Name } from "../../utilities/Typography";

const RegisterPage = () => {
  const {
    mutate: register,
    isSuccess,
    isPending,
    variables,
  } = useUserRegister();
  const { mutate: verifyOtp, isPending: isLoading } = useUserVerifyOTP();

  if (localStorage.getItem("token")) return <Navigate to="/" />;
  return (
    <VStack w="max-content" mx="auto" h="100%" justify="center" my={12}>
      <Name text="Krishtex" />
      {!isSuccess && (
        <RegisterDetailsHug onSumbit={register} isLoading={isPending} />
      )}
      {isSuccess && (
        <RegisterOTPHug
          onSumbit={verifyOtp}
          isLoading={isLoading}
          email={variables.email}
        />
      )}
    </VStack>
  );
};

export default RegisterPage;
