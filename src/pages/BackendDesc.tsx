import { useEffect } from "react";
import BackEndDescLayouts from "../components/Layouts/BackEndDescLayouts";
import Navbar from "../components/Fragments/Navbar/Navbar";
import HeroDesc from "../components/Elements/HeroDesc/HeroDesc";
import BackEndArticle from "../components/Fragments/Article/BackEndArticle";
import Footer from "../components/Fragments/Footer/Footer";

export default function BackendDesc() {
  useEffect(() => {
    document.title = "Back End Developer | IT Certification";
  }, []);
  return (
    <BackEndDescLayouts>
      <Navbar />
      <HeroDesc title="back end developer" />
      <BackEndArticle />
      <Footer />
    </BackEndDescLayouts>
  );
}
