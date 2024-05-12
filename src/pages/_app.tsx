import { setup, styled } from "goober";
import { prefix } from "goober/prefixer";
import type { AppProps } from "next/app";
import React from "react";
import { shouldForwardProp } from "goober/should-forward-prop";
import OrderProvider from "~/components/utility/order/OrderProvider";

setup(
  React.createElement,
  prefix,
  undefined,
  shouldForwardProp((prop) => prop["0"] !== "$")
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <OrderProvider>
        <Styled>
          <Component {...pageProps} />
        </Styled>
      </OrderProvider>
    </>
  );
}

const Styled = styled("div")`
  width: 100%;
`;
