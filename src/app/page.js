import Image from "next/image";
import Banner from "./components/home-components/banner";
import LatestProducts from "./components/home-components/latestProducts";

export default function Home() {
  return (
    <>

      <Banner/>

      <LatestProducts/>


      <h1 className="text-3xl font-bold text-center">Welcome to Home Component</h1>
    
    </>
  );
}
