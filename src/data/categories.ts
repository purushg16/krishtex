import Category from "../entities/Category";

export default [
  {
    name: "Home Appliences",
    parent: false,
    children: [],
  },
  {
    name: "Electronics",
    parent: true,
    children: [
      {
        name: "Mobile Phones",
        parent: true,
        children: [
          {
            name: "Smartphones",
            parent: false,
            children: [],
          },
          {
            name: "Feature Phones",
            parent: false,
            children: [],
          },
        ],
      },
      {
        name: "Laptops",
        parent: true,
        children: [
          {
            name: "Gaming Laptops",
            parent: false,
            children: [],
          },
          {
            name: "Ultrabooks",
            parent: false,
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: "Clothing",
    parent: true,
    children: [
      {
        name: "Men's Clothing",
        parent: true,
        children: [
          {
            name: "Shirts",
            parent: false,
            children: [],
          },
          {
            name: "Trousers",
            parent: false,
            children: [],
          },
        ],
      },
      {
        name: "Women's Clothing",
        parent: true,
        children: [
          {
            name: "Dresses",
            parent: false,
            children: [],
          },
          {
            name: "Skirts",
            parent: false,
            children: [],
          },
        ],
      },
    ],
  },
] as Category[];
