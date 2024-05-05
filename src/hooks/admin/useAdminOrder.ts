import { useInfiniteQuery, useQuery, useMutation } from "@tanstack/react-query";
import APIClient, { SinglePropertyResponse } from "../../services/api-client";
import { useToast } from "@chakra-ui/react";
import Toaster from "../../functions/toaster";
import { PaginatedResponse } from "./useProduct";
import Order from "../../entities/Order";

interface AdminConfirmOrder {
  mongooseOrderId: string;
}
interface AdminShipOrder extends AdminConfirmOrder {
  shippingProvider: string;
  trackingNumber: string;
}

const adminConfirmOrder = new APIClient<AdminConfirmOrder>(
  "/orders/confirmOrder"
);
const useAdminConfirmOrder = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: adminConfirmOrder.postRequest,
    onSuccess: () => toast(Toaster("success", "Order confirmed")),
    onError: () => toast(Toaster("error", "", true)),
  });
};

const adminShipOrder = new APIClient<AdminShipOrder>("/orders/shipped");
const useAdminShipOrder = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: adminShipOrder.postRequest,
    onSuccess: () => toast(Toaster("success", "Shipping status updated")),
    onError: () => toast(Toaster("error", "", true)),
  });
};

const adminGetAllOrders = new APIClient<PaginatedResponse<Order>>(
  "/orders/allOrders"
);
const useAdminGetAllOrders = () => {
  return useInfiniteQuery<
    SinglePropertyResponse<PaginatedResponse<Order>>,
    Error
  >({
    queryKey: ["orders", "allOrders"],
    queryFn: ({ pageParam = 1 }) =>
      adminGetAllOrders.getSingleItem({
        params: {
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.data.hasNextPage ? lastPage.data.nextPage : undefined,
    refetchOnWindowFocus: false,
  });
};

const adminSingleOrder = new APIClient<Order>("/orders/singleOrder");
const useAdminGetSingleOrder = (mongooseOrderId: string) => {
  return useQuery({
    queryKey: ["orders", "singleOrder", mongooseOrderId],
    queryFn: () =>
      adminSingleOrder.getSingleItem({
        params: {
          mongooseOrderId: mongooseOrderId,
        },
      }),
    retry: 3,
    refetchOnWindowFocus: false,
  });
};

export {
  useAdminConfirmOrder,
  useAdminShipOrder,
  useAdminGetAllOrders,
  useAdminGetSingleOrder,
  adminSingleOrder,
};
