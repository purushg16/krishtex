import { create } from "zustand";
import Specification from "../../entities/Specification";
import { v4 } from "uuid";

interface AddProduct {
  name: string;
  productType: string;
  price: number;
  specifications: Specification[];
  category: string;
  imageLink: string[];
}

interface AddProductAction {
  setName: (name: string) => void;
  setProductType: (productType: string) => void;
  setPrice: (price: number) => void;
  settCategory: (category: string) => void;
  setSpecifications: (id: string, key: string, value: string) => void;
  addSpecifications: () => void;
  removeSpecifications: (id: string) => void;
  //   setImageLink: (imageLink: string | string[]) => void;
  clearForm: () => void;
}

const useAddProductStore = create<AddProduct & AddProductAction>((set) => ({
  name: "",
  setName: (name) => set({ name }),

  productType: "",
  setProductType: (productType) => set({ productType }),

  price: 0,
  setPrice: (price) => set({ price }),

  specifications: [{ id: v4(), key: "Key", value: "Value" }],
  setSpecifications: (id, key, value) =>
    set((store) => ({
      specifications: store.specifications.map((specification) => {
        return specification.id === id
          ? { ...specification, key: key, value: value }
          : specification;
      }),
    })),
  addSpecifications: () =>
    set((store) => ({
      specifications: [
        ...store.specifications,
        { id: v4(), key: "Key", value: "Value" },
      ],
    })),
  removeSpecifications: (id) =>
    set((store) => ({
      specifications: store.specifications.filter((s) => s.id !== id),
    })),

  category: "",
  settCategory: (category) => set({ category }),

  imageLink: [],

  clearForm: () =>
    set({
      name: "",
      productType: "",
      price: 0,
      specifications: [{ id: v4(), key: "Key", value: "Value" }],
      category: "",
      imageLink: [],
    }),
}));

export default useAddProductStore;
