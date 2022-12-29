import Head from "next/head";
import HomeHero from "../components/HomeHero";
import MainHeader from "../components/MainHeader";
import HomeProducts from "../components/HomeProducts";
import HomePress from "../components/HomePress";
import HomeTeam from "../components/HomeTeam";
import MainFooter from "../components/MainFooter";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gradient Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHeader />
      <HomeHero />
      <HomeProducts />
      <HomePress />
      <HomeTeam />

      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
