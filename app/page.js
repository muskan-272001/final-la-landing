import Image from "next/image";
import MainPage from "@/components/MainPage/MainPage";
import DevelopmentClass from "@/components/DevelopmentClass/DevelopmentClass";
import RankSection from "@/components/RankSection/RankSection";
import Faqs from "@/components/FAQ/FAQ";

export default function Home() {
  return (
    <div>
      <MainPage />
      <DevelopmentClass/>
      <RankSection/>
      <Faqs/>
    </div>
  );
}
