import { useMutation } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import { useToast } from "@chakra-ui/react";
import Toaster from "../../functions/toaster";

interface Review {
  name: string;
  company?: string;
  rating: number;
  shortReview: string;
}

interface DelReview {
  reviewId: string;
}

const addReview = new APIClient<Review>("/admin/review/add");
const useAddReview = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: addReview.postRequest,
    onSuccess: () => toast(Toaster("success", "Review posted successfully")),
    onError: () => toast(Toaster("error", "", true)),
  });
};

const editReview = new APIClient<Partial<Review>>("/admin/review/edit");
const useEditReview = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: editReview.postRequest,
    onSuccess: () => toast(Toaster("success", "Review edited successfully")),
    onError: () => toast(Toaster("error", "", true)),
  });
};

const deleteReview = new APIClient<DelReview>("/admin/review/delete");
const useDeleteReview = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: deleteReview.postRequest,
    onSuccess: () => toast(Toaster("success", "Review deleted successfully")),
    onError: () => toast(Toaster("error", "", true)),
  });
};

export { useAddReview, useEditReview, useDeleteReview };
