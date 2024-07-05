import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./conponents/navigation";
import Banner from "./conponents/banner";
import Card from "./conponents/Card";
import Footer from "./conponents/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Banner />
      <Card />
      <Footer />
    </>
  );
}
