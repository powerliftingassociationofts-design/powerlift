import React, { useEffect, useState } from "react";
import BackToTop from "../../components/elements/BackToTop";
import Header from "../../components/Layout/Header";
import navImg1 from "../../assets/images/resources/logo-1.png";
import Footer from "../../components/Layout/Footer";
import SiteBreadcrumb from "../../components/Common/Breadcumb";
import bannerbg from "../../assets/images/backgrounds/page6-header-bg.jpg";
import CtaTwo from "../../components/Common/CtaSection/CtaTwo";
import InspireMain from "./InspireMain";

const Inspire = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 300);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header
        navImg={navImg1}
        parentMenu="Inspire"
        activeMenu="/inspire"
      />
      {/* Breadcrumb */}
      <SiteBreadcrumb
        pageTitle="Inspire"
        pageName="Inspire"
        breadcrumbsImg={bannerbg}
      />
      {/* Main Content */}
      <InspireMain />
      {/* Call to Action */}
      <CtaTwo />
      <BackToTop scroll={isVisible} />
      <Footer />
    </>
  );
};

export default Inspire;
