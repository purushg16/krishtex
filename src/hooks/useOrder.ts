import { useToast } from "@chakra-ui/react";
import { useQuery, useInfiniteQuery, useMutation } from "@tanstack/react-query";
import Toaster from "../functions/toaster";
import APIClient, { SinglePropertyResponse } from "../services/api-client";
import { PaginatedResponse } from "./admin/useProduct";
import Order from "../entities/Order";

interface VerifyOrder {
  orderId: string;
  paymentId: string;
  "X-razorpay-signature": string;
}

interface CancelOrder {
  mongooseOrderId: string;
}

const verifyCheckout = new APIClient<VerifyOrder>("/checkOut/verifyOrder");
const useVerifyCheckout = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: verifyCheckout.postRequest,
    onSuccess: () => toast(Toaster("success", "Payment has been verified")),
    onError: () => toast(Toaster("error", "", true)),
  });
};

const userGetAllOrders = new APIClient<PaginatedResponse<Order>>(
  "/user/orders/allOrders"
);
const useUserGetAllOrders = () =>
  useInfiniteQuery<SinglePropertyResponse<PaginatedResponse<Order>>, Error>({
    queryKey: ["user", "orders", "all"],
    queryFn: ({ pageParam = 1 }) =>
      userGetAllOrders.getSingleItem({
        params: {
          page: pageParam,
          itemPerPage: 10,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.data.hasNextPage ? lastPage.data.nextPage : undefined,
    refetchOnWindowFocus: false,
  });

const userGetSingleOrder = new APIClient<Order>("/user/orders/singleOrder");
const useUserGetSingleOrder = (mongooseOrderId: string) =>
  useQuery({
    queryKey: ["user", "orders", "single", mongooseOrderId],
    queryFn: () =>
      userGetSingleOrder.getSingleItem({
        params: {
          mongooseOrderId: mongooseOrderId,
        },
      }),
    retry: 3,
    refetchOnWindowFocus: false,
  });

const userOrderCancel = new APIClient<CancelOrder>("/user/orders/cancel");
const useUserOrderCancel = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: userOrderCancel.postRequest,
    onSuccess: () => toast(Toaster("success", "Refund request submitted")),
    onError: () => toast(Toaster("error", "", true)),
  });
};

export {
  useVerifyCheckout,
  useUserGetAllOrders,
  useUserGetSingleOrder,
  useUserOrderCancel,
};
