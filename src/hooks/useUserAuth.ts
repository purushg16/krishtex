import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import {
  ChangePassword,
  Login,
  OTPVerify,
  Register,
} from "../entities/Credentials";
import { AxiosError } from "axios";
import { ResponseError } from "../entities/ResponseError";

const customerRegister = new APIClient<Register>("/userAuth/getOtp");
const customerVerifyOTP = new APIClient<OTPVerify>("/userAuth/otpCheck");
const customerLogin = new APIClient<Login>("/userAuth/login");
const customerChangePassword = new APIClient<ChangePassword>(
  "/userAuth/changePassword"
);

const useUserRegister = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: customerRegister.postRequest,
    onSuccess: () =>
      toast({
        title: "OTP Sent to your mail address",
        duration: 2000,
        position: "top",
        status: "success",
      }),
    onError: (err: AxiosError<ResponseError>) =>
      toast({
        title: err.response?.data.error,
        duration: 2000,
        position: "top",
        status: "error",
      }),
  });
};

const useUserVerifyOTP = () => {
  const toast = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: customerVerifyOTP.authorizationPost,
    onSuccess: () => {
      toast({
        title: "Login successful",
        duration: 2000,
        position: "top",
        status: "success",
      }),
        navigate("/login");
    },
    onError: (err: AxiosError<ResponseError>) =>
      toast({
        title: err.response?.data.error,
        duration: 2000,
        position: "top",
        status: "error",
      }),
  });
};

const useUserLogin = () => {
  const toast = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: customerLogin.authorizationPost,
    onSuccess: () => navigate("/"),
    onError: (err: AxiosError<ResponseError>) =>
      toast({
        title: err.response?.data.error,
        duration: 2000,
        position: "top",
        status: "error",
      }),
  });
};

const useUserChangePassword = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: customerChangePassword.authorizationPost,
    onSuccess: () =>
      toast({
        title: "Password Changed successfully",
        duration: 2000,
        position: "top",
        status: "error",
      }),
    onError: (err: AxiosError<ResponseError>) =>
      toast({
        title: err.response?.data.error,
        duration: 2000,
        position: "top",
        status: "error",
      }),
  });
};

export {
  useUserRegister,
  useUserVerifyOTP,
  useUserLogin,
  useUserChangePassword,
};
