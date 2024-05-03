interface Product {
  productId: string;
  quantity: number;
}

export default interface Order {
  orderId: string;
  customerId: string;
  product: Product[];
  totalBill: number;
  paymentStatus:
    | "created"
    | "success"
    | "failed"
    | "refunded"
    | "partial-refund";
  orderStatus: "pending" | "confirmed" | "completed" | "cancelled";
  shippingStatus: "unshipped" | "shipped";
  paymentId: string;
}
