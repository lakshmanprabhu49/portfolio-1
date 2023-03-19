import { Pages } from '@/common/enums'
import Header from '@/components/Header'
import SocialMediaBar from '@/components/SocialMediaBar'
import React, {useEffect, useLayoutEffect} from 'react'
import { Helmet } from 'react-helmet';
function Projects() {
    
  return <>
  <Helmet>
    <body className={`bg-blue1`}></body>
  </Helmet>
  <SocialMediaBar/>
    <Header currentPage={Pages.Projects} isBackgroundBlue={true} />
    </>
}

export default Projects