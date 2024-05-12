import {
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { Product } from "~/utils/products";
const { v4: uuidv4 } = require("uuid");

export type Order = {
  id: string;
  wares: Product[];
};

export type OrderInfoType = {
  removeWare?: (indx: number) => void;
  addWare?: (ware: Product) => void;
  newOrder?: () => void;
  calculatePrice?: () => string;
  order?: Order;
};

const OrderContext = createContext<OrderInfoType>({});

const OrderProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [order, setOrder] = useState<Order>({
    id: uuidv4(),
    wares: [],
  });
  const addWare = (ware: Product) => {
    setOrder({ ...order, wares: [...order.wares, ware] });
  };
  const removeWare = (indx: number) => {
    setOrder({
      ...order,
      wares: order.wares.filter((_, i) => i !== indx),
    });
  };
  const newOrder = () => {
    setOrder({ id: uuidv4(), wares: [] });
  };
  const calculatePrice = () => {
    return (
      order.wares.reduce((acc, ware) => {
        const [price, _] = ware.price.split(" ");
        return acc + parseInt(price);
      }, 0) + " $"
    );
  };

  return (
    <OrderContext.Provider
      value={{ removeWare, addWare, newOrder, order, calculatePrice }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;

export const useOrder = (): OrderInfoType => {
  return useContext(OrderContext);
};
