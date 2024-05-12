import { styled } from "goober";
import { ReactElement } from "react";
import logo from "public/logo_footer.svg";
import Image from "next/image";

const Footer = (): ReactElement => {
  return (
    <Container>
      <Wrapper>
        <Image src={logo} alt={"logo"} height={157} width={295} />
        <Block>
          <Title>Магазин Galka</Title>
          <Subtitle>місто Мелитополь</Subtitle>
          <Subtitle>Вул. Богдана Хмельницького 19</Subtitle>
          <Subtitle>Пн-Нд - 9:00-19:00</Subtitle>
          <Subtitle>+380 (97) 1514015</Subtitle>
        </Block>
      </Wrapper>
    </Container>
  );
};

const Container = styled("footer")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 112px 0;
  background: black;
`;

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 775px;
  width: 100%;
`;

const Block = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
  width: 312px;
`;

const Title = styled("h3")`
  font-family: Roboto, sans-serif;
  font-size: 24px;
  color: #fff;
  margin: 0;
  margin-bottom: 10px;
`;

const Subtitle = styled("p")`
  color: #858181;
  font-size: 18px;
  font-family: Roboto, sans-serif;
  margin: 0;
`;

export default Footer;
