import Head from "next/head";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import AboutHero from "../components/AboutHero";
import AboutMission from "../components/AboutMission";
import AboutTeam from "../components/AboutTeam";
import AboutStory from "../components/AboutStory";
import AboutContact from "../components/AboutContact";

export default function Aboout() {
  return (
    <div>
      <Head>
        <title>Gradient Labs - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHeader />
      <div className="mt-16">
        <AboutMission />
        <AboutTeam />
        <AboutContact />
      </div>

      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
