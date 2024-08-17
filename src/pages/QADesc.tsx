import { useEffect } from "react";
import QADescLayouts from "../components/Layouts/QADescLayouts";
import HeroDesc from "../components/Elements/HeroDesc/HeroDesc";
import Footer from "../components/Fragments/Footer/Footer";
import Navbar from "../components/Fragments/Navbar/Navbar";
import QAArticle from "../components/Fragments/Article/QAArticle";

export default function QADesc() {
  useEffect(() => {
    document.title = "Quality Assurance (QA) | IT Certification";
  }, []);
  return (
    <QADescLayouts>
      <Navbar />
      <HeroDesc title="quality assurance (qa)" />
      <QAArticle />
      <Footer />
    </QADescLayouts>
  );
}
