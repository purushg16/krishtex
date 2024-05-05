import { useMutation } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { AdminLogin, ChangePassword } from "../../entities/Credentials";
import Toaster from "../../functions/toaster";

const adminLogin = new APIClient<AdminLogin>("/adminAuth/login");
const adminChangePassword = new APIClient<ChangePassword>(
  "/adminAuth/changePassword"
);

const useAdminLogin = () => {
  const toast = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: adminLogin.authorizationPost,
    onSuccess: () => navigate("/"),
    onError: (error) => toast(Toaster("error", error.message)),
  });
};

const useAdminChangePassword = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: adminChangePassword.authorizationPost,
    onSuccess: () => toast(Toaster("error", "Password Changed successfully")),
    onError: () =>
      toast(Toaster("error", "Something went wrong, Try again later!")),
  });
};

export { useAdminLogin, useAdminChangePassword };
