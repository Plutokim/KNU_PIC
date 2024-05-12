import { ComponentType } from "react";
import { OrderInfoType, useOrder } from "./OrderProvider";

const withOrder = <P extends OrderInfoType>(Component: ComponentType<P>) => {
  const HOC = (props: Omit<P, keyof OrderInfoType>) => {
    const data = useOrder();
    return <Component {...(props as P)} {...data} />;
  };
  return HOC;
};

export default withOrder;
