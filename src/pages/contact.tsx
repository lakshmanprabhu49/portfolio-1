import { Pages } from "@/common/enums";
import ContactItem from "@/components/SocialMediaBar";
import Header from "@/components/Header";
import SocialMediaBar from "@/components/SocialMediaBar";
import React, { useEffect, useLayoutEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "@/components/Footer";


function Projects() {

  const contactItems = [{
    name: 'Phone',
    logo: '',
    url: '+91 8637486041',
  }]

  return (
    <>
      <Helmet>
        <body className={`bg-blue1`}></body>
      </Helmet>
      <Header currentPage={Pages.Profiles} isBackgroundBlue={true} />
      <SocialMediaBar />
      <footer>
    <Footer isBackgroundBlue={true}/>

    </footer>
    </>
  );
}

export default Projects;
