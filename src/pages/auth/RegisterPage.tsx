import { Box, GridItem, SimpleGrid, VStack } from "@chakra-ui/react";
import RegisterDetailsHug from "../../components/user/auth/RegisterDetailsHug";
import AuthLayout from "../../layouts/AuthLayout";
import { RHeading } from "../../utilities/Typography";
import { useUserRegister, useUserVerifyOTP } from "../../hooks/useUserAuth";
import RegisterOTPHug from "../../components/user/auth/RegisterOTPHug";
import { Navigate } from "react-router";

const RegisterPage = () => {
  const {
    mutate: register,
    isSuccess,
    isPending,
    isIdle,
    variables,
  } = useUserRegister();
  const { mutate: verifyOtp, isPending: isLoading } = useUserVerifyOTP();

  if (localStorage.getItem("token")) return <Navigate to="/" />;
  return (
    <AuthLayout>
      <SimpleGrid w="100%" h="100%" columns={{ base: 1, md: 1, lg: 2 }}>
        <Box
          display={{ base: "none", md: "none", lg: "block" }}
          w="100%"
          h="100%"
          bgImg="url(https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
          bgPos="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        />
        <GridItem bg="gray.50">
          <VStack w="max-content" mx="auto" h="100%" justify="center">
            <RHeading text="Krishtex" />
            {isIdle && !isSuccess && (
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
        </GridItem>
      </SimpleGrid>
    </AuthLayout>
  );
};

export default RegisterPage;
