import { useToast } from "@chakra-ui/react";
import APIClient from "../../services/api-client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Toaster from "../../functions/toaster";
import Category from "../../entities/Category";
import { AddCategory } from "../../entities/AddCategory";
import useAddCategoryStore from "../../store/admin/addCategoryStore";
import useImageStore from "../../store/admin/imageStore";

export interface DeleteCategory {
  categoryId: string;
}

const addCategory = new APIClient<AddCategory>("/category/add");
const delCategory = new APIClient<DeleteCategory>("/category/delete");
const getCategories = new APIClient<Category>("/category/all");

const useGetAllCategories = () => {
  return useQuery({
    queryKey: ["categories", "all"],
    queryFn: () => getCategories.getRequest().then((res) => res.data),
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

const useAddCategory = (callback: () => void) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const setName = useAddCategoryStore((s) => s.setName);
  const setPId = useAddCategoryStore((s) => s.setPId);
  const clearImages = useImageStore((s) => s.clearImages);

  return useMutation({
    mutationFn: addCategory.postRequest,
    onSuccess: () => {
      toast(Toaster("success", "Category created successfully"));
      queryClient.invalidateQueries({ queryKey: ["categories"] });

      setName("");
      setPId("");
      clearImages();
      callback();
    },
    onError: () =>
      toast(Toaster("error", "Something went wrong, Try again later!")),
  });
};

const useDeleteCategory = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: delCategory.postRequest,
    onSuccess: () => toast(Toaster("success", "Category deleted successfully")),
    onError: () =>
      toast(Toaster("error", "Something went wrong, Try again later!")),
  });
};

export { useAddCategory, useDeleteCategory, useGetAllCategories };
