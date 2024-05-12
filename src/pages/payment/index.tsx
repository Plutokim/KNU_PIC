import Head from "next/head";
import Footer from "~/components/business/Footer";
import Header from "~/components/business/Header";
import PaymentScreen from "~/components/screens/Payment";

export default function Home() {
  return (
    <>
      <Head>
        <title>Оплата</title>
      </Head>
      <Header />
      <PaymentScreen />
      <Footer />
    </>
  );
}
