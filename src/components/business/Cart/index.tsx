import { ReactElement } from "react";
import { OrderInfoType } from "~/components/utility/order/OrderProvider";
import withOrder from "~/components/utility/order/WithOrder";
import Backdrop from "@mui/material/Backdrop";
import { styled } from "goober";
import close from "/public/close_icon.svg";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Cart = ({
  order,
  removeWare,
  isOpen,
  onClose,
}: Props & OrderInfoType): ReactElement => {
  const router = useRouter();
  return (
    <Modal open={isOpen}>
      <Card>
        <Close onClick={onClose}>
          <Image src={close} alt="close" width={25} height={25} />
        </Close>
        <Title>Кошик</Title>
        <Content>
          {order?.wares.map((ware, i) => (
            <Item key={ware.id + i}>
              <Image src={ware.img} alt={ware.name} width={80} height={100} />
              <div>
                <Name>{ware.name}</Name>
                <Brand>Виробник: {ware.brand}</Brand>
              </div>
              <Price>{ware.price}</Price>
              <Delete onClick={() => removeWare?.(i)}>Видалити</Delete>
              <hr />
            </Item>
          ))}
        </Content>
        <Submit
          onClick={() => router.push("/submition")}
          disabled={order?.wares && order?.wares.length <= 0}
        >
          Оформити замовлення
        </Submit>
      </Card>
    </Modal>
  );
};

const Modal = styled(Backdrop)`
  z-index: 1000;
`;

const Card = styled("div")`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 20px;
`;

const Title = styled("h2")`
  font-family: Roboto, sans-serif;
  font-size: 36px;
  font-weight: 400;
  color: #000000;
  margin: 0;
  text-align: left;
  width: 100%;
`;

const Close = styled("div")`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 25px;
  hwight: 25px;
  cursor: pointer;
`;

const Content = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #949191;
  width: 503px;
`;

const Item = styled("div")`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const Name = styled("h4")`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  text-decoration: underline;
  font-weight: 400;
  color: #858181;
  width: 249px;
`;

const Brand = styled("h4")`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  text-decoration: none;
  font-weight: 400;
  color: #858181;
  width: 249px;
`;

const Price = styled("p")`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #000000;
`;

const Delete = styled("button")`
  background-color: red;
  border: none;
  border-radius: 10px;
  color: white;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  padding: 5px 10px;
  cursor: pointer;
`;

const Submit = styled("button")`
  background-color: #f39712;
  border: none;
  border-radius: 10px;
  color: white;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  padding: 5px 10px;
  cursor: pointer;
  &:disabled {
    background-color: #c4c4c4;
    cursor: not-allowed;
  }
`;

export default withOrder(Cart);
