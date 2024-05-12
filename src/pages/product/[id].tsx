import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "~/components/business/Footer";
import Header from "~/components/business/Header";
import ProductScreen from "~/components/screens/Product";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>Товар</title>
      </Head>
      <Header />
      <ProductScreen id={(id as string) ?? ""} />
      <Footer />
    </>
  );
}
