import Head from "next/head";
import Navbar from "../components/common/Navbar";
import Header from "../components/Header";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Peters - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Projects />
    </>
  );
}
