import { useMutation } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import { useToast } from "@chakra-ui/react";
import Toaster from "../../functions/toaster";

interface RejectRefund {
  mongooseOrderId: string;
}

interface InitiateRefund extends RejectRefund {
  refundOption: "full" | "partial";
  partialAmount?: number;
}

const initiateRefund = new APIClient<InitiateRefund>("/orders/approveRefund");
const useInitiateRefund = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: initiateRefund.postRequest,
    onSuccess: () => toast(Toaster("success", "Refund initiated")),
    onError: () => toast(Toaster("error", "", true)),
  });
};

const rejectRefund = new APIClient<RejectRefund>("/orders/rejectRefund");
const useRejectRefund = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: rejectRefund.postRequest,
    onSuccess: () => toast(Toaster("success", "Rejected refund request")),
    onError: () => toast(Toaster("error", "", true)),
  });
};

export { useInitiateRefund, useRejectRefund };
