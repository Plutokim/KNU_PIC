import Head from "next/head";
import Footer from "~/components/business/Footer";
import Header from "~/components/business/Header";
import CatalogScreen from "~/components/screens/Catalog";

export default function Home() {
  return (
    <>
      <Head>
        <title>Каталог товарів</title>
      </Head>
      <Header />
      <CatalogScreen/>
      <Footer/>
    </>
  );
}
