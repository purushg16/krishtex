import Order from "../entities/Order";

export default [
  {
    orderId: "order001",
    customerId: "customer001",
    product: [
      { productId: "product001", quantity: 2 },
      { productId: "product002", quantity: 1 },
    ],
    totalBill: 1500,
    paymentStatus: "success",
    orderStatus: "confirmed",
    shippingStatus: "shipped",
    paymentId: "payment001",
  },
  {
    orderId: "order002",
    customerId: "customer002",
    product: [
      { productId: "product003", quantity: 1 },
      { productId: "product004", quantity: 3 },
    ],
    totalBill: 280,
    paymentStatus: "created",
    orderStatus: "pending",
    shippingStatus: "unshipped",
    paymentId: "payment002",
  },
  {
    orderId: "order003",
    customerId: "customer003",
    product: [
      { productId: "product005", quantity: 1 },
      { productId: "product006", quantity: 2 },
      { productId: "product007", quantity: 1 },
    ],
    totalBill: 420,
    paymentStatus: "success",
    orderStatus: "completed",
    shippingStatus: "shipped",
    paymentId: "payment003",
  },
  {
    orderId: "order004",
    customerId: "customer004",
    product: [{ productId: "product008", quantity: 2 }],
    totalBill: 100,
    paymentStatus: "refunded",
    orderStatus: "cancelled",
    shippingStatus: "unshipped",
    paymentId: "payment004",
  },
  {
    orderId: "order005",
    customerId: "customer005",
    product: [
      { productId: "product009", quantity: 1 },
      { productId: "product010", quantity: 1 },
      { productId: "product011", quantity: 1 },
      { productId: "product012", quantity: 1 },
    ],
    totalBill: 220,
    paymentStatus: "partial-refund",
    orderStatus: "cancelled",
    shippingStatus: "unshipped",
    paymentId: "payment005",
  },
] as Order[];
