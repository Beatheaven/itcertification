import UIUXLayouts from "../components/Layouts/UIUXLayouts";
import { useEffect } from "react";
import HeroDesc from "../components/Elements/HeroDesc/HeroDesc";
import Footer from "../components/Fragments/Footer/Footer";
import Navbar from "../components/Fragments/Navbar/Navbar";
import UIUXArticle from "../components/Fragments/Article/UIUXArticle";

export default function UIUXDesc() {
  useEffect(() => {
    document.title = "UI/UX Design | IT Certification";
  }, []);
  return (
    <UIUXLayouts>
      <Navbar />
      <HeroDesc title="ui/ux design" />
      {/* fix this. */}
      <UIUXArticle />
      <Footer />
    </UIUXLayouts>
  );
}
