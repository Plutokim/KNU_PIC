import { ReactElement, useMemo } from "react";
import withOrder from "../utility/order/WithOrder";
import { OrderInfoType } from "../utility/order/OrderProvider";
import { products } from "~/utils/products";
import { styled } from "goober";
import Image from "next/image";

type Props = {
  id: string;
};

const ProductScreen = ({
  id,
  addWare,
}: Props & OrderInfoType): ReactElement => {
  const ware = useMemo(() => products.find((p) => p.id == id), [id]);

  return (
    <Container>
      {ware ? (
        <Wrapper>
          <Image src={ware.img} alt={ware.name} height={564} width={446} />
          <Info>
            <div>
              <Title>{ware.name}</Title>
              <Brand>Виробник: {ware.brand}</Brand>
            </div>
            <div>
              <Price>{ware.price}</Price>
              <AddToCart onClick={() => addWare?.(ware)}>До кошику</AddToCart>
            </div>
          </Info>
        </Wrapper>
      ) : (
        <h1>NOT FOUND</h1>
      )}
    </Container>
  );
};

const Container = styled("div")`
  width: 100%;
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled("div")`
  display: flex;
  gap: 30px;
`;

const Info = styled("div")`
  display: flex;
  flex-direction: column;
  height: 564px;
  align-items: start;
  justify-content: space-between;
`;

const Title = styled("h1")`
  font-family: Roboto, sans-serif;
  font-size: 29px;
  color: #000;
`;

const Brand = styled("p")`
  font-family: Roboto, sans-serif;
  font-size: 20px;
  color: #858181;
`;

const AddToCart = styled("button")`
  background-color: #f39712;
  border: none;
  border-radius: 10px;
  color: white;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  padding: 10px 15px;
  cursor: pointer;
  margin-bottom: 55px;
`;

const Price = styled("p")`
  font-family: Roboto, sans-serif;
  font-size: 48px;
  color: #000;
`;

export default withOrder(ProductScreen);
