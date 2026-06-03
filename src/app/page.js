import Banner from "@/components/Banner";
import HomeExtra from "@/components/HomeExtra";
import HomeSixItems from "@/components/HomeSixItems";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Banner></Banner>
    <HomeSixItems></HomeSixItems>
    <HomeExtra></HomeExtra>
   </div>
  );
}
