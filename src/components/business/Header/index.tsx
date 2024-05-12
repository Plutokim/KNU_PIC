import { styled } from "goober";
import { ReactElement, useState } from "react";
import Image from "next/image";
import logoImg from "/public/logo_header.svg";
import cart from "/public/cart_icon.svg";
import Link from "next/link";
import Cart from "../Cart";

const Header = (): ReactElement => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Image src={logoImg} alt="logo" width={190} height={121} />
        <Block>
          <Text>
            <Link href="/">Каталог</Link>
          </Text>
          <Image
            src={cart}
            alt="card"
            width={40}
            height={40}
            onClick={() => setOpen(true)}
            style={{ cursor: "pointer" }}
          />
        </Block>
      </Wrapper>
      <Cart isOpen={open} onClose={() => setOpen(false)} />
    </Container>
  );
};

const Container = styled("header")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 31px 0;
  background: black;
`;

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1110px;
  width: 100%;
`;

const Block = styled("div")`
  display: flex;
  gap: 98px;
  align-items: center;
`;

const Text = styled("p")`
  & > a {
    font-family: Roboto, sans-serif;
    font-size: 36px;
    color: #535151;
    text-decoration: none;

    &:hover {
      color: #ffffff;
    }
  }
`;

export default Header;
