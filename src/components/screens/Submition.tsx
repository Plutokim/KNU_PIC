import { ReactElement, useMemo } from "react";
import withOrder from "../utility/order/WithOrder";
import { OrderInfoType } from "../utility/order/OrderProvider";
import { styled } from "goober";
import Image from "next/image";
import { useRouter } from "next/router";
import rm from "/public/remove_icon.svg";

const SubmitionScreen = ({
  removeWare,
  calculatePrice,
  order,
}: OrderInfoType): ReactElement => {
  const router = useRouter();
  const wares = useMemo(() => order?.wares, [order]);

  return (
    <Container>
      <Wrapper>
        <Title>Оформлення Замовлення</Title>
        <GWr>
          <Form>
            <FormItem>
              <Label>Ім&rsquo;я</Label>
              <Input />
            </FormItem>
            <FormItem>
              <Label>Прізвище</Label>
              <Input />
            </FormItem>
            <FormItem>
              <Label>Номер телефону</Label>
              <Input />
            </FormItem>
            <FormItem>
              <Label>Місто</Label>
              <Input />
            </FormItem>
            <FormItem>
              <Label>Відділення</Label>
              <Input />
            </FormItem>
            <Summary>
              <p>Всього до сплати:</p>
              <p>{calculatePrice?.()}</p>
            </Summary>
            <Submit onClick={() => router.push("/payment")}>
              Перейти до сплати
            </Submit>
          </Form>
          <WareList>
            <ListTitle>Товари</ListTitle>
            {wares?.map((ware, i) => (
              <Item key={ware.id + i}>
                <Remove onClick={() => removeWare?.(i)}>
                  <Image src={rm} alt="remove" width={10} height={10} />
                </Remove>
                <Image src={ware.img} alt={ware.name} height={100} width={80} />
                <div>
                  <Name>{ware.name}</Name>
                  <Brand>Виробник: {ware.brand}</Brand>
                </div>
                <Price>{ware.price}</Price>
              </Item>
            ))}
          </WareList>
        </GWr>
      </Wrapper>
    </Container>
  );
};

const Container = styled("div")`
  padding: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled("div")``;

const WareList = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 343px;
`;

const ListTitle = styled("h3")`
  font-family: Roboto, sans-serif;
  font-size: 20px;
  color: #000000;
  font-weight: 400;
  margin: 0;
`;

const Item = styled("div")`
  height: 100px;
  width: 343px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Name = styled("h4")`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  color: #858181;
  text-decoration: underline;
  font-weight: 400;
  margin: 0;
`;

const Brand = styled("p")`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  color: #858181;
  font-weight: 400;
`;

const Price = styled("p")`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  color: #000000;
  font-weight: 500;
`;

const Remove = styled("div")`
  cursor: pointer;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 0;
  right: 0;
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

const Form = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormItem = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Input = styled("input")`
  background: white;
  border: 0.5px solid #949191;
  border-radius: 5px;
`;

const Label = styled("label")`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  color: #000;
  margin: 0;
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

const GWr = styled("div")`
  display: flex;
  gap: 30px;
`;

export default withOrder(SubmitionScreen);
