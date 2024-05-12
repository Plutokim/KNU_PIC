import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "~/components/business/Footer";
import Header from "~/components/business/Header";
import SubmitionScreen from "~/components/screens/Submition";

export default function Home() {
  return (
    <>
      <Head>
        <title>Оформлення</title>
      </Head>
      <Header />
      <SubmitionScreen />
      <Footer />
    </>
  );
}
