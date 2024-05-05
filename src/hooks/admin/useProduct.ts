import { useToast } from "@chakra-ui/react";
import APIClient, { SinglePropertyResponse } from "../../services/api-client";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import Toaster from "../../functions/toaster";
import Specification from "../../entities/Specification";
import Product from "../../entities/Product";

export interface AddProduct {
  name: string;
  categoryId: string;
  Specifications: Specification[];
  imageLink: string;
  price: number;
  productType: string;
}

export interface EditProduct {
  productId: string;
  name?: string;
  categoryId?: string;
  Specifications?: Specification[];
  imageLink?: string;
  price?: number;
  productType?: string;
}

export interface DeleteProduct {
  productId: string;
}

export interface PaginatedResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number;
}

const addProduct = new APIClient<AddProduct>("/admin/product/add");
const editProduct = new APIClient<EditProduct>("/admin/product/edit");
const delProduct = new APIClient<DeleteProduct>("/admin/product/delete");
const getProducts = new APIClient<PaginatedResponse<Product>>(
  "/admin/product/all"
);

const useGetAllProducts = () => {
  return useInfiniteQuery<
    SinglePropertyResponse<PaginatedResponse<Product>>,
    Error
  >({
    queryKey: ["products", "all"],
    queryFn: ({ pageParam = 1 }) =>
      getProducts.getSingleItem({
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

const useAddProduct = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: addProduct.postRequest,
    onSuccess: () => toast(Toaster("success", "Product created successfully")),
    onError: () =>
      toast(Toaster("error", "Something went wrong, Try again later!")),
  });
};

const useEditProduct = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: editProduct.postRequest,
    onSuccess: () => toast(Toaster("success", "Product updated successfully")),
    onError: () =>
      toast(Toaster("error", "Something went wrong, Try again later!")),
  });
};

const useDeleteProduct = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: delProduct.postRequest,
    onSuccess: () => toast(Toaster("success", "Product deleted successfully")),
    onError: () =>
      toast(Toaster("error", "Something went wrong, Try again later!")),
  });
};

export { useAddProduct, useDeleteProduct, useEditProduct, useGetAllProducts };
