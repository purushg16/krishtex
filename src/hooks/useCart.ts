import { useToast } from "@chakra-ui/react";
import Product from "../entities/Product";
import APIClient from "../services/api-client";
import { useMutation } from "@tanstack/react-query";
import Toaster from "../functions/toaster";

interface CartCheckout {
  products: Product[];
  address: string;
  district: string;
  state: string;
  pincode: number;
  contact: number;
}

const cartCheckout = new APIClient<CartCheckout>("/checkOut/order");
const useCartCheckout = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: cartCheckout.postRequest,
    onSuccess: () => toast(Toaster("success", "Order created successfully")),
    onError: () => toast(Toaster("error", "", true)),
  });
};

export { useCartCheckout };
