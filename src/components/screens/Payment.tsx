import { ReactElement, useMemo, useState } from "react";
import withOrder from "../utility/order/WithOrder";
import { OrderInfoType } from "../utility/order/OrderProvider";
import { styled } from "goober";

const enum Status {
  IDLE,
  SUCCESS,
}

const PaymentScreen = ({
  calculatePrice,
  newOrder,
}: OrderInfoType): ReactElement => {
  const [status, setStatus] = useState(Status.IDLE);

  return (
    <Container>
      <Title>Сплата замовлення</Title>
      {status === Status.IDLE && (
        <Wrapper>
          <Summary>
            <p>Всього до сплати:</p>
            <p>{calculatePrice?.()}</p>
          </Summary>
          <FormItem>
            <Label>Номер карти</Label>
            <Input placeholder="XXXX XXXX XXXX XXXX" required />
          </FormItem>
          <FormWrap>
            <FormItemShort>
              <Label>Термін дії</Label>
              <Input placeholder="MM/YY" required />
            </FormItemShort>
            <FormItemShort>
              <Label>CVV</Label>
              <Input placeholder="CVV" required />
            </FormItemShort>
          </FormWrap>
          <Submit
            onClick={() => {
              newOrder?.();
              setStatus(Status.SUCCESS);
            }}
          >
            Сплатити
          </Submit>
        </Wrapper>
      )}
      {status === Status.SUCCESS && <Success>Дякуємо за замовлення !</Success>}
    </Container>
  );
};

const Container = styled("div")`
  padding: 70px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  width: 469px;
`;

const Title = styled("h1")`
  font-family: Roboto, sans-serif;
  font-size: 36px;
  color: #000;
  margin: 0;
  margin-bottom: 30px;
  text-align: center;
`;

const Summary = styled("div")`
  width: 445px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #c4c4c4;
  & > p {
    font-family: Roboto, sans-serif;
    color: #000000;
    font-size: 24px;
    margin: 0;
  }
`;

const FormItem = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const FormItemShort = styled("div")`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const FormWrap = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const Input = styled("input")`
  background: white;
  border: 0.5px solid #949191;
  height: 36px;
  border-radius: 10px;
`;

const Label = styled("label")`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  color: #000;
  margin: 0;
  margin-bottom: 10px;
`;

const Submit = styled("button")`
  background-color: #f39712;
  border: none;
  border-radius: 18px;
  color: white;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Success = styled("h1")`
  font-family: Roboto, sans-serif;
  font-size: 64px;
  color: #f39712;
  margin: 80px 0;
`;

export default withOrder(PaymentScreen);
