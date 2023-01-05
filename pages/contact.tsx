import Head from "next/head";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Gradient Labs - Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHeader />
      <div className="mx-auto mt-20">
        <iframe
          className="mx-auto border-0 mt-20"
          src="https://docs.google.com/forms/d/e/1FAIpQLScrKK076J_QdQ3DzrzkkQnMwuoZbIUzAJ-SLgYw3ctw7GfecQ/viewform?embedded=true"
          width="640"
          height="1046"
        >
          Loading…
        </iframe>
      </div>

      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
