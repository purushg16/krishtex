import { create } from "zustand";
import { AddCategory } from "../../entities/AddCategory";

interface AddCategoryStore extends AddCategory {
  isParent: boolean;
  setIsParent: (isParent: boolean) => void;
}

interface AddCategoryAction {
  setName: (name: string) => void;
  setPId: (pId: string) => void;
  setImageLink: (imageLink: string) => void;
}

const useAddCategoryStore = create<AddCategoryStore & AddCategoryAction>(
  (set) => ({
    name: "",
    pId: "",
    imageLink: "",
    setName: (name) => set({ name }),
    setPId: (pId) => set({ pId }),
    setImageLink: (imageLink) => set({ imageLink }),

    isParent: true,
    setIsParent: (isParent) => set({ isParent }),
  })
);

export default useAddCategoryStore;
